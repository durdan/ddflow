// ============================================
// @sdlc/diagram-engine - TypeScript Definitions
// ============================================

import { CSSProperties, ReactNode, RefObject } from 'react';

// ============================================
// DIAGRAM TYPES
// ============================================

export type DiagramType =
  | 'mindmap'
  | 'wbs'
  | 'flowchart'
  | 'architecture'
  | 'erd'
  | 'sequence'
  | 'state'
  | 'journey'
  | 'timeline'
  | 'orgchart'
  | 'network'
  | 'gantt'
  | 'deployment'
  | 'pie'
  | 'quadrant'
  | 'git'
  | 'wireframe'
  | 'class'
  | 'activity'
  | 'usecase'
  | 'component'
  | 'c4'
  | 'requirement';

export type ThemeMode = 'dark' | 'light';

// ============================================
// THEME & COLORS
// ============================================

export interface Theme {
  background: string;
  canvasBg: string;
  gridColor: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  border: string;
  surface: string;
}

export interface Colors {
  purple: string;
  blue: string;
  green: string;
  orange: string;
  pink: string;
  red: string;
  cyan: string;
  violet: string;
  teal: string;
  amber: string;
  indigo: string;
  rose: string;
  emerald: string;
  sky: string;
  fuchsia: string;
  lime: string;
  slate: string;
  zinc: string;
  yellow: string;
}

// ============================================
// NODE & EDGE TYPES
// ============================================

export interface Position {
  x: number;
  y: number;
}

export interface BaseNode {
  id: string;
  label: string;
  x?: number;
  y?: number;
}

export interface BaseEdge {
  id: string;
  source: string;
  target: string;
  label?: string;
}

// Mind Map
export interface MindMapNode extends BaseNode {
  children: MindMapNode[];
}

// Architecture
export interface ArchitectureNode extends BaseNode {
  type?: string;
  color: string;
  icon: string;
}

export interface ArchitectureData {
  nodes: ArchitectureNode[];
  edges: BaseEdge[];
}

// ERD
export interface ERDField {
  name: string;
  type: string;
  key?: boolean;
  fk?: boolean;
  references?: string;
}

export interface ERDTable {
  name: string;
  fields: ERDField[];
}

// Flowchart
export interface FlowNode extends BaseNode {
  type: 'start' | 'end' | 'process' | 'decision' | 'io' | 'action';
}

export interface FlowData {
  nodes: FlowNode[];
  edges: BaseEdge[];
}

// Sequence
export interface SequenceParticipant {
  id: string;
  label: string;
  x: number;
}

export interface SequenceMessage {
  from: string;
  to: string;
  label: string;
  isReturn?: boolean;
}

export interface SequenceData {
  participants: SequenceParticipant[];
  messages: SequenceMessage[];
}

// State Machine
export interface StateNode extends BaseNode {
  isInitial?: boolean;
  isFinal?: boolean;
}

export interface StateTransition {
  from: string;
  to: string;
  event: string;
}

export interface StateData {
  states: StateNode[];
  transitions: StateTransition[];
}

// User Journey
export interface JourneyNode extends BaseNode {
  type: string;
  description?: string;
  color: string;
  icon: string;
  shape: 'circle' | 'rect' | 'diamond';
  badge?: string;
}

export interface JourneyEdge extends BaseEdge {
  label?: string;
}

export interface JourneyData {
  nodes: JourneyNode[];
  edges: JourneyEdge[];
}

// Timeline
export interface TimelineEvent extends BaseNode {
  date: string;
  description?: string;
  isMilestone?: boolean;
}

// Org Chart
export interface OrgNode extends BaseNode {
  title?: string;
  parent?: string | null;
  children: string[];
}

export interface OrgData {
  nodes: OrgNode[];
  edges: BaseEdge[];
}

// Network
export interface NetworkDevice extends BaseNode {
  type: string;
  ip?: string;
}

export interface NetworkConnection extends BaseEdge {
  protocol?: string;
}

export interface NetworkData {
  devices: NetworkDevice[];
  connections: NetworkConnection[];
}

// Gantt
export interface GanttTask {
  id: string;
  name: string;
  start: number;
  duration: number;
  progress?: number;
}

// Deployment
export interface DeploymentNode extends BaseNode {
  type: string;
  parentId?: string | null;
  indent?: number;
}

export interface DeploymentData {
  nodes: DeploymentNode[];
}

// Pie Chart
export interface PieSlice {
  label: string;
  value: number;
}

// Quadrant
export interface QuadrantConfig {
  title?: string;
  xLabel?: string;
  yLabel?: string;
  quadrants: string[];
}

export interface QuadrantPoint extends BaseNode {
  x: number;
  y: number;
}

export interface QuadrantData {
  config: QuadrantConfig;
  points: QuadrantPoint[];
}

// Git Graph
export interface GitCommit extends BaseNode {
  branch: string;
  isMerge?: boolean;
  mergeFrom?: string | null;
  index: number;
}

export interface GitBranch {
  name: string;
  y: number;
  parentBranch?: string | null;
  branchPoint?: number;
}

export interface GitData {
  commits: GitCommit[];
  branches: GitBranch[];
}

// Wireframe
export interface WireframeElement {
  id: string;
  type: string;
  label?: string;
  x: number;
  y: number;
  width?: number;
  height?: number;
  [key: string]: any;
}

export interface WireframeData {
  elements: WireframeElement[];
  totalHeight: number;
}

// Class Diagram
export interface ClassProperty {
  visibility: string;
  name: string;
  type: string;
}

export interface ClassMethod {
  visibility: string;
  name: string;
  params: string;
  returns: string;
}

export interface ClassDefinition {
  id: string;
  name: string;
  properties: ClassProperty[];
  methods: ClassMethod[];
}

export interface ClassDiagramData {
  classes: ClassDefinition[];
  relationships: BaseEdge[];
}

// Activity
export interface ActivityNode extends BaseNode {
  type: 'start' | 'end' | 'action' | 'decision';
}

export interface ActivityData {
  nodes: ActivityNode[];
  edges: BaseEdge[];
}

// Use Case
export interface UseCaseActor {
  id: string;
  label: string;
}

export interface UseCase {
  id: string;
  label: string;
}

export interface UseCaseRelation {
  from: string;
  to: string;
}

export interface UseCaseData {
  actors: UseCaseActor[];
  useCases: UseCase[];
  relationships: UseCaseRelation[];
}

// Component
export interface ComponentNode extends BaseNode {
  type?: string;
}

export interface ComponentData {
  components: ComponentNode[];
  connections: BaseEdge[];
}

// C4
export interface C4Element extends BaseNode {
  type: string;
  description?: string;
}

export interface C4Relation extends BaseEdge {
  label?: string;
}

export interface C4Data {
  elements: C4Element[];
  relationships: C4Relation[];
}

// Requirement
export interface Requirement {
  id: string;
  name: string;
  text?: string;
  risk?: string;
  priority?: string;
}

export interface RequirementData {
  requirements: Requirement[];
}

// ============================================
// COMPONENT PROPS
// ============================================

export interface UniversalDiagramProps {
  /** Type of diagram to render */
  type: DiagramType;
  /** DSL source text (parsed automatically) */
  source?: string;
  /** Pre-parsed data (alternative to source) */
  data?: any;
  /** Color theme */
  theme?: ThemeMode;
  /** Additional CSS class */
  className?: string;
  /** Inline styles */
  style?: CSSProperties;
}

export interface DiagramProps<T = any> {
  /** Parsed diagram data */
  data: T;
  /** Theme object */
  theme?: Theme;
  /** Node positions (for controlled mode) */
  positions?: Record<string, Position>;
  /** Position change callback */
  onPositionChange?: (positions: Record<string, Position>) => void;
}

// ============================================
// CANVAS & INTERACTION HOOKS
// ============================================

export interface UseInteractiveCanvasOptions {
  initialPan?: Position;
  initialZoom?: number;
  minZoom?: number;
  maxZoom?: number;
}

export interface UseInteractiveCanvasReturn {
  canvasRef: RefObject<HTMLDivElement>;
  pan: Position;
  setPan: (pan: Position) => void;
  zoom: number;
  setZoom: (zoom: number) => void;
  isPanning: boolean;
  dragging: string | null;
  positions: Record<string, Position>;
  handleCanvasMouseDown: (e: React.MouseEvent) => void;
  handleNodeMouseDown: (e: React.MouseEvent, nodeId: string, nodeX: number, nodeY: number) => void;
  handleMouseMove: (e: React.MouseEvent) => void;
  handleMouseUp: () => void;
  handleWheel: (e: React.WheelEvent) => void;
  resetView: () => void;
  getNodePosition: (nodeId: string, defaultX: number, defaultY: number) => Position;
  setPositions: (positions: Record<string, Position>) => void;
}

// ============================================
// PARSERS
// ============================================

export interface Parsers {
  markdown: (text: string) => MindMapNode;
  sql: (text: string) => ERDTable[];
  architecture: (text: string) => ArchitectureData;
  flowchart: (text: string) => FlowData;
  stateMachine: (text: string) => StateData;
  userJourney: (text: string) => JourneyData;
  timeline: (text: string) => TimelineEvent[];
  sequence: (text: string) => SequenceData;
  orgChart: (text: string) => OrgData;
  network: (text: string) => NetworkData;
  gantt: (text: string) => GanttTask[];
  deployment: (text: string) => DeploymentData;
  pie: (text: string) => PieSlice[];
  quadrant: (text: string) => QuadrantData;
  git: (text: string) => GitData;
  wireframe: (text: string) => WireframeData;
  classDiagram: (text: string) => ClassDiagramData;
  activity: (text: string) => ActivityData;
  useCase: (text: string) => UseCaseData;
  component: (text: string) => ComponentData;
  c4: (text: string) => C4Data;
  requirement: (text: string) => RequirementData;
}

// ============================================
// EXPORT UTILITIES
// ============================================

export interface ExportOptions {
  /** Output format */
  format: 'png' | 'svg' | 'pdf';
  /** Scale factor for PNG */
  scale?: number;
  /** Background color */
  background?: string;
  /** Padding around diagram */
  padding?: number;
}

export type ExportToPNG = (element: HTMLElement, options?: Partial<ExportOptions>) => Promise<Blob>;
export type ExportToSVG = (element: HTMLElement, options?: Partial<ExportOptions>) => Promise<string>;
export type ExportToPDF = (element: HTMLElement, options?: Partial<ExportOptions>) => Promise<Blob>;

// ============================================
// IMPORT UTILITIES
// ============================================

export interface ImportResult {
  type: DiagramType;
  source: string;
}

export type ImportFromMermaid = (mermaidCode: string) => ImportResult;
export type ImportFromPlantUML = (plantUMLCode: string) => ImportResult;
