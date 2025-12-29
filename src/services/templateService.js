// DDFlow Template Service - Preset templates and custom template management

const STORAGE_KEYS = {
  CUSTOM_TEMPLATES: 'ddflow_custom_templates',
};

// Template categories
export const TEMPLATE_CATEGORIES = {
  FLOWCHARTS: 'Flowcharts',
  ARCHITECTURE: 'Architecture',
  DATA_MODELING: 'Data Modeling',
  PROJECT_MANAGEMENT: 'Project Management',
  SOFTWARE_DESIGN: 'Software Design',
  BUSINESS: 'Business',
  NETWORK: 'Network',
  UI_DESIGN: 'UI Design',
};

// Preset templates organized by category
export const PRESET_TEMPLATES = [
  // ============================================
  // FLOWCHARTS
  // ============================================
  {
    id: 'login-flow',
    name: 'User Login Flow',
    description: 'Authentication flow with validation and error handling',
    category: TEMPLATE_CATEGORIES.FLOWCHARTS,
    type: 'flowchart',
    thumbnail: 'flowchart',
    source: `(start) Start
Start -> (io) Enter Credentials
Enter Credentials -> (process) Validate Input
Validate Input -> (decision) Valid Format?
Valid Format? -> (process) Check Database: Yes
Valid Format? -> (io) Show Format Error: No
Show Format Error -> Enter Credentials
Check Database -> (decision) User Exists?
User Exists? -> (decision) Password Correct?: Yes
User Exists? -> (io) Show User Error: No
Show User Error -> Enter Credentials
Password Correct? -> (process) Create Session: Yes
Password Correct? -> (io) Show Auth Error: No
Show Auth Error -> Enter Credentials
Create Session -> (end) Dashboard`,
  },
  {
    id: 'order-process',
    name: 'Order Processing',
    description: 'E-commerce order flow from cart to delivery',
    category: TEMPLATE_CATEGORIES.FLOWCHARTS,
    type: 'flowchart',
    thumbnail: 'flowchart',
    source: `(start) Cart
Cart -> (process) Calculate Total
Calculate Total -> (io) Enter Shipping
Enter Shipping -> (io) Enter Payment
Enter Payment -> (decision) Payment Valid?
Payment Valid? -> (process) Process Payment: Yes
Payment Valid? -> (io) Show Error: No
Show Error -> Enter Payment
Process Payment -> (decision) Payment Success?
Payment Success? -> (process) Create Order: Yes
Payment Success? -> (io) Payment Failed: No
Payment Failed -> Enter Payment
Create Order -> (io) Send Confirmation
Send Confirmation -> (process) Prepare Shipment
Prepare Shipment -> (end) Delivered`,
  },
  {
    id: 'approval-workflow',
    name: 'Approval Workflow',
    description: 'Multi-level approval process with escalation',
    category: TEMPLATE_CATEGORIES.FLOWCHARTS,
    type: 'flowchart',
    thumbnail: 'flowchart',
    source: `(start) Submit Request
Submit Request -> (process) Initial Review
Initial Review -> (decision) Meets Criteria?
Meets Criteria? -> (process) Manager Review: Yes
Meets Criteria? -> (io) Return for Revision: No
Return for Revision -> Submit Request
Manager Review -> (decision) Manager Approves?
Manager Approves? -> (decision) Above Threshold?: Yes
Manager Approves? -> (io) Rejected: No
Rejected -> (end) Closed
Above Threshold? -> (process) Director Review: Yes
Above Threshold? -> (process) Approved: No
Director Review -> (decision) Director Approves?
Director Approves? -> Approved: Yes
Director Approves? -> Rejected: No
Approved -> (end) Complete`,
  },
  {
    id: 'bug-triage',
    name: 'Bug Triage Process',
    description: 'Software bug reporting and resolution workflow',
    category: TEMPLATE_CATEGORIES.FLOWCHARTS,
    type: 'flowchart',
    thumbnail: 'flowchart',
    source: `(start) Bug Reported
Bug Reported -> (process) Reproduce Issue
Reproduce Issue -> (decision) Reproducible?
Reproducible? -> (process) Classify Severity: Yes
Reproducible? -> (io) Request More Info: No
Request More Info -> Bug Reported
Classify Severity -> (decision) Critical?
Critical? -> (process) Assign Senior Dev: Yes
Critical? -> (decision) High Priority?: No
High Priority? -> (process) Add to Sprint: Yes
High Priority? -> (process) Add to Backlog: No
Add to Backlog -> (end) Queued
Assign Senior Dev -> (process) Fix Bug
Add to Sprint -> Fix Bug
Fix Bug -> (process) Code Review
Code Review -> (decision) Approved?
Approved? -> (process) Deploy Fix: Yes
Approved? -> Fix Bug: No
Deploy Fix -> (process) Verify Fix
Verify Fix -> (end) Resolved`,
  },

  // ============================================
  // ARCHITECTURE
  // ============================================
  {
    id: 'microservices',
    name: 'Microservices Architecture',
    description: 'Modern microservices with API gateway and message queue',
    category: TEMPLATE_CATEGORIES.ARCHITECTURE,
    type: 'architecture',
    thumbnail: 'architecture',
    source: `[clients] Web App, Mobile App, Third-Party
[gateway] API Gateway, Load Balancer
[services] Auth Service, User Service, Product Service, Order Service, Payment Service, Notification Service
[queue] RabbitMQ, Redis Cache
[data] PostgreSQL, MongoDB, Elasticsearch

Web App -> API Gateway
Mobile App -> API Gateway
Third-Party -> API Gateway
API Gateway -> Load Balancer
Load Balancer -> Auth Service
Load Balancer -> User Service
Load Balancer -> Product Service
Load Balancer -> Order Service
Auth Service -> Redis Cache
User Service -> PostgreSQL
Product Service -> MongoDB
Product Service -> Elasticsearch
Order Service -> PostgreSQL
Order Service -> RabbitMQ
Payment Service -> RabbitMQ
Notification Service -> RabbitMQ`,
  },
  {
    id: 'serverless',
    name: 'Serverless Architecture',
    description: 'AWS serverless architecture with Lambda and DynamoDB',
    category: TEMPLATE_CATEGORIES.ARCHITECTURE,
    type: 'architecture',
    thumbnail: 'architecture',
    source: `[clients] Web Client, Mobile Client
[gateway] API Gateway, CloudFront CDN
[services] Auth Lambda, API Lambda, Worker Lambda
[queue] SQS Queue, SNS Topics
[storage] S3 Bucket
[data] DynamoDB, ElastiCache

Web Client -> CloudFront CDN
Mobile Client -> API Gateway
CloudFront CDN -> S3 Bucket
API Gateway -> Auth Lambda
API Gateway -> API Lambda
Auth Lambda -> DynamoDB
API Lambda -> DynamoDB
API Lambda -> ElastiCache
API Lambda -> SQS Queue
SQS Queue -> Worker Lambda
Worker Lambda -> SNS Topics
Worker Lambda -> S3 Bucket`,
  },
  {
    id: 'event-driven',
    name: 'Event-Driven Architecture',
    description: 'Event sourcing with CQRS pattern',
    category: TEMPLATE_CATEGORIES.ARCHITECTURE,
    type: 'architecture',
    thumbnail: 'architecture',
    source: `[clients] Web UI, Admin Dashboard
[gateway] API Gateway
[services] Command Handler, Event Processor, Query Handler, Saga Orchestrator
[queue] Event Bus, Command Queue
[data] Event Store, Read Database, Projections

Web UI -> API Gateway
Admin Dashboard -> API Gateway
API Gateway -> Command Handler
API Gateway -> Query Handler
Command Handler -> Command Queue
Command Queue -> Event Processor
Event Processor -> Event Bus
Event Processor -> Event Store
Event Bus -> Saga Orchestrator
Event Bus -> Projections
Projections -> Read Database
Query Handler -> Read Database`,
  },
  {
    id: 'three-tier',
    name: 'Three-Tier Application',
    description: 'Traditional three-tier web application',
    category: TEMPLATE_CATEGORIES.ARCHITECTURE,
    type: 'architecture',
    thumbnail: 'architecture',
    source: `[clients] Browser, Mobile App
[gateway] Load Balancer
[services] Web Server, Application Server, Background Jobs
[cache] Redis Cache, Session Store
[data] Primary Database, Read Replica, File Storage

Browser -> Load Balancer
Mobile App -> Load Balancer
Load Balancer -> Web Server
Web Server -> Application Server
Application Server -> Redis Cache
Application Server -> Session Store
Application Server -> Primary Database
Application Server -> Background Jobs
Primary Database -> Read Replica
Background Jobs -> File Storage`,
  },

  // ============================================
  // DATA MODELING
  // ============================================
  {
    id: 'ecommerce-erd',
    name: 'E-Commerce Database',
    description: 'Complete e-commerce database schema',
    category: TEMPLATE_CATEGORIES.DATA_MODELING,
    type: 'erd',
    thumbnail: 'erd',
    source: `CREATE TABLE users (
  id UUID PRIMARY KEY,
  email VARCHAR(255) UNIQUE,
  password_hash VARCHAR(255),
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  phone VARCHAR(20),
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);

CREATE TABLE addresses (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  type VARCHAR(20),
  street VARCHAR(255),
  city VARCHAR(100),
  state VARCHAR(100),
  postal_code VARCHAR(20),
  country VARCHAR(100),
  is_default BOOLEAN
);

CREATE TABLE categories (
  id UUID PRIMARY KEY,
  name VARCHAR(100),
  slug VARCHAR(100),
  parent_id UUID REFERENCES categories(id),
  description TEXT
);

CREATE TABLE products (
  id UUID PRIMARY KEY,
  category_id UUID REFERENCES categories(id),
  name VARCHAR(255),
  slug VARCHAR(255),
  description TEXT,
  price DECIMAL(10,2),
  stock_quantity INTEGER,
  is_active BOOLEAN,
  created_at TIMESTAMP
);

CREATE TABLE orders (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  shipping_address_id UUID REFERENCES addresses(id),
  status VARCHAR(50),
  subtotal DECIMAL(10,2),
  tax DECIMAL(10,2),
  shipping_cost DECIMAL(10,2),
  total DECIMAL(10,2),
  created_at TIMESTAMP
);

CREATE TABLE order_items (
  id UUID PRIMARY KEY,
  order_id UUID REFERENCES orders(id),
  product_id UUID REFERENCES products(id),
  quantity INTEGER,
  unit_price DECIMAL(10,2),
  total_price DECIMAL(10,2)
);`,
  },
  {
    id: 'blog-erd',
    name: 'Blog Platform Database',
    description: 'Blog with posts, comments, and tags',
    category: TEMPLATE_CATEGORIES.DATA_MODELING,
    type: 'erd',
    thumbnail: 'erd',
    source: `CREATE TABLE authors (
  id UUID PRIMARY KEY,
  username VARCHAR(50) UNIQUE,
  email VARCHAR(255) UNIQUE,
  bio TEXT,
  avatar_url VARCHAR(500),
  created_at TIMESTAMP
);

CREATE TABLE posts (
  id UUID PRIMARY KEY,
  author_id UUID REFERENCES authors(id),
  title VARCHAR(255),
  slug VARCHAR(255) UNIQUE,
  content TEXT,
  excerpt TEXT,
  status VARCHAR(20),
  published_at TIMESTAMP,
  created_at TIMESTAMP
);

CREATE TABLE tags (
  id UUID PRIMARY KEY,
  name VARCHAR(50),
  slug VARCHAR(50) UNIQUE
);

CREATE TABLE post_tags (
  post_id UUID REFERENCES posts(id),
  tag_id UUID REFERENCES tags(id),
  PRIMARY KEY (post_id, tag_id)
);

CREATE TABLE comments (
  id UUID PRIMARY KEY,
  post_id UUID REFERENCES posts(id),
  author_id UUID REFERENCES authors(id),
  parent_id UUID REFERENCES comments(id),
  content TEXT,
  is_approved BOOLEAN,
  created_at TIMESTAMP
);`,
  },
  {
    id: 'saas-erd',
    name: 'SaaS Multi-Tenant Database',
    description: 'Multi-tenant SaaS application schema',
    category: TEMPLATE_CATEGORIES.DATA_MODELING,
    type: 'erd',
    thumbnail: 'erd',
    source: `CREATE TABLE organizations (
  id UUID PRIMARY KEY,
  name VARCHAR(255),
  slug VARCHAR(100) UNIQUE,
  plan VARCHAR(50),
  status VARCHAR(20),
  created_at TIMESTAMP
);

CREATE TABLE users (
  id UUID PRIMARY KEY,
  org_id UUID REFERENCES organizations(id),
  email VARCHAR(255),
  role VARCHAR(50),
  status VARCHAR(20),
  last_login_at TIMESTAMP,
  created_at TIMESTAMP
);

CREATE TABLE subscriptions (
  id UUID PRIMARY KEY,
  org_id UUID REFERENCES organizations(id),
  plan VARCHAR(50),
  status VARCHAR(20),
  current_period_start TIMESTAMP,
  current_period_end TIMESTAMP,
  stripe_subscription_id VARCHAR(255)
);

CREATE TABLE invoices (
  id UUID PRIMARY KEY,
  org_id UUID REFERENCES organizations(id),
  subscription_id UUID REFERENCES subscriptions(id),
  amount DECIMAL(10,2),
  status VARCHAR(20),
  due_date DATE,
  paid_at TIMESTAMP
);

CREATE TABLE audit_logs (
  id UUID PRIMARY KEY,
  org_id UUID REFERENCES organizations(id),
  user_id UUID REFERENCES users(id),
  action VARCHAR(100),
  resource_type VARCHAR(50),
  resource_id UUID,
  metadata JSONB,
  created_at TIMESTAMP
);`,
  },

  // ============================================
  // PROJECT MANAGEMENT
  // ============================================
  {
    id: 'product-roadmap',
    name: 'Product Roadmap',
    description: 'Quarterly product development roadmap',
    category: TEMPLATE_CATEGORIES.PROJECT_MANAGEMENT,
    type: 'timeline',
    thumbnail: 'timeline',
    source: `[Q1 2025] *Kickoff | Project initiation and team assembly
[Q1 2025] Research Phase | Market analysis and user research
[Q1 2025] Design Sprint | UI/UX design and prototyping
[Q2 2025] *MVP Development | Core feature implementation
[Q2 2025] Internal Testing | QA and bug fixes
[Q2 2025] *Beta Launch | Limited release to beta users
[Q3 2025] User Feedback | Collect and analyze feedback
[Q3 2025] Feature Iteration | Implement improvements
[Q3 2025] *Public Launch | Version 1.0 release
[Q4 2025] Growth Phase | Marketing and user acquisition
[Q4 2025] Feature Expansion | New features development
[Q4 2025] *Scale | Infrastructure optimization`,
  },
  {
    id: 'sprint-gantt',
    name: 'Sprint Planning',
    description: '2-week sprint with tasks and dependencies',
    category: TEMPLATE_CATEGORIES.PROJECT_MANAGEMENT,
    type: 'gantt',
    thumbnail: 'gantt',
    source: `Sprint Planning, 0, 0.5, 100
Backlog Refinement, 0.5, 0.5, 100
Design Review, 1, 1, 100
API Development, 2, 3, 75
Frontend Development, 3, 4, 50
Integration, 5, 2, 25
Unit Testing, 6, 2, 10
QA Testing, 7, 2, 0
Bug Fixes, 8, 1, 0
Code Review, 9, 1, 0
Sprint Review, 9.5, 0.5, 0
Retrospective, 10, 0.5, 0`,
  },
  {
    id: 'project-wbs',
    name: 'Project Work Breakdown',
    description: 'Work breakdown structure for project planning',
    category: TEMPLATE_CATEGORIES.PROJECT_MANAGEMENT,
    type: 'wbs',
    thumbnail: 'mindmap',
    source: `Project Launch
  Planning
    Requirements Gathering
    Scope Definition
    Resource Allocation
    Timeline Creation
  Design
    Architecture Design
    Database Design
    UI/UX Design
    API Design
  Development
    Backend
      Core Services
      Database Layer
      API Endpoints
    Frontend
      Components
      State Management
      API Integration
  Testing
    Unit Tests
    Integration Tests
    Performance Tests
    Security Tests
  Deployment
    Environment Setup
    CI/CD Pipeline
    Monitoring
    Documentation`,
  },
  {
    id: 'team-org',
    name: 'Development Team Structure',
    description: 'Software development team organization',
    category: TEMPLATE_CATEGORIES.PROJECT_MANAGEMENT,
    type: 'orgchart',
    thumbnail: 'orgchart',
    source: `VP of Engineering [Executive]
  Engineering Manager [Management]
    Tech Lead - Backend [Leadership]
      Senior Backend Dev
      Backend Developer
      Backend Developer
    Tech Lead - Frontend [Leadership]
      Senior Frontend Dev
      Frontend Developer
      Frontend Developer
    Tech Lead - DevOps [Leadership]
      DevOps Engineer
      SRE Engineer
  QA Manager [Management]
    QA Lead [Leadership]
      Senior QA Engineer
      QA Engineer
      QA Engineer
  Product Manager [Product]
    UX Designer
    Technical Writer`,
  },

  // ============================================
  // SOFTWARE DESIGN
  // ============================================
  {
    id: 'api-sequence',
    name: 'REST API Flow',
    description: 'API request/response with authentication',
    category: TEMPLATE_CATEGORIES.SOFTWARE_DESIGN,
    type: 'sequence',
    thumbnail: 'sequence',
    source: `participant Client, API Gateway, Auth Service, User Service, Database

Client -> API Gateway: POST /api/users
API Gateway -> Auth Service: Validate JWT
Auth Service --> API Gateway: Token Valid
API Gateway -> User Service: Create User Request
User Service -> Database: INSERT user
Database --> User Service: User Record
User Service -> Database: INSERT audit_log
Database --> User Service: OK
User Service --> API Gateway: User Created Response
API Gateway --> Client: 201 Created + User JSON`,
  },
  {
    id: 'oauth-sequence',
    name: 'OAuth 2.0 Flow',
    description: 'OAuth authorization code flow',
    category: TEMPLATE_CATEGORIES.SOFTWARE_DESIGN,
    type: 'sequence',
    thumbnail: 'sequence',
    source: `participant User, Client App, Auth Server, Resource Server

User -> Client App: Click Login
Client App -> Auth Server: Authorization Request
Auth Server -> User: Login Page
User -> Auth Server: Credentials
Auth Server --> User: Authorization Code
User -> Client App: Redirect with Code
Client App -> Auth Server: Exchange Code for Token
Auth Server --> Client App: Access Token + Refresh Token
Client App -> Resource Server: API Request + Access Token
Resource Server --> Client App: Protected Resource
Client App --> User: Display Data`,
  },
  {
    id: 'order-state',
    name: 'Order State Machine',
    description: 'E-commerce order lifecycle states',
    category: TEMPLATE_CATEGORIES.SOFTWARE_DESIGN,
    type: 'state',
    thumbnail: 'state',
    source: `(initial) Draft
(final) Completed
(final) Cancelled
(final) Refunded

Draft -> Pending: SUBMIT_ORDER
Pending -> Confirmed: PAYMENT_SUCCESS
Pending -> Cancelled: PAYMENT_FAILED
Pending -> Cancelled: CANCEL_ORDER
Confirmed -> Processing: START_PROCESSING
Processing -> Shipped: SHIP_ORDER
Shipped -> Delivered: CONFIRM_DELIVERY
Delivered -> Completed: CLOSE_ORDER
Delivered -> Refunded: REQUEST_REFUND
Confirmed -> Cancelled: CANCEL_ORDER`,
  },
  {
    id: 'user-classes',
    name: 'User Management Classes',
    description: 'OOP class diagram for user system',
    category: TEMPLATE_CATEGORIES.SOFTWARE_DESIGN,
    type: 'class',
    thumbnail: 'class',
    source: `class User
  + id: UUID
  + email: string
  + username: string
  - passwordHash: string
  + role: Role
  + createdAt: Date
  + login(password): boolean
  + updateProfile(data): void
  # hashPassword(plain): string

class Role
  + id: UUID
  + name: string
  + permissions: Permission[]
  + hasPermission(action): boolean

class Permission
  + id: UUID
  + name: string
  + resource: string
  + action: string

class AuthService
  - userRepo: UserRepository
  - tokenService: TokenService
  + authenticate(email, password): Token
  + register(userData): User
  + refreshToken(token): Token
  - validatePassword(plain, hash): boolean`,
  },
  {
    id: 'shopping-usecase',
    name: 'E-Commerce Use Cases',
    description: 'Online shopping use case diagram',
    category: TEMPLATE_CATEGORIES.SOFTWARE_DESIGN,
    type: 'usecase',
    thumbnail: 'usecase',
    source: `actor Customer
actor Admin
actor Payment System

(Browse Products)
(Search Products)
(Add to Cart)
(Checkout)
(Process Payment)
(View Order History)
(Manage Products)
(Manage Orders)
(Generate Reports)

Customer -> Browse Products
Customer -> Search Products
Customer -> Add to Cart
Customer -> Checkout
Customer -> View Order History
Checkout -> Process Payment
Payment System -> Process Payment
Admin -> Manage Products
Admin -> Manage Orders
Admin -> Generate Reports`,
  },
  {
    id: 'c4-system',
    name: 'C4 System Context',
    description: 'C4 model system context diagram',
    category: TEMPLATE_CATEGORIES.SOFTWARE_DESIGN,
    type: 'c4',
    thumbnail: 'c4',
    source: `[person] Customer: A registered user of the system
[person] Admin: System administrator
[system] E-Commerce Platform: Main application for online shopping
[container] Web Application: React SPA
[container] Mobile App: iOS/Android app
[container] API Server: Node.js backend
[container] Database: PostgreSQL
[external] Payment Gateway: Stripe
[external] Email Service: SendGrid
[external] Analytics: Google Analytics

Customer -> Web Application: Browse and purchase
Customer -> Mobile App: Browse and purchase
Admin -> Web Application: Manage system
Web Application -> API Server: API calls
Mobile App -> API Server: API calls
API Server -> Database: Read/Write data
API Server -> Payment Gateway: Process payments
API Server -> Email Service: Send notifications
Web Application -> Analytics: Track events`,
  },

  // ============================================
  // BUSINESS
  // ============================================
  {
    id: 'customer-journey',
    name: 'Customer Onboarding Journey',
    description: 'New customer onboarding experience map',
    category: TEMPLATE_CATEGORIES.BUSINESS,
    type: 'journey',
    thumbnail: 'journey',
    source: `[actor] New Customer
[page] Landing Page
[action] Sign Up
[form] Registration Form
[email] Welcome Email
[page] Dashboard
[action] Complete Profile
[action] Watch Tutorial
[milestone] First Action
[notification] Tips Notification
[success] Fully Onboarded

New Customer -> Landing Page
Landing Page -browses-> Sign Up
Sign Up -> Registration Form
Registration Form -submits-> Welcome Email
Welcome Email -clicks link-> Dashboard
Dashboard -> Complete Profile
Dashboard -> Watch Tutorial
Complete Profile -> First Action
Watch Tutorial -> First Action
First Action -> Tips Notification
Tips Notification -> Fully Onboarded`,
  },
  {
    id: 'priority-quadrant',
    name: 'Priority Matrix',
    description: 'Eisenhower matrix for task prioritization',
    category: TEMPLATE_CATEGORIES.BUSINESS,
    type: 'quadrant',
    thumbnail: 'quadrant',
    source: `title: Priority Matrix
x-axis: Urgency ->
y-axis: Importance ->
quadrant-1: Do First
quadrant-2: Schedule
quadrant-3: Delegate
quadrant-4: Eliminate

Customer Bug Fix: [85, 90]
Security Patch: [90, 95]
Feature Request A: [25, 85]
Code Refactoring: [20, 70]
Documentation: [30, 60]
Meeting Prep: [75, 40]
Email Responses: [80, 30]
Social Media: [15, 15]`,
  },
  {
    id: 'market-pie',
    name: 'Market Share Analysis',
    description: 'Pie chart for market distribution',
    category: TEMPLATE_CATEGORIES.BUSINESS,
    type: 'pie',
    thumbnail: 'pie',
    source: `"Our Product": 28
"Competitor A": 25
"Competitor B": 20
"Competitor C": 15
"Others": 12`,
  },
  {
    id: 'requirements',
    name: 'System Requirements',
    description: 'Requirement specification with traceability',
    category: TEMPLATE_CATEGORIES.BUSINESS,
    type: 'requirement',
    thumbnail: 'requirement',
    source: `requirement User Authentication {
  text: System shall authenticate users via email and password
  risk: High
  priority: Critical
}

requirement Password Security {
  text: Passwords must be hashed using bcrypt with cost factor 12
  risk: High
  priority: Critical
}

requirement Session Management {
  text: Sessions expire after 24 hours of inactivity
  risk: Medium
  priority: High
}

requirement Multi-Factor Auth {
  text: System shall support TOTP-based 2FA
  risk: Medium
  priority: Medium
}

requirement Rate Limiting {
  text: Login attempts limited to 5 per minute per IP
  risk: Low
  priority: High
}

User Authentication -> Password Security: derives
User Authentication -> Session Management: traces
User Authentication -> Multi-Factor Auth: refines
Password Security -> Rate Limiting: traces`,
  },

  // ============================================
  // NETWORK
  // ============================================
  {
    id: 'corporate-network',
    name: 'Corporate Network',
    description: 'Enterprise network with DMZ and internal zones',
    category: TEMPLATE_CATEGORIES.NETWORK,
    type: 'network',
    thumbnail: 'network',
    source: `[cloud] Internet
[firewall] Edge Firewall (10.0.0.1)
[router] Core Router (10.0.0.2)
[firewall] Internal Firewall (10.0.1.1)
[switch] DMZ Switch (10.0.2.1)
[switch] Internal Switch (10.1.0.1)
[server] Web Server (10.0.2.10)
[server] Mail Server (10.0.2.11)
[server] App Server (10.1.0.10)
[server] Database Server (10.1.0.11)
[server] File Server (10.1.0.12)
[computer] Workstations (10.1.1.0/24)

Internet -- Edge Firewall
Edge Firewall -- Core Router
Core Router -- DMZ Switch
Core Router -- Internal Firewall
DMZ Switch -- Web Server: HTTPS
DMZ Switch -- Mail Server: SMTP
Internal Firewall -- Internal Switch
Internal Switch -- App Server
Internal Switch -- Database Server: TCP
Internal Switch -- File Server: SMB
Internal Switch -- Workstations`,
  },
  {
    id: 'cloud-vpc',
    name: 'Cloud VPC Architecture',
    description: 'AWS VPC with public and private subnets',
    category: TEMPLATE_CATEGORIES.NETWORK,
    type: 'network',
    thumbnail: 'network',
    source: `[cloud] AWS Region
[router] Internet Gateway
[router] NAT Gateway (10.0.1.100)
[switch] Public Subnet A (10.0.1.0/24)
[switch] Public Subnet B (10.0.2.0/24)
[switch] Private Subnet A (10.0.10.0/24)
[switch] Private Subnet B (10.0.20.0/24)
[server] Load Balancer
[server] Bastion Host (10.0.1.10)
[server] App Server 1 (10.0.10.10)
[server] App Server 2 (10.0.20.10)
[database] RDS Primary (10.0.10.100)
[database] RDS Replica (10.0.20.100)

AWS Region -- Internet Gateway
Internet Gateway -- Public Subnet A
Internet Gateway -- Public Subnet B
Public Subnet A -- Load Balancer
Public Subnet A -- Bastion Host
Public Subnet A -- NAT Gateway
NAT Gateway -- Private Subnet A
NAT Gateway -- Private Subnet B
Private Subnet A -- App Server 1
Private Subnet B -- App Server 2
Private Subnet A -- RDS Primary
Private Subnet B -- RDS Replica`,
  },

  // ============================================
  // UI DESIGN
  // ============================================
  {
    id: 'dashboard-wireframe',
    name: 'Admin Dashboard',
    description: 'Dashboard layout with stats and charts',
    category: TEMPLATE_CATEGORIES.UI_DESIGN,
    type: 'wireframe',
    thumbnail: 'wireframe',
    source: `{Admin Dashboard}
[[ Dashboard | Users | Products | Orders | Settings | (@Admin) ]]

>> Home > Dashboard

# Dashboard Overview

<Stats Row>
[progress: 75%] Active Users: 1,234
[progress: 60%] Orders Today: 156
[progress: 85%] Revenue: $12,456
[progress: 45%] Conversion: 4.5%
</Stats Row>

---

<Recent Orders>
# Recent Orders
|Order ID|Customer|Amount|Status|
|#1234|John Doe|$125.00|Completed|
|#1235|Jane Smith|$89.50|Processing|
|#1236|Bob Wilson|$234.00|Pending|
|#1237|Alice Brown|$67.25|Shipped|

[View All Orders] [Export CSV]
</Recent Orders>

---

<Quick Actions>
# Quick Actions
[v Select Action]
[+ Add Product] [+ Add User] [Generate Report]
</Quick Actions>`,
  },
  {
    id: 'login-wireframe',
    name: 'Login Page',
    description: 'Login form with social auth options',
    category: TEMPLATE_CATEGORIES.UI_DESIGN,
    type: 'wireframe',
    thumbnail: 'wireframe',
    source: `{Login}

<Login Form>
# Welcome Back

[text: Email address]
[password: Password]

[ ] Remember me
[Forgot Password?]

[Login]

---

Or continue with

[Google] [GitHub] [Microsoft]

---

Don't have an account? [Sign Up]
</Login Form>`,
  },
  {
    id: 'settings-wireframe',
    name: 'Settings Page',
    description: 'User settings with tabs and form elements',
    category: TEMPLATE_CATEGORIES.UI_DESIGN,
    type: 'wireframe',
    thumbnail: 'wireframe',
    source: `{Settings}
[[ Home | Profile | Settings ]]

>> Settings > Account

(( Profile | Security | Notifications | Billing ))

<Profile Settings>
# Profile Information

(@John Doe)

[text: Full Name]
[text: Email]
[text: Phone]
[textarea: Bio]

---

# Preferences

[v Select Timezone]
[v Select Language]

[x] Receive newsletter
[ ] Enable dark mode

---

[Cancel] [Save Changes]
</Profile Settings>`,
  },
  {
    id: 'product-wireframe',
    name: 'Product Listing',
    description: 'E-commerce product grid with filters',
    category: TEMPLATE_CATEGORIES.UI_DESIGN,
    type: 'wireframe',
    thumbnail: 'wireframe',
    source: `{Products}
[[ Home | Products | Cart | (@User) ]]

>> Products > Electronics

# Electronics

[search: Search products...]

<Filters>
[v Category]
[v Price Range]
[v Brand]
[x] In Stock Only
</Filters>

---

<Product Grid>
|Product 1|Product 2|Product 3|
|$99.99|$149.99|$79.99|
|[Add to Cart]|[Add to Cart]|[Add to Cart]|
|Product 4|Product 5|Product 6|
|$199.99|$59.99|$129.99|
|[Add to Cart]|[Add to Cart]|[Add to Cart]|
</Product Grid>

---

[< Previous] Page 1 of 10 [Next >]`,
  },

  // ============================================
  // ADDITIONAL TYPES
  // ============================================
  {
    id: 'git-feature-flow',
    name: 'Git Feature Branch Flow',
    description: 'Feature branch workflow with code review',
    category: TEMPLATE_CATEGORIES.SOFTWARE_DESIGN,
    type: 'git',
    thumbnail: 'git',
    source: `commit "Initial setup"
commit "Add project structure"
branch feature/user-auth
commit "Add user model"
commit "Add auth controller"
commit "Add login tests"
checkout main
commit "Update dependencies"
branch feature/dashboard
commit "Add dashboard layout"
commit "Add charts component"
checkout main
merge feature/user-auth
checkout feature/dashboard
commit "Fix responsive layout"
checkout main
merge feature/dashboard
commit "Release v1.0.0"`,
  },
  {
    id: 'deployment-k8s',
    name: 'Kubernetes Deployment',
    description: 'K8s cluster with pods and services',
    category: TEMPLATE_CATEGORIES.ARCHITECTURE,
    type: 'deployment',
    thumbnail: 'deployment',
    source: `[cloud] AWS EKS
  [cluster] Production Cluster
    [namespace] default
      [container] nginx-ingress
      [container] cert-manager
    [namespace] app
      [container] api-deployment (3 replicas)
      [container] worker-deployment (2 replicas)
      [container] scheduler
    [namespace] monitoring
      [container] prometheus
      [container] grafana
      [container] alertmanager
  [database] RDS PostgreSQL
  [storage] S3 Bucket
  [cache] ElastiCache Redis
[device] Developer Workstation
[device] CI/CD Pipeline`,
  },
  {
    id: 'checkout-activity',
    name: 'Checkout Activity Flow',
    description: 'E-commerce checkout process with decisions',
    category: TEMPLATE_CATEGORIES.FLOWCHARTS,
    type: 'activity',
    thumbnail: 'activity',
    source: `[start]
:View Cart;
:Enter Shipping;
<Address Valid?>
:Enter Payment;
<Payment Method?>
:Process Card;
:Process PayPal;
<Payment Success?>
:Create Order;
:Send Confirmation;
[end]
:Show Error;

start -> View Cart
View Cart -> Enter Shipping
Enter Shipping -> Address Valid?
Address Valid? -> Enter Payment: Yes
Address Valid? -> Enter Shipping: No
Enter Payment -> Payment Method?
Payment Method? -> Process Card: Card
Payment Method? -> Process PayPal: PayPal
Process Card -> Payment Success?
Process PayPal -> Payment Success?
Payment Success? -> Create Order: Yes
Payment Success? -> Show Error: No
Show Error -> Enter Payment
Create Order -> Send Confirmation
Send Confirmation -> end`,
  },
  {
    id: 'component-architecture',
    name: 'Service Components',
    description: 'Microservice component relationships',
    category: TEMPLATE_CATEGORIES.ARCHITECTURE,
    type: 'component',
    thumbnail: 'component',
    source: `[component] Web Frontend
[component] Mobile App
[service] API Gateway
[service] Auth Service
[service] User Service
[service] Product Service
[service] Order Service
[service] Payment Service
[database] User DB
[database] Product DB
[database] Order DB
[cache] Redis
[queue] Message Queue

Web Frontend --> API Gateway
Mobile App --> API Gateway
API Gateway --> Auth Service
API Gateway --> User Service
API Gateway --> Product Service
API Gateway --> Order Service
Auth Service -- Redis
User Service --> User DB
Product Service --> Product DB
Order Service --> Order DB
Order Service --> Message Queue
Payment Service --> Message Queue`,
  },
];

/**
 * Get all preset templates
 * @returns {Array} All preset templates
 */
export function getPresetTemplates() {
  return PRESET_TEMPLATES;
}

/**
 * Get templates by category
 * @param {string} category - Category name
 * @returns {Array} Templates in the category
 */
export function getTemplatesByCategory(category) {
  return PRESET_TEMPLATES.filter(t => t.category === category);
}

/**
 * Get template by ID
 * @param {string} id - Template ID
 * @returns {Object|null} Template or null
 */
export function getTemplateById(id) {
  return PRESET_TEMPLATES.find(t => t.id === id) || getCustomTemplates().find(t => t.id === id) || null;
}

/**
 * Get all custom templates from localStorage
 * @returns {Array} Custom templates
 */
export function getCustomTemplates() {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.CUSTOM_TEMPLATES);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {
    console.error('Failed to load custom templates:', e);
  }
  return [];
}

/**
 * Save a custom template
 * @param {Object} template - Template object
 * @returns {Object} The saved template with generated ID
 */
export function saveCustomTemplate(template) {
  try {
    const templates = getCustomTemplates();
    const newTemplate = {
      ...template,
      id: `custom-${Date.now()}`,
      isCustom: true,
      createdAt: new Date().toISOString(),
    };
    templates.unshift(newTemplate);
    localStorage.setItem(STORAGE_KEYS.CUSTOM_TEMPLATES, JSON.stringify(templates));
    return newTemplate;
  } catch (e) {
    console.error('Failed to save custom template:', e);
    throw e;
  }
}

/**
 * Update a custom template
 * @param {string} id - Template ID
 * @param {Object} updates - Fields to update
 * @returns {Object|null} Updated template or null
 */
export function updateCustomTemplate(id, updates) {
  try {
    const templates = getCustomTemplates();
    const index = templates.findIndex(t => t.id === id);
    if (index === -1) return null;

    templates[index] = {
      ...templates[index],
      ...updates,
      updatedAt: new Date().toISOString(),
    };
    localStorage.setItem(STORAGE_KEYS.CUSTOM_TEMPLATES, JSON.stringify(templates));
    return templates[index];
  } catch (e) {
    console.error('Failed to update custom template:', e);
    return null;
  }
}

/**
 * Delete a custom template
 * @param {string} id - Template ID
 * @returns {boolean} Success
 */
export function deleteCustomTemplate(id) {
  try {
    const templates = getCustomTemplates();
    const filtered = templates.filter(t => t.id !== id);
    localStorage.setItem(STORAGE_KEYS.CUSTOM_TEMPLATES, JSON.stringify(filtered));
    return true;
  } catch (e) {
    console.error('Failed to delete custom template:', e);
    return false;
  }
}

/**
 * Get all templates (preset + custom)
 * @returns {Array} All templates
 */
export function getAllTemplates() {
  return [...getCustomTemplates(), ...PRESET_TEMPLATES];
}

/**
 * Search templates by name or description
 * @param {string} query - Search query
 * @returns {Array} Matching templates
 */
export function searchTemplates(query) {
  const lowerQuery = query.toLowerCase();
  return getAllTemplates().filter(t =>
    t.name.toLowerCase().includes(lowerQuery) ||
    t.description.toLowerCase().includes(lowerQuery) ||
    t.category.toLowerCase().includes(lowerQuery) ||
    t.type.toLowerCase().includes(lowerQuery)
  );
}

/**
 * Get unique categories from all templates
 * @returns {Array} Category names
 */
export function getCategories() {
  const allTemplates = getAllTemplates();
  const categories = new Set(allTemplates.map(t => t.category));
  return Array.from(categories);
}

/**
 * Get templates grouped by category
 * @returns {Object} Templates grouped by category
 */
export function getTemplatesGroupedByCategory() {
  const templates = getAllTemplates();
  const grouped = {};

  templates.forEach(template => {
    if (!grouped[template.category]) {
      grouped[template.category] = [];
    }
    grouped[template.category].push(template);
  });

  return grouped;
}
