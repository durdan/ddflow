import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  // Don't inline env variables in library build - users provide their own
  define: {
    'import.meta.env.VITE_OPENAI_API_KEY': 'import.meta.env.VITE_OPENAI_API_KEY',
    'import.meta.env.VITE_ANTHROPIC_API_KEY': 'import.meta.env.VITE_ANTHROPIC_API_KEY',
    'import.meta.env.VITE_AI_PROVIDER': 'import.meta.env.VITE_AI_PROVIDER',
    'import.meta.env.VITE_AI_MODEL': 'import.meta.env.VITE_AI_MODEL',
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/DiagramEngine.jsx'),
      name: 'DDflow',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'esm' : 'cjs'}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime',
        },
      },
    },
    sourcemap: true,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
