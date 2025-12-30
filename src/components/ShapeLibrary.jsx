import React, { useState } from 'react';

const COLORS = {
  purple: '#7C3AED',
  blue: '#0EA5E9',
  green: '#10B981',
  orange: '#F59E0B',
  red: '#EF4444',
  pink: '#EC4899',
  indigo: '#6366F1',
  teal: '#14B8A6',
  gray: '#6B7280',
};

// Hand-drawn style SVG shapes for the library
const SHAPE_CATEGORIES = {
  process: {
    label: 'Process',
    shapes: [
      {
        id: 'flowchart',
        label: 'Flowchart',
        icon: (
          <svg viewBox="0 0 64 48" fill="none">
            <rect x="4" y="8" width="16" height="10" rx="2" fill={`${COLORS.orange}40`} stroke={COLORS.orange} strokeWidth="1.5"/>
            <rect x="24" y="8" width="16" height="10" rx="2" fill={`${COLORS.red}40`} stroke={COLORS.red} strokeWidth="1.5"/>
            <rect x="44" y="8" width="16" height="10" rx="2" fill={`${COLORS.purple}40`} stroke={COLORS.purple} strokeWidth="1.5"/>
            <rect x="14" y="28" width="16" height="10" rx="2" fill={`${COLORS.pink}40`} stroke={COLORS.pink} strokeWidth="1.5"/>
            <rect x="34" y="28" width="16" height="10" rx="2" fill={`${COLORS.blue}40`} stroke={COLORS.blue} strokeWidth="1.5"/>
            <path d="M20 18 L22 28" stroke="#666" strokeWidth="1" strokeLinecap="round"/>
            <path d="M32 18 L32 28" stroke="#666" strokeWidth="1" strokeLinecap="round"/>
            <path d="M44 18 L42 28" stroke="#666" strokeWidth="1" strokeLinecap="round"/>
          </svg>
        ),
        template: 'flowchart',
        dsl: `(start) Start -> (process) Step 1 -> (decision) Check?
(decision) Check? -> |yes| (process) Step 2 -> (end) End
(decision) Check? -> |no| (process) Step 3 -> (end) End`,
      },
      {
        id: 'orgchart',
        label: 'Org Chart',
        icon: (
          <svg viewBox="0 0 64 48" fill="none">
            <rect x="22" y="4" width="20" height="10" rx="2" fill={`${COLORS.blue}40`} stroke={COLORS.blue} strokeWidth="1.5"/>
            <rect x="4" y="34" width="16" height="10" rx="2" fill={`${COLORS.green}40`} stroke={COLORS.green} strokeWidth="1.5"/>
            <rect x="24" y="34" width="16" height="10" rx="2" fill={`${COLORS.green}40`} stroke={COLORS.green} strokeWidth="1.5"/>
            <rect x="44" y="34" width="16" height="10" rx="2" fill={`${COLORS.green}40`} stroke={COLORS.green} strokeWidth="1.5"/>
            <path d="M32 14 L32 24 M12 24 L52 24 M12 24 L12 34 M32 24 L32 34 M52 24 L52 34" stroke="#666" strokeWidth="1" strokeLinecap="round"/>
          </svg>
        ),
        template: 'orgchart',
        dsl: `CEO
  VP Engineering
    Team Lead
    Senior Dev
  VP Sales
    Sales Manager`,
      },
      {
        id: 'cycle',
        label: 'Cycle',
        icon: (
          <svg viewBox="0 0 64 48" fill="none">
            <circle cx="32" cy="24" r="16" fill="none" stroke="#ddd" strokeWidth="1"/>
            <circle cx="32" cy="8" r="6" fill={`${COLORS.orange}40`} stroke={COLORS.orange} strokeWidth="1.5"/>
            <circle cx="46" cy="24" r="6" fill={`${COLORS.red}40`} stroke={COLORS.red} strokeWidth="1.5"/>
            <circle cx="32" cy="40" r="6" fill={`${COLORS.purple}40`} stroke={COLORS.purple} strokeWidth="1.5"/>
            <circle cx="18" cy="24" r="6" fill={`${COLORS.blue}40`} stroke={COLORS.blue} strokeWidth="1.5"/>
            <path d="M38 10 L44 18" stroke="#666" strokeWidth="1" strokeLinecap="round" markerEnd="url(#arrow)"/>
            <path d="M44 30 L38 38" stroke="#666" strokeWidth="1" strokeLinecap="round"/>
            <path d="M26 38 L20 30" stroke="#666" strokeWidth="1" strokeLinecap="round"/>
            <path d="M20 18 L26 10" stroke="#666" strokeWidth="1" strokeLinecap="round"/>
          </svg>
        ),
        template: 'state',
        dsl: `[*] -> Planning
Planning -> Development : start
Development -> Testing : complete
Testing -> Review : pass
Review -> Planning : iterate
Review -> [*] : done`,
      },
      {
        id: 'sequence',
        label: 'Sequence',
        icon: (
          <svg viewBox="0 0 64 48" fill="none">
            <rect x="4" y="4" width="12" height="8" rx="2" fill={`${COLORS.blue}40`} stroke={COLORS.blue} strokeWidth="1.5"/>
            <rect x="26" y="4" width="12" height="8" rx="2" fill={`${COLORS.green}40`} stroke={COLORS.green} strokeWidth="1.5"/>
            <rect x="48" y="4" width="12" height="8" rx="2" fill={`${COLORS.purple}40`} stroke={COLORS.purple} strokeWidth="1.5"/>
            <line x1="10" y1="12" x2="10" y2="44" stroke="#666" strokeWidth="1" strokeDasharray="2,2"/>
            <line x1="32" y1="12" x2="32" y2="44" stroke="#666" strokeWidth="1" strokeDasharray="2,2"/>
            <line x1="54" y1="12" x2="54" y2="44" stroke="#666" strokeWidth="1" strokeDasharray="2,2"/>
            <path d="M10 20 L32 20" stroke={COLORS.orange} strokeWidth="1.5"/>
            <path d="M32 28 L54 28" stroke={COLORS.pink} strokeWidth="1.5"/>
            <path d="M54 36 L32 36" stroke={COLORS.teal} strokeWidth="1.5" strokeDasharray="3,2"/>
          </svg>
        ),
        template: 'sequence',
        dsl: `participant Client
participant Server
participant Database

Client -> Server: Request
Server -> Database: Query
Database --> Server: Result
Server --> Client: Response`,
      },
      {
        id: 'network',
        label: 'Network',
        icon: (
          <svg viewBox="0 0 64 48" fill="none">
            <circle cx="32" cy="24" r="8" fill={`${COLORS.purple}40`} stroke={COLORS.purple} strokeWidth="1.5"/>
            <circle cx="12" cy="12" r="6" fill={`${COLORS.blue}40`} stroke={COLORS.blue} strokeWidth="1.5"/>
            <circle cx="52" cy="12" r="6" fill={`${COLORS.green}40`} stroke={COLORS.green} strokeWidth="1.5"/>
            <circle cx="12" cy="36" r="6" fill={`${COLORS.orange}40`} stroke={COLORS.orange} strokeWidth="1.5"/>
            <circle cx="52" cy="36" r="6" fill={`${COLORS.red}40`} stroke={COLORS.red} strokeWidth="1.5"/>
            <path d="M24 20 L16 14" stroke="#666" strokeWidth="1"/>
            <path d="M40 20 L48 14" stroke="#666" strokeWidth="1"/>
            <path d="M24 28 L16 34" stroke="#666" strokeWidth="1"/>
            <path d="M40 28 L48 34" stroke="#666" strokeWidth="1"/>
          </svg>
        ),
        template: 'network',
        dsl: `router: Router [router]
server: Web Server [server] 192.168.1.10
db: Database [database] 192.168.1.20
client1: Client 1 [desktop]
client2: Client 2 [laptop]

router -- server
router -- db
router -- client1
router -- client2`,
      },
      {
        id: 'kanban',
        label: 'Kanban',
        icon: (
          <svg viewBox="0 0 64 48" fill="none">
            <rect x="4" y="4" width="16" height="40" rx="2" fill="#f5f5f5" stroke="#ddd" strokeWidth="1"/>
            <rect x="24" y="4" width="16" height="40" rx="2" fill="#f5f5f5" stroke="#ddd" strokeWidth="1"/>
            <rect x="44" y="4" width="16" height="40" rx="2" fill="#f5f5f5" stroke="#ddd" strokeWidth="1"/>
            <rect x="6" y="12" width="12" height="6" rx="1" fill={`${COLORS.orange}60`}/>
            <rect x="6" y="20" width="12" height="6" rx="1" fill={`${COLORS.orange}60`}/>
            <rect x="26" y="12" width="12" height="6" rx="1" fill={`${COLORS.blue}60`}/>
            <rect x="46" y="12" width="12" height="6" rx="1" fill={`${COLORS.green}60`}/>
            <rect x="46" y="20" width="12" height="6" rx="1" fill={`${COLORS.green}60`}/>
          </svg>
        ),
        template: 'gantt',
        dsl: `Task 1: 2024-01-01, 5d
Task 2: 2024-01-03, 3d
Task 3: 2024-01-06, 4d
Task 4: 2024-01-08, 2d`,
      },
    ],
  },
  data: {
    label: 'Data',
    shapes: [
      {
        id: 'barchart',
        label: 'Bar Chart',
        icon: (
          <svg viewBox="0 0 64 48" fill="none">
            <rect x="8" y="28" width="10" height="16" rx="1" fill={`${COLORS.blue}60`}/>
            <rect x="22" y="18" width="10" height="26" rx="1" fill={`${COLORS.purple}60`}/>
            <rect x="36" y="8" width="10" height="36" rx="1" fill={`${COLORS.green}60`}/>
            <rect x="50" y="22" width="10" height="22" rx="1" fill={`${COLORS.orange}60`}/>
            <line x1="4" y1="44" x2="60" y2="44" stroke="#666" strokeWidth="1"/>
          </svg>
        ),
        template: 'pie',
        dsl: `Sales: 45
Marketing: 30
Engineering: 50
Support: 25`,
      },
      {
        id: 'piechart',
        label: 'Pie Chart',
        icon: (
          <svg viewBox="0 0 64 48" fill="none">
            <circle cx="32" cy="24" r="18" fill={`${COLORS.blue}40`} stroke={COLORS.blue} strokeWidth="1"/>
            <path d="M32 24 L32 6 A18 18 0 0 1 48 16 Z" fill={`${COLORS.purple}60`}/>
            <path d="M32 24 L48 16 A18 18 0 0 1 44 40 Z" fill={`${COLORS.green}60`}/>
            <path d="M32 24 L44 40 A18 18 0 0 1 20 40 Z" fill={`${COLORS.orange}60`}/>
          </svg>
        ),
        template: 'pie',
        dsl: `Revenue: 35
Costs: 25
Profit: 20
Other: 20`,
      },
      {
        id: 'erd',
        label: 'ERD',
        icon: (
          <svg viewBox="0 0 64 48" fill="none">
            <rect x="4" y="4" width="24" height="18" rx="2" fill="#f8f8f8" stroke={COLORS.blue} strokeWidth="1.5"/>
            <rect x="4" y="4" width="24" height="6" rx="2" fill={`${COLORS.blue}30`}/>
            <rect x="36" y="26" width="24" height="18" rx="2" fill="#f8f8f8" stroke={COLORS.green} strokeWidth="1.5"/>
            <rect x="36" y="26" width="24" height="6" rx="2" fill={`${COLORS.green}30`}/>
            <path d="M28 13 L36 35" stroke="#666" strokeWidth="1"/>
            <circle cx="28" cy="13" r="2" fill="#666"/>
            <circle cx="36" cy="35" r="2" fill="none" stroke="#666" strokeWidth="1"/>
          </svg>
        ),
        template: 'erd',
        dsl: `CREATE TABLE users (
  id INT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(255)
);

CREATE TABLE orders (
  id INT PRIMARY KEY,
  user_id INT REFERENCES users(id),
  total DECIMAL
);`,
      },
      {
        id: 'class',
        label: 'Class Diagram',
        icon: (
          <svg viewBox="0 0 64 48" fill="none">
            <rect x="8" y="4" width="22" height="20" rx="2" fill="#f8f8f8" stroke={COLORS.purple} strokeWidth="1.5"/>
            <line x1="8" y1="10" x2="30" y2="10" stroke={COLORS.purple} strokeWidth="1"/>
            <line x1="8" y1="16" x2="30" y2="16" stroke={COLORS.purple} strokeWidth="0.5"/>
            <rect x="34" y="24" width="22" height="20" rx="2" fill="#f8f8f8" stroke={COLORS.orange} strokeWidth="1.5"/>
            <line x1="34" y1="30" x2="56" y2="30" stroke={COLORS.orange} strokeWidth="1"/>
            <line x1="34" y1="36" x2="56" y2="36" stroke={COLORS.orange} strokeWidth="0.5"/>
            <path d="M19 24 L45 24" stroke="#666" strokeWidth="1"/>
            <polygon points="19,24 23,22 23,26" fill="#666"/>
          </svg>
        ),
        template: 'class',
        dsl: `class User {
  +id: int
  +name: string
  +login(): boolean
}

class Order {
  +id: int
  +total: decimal
  +process(): void
}

User "1" -- "*" Order`,
      },
      {
        id: 'linechart',
        label: 'Line Chart',
        icon: (
          <svg viewBox="0 0 64 48" fill="none">
            <line x1="8" y1="40" x2="56" y2="40" stroke="#666" strokeWidth="1"/>
            <line x1="8" y1="8" x2="8" y2="40" stroke="#666" strokeWidth="1"/>
            <path d="M12 32 L22 24 L32 28 L42 16 L52 20" stroke={COLORS.blue} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 36 L22 30 L32 34 L42 26 L52 30" stroke={COLORS.green} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="12" cy="32" r="2" fill={COLORS.blue}/>
            <circle cx="32" cy="28" r="2" fill={COLORS.blue}/>
            <circle cx="52" cy="20" r="2" fill={COLORS.blue}/>
          </svg>
        ),
        template: 'quadrant',
        dsl: `title: Performance Analysis
x-axis: Time
y-axis: Value

Q1: Low Risk, High Value
Q2: High Risk, High Value
Q3: High Risk, Low Value
Q4: Low Risk, Low Value`,
      },
      {
        id: 'radar',
        label: 'Radar',
        icon: (
          <svg viewBox="0 0 64 48" fill="none">
            <polygon points="32,8 52,20 48,40 16,40 12,20" fill="none" stroke="#ddd" strokeWidth="1"/>
            <polygon points="32,14 46,22 43,36 21,36 18,22" fill="none" stroke="#ddd" strokeWidth="1"/>
            <polygon points="32,20 40,25 38,32 26,32 24,25" fill="none" stroke="#ddd" strokeWidth="1"/>
            <polygon points="32,12 48,21 44,38 20,38 16,21" fill={`${COLORS.blue}30`} stroke={COLORS.blue} strokeWidth="1.5"/>
            <circle cx="32" cy="12" r="2" fill={COLORS.blue}/>
            <circle cx="48" cy="21" r="2" fill={COLORS.blue}/>
            <circle cx="44" cy="38" r="2" fill={COLORS.blue}/>
          </svg>
        ),
        template: 'pie',
        dsl: `Performance: 85
Quality: 70
Speed: 90
Reliability: 75
Cost: 60`,
      },
    ],
  },
  diagrams: {
    label: 'Diagrams',
    shapes: [
      {
        id: 'mindmap',
        label: 'Mind Map',
        icon: (
          <svg viewBox="0 0 64 48" fill="none">
            <ellipse cx="32" cy="24" rx="12" ry="8" fill={`${COLORS.purple}40`} stroke={COLORS.purple} strokeWidth="1.5"/>
            <ellipse cx="10" cy="12" rx="8" ry="5" fill={`${COLORS.blue}40`} stroke={COLORS.blue} strokeWidth="1"/>
            <ellipse cx="54" cy="12" rx="8" ry="5" fill={`${COLORS.green}40`} stroke={COLORS.green} strokeWidth="1"/>
            <ellipse cx="10" cy="36" rx="8" ry="5" fill={`${COLORS.orange}40`} stroke={COLORS.orange} strokeWidth="1"/>
            <ellipse cx="54" cy="36" rx="8" ry="5" fill={`${COLORS.red}40`} stroke={COLORS.red} strokeWidth="1"/>
            <path d="M20 20 L14 15" stroke="#666" strokeWidth="1"/>
            <path d="M44 20 L50 15" stroke="#666" strokeWidth="1"/>
            <path d="M20 28 L14 33" stroke="#666" strokeWidth="1"/>
            <path d="M44 28 L50 33" stroke="#666" strokeWidth="1"/>
          </svg>
        ),
        template: 'mindmap',
        dsl: `Central Topic
  Branch 1
    Sub-topic A
    Sub-topic B
  Branch 2
    Sub-topic C
  Branch 3
    Sub-topic D
    Sub-topic E`,
      },
      {
        id: 'architecture',
        label: 'Architecture',
        icon: (
          <svg viewBox="0 0 64 48" fill="none">
            <rect x="4" y="4" width="56" height="10" rx="2" fill={`${COLORS.blue}20`} stroke={COLORS.blue} strokeWidth="1" strokeDasharray="3,2"/>
            <rect x="8" y="6" width="14" height="6" rx="1" fill={`${COLORS.blue}40`} stroke={COLORS.blue} strokeWidth="1"/>
            <rect x="25" y="6" width="14" height="6" rx="1" fill={`${COLORS.blue}40`} stroke={COLORS.blue} strokeWidth="1"/>
            <rect x="42" y="6" width="14" height="6" rx="1" fill={`${COLORS.blue}40`} stroke={COLORS.blue} strokeWidth="1"/>
            <rect x="4" y="18" width="56" height="10" rx="2" fill={`${COLORS.green}20`} stroke={COLORS.green} strokeWidth="1" strokeDasharray="3,2"/>
            <rect x="8" y="20" width="22" height="6" rx="1" fill={`${COLORS.green}40`} stroke={COLORS.green} strokeWidth="1"/>
            <rect x="34" y="20" width="22" height="6" rx="1" fill={`${COLORS.green}40`} stroke={COLORS.green} strokeWidth="1"/>
            <rect x="4" y="32" width="56" height="10" rx="2" fill={`${COLORS.purple}20`} stroke={COLORS.purple} strokeWidth="1" strokeDasharray="3,2"/>
            <rect x="18" y="34" width="28" height="6" rx="1" fill={`${COLORS.purple}40`} stroke={COLORS.purple} strokeWidth="1"/>
          </svg>
        ),
        template: 'architecture',
        dsl: `[clients] Web App, Mobile App, CLI
[services] API Gateway, Auth Service, User Service
[data] PostgreSQL, Redis, S3

Web App -> API Gateway
Mobile App -> API Gateway
API Gateway -> Auth Service
API Gateway -> User Service
User Service -> PostgreSQL
Auth Service -> Redis`,
      },
      {
        id: 'usecase',
        label: 'Use Case',
        icon: (
          <svg viewBox="0 0 64 48" fill="none">
            <rect x="18" y="4" width="40" height="40" rx="4" fill="#f8f8f8" stroke="#ddd" strokeWidth="1"/>
            <ellipse cx="38" cy="14" rx="12" ry="6" fill={`${COLORS.blue}30`} stroke={COLORS.blue} strokeWidth="1"/>
            <ellipse cx="38" cy="28" rx="12" ry="6" fill={`${COLORS.green}30`} stroke={COLORS.green} strokeWidth="1"/>
            <ellipse cx="38" cy="42" rx="12" ry="6" fill={`${COLORS.orange}30`} stroke={COLORS.orange} strokeWidth="1"/>
            <circle cx="8" cy="14" r="4" fill="none" stroke="#666" strokeWidth="1"/>
            <line x1="8" y1="18" x2="8" y2="28" stroke="#666" strokeWidth="1"/>
            <line x1="4" y1="22" x2="12" y2="22" stroke="#666" strokeWidth="1"/>
            <line x1="8" y1="28" x2="4" y2="36" stroke="#666" strokeWidth="1"/>
            <line x1="8" y1="28" x2="12" y2="36" stroke="#666" strokeWidth="1"/>
            <path d="M12 14 L26 14" stroke="#666" strokeWidth="1"/>
          </svg>
        ),
        template: 'usecase',
        dsl: `actor User
actor Admin

User -> Login
User -> View Dashboard
User -> Update Profile

Admin -> Manage Users
Admin -> View Reports`,
      },
      {
        id: 'timeline',
        label: 'Timeline',
        icon: (
          <svg viewBox="0 0 64 48" fill="none">
            <line x1="8" y1="24" x2="56" y2="24" stroke="#666" strokeWidth="2"/>
            <circle cx="16" cy="24" r="4" fill={COLORS.blue}/>
            <circle cx="32" cy="24" r="4" fill={COLORS.green}/>
            <circle cx="48" cy="24" r="4" fill={COLORS.purple}/>
            <rect x="10" y="8" width="12" height="8" rx="2" fill={`${COLORS.blue}30`} stroke={COLORS.blue} strokeWidth="1"/>
            <rect x="26" y="32" width="12" height="8" rx="2" fill={`${COLORS.green}30`} stroke={COLORS.green} strokeWidth="1"/>
            <rect x="42" y="8" width="12" height="8" rx="2" fill={`${COLORS.purple}30`} stroke={COLORS.purple} strokeWidth="1"/>
          </svg>
        ),
        template: 'timeline',
        dsl: `2024-01: Project Start
2024-03: Phase 1 Complete
2024-06: Beta Release
2024-09: v1.0 Launch
2024-12: Year Review`,
      },
      {
        id: 'journey',
        label: 'User Journey',
        icon: (
          <svg viewBox="0 0 64 48" fill="none">
            <circle cx="8" cy="24" r="4" fill={COLORS.green}/>
            <circle cx="22" cy="16" r="4" fill={COLORS.blue}/>
            <circle cx="36" cy="28" r="4" fill={COLORS.orange}/>
            <circle cx="50" cy="20" r="4" fill={COLORS.purple}/>
            <path d="M12 24 Q17 16, 18 16" stroke="#666" strokeWidth="1" fill="none"/>
            <path d="M26 16 Q31 16, 32 28" stroke="#666" strokeWidth="1" fill="none"/>
            <path d="M40 28 Q45 28, 46 20" stroke="#666" strokeWidth="1" fill="none"/>
            <path d="M8 34 Q22 42, 36 38 Q50 34, 56 36" stroke={COLORS.green} strokeWidth="2" fill="none" strokeDasharray="4,2"/>
          </svg>
        ),
        template: 'journey',
        dsl: `[start] Discover
[action] Sign Up
[action] Explore
[decision] Subscribe?
[success] Premium User
[end] Loyal Customer

Discover -> Sign Up -> Explore -> Subscribe?
Subscribe? -yes-> Premium User -> Loyal Customer
Subscribe? -no-> Explore`,
      },
      {
        id: 'git',
        label: 'Git Graph',
        icon: (
          <svg viewBox="0 0 64 48" fill="none">
            <line x1="16" y1="8" x2="16" y2="40" stroke={COLORS.blue} strokeWidth="2"/>
            <line x1="32" y1="16" x2="32" y2="40" stroke={COLORS.green} strokeWidth="2"/>
            <line x1="48" y1="24" x2="48" y2="40" stroke={COLORS.purple} strokeWidth="2"/>
            <circle cx="16" cy="12" r="3" fill={COLORS.blue}/>
            <circle cx="16" cy="24" r="3" fill={COLORS.blue}/>
            <circle cx="16" cy="36" r="3" fill={COLORS.blue}/>
            <circle cx="32" cy="20" r="3" fill={COLORS.green}/>
            <circle cx="32" cy="32" r="3" fill={COLORS.green}/>
            <circle cx="48" cy="28" r="3" fill={COLORS.purple}/>
            <path d="M16 12 Q24 12, 32 20" stroke="#666" strokeWidth="1" fill="none"/>
            <path d="M32 20 Q40 20, 48 28" stroke="#666" strokeWidth="1" fill="none"/>
            <path d="M32 32 L16 36" stroke="#666" strokeWidth="1"/>
          </svg>
        ),
        template: 'gitgraph',
        dsl: `commit: Initial commit
branch: feature
commit: Add feature
checkout: main
commit: Fix bug
merge: feature
commit: Release v1.0`,
      },
    ],
  },
  components: {
    label: 'Components',
    shapes: [
      {
        id: 'deployment',
        label: 'Deployment',
        icon: (
          <svg viewBox="0 0 64 48" fill="none">
            <rect x="4" y="4" width="26" height="18" rx="3" fill={`${COLORS.blue}20`} stroke={COLORS.blue} strokeWidth="1.5" strokeDasharray="4,2"/>
            <rect x="8" y="8" width="8" height="6" rx="1" fill={`${COLORS.blue}50`}/>
            <rect x="18" y="8" width="8" height="6" rx="1" fill={`${COLORS.blue}50`}/>
            <rect x="34" y="26" width="26" height="18" rx="3" fill={`${COLORS.green}20`} stroke={COLORS.green} strokeWidth="1.5" strokeDasharray="4,2"/>
            <rect x="38" y="30" width="8" height="6" rx="1" fill={`${COLORS.green}50`}/>
            <rect x="48" y="30" width="8" height="6" rx="1" fill={`${COLORS.green}50`}/>
            <path d="M30 13 L34 35" stroke="#666" strokeWidth="1" strokeDasharray="3,2"/>
          </svg>
        ),
        template: 'deployment',
        dsl: `node: AWS Cloud {
  node: EC2 Instance {
    component: Web Server
    component: API Server
  }
  node: RDS {
    component: PostgreSQL
  }
}`,
      },
      {
        id: 'component',
        label: 'Component',
        icon: (
          <svg viewBox="0 0 64 48" fill="none">
            <rect x="16" y="8" width="32" height="32" rx="4" fill={`${COLORS.purple}20`} stroke={COLORS.purple} strokeWidth="1.5"/>
            <rect x="10" y="14" width="8" height="6" rx="1" fill={`${COLORS.purple}40`} stroke={COLORS.purple} strokeWidth="1"/>
            <rect x="10" y="28" width="8" height="6" rx="1" fill={`${COLORS.purple}40`} stroke={COLORS.purple} strokeWidth="1"/>
            <rect x="46" y="14" width="8" height="6" rx="1" fill={`${COLORS.purple}40`} stroke={COLORS.purple} strokeWidth="1"/>
            <rect x="46" y="28" width="8" height="6" rx="1" fill={`${COLORS.purple}40`} stroke={COLORS.purple} strokeWidth="1"/>
            <text x="32" y="28" textAnchor="middle" fontSize="8" fill={COLORS.purple}>API</text>
          </svg>
        ),
        template: 'component',
        dsl: `component: Auth Service [auth]
component: User Service [user]
component: Order Service [order]
component: Payment Gateway [payment]

Auth Service -> User Service
User Service -> Order Service
Order Service -> Payment Gateway`,
      },
      {
        id: 'c4',
        label: 'C4 Model',
        icon: (
          <svg viewBox="0 0 64 48" fill="none">
            <rect x="4" y="4" width="56" height="40" rx="4" fill="#f5f5f5" stroke="#ddd" strokeWidth="1"/>
            <rect x="8" y="8" width="18" height="14" rx="2" fill={`${COLORS.blue}30`} stroke={COLORS.blue} strokeWidth="1"/>
            <circle cx="38" cy="8" r="6" fill="none" stroke={COLORS.orange} strokeWidth="1.5"/>
            <circle cx="38" cy="4" r="2" fill={`${COLORS.orange}40`} stroke={COLORS.orange} strokeWidth="1"/>
            <rect x="48" y="8" width="10" height="14" rx="2" fill={`${COLORS.green}30`} stroke={COLORS.green} strokeWidth="1"/>
            <rect x="8" y="28" width="22" height="14" rx="2" fill={`${COLORS.purple}30`} stroke={COLORS.purple} strokeWidth="1"/>
            <rect x="34" y="28" width="22" height="14" rx="2" fill={`${COLORS.pink}30`} stroke={COLORS.pink} strokeWidth="1"/>
          </svg>
        ),
        template: 'c4',
        dsl: `person: User [User accesses the system]
system: Web Application [Main application]
container: API Backend [Handles requests]
container: Database [Stores data]

User -> Web Application: Uses
Web Application -> API Backend: Calls
API Backend -> Database: Reads/Writes`,
      },
      {
        id: 'state',
        label: 'State Machine',
        icon: (
          <svg viewBox="0 0 64 48" fill="none">
            <circle cx="12" cy="24" r="6" fill="none" stroke="#666" strokeWidth="2"/>
            <circle cx="12" cy="24" r="4" fill="#666"/>
            <circle cx="32" cy="12" r="6" fill={`${COLORS.blue}40`} stroke={COLORS.blue} strokeWidth="1.5"/>
            <circle cx="52" cy="24" r="6" fill={`${COLORS.green}40`} stroke={COLORS.green} strokeWidth="1.5"/>
            <circle cx="32" cy="36" r="6" fill={`${COLORS.orange}40`} stroke={COLORS.orange} strokeWidth="1.5"/>
            <path d="M18 22 L26 14" stroke="#666" strokeWidth="1" markerEnd="url(#arrow)"/>
            <path d="M38 12 L46 20" stroke="#666" strokeWidth="1"/>
            <path d="M52 30 L52 36 L38 36" stroke="#666" strokeWidth="1"/>
            <path d="M26 36 L18 28" stroke="#666" strokeWidth="1"/>
          </svg>
        ),
        template: 'state',
        dsl: `[*] -> Idle
Idle -> Processing : start
Processing -> Complete : success
Processing -> Error : fail
Error -> Idle : retry
Complete -> [*]`,
      },
    ],
  },
};

function ShapeLibrary({ isOpen, onClose, onSelectShape, theme }) {
  const [expandedCategories, setExpandedCategories] = useState(
    Object.keys(SHAPE_CATEGORIES).reduce((acc, key) => ({ ...acc, [key]: true }), {})
  );
  const isDark = theme?.name === 'dark';

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({ ...prev, [category]: !prev[category] }));
  };

  if (!isOpen) return null;

  const styles = {
    overlay: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,0.4)',
      backdropFilter: 'blur(4px)',
      display: 'flex',
      justifyContent: 'flex-end',
      zIndex: 1000,
    },
    panel: {
      width: 320,
      maxWidth: '90vw',
      height: '100vh',
      background: isDark
        ? 'linear-gradient(180deg, rgba(15,23,42,0.98), rgba(30,41,59,0.98))'
        : 'linear-gradient(180deg, #ffffff, #f8fafc)',
      borderLeft: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : '#e2e8f0'}`,
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '-10px 0 30px rgba(0,0,0,0.2)',
    },
    header: {
      padding: '16px 20px',
      borderBottom: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : '#e2e8f0'}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: isDark ? 'rgba(0,0,0,0.2)' : '#f1f5f9',
    },
    headerTitle: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
    },
    headerIcon: {
      width: 24,
      height: 24,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontWeight: 600,
      fontSize: '1rem',
      color: isDark ? '#fff' : '#1e293b',
    },
    closeBtn: {
      background: 'transparent',
      border: 'none',
      color: isDark ? '#94a3b8' : '#64748b',
      fontSize: '1.2rem',
      cursor: 'pointer',
      padding: 4,
      borderRadius: 4,
    },
    content: {
      flex: 1,
      overflowY: 'auto',
      padding: '8px 0',
    },
    category: {
      marginBottom: 4,
    },
    categoryHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '12px 20px',
      cursor: 'pointer',
      background: isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)',
      borderBottom: `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : '#f1f5f9'}`,
      transition: 'background 0.2s',
    },
    categoryLabel: {
      fontWeight: 600,
      fontSize: '0.9rem',
      color: isDark ? '#e2e8f0' : '#334155',
    },
    categoryArrow: {
      fontSize: '0.8rem',
      color: isDark ? '#64748b' : '#94a3b8',
      transition: 'transform 0.2s',
    },
    shapesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 12,
      padding: '16px 20px',
    },
    shapeItem: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6,
      padding: 10,
      background: isDark ? 'rgba(255,255,255,0.05)' : '#fff',
      borderRadius: 12,
      border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : '#e2e8f0'}`,
      cursor: 'pointer',
      transition: 'all 0.2s',
    },
    shapeIcon: {
      width: 64,
      height: 48,
    },
    shapeLabel: {
      fontSize: '0.7rem',
      color: isDark ? '#94a3b8' : '#64748b',
      textAlign: 'center',
      fontWeight: 500,
    },
    footer: {
      padding: '12px 20px',
      borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : '#e2e8f0'}`,
      background: isDark ? 'rgba(0,0,0,0.2)' : '#f1f5f9',
    },
    hint: {
      fontSize: '0.75rem',
      color: isDark ? '#64748b' : '#94a3b8',
      textAlign: 'center',
    },
  };

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.panel} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div style={styles.header}>
          <div style={styles.headerTitle}>
            <div style={styles.headerIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7" rx="1"/>
                <rect x="14" y="3" width="7" height="7" rx="1"/>
                <rect x="3" y="14" width="7" height="7" rx="1"/>
                <rect x="14" y="14" width="7" height="7" rx="1"/>
              </svg>
            </div>
            <span style={styles.title}>Categories</span>
          </div>
          <button style={styles.closeBtn} onClick={onClose}>✕</button>
        </div>

        {/* Content */}
        <div style={styles.content}>
          {Object.entries(SHAPE_CATEGORIES).map(([key, category]) => (
            <div key={key} style={styles.category}>
              <div
                style={styles.categoryHeader}
                onClick={() => toggleCategory(key)}
                onMouseEnter={(e) => e.currentTarget.style.background = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)'}
                onMouseLeave={(e) => e.currentTarget.style.background = isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)'}
              >
                <span style={styles.categoryLabel}>{category.label}</span>
                <span style={{ ...styles.categoryArrow, transform: expandedCategories[key] ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                  ▼
                </span>
              </div>
              {expandedCategories[key] && (
                <div style={styles.shapesGrid}>
                  {category.shapes.map((shape) => (
                    <div
                      key={shape.id}
                      style={styles.shapeItem}
                      onClick={() => onSelectShape(shape)}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = isDark ? 'rgba(124,58,237,0.2)' : 'rgba(124,58,237,0.1)';
                        e.currentTarget.style.borderColor = COLORS.purple;
                        e.currentTarget.style.transform = 'scale(1.05)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = isDark ? 'rgba(255,255,255,0.05)' : '#fff';
                        e.currentTarget.style.borderColor = isDark ? 'rgba(255,255,255,0.1)' : '#e2e8f0';
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    >
                      <div style={styles.shapeIcon}>
                        {shape.icon}
                      </div>
                      <span style={styles.shapeLabel}>{shape.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={styles.footer}>
          <p style={styles.hint}>Click a shape to use it as a diagram template</p>
        </div>
      </div>
    </div>
  );
}

export default ShapeLibrary;
