// DDFlow Export Service - PNG, SVG, and Clipboard export functionality
// Uses html2canvas-style approach to capture mixed HTML+SVG diagrams

/**
 * Capture a DOM element to canvas using native browser APIs
 * This handles mixed HTML+SVG content
 */
async function captureToCanvas(element, scale = 2) {
  const rect = element.getBoundingClientRect();
  const width = rect.width;
  const height = rect.height;

  // Create a canvas
  const canvas = document.createElement('canvas');
  canvas.width = width * scale;
  canvas.height = height * scale;
  const ctx = canvas.getContext('2d');

  // Scale for higher resolution
  ctx.scale(scale, scale);

  // Fill background
  ctx.fillStyle = '#1a1a2e';
  ctx.fillRect(0, 0, width, height);

  // Clone the element to avoid modifying the original
  const clone = element.cloneNode(true);

  // Inline all computed styles
  await inlineAllStyles(element, clone);

  // Convert to SVG foreignObject
  const svgData = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
      <foreignObject width="100%" height="100%">
        <div xmlns="http://www.w3.org/1999/xhtml" style="width:${width}px;height:${height}px;">
          ${clone.outerHTML}
        </div>
      </foreignObject>
    </svg>
  `;

  // Create an image from the SVG
  return new Promise((resolve, reject) => {
    const img = new Image();

    img.onload = () => {
      ctx.drawImage(img, 0, 0, width, height);
      resolve(canvas);
    };

    img.onerror = (e) => {
      console.error('Image load failed:', e);
      reject(new Error('Failed to render diagram. Some elements may not be exportable.'));
    };

    // Convert SVG to data URL
    const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    img.src = URL.createObjectURL(blob);
  });
}

/**
 * Recursively inline all computed styles from original to clone
 */
async function inlineAllStyles(original, clone) {
  const originalElements = [original, ...original.querySelectorAll('*')];
  const cloneElements = [clone, ...clone.querySelectorAll('*')];

  const propsToInline = [
    'position', 'left', 'top', 'right', 'bottom', 'width', 'height',
    'display', 'flex-direction', 'align-items', 'justify-content',
    'margin', 'padding', 'border', 'border-radius',
    'background', 'background-color', 'background-image',
    'color', 'font-family', 'font-size', 'font-weight', 'text-align',
    'transform', 'transform-origin', 'opacity', 'overflow', 'box-shadow',
    'fill', 'stroke', 'stroke-width'
  ];

  for (let i = 0; i < originalElements.length && i < cloneElements.length; i++) {
    const origEl = originalElements[i];
    const cloneEl = cloneElements[i];

    try {
      const computed = window.getComputedStyle(origEl);
      const styles = [];

      propsToInline.forEach(prop => {
        const value = computed.getPropertyValue(prop);
        if (value && value !== 'none' && value !== 'normal' && value !== 'auto') {
          styles.push(`${prop}: ${value}`);
        }
      });

      // Remove animations
      styles.push('animation: none');
      styles.push('transition: none');

      if (styles.length > 0) {
        cloneEl.setAttribute('style', styles.join('; '));
      }
    } catch (e) {
      // Ignore
    }
  }
}

/**
 * Simple canvas-based screenshot using drawWindow (Firefox) or alternative
 */
async function captureElementSimple(element, scale = 2) {
  const rect = element.getBoundingClientRect();
  const width = Math.ceil(rect.width);
  const height = Math.ceil(rect.height);

  const canvas = document.createElement('canvas');
  canvas.width = width * scale;
  canvas.height = height * scale;
  const ctx = canvas.getContext('2d');
  ctx.scale(scale, scale);

  // Fill background
  ctx.fillStyle = '#1a1a2e';
  ctx.fillRect(0, 0, width, height);

  // Try to find and render SVG elements
  const svgs = element.querySelectorAll('svg');
  for (const svg of svgs) {
    await renderSVGToCanvas(svg, ctx, element);
  }

  // Render HTML elements on top
  await renderHTMLElementsToCanvas(element, ctx);

  return canvas;
}

/**
 * Render an SVG element to canvas
 */
async function renderSVGToCanvas(svg, ctx, container) {
  const svgRect = svg.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();

  const offsetX = svgRect.left - containerRect.left;
  const offsetY = svgRect.top - containerRect.top;

  // Clone and prepare SVG
  const clone = svg.cloneNode(true);

  // Inline styles
  const originalElements = svg.querySelectorAll('*');
  const cloneElements = clone.querySelectorAll('*');

  originalElements.forEach((origEl, i) => {
    const cloneEl = cloneElements[i];
    if (!cloneEl) return;

    try {
      const computed = window.getComputedStyle(origEl);
      ['fill', 'stroke', 'stroke-width', 'stroke-dasharray', 'opacity', 'font-size', 'font-family'].forEach(prop => {
        const value = computed.getPropertyValue(prop);
        if (value && value !== 'none') {
          cloneEl.setAttribute(prop, value);
        }
      });
      // Remove animations
      cloneEl.style.animation = 'none';
    } catch (e) {}
  });

  // Set dimensions
  clone.setAttribute('width', svgRect.width);
  clone.setAttribute('height', svgRect.height);
  clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

  const svgString = new XMLSerializer().serializeToString(clone);
  const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });

  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      ctx.drawImage(img, offsetX, offsetY, svgRect.width, svgRect.height);
      URL.revokeObjectURL(img.src);
      resolve();
    };
    img.onerror = () => {
      URL.revokeObjectURL(img.src);
      resolve(); // Continue even if this fails
    };
    img.src = URL.createObjectURL(blob);
  });
}

/**
 * Render HTML elements (nodes) to canvas
 */
async function renderHTMLElementsToCanvas(container, ctx) {
  const containerRect = container.getBoundingClientRect();

  // Find all elements that might be nodes (positioned elements with visible content)
  const allElements = container.querySelectorAll('*');
  const processedNodeRects = new Set();

  for (const el of allElements) {
    // Skip certain elements
    if (el.classList.contains('canvas-bg')) continue;
    if (el.tagName === 'SVG' || el.tagName === 'svg') continue;
    if (el.closest('svg')) continue; // Skip SVG children

    const rect = el.getBoundingClientRect();
    if (rect.width < 5 || rect.height < 5) continue;

    const computed = window.getComputedStyle(el);
    if (computed.display === 'none' || computed.visibility === 'hidden') continue;

    const offsetX = rect.left - containerRect.left;
    const offsetY = rect.top - containerRect.top;

    // Skip if out of bounds
    if (offsetX < -50 || offsetY < -50) continue;
    if (offsetX > containerRect.width + 50 || offsetY > containerRect.height + 50) continue;

    const bgColor = computed.backgroundColor;
    const borderColor = computed.borderColor;
    const hasBg = bgColor && bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent';
    const hasBorder = borderColor && borderColor !== 'rgba(0, 0, 0, 0)' && parseInt(computed.borderWidth) > 0;

    // Draw box if it has visible background/border and is a positioned element
    const rectKey = `${Math.round(offsetX)},${Math.round(offsetY)},${Math.round(rect.width)},${Math.round(rect.height)}`;
    if ((hasBg || hasBorder) && !processedNodeRects.has(rectKey)) {
      processedNodeRects.add(rectKey);

      const borderRadius = parseInt(computed.borderRadius) || 0;

      if (hasBg) {
        ctx.fillStyle = bgColor;
        if (borderRadius > 0) {
          roundRect(ctx, offsetX, offsetY, rect.width, rect.height, borderRadius);
          ctx.fill();
        } else {
          ctx.fillRect(offsetX, offsetY, rect.width, rect.height);
        }
      }

      if (hasBorder) {
        ctx.strokeStyle = borderColor;
        ctx.lineWidth = parseInt(computed.borderWidth) || 1;
        if (borderRadius > 0) {
          roundRect(ctx, offsetX, offsetY, rect.width, rect.height, borderRadius);
          ctx.stroke();
        } else {
          ctx.strokeRect(offsetX, offsetY, rect.width, rect.height);
        }
      }
    }
  }

  // Second pass: render text content
  const processedTexts = new Set();

  for (const el of allElements) {
    if (el.closest('svg')) continue; // Skip SVG (already rendered)
    if (el.classList.contains('canvas-bg')) continue;

    const computed = window.getComputedStyle(el);
    if (computed.display === 'none' || computed.visibility === 'hidden') continue;

    // Get text content
    let directText = '';

    // Check for direct text nodes
    for (const child of el.childNodes) {
      if (child.nodeType === Node.TEXT_NODE) {
        directText += child.textContent;
      }
    }

    // If no direct text nodes and this is a leaf element (no child elements), use textContent
    if (!directText && el.children.length === 0) {
      directText = el.textContent || '';
    }

    directText = directText.trim();
    if (!directText) continue;

    const rect = el.getBoundingClientRect();

    // For inline elements like span, the rect might be very small
    // Use the element's position even if rect is small
    let offsetX = rect.left - containerRect.left;
    let offsetY = rect.top - containerRect.top;
    let textX, textY;

    if (rect.width > 1 && rect.height > 1) {
      textX = offsetX + rect.width / 2;
      textY = offsetY + rect.height / 2;
    } else {
      // Fallback: use the rect's position directly
      textX = offsetX;
      textY = offsetY;
    }

    // Skip if completely out of bounds
    if (textX < -200 || textY < -200) continue;
    if (textX > containerRect.width + 200 || textY > containerRect.height + 200) continue;

    // Create a unique key to avoid duplicate text at same position
    const textKey = `${directText}@${Math.round(textX)},${Math.round(textY)}`;
    if (processedTexts.has(textKey)) continue;
    processedTexts.add(textKey);

    // Get font properties
    const fontSize = computed.fontSize || '14px';
    const fontWeight = computed.fontWeight || '400';
    const fontFamily = computed.fontFamily || 'system-ui, -apple-system, sans-serif';
    const color = computed.color || '#ffffff';

    ctx.fillStyle = color;
    ctx.font = `${fontWeight} ${fontSize} ${fontFamily}`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    ctx.fillText(directText, textX, textY);
  }
}

/**
 * Draw a rounded rectangle
 */
function roundRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

/**
 * Download a blob as a file
 */
function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  setTimeout(() => URL.revokeObjectURL(url), 100);
}

/**
 * Export diagram as PNG file
 */
export async function exportAsPNG(container, filename = 'diagram', scale = 2) {
  if (!container) {
    throw new Error('No container element provided');
  }

  // Find the actual diagram container (the one with the canvas)
  const diagramContainer = container.querySelector('[class*="canvas"]')?.parentElement || container.firstElementChild || container;

  try {
    const canvas = await captureElementSimple(diagramContainer, scale);

    return new Promise((resolve, reject) => {
      canvas.toBlob(
        (blob) => {
          if (!blob) {
            reject(new Error('Failed to create PNG'));
            return;
          }
          downloadBlob(blob, `${filename}.png`);
          resolve();
        },
        'image/png',
        1.0
      );
    });
  } catch (error) {
    console.error('Export failed:', error);
    throw new Error(`Export failed: ${error.message}`);
  }
}

/**
 * Export diagram as SVG file (captures only SVG elements)
 */
export function exportAsSVG(container, filename = 'diagram') {
  if (!container) {
    throw new Error('No container element provided');
  }

  const svg = container.querySelector('svg');
  if (!svg) {
    throw new Error('No SVG element found in the diagram');
  }

  // Clone and prepare SVG
  const clone = svg.cloneNode(true);
  const rect = svg.getBoundingClientRect();

  // Inline styles
  const originalElements = svg.querySelectorAll('*');
  const cloneElements = clone.querySelectorAll('*');

  originalElements.forEach((origEl, i) => {
    const cloneEl = cloneElements[i];
    if (!cloneEl) return;

    try {
      const computed = window.getComputedStyle(origEl);
      ['fill', 'stroke', 'stroke-width', 'stroke-dasharray', 'opacity', 'font-size', 'font-family', 'font-weight'].forEach(prop => {
        const value = computed.getPropertyValue(prop);
        if (value && value !== 'none' && value !== 'normal') {
          cloneEl.setAttribute(prop, value);
        }
      });
      cloneEl.style.animation = 'none';
    } catch (e) {}
  });

  // Set dimensions
  clone.setAttribute('width', rect.width);
  clone.setAttribute('height', rect.height);
  clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

  const svgString = '<?xml version="1.0" encoding="UTF-8"?>\n' + new XMLSerializer().serializeToString(clone);
  const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
  downloadBlob(blob, `${filename}.svg`);
}

/**
 * Copy diagram to clipboard as PNG
 */
export async function copyToClipboard(container, scale = 2) {
  if (!container) {
    throw new Error('No container element provided');
  }

  const diagramContainer = container.querySelector('[class*="canvas"]')?.parentElement || container.firstElementChild || container;

  try {
    const canvas = await captureElementSimple(diagramContainer, scale);

    return new Promise((resolve, reject) => {
      canvas.toBlob(
        async (blob) => {
          if (!blob) {
            reject(new Error('Failed to create image'));
            return;
          }

          try {
            await navigator.clipboard.write([
              new ClipboardItem({ 'image/png': blob })
            ]);
            resolve();
          } catch (err) {
            console.error('Clipboard error:', err);
            reject(new Error('Clipboard access denied. Try using HTTPS.'));
          }
        },
        'image/png',
        1.0
      );
    });
  } catch (error) {
    throw new Error(`Copy failed: ${error.message}`);
  }
}

/**
 * Export diagram as PDF (uses print dialog)
 */
export function exportAsPDF(container) {
  if (!container) {
    throw new Error('No container element provided');
  }

  // Clone the container
  const clone = container.cloneNode(true);

  // Get dimensions
  const rect = container.getBoundingClientRect();
  const width = rect.width + 100;
  const height = rect.height + 100;

  const printWindow = window.open('', '_blank', `width=${width},height=${height}`);
  if (!printWindow) {
    throw new Error('Pop-up blocked. Please allow pop-ups.');
  }

  // Gather all styles from the current document
  let styles = '';
  for (const sheet of document.styleSheets) {
    try {
      for (const rule of sheet.cssRules) {
        styles += rule.cssText + '\n';
      }
    } catch (e) {
      // Cross-origin stylesheets
    }
  }

  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>DDFlow Diagram</title>
      <style>
        ${styles}
        * { margin: 0; padding: 0; box-sizing: border-box; }
        @page { size: auto; margin: 10mm; }
        @media print {
          body { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
        }
        body {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background: #1a1a2e;
          padding: 20px;
        }
        .diagram-container {
          transform-origin: top left;
        }
      </style>
    </head>
    <body>
      <div class="diagram-container">${clone.innerHTML}</div>
      <script>
        window.onload = function() { setTimeout(function() { window.print(); }, 500); };
        window.onafterprint = function() { window.close(); };
      </script>
    </body>
    </html>
  `);
  printWindow.document.close();
}
