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
  APP_BUNDLES: 'App Bundles',
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
    description: 'C4-style microservices with boundaries and layers',
    category: TEMPLATE_CATEGORIES.ARCHITECTURE,
    type: 'architecture',
    thumbnail: 'architecture',
    source: `title: Microservices Platform
subtitle: Container Diagram

[person] Customer: End user
[person] Developer: API consumer
[external] Payment Provider: Stripe

boundary "Client Applications" {
[webapp] Web App: React SPA
[mobileapp] Mobile App: React Native
}

boundary "API Layer" {
[gateway] API Gateway: Kong
[auth] Auth Service: OAuth2/JWT
}

boundary "Core Services" {
[service] User Service: User management
[service] Product Service: Catalog
[service] Order Service: Checkout
[service] Notification Service: Alerts
}

boundary "Data Stores" {
[database] PostgreSQL: Primary data
[database] MongoDB: Products
[cache] Redis: Sessions
[queue] RabbitMQ: Events
}

Customer -> Web App: Uses
Customer -> Mobile App: Uses
Developer -> API Gateway: API calls
Web App -> API Gateway
Mobile App -> API Gateway
API Gateway -> Auth Service: Validates
API Gateway -> User Service
API Gateway -> Product Service
API Gateway -> Order Service
Order Service -> Payment Provider: Payments
User Service -> PostgreSQL
Product Service -> MongoDB
Order Service -> PostgreSQL
Auth Service -> Redis: Sessions
Order Service -> RabbitMQ: Events`,
  },
  {
    id: 'serverless',
    name: 'Serverless Architecture',
    description: 'AWS serverless with Lambda, DynamoDB & C4 boundaries',
    category: TEMPLATE_CATEGORIES.ARCHITECTURE,
    type: 'architecture',
    thumbnail: 'architecture',
    source: `title: Serverless Platform
subtitle: AWS Deployment Diagram

[person] User: App user
[external] Stripe: Payments

boundary "CDN & Edge" {
[cdn] CloudFront: CDN
[storage] S3: Static assets
}

boundary "API & Compute" {
[gateway] API Gateway: REST API
[lambda] Auth Lambda: Authentication
[lambda] API Lambda: Business logic
[lambda] Worker Lambda: Background jobs
}

boundary "Messaging" {
[queue] SQS: Job queue
[pubsub] SNS: Notifications
}

boundary "Data" {
[database] DynamoDB: NoSQL data
[cache] ElastiCache: Redis cache
}

User -> CloudFront: Web access
User -> API Gateway: API calls
CloudFront -> S3: Static content
API Gateway -> Auth Lambda: Auth
API Gateway -> API Lambda: Requests
Auth Lambda -> DynamoDB: Users
API Lambda -> DynamoDB: Data
API Lambda -> ElastiCache: Cache
API Lambda -> SQS: Queue jobs
SQS -> Worker Lambda: Process
Worker Lambda -> SNS: Notify
API Lambda -> Stripe: Payments`,
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
    description: 'C4 model with boundaries and groupings',
    category: TEMPLATE_CATEGORIES.SOFTWARE_DESIGN,
    type: 'c4',
    thumbnail: 'c4',
    source: `title: E-Commerce Platform Architecture
subtitle: C4 Container Diagram with Boundaries

[person] Customer: Online shopper
[person] Admin: Platform administrator

boundary "Web Layer" {
  [container] Web App: React SPA
  [container] Mobile App: React Native
  [container] Admin Portal: Vue.js Dashboard
}

boundary "API Layer" {
  [container] API Gateway: Kong/NGINX
  [container] Auth Service: JWT/OAuth2
  [container] Order Service: Node.js
  [container] Product Service: Go microservice
}

boundary "Data Layer" {
  [database] PostgreSQL: Orders & Users
  [database] MongoDB: Product Catalog
  [database] Redis: Session Cache
}

boundary "External Services" {
  [external] Stripe: Payment Processing
  [external] SendGrid: Email Notifications
  [external] AWS S3: Media Storage
}

Customer -> Web App: Browse & Purchase
Customer -> Mobile App: Shop on-the-go
Admin -> Admin Portal: Manage Platform
Web App -> API Gateway: HTTPS/REST
Mobile App -> API Gateway: HTTPS/REST
Admin Portal -> API Gateway: Admin API
API Gateway -> Auth Service: Validate Token
API Gateway -> Order Service: Order Operations
API Gateway -> Product Service: Product CRUD
Order Service -> PostgreSQL: Store Orders
Product Service -> MongoDB: Product Data
Auth Service -> Redis: Cache Sessions
Order Service -> Stripe: Process Payment
Order Service -> SendGrid: Order Confirmation
Product Service -> AWS S3: Product Images`,
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
    id: 'landing-page-wireframe',
    name: 'Landing Page',
    description: 'Complete landing page with hero, features, pricing, testimonials',
    category: TEMPLATE_CATEGORIES.UI_DESIGN,
    type: 'wireframe',
    thumbnail: 'wireframe',
    source: `{SaaS Landing Page}
[[ Logo | Features | Pricing | About | [Sign Up] ]]

[hero: Build Amazing Products Faster | The all-in-one platform for modern teams to collaborate, build, and ship products. | Start Free Trial]

---

## Why Teams Love Us

[feature: 🚀 | Lightning Fast | Deploy in seconds with our optimized infrastructure and global CDN.]

[feature: 🔒 | Enterprise Security | SOC 2 compliant with end-to-end encryption and SSO support.]

[feature: 📊 | Real-time Analytics | Get instant insights with beautiful dashboards and reports.]

[feature: 🤝 | Team Collaboration | Work together seamlessly with built-in comments and sharing.]

---

## Simple, Transparent Pricing

[pricing: Starter | $9 | 5 projects, 10GB storage, Email support | Get Started]

[pricing: Pro | $29 | Unlimited projects, 100GB storage, Priority support, API access | Start Free Trial]

[pricing: Enterprise | $99 | Everything in Pro, SSO, Dedicated support, Custom integrations | Contact Sales]

---

[testimonial: "This platform transformed how our team works. We shipped 3x faster!" | Sarah Chen | VP Engineering, TechCorp]

[testimonial: "The best investment we made this year. Incredible ROI." | Marcus Johnson | CEO, StartupXYZ]

---

[cta: Ready to get started? | Join 10,000+ teams already using our platform. | Start Free Trial]

---

[footer: Product | Features | Pricing | Docs :: Company | About | Blog | Careers :: Support | Help Center | Contact | Status :: © 2024 Company. All rights reserved.]

[social: twitter | github | linkedin | youtube]`,
  },
  {
    id: 'dashboard-wireframe',
    name: 'Admin Dashboard',
    description: 'Modern dashboard with stats, charts, and data tables',
    category: TEMPLATE_CATEGORIES.UI_DESIGN,
    type: 'wireframe',
    thumbnail: 'wireframe',
    source: `{Admin Dashboard}
[[ 🏠 Dashboard | 👥 Users | 📦 Products | 📋 Orders | ⚙️ Settings | (@Admin) ]]

>> Home > Dashboard Overview

---

## Key Metrics

[stat: 12,456 | Total Users | +12.5%]

[stat: $84,230 | Revenue | +8.2%]

[stat: 1,847 | Orders | +15.3%]

[stat: 94.2% | Satisfaction | +2.1%]

---

## Quick Actions

[widget: New Orders | 24 | 🛒]

[widget: Pending Reviews | 8 | ⏳]

[widget: Support Tickets | 12 | 🎫]

[widget: Low Stock Items | 5 | ⚠️]

---

## Recent Activity

[activity: John Smith created a new order #1234 | 5 minutes ago]

[activity: Sarah Johnson updated product inventory | 12 minutes ago]

[activity: Mike Brown resolved support ticket #567 | 1 hour ago]

[activity: System backup completed successfully | 2 hours ago]

---

## Orders Overview

[data-table: 5 rows]

---

[toast: 3 new orders received | success]

[fab: +]`,
  },
  {
    id: 'auth-wireframe',
    name: 'Authentication Pages',
    description: 'Login and signup forms with modern styling',
    category: TEMPLATE_CATEGORIES.UI_DESIGN,
    type: 'wireframe',
    thumbnail: 'wireframe',
    source: `{Authentication}

## Login Form

[login-form: Welcome Back]

---

## Sign Up Form

[signup-form: Create Your Account]

---

## Social Login Options

[social: google | github | microsoft | apple]

---

## Password Reset

<Card>
## Forgot Password?

Enter your email and we'll send you a reset link.

[text: Email address]

[Send Reset Link]

>> Remember your password? Sign in
</Card>

---

## Two-Factor Authentication

<Card>
## Verify Your Identity

Enter the 6-digit code from your authenticator app.

[text: ● ● ● ● ● ●]

[Verify Code]

[ ] Trust this device for 30 days

>> Didn't receive a code? Resend
</Card>`,
  },
  {
    id: 'mobile-app-wireframe',
    name: 'Mobile App Screens',
    description: 'Mobile UI with bottom nav, app bar, and FAB',
    category: TEMPLATE_CATEGORIES.UI_DESIGN,
    type: 'wireframe',
    thumbnail: 'wireframe',
    source: `{Mobile App}

## Home Screen

[app-bar: Home | 🔔 | 👤]

[search: Search anything...]

---

## Stats Overview

[stat: 2,847 | Steps Today | +18%]

[stat: 6.2 | Hours Sleep | -5%]

[stat: 1,450 | Calories | +12%]

---

## Activity Feed

[activity: Morning workout completed | 8:30 AM]

[activity: Reached daily step goal | 2:15 PM]

[activity: Sleep score: Excellent | Last night]

---

[fab: +]

[bottom-nav: 🏠 Home | 📊 Stats | ➕ | 🏆 Goals | 👤 Profile]

---

## Profile Screen

[app-bar: Profile | ⚙️]

[profile: Alex Johnson | @alexj | Health enthusiast and fitness lover. Building better habits one day at a time.]

---

## Empty State

[empty: No workouts yet | Start tracking your fitness journey by adding your first workout. | Add Workout]

---

## Error State

[error: Connection Lost | Unable to sync your data. Please check your internet connection. | Retry]

---

## Loading State

[loading: Syncing your data...]`,
  },
  {
    id: 'settings-wireframe',
    name: 'Settings Page',
    description: 'Comprehensive settings with accordions and toggles',
    category: TEMPLATE_CATEGORIES.UI_DESIGN,
    type: 'wireframe',
    thumbnail: 'wireframe',
    source: `{Settings}
[[ Home | Profile | Settings ]]

>> Settings > Account

(( General | Security | Notifications | Billing | Integrations ))

---

## General Settings

[accordion: Profile Information | Privacy Settings | Language & Region]

---

## Profile

(@John Doe)

[text: Full Name]
[text: Email]
[text: Phone]
[textarea: Bio]

[upload: Upload profile picture]

---

## Preferences

[toggle: on] Dark Mode
[toggle: off] Compact View
[toggle: on] Show Online Status
[toggle: off] Auto-play Videos

---

[v Select Timezone]
[v Select Language]

---

## Notifications

[x] Email notifications
[x] Push notifications
[ ] SMS notifications
[x] Weekly digest

---

## Danger Zone

[!error] Delete Account
This action cannot be undone. All your data will be permanently deleted.
[Delete Account]

---

[Cancel] [Save Changes]

[toast: Settings saved successfully | success]`,
  },
  {
    id: 'product-wireframe',
    name: 'E-Commerce Product Page',
    description: 'Product listing with reviews and comments',
    category: TEMPLATE_CATEGORIES.UI_DESIGN,
    type: 'wireframe',
    thumbnail: 'wireframe',
    source: `{Product Details}
[[ 🏠 Home | 📦 Products | 🛒 Cart (3) | ❤️ Wishlist | (@User) ]]

>> Electronics > Smartphones > iPhone 15 Pro

---

[image: Product Image]

## iPhone 15 Pro

★★★★☆ (4.8) · 1,234 reviews

**$999.00** ~~$1,199.00~~ [!success] Save $200

[v Select Color: Space Black]
[v Select Storage: 256GB]
[v Quantity: 1]

[Add to Cart] [Buy Now]

---

## Key Features

[feature: 🎬 | ProMotion Display | 120Hz adaptive refresh rate]

[feature: 📸 | 48MP Camera | Professional-grade photography]

[feature: ⚡ | A17 Pro Chip | Industry-leading performance]

[feature: 🔋 | All-Day Battery | Up to 29 hours video playback]

---

## Customer Reviews

[comment: techfan2024 | Absolutely love this phone! The camera quality is insane. | 2 days ago]

[comment: sarah_m | Great upgrade from my old phone. The display is beautiful. | 1 week ago]

[comment: johnsmith | Fast shipping, arrived earlier than expected. | 2 weeks ago]

---

## Technical Specs

[accordion: Display | Camera | Performance | Battery | Connectivity]

---

[code: json]

---

## You Might Also Like

<Card>
AirPods Pro
$249.00
[Add to Cart]
</Card>

<Card>
MagSafe Charger
$39.00
[Add to Cart]
</Card>

---

[footer: Shop | Mac | iPad | iPhone | Watch :: Support | Contact | Returns :: © 2024 Store]`,
  },
  {
    id: 'blog-wireframe',
    name: 'Blog Article',
    description: 'Blog post with comments, social sharing, and related posts',
    category: TEMPLATE_CATEGORIES.UI_DESIGN,
    type: 'wireframe',
    thumbnail: 'wireframe',
    source: `{Blog Article}
[[ 📝 Blog | 🏷️ Categories | 🔍 Search | [Subscribe] ]]

>> Tech > Web Development > Building Scalable React Apps

---

# Building Scalable React Applications in 2024

[avatar-group: 3] By **John Doe** · Dec 15, 2024 · 8 min read

[chip: React] [chip: Architecture] [chip: Performance]

---

[image: Featured Image]

---

## Introduction

Building scalable React applications requires careful planning and adherence to best practices. In this article, we'll explore the key patterns and techniques...

---

## Code Example

[code: javascript]

---

## Key Takeaways

- Use proper state management
- Implement code splitting
- Optimize bundle size
- Write testable components

---

## Share This Article

[social: twitter | linkedin | facebook]

---

## Comments (24)

[comment: dev_sarah | Great article! The code splitting section was particularly helpful. | 2 hours ago]

[comment: react_pro | Would love to see a follow-up on testing strategies. | 5 hours ago]

[comment: newbie_dev | This helped me understand so much. Thank you! | 1 day ago]

---

## Related Articles

[feature: 📘 | State Management Patterns | Learn about Redux, MobX, and Zustand]

[feature: 🚀 | Performance Optimization | Tips for faster React apps]

[feature: 🧪 | Testing Best Practices | Write reliable tests]

---

[cta: Want more articles? | Subscribe to our newsletter for weekly updates. | Subscribe]

---

[footer: Blog | About | Contact | Privacy :: © 2024 TechBlog]`,
  },
  {
    id: 'saas-dashboard-wireframe',
    name: 'SaaS Application',
    description: 'Full SaaS app with sidebar, widgets, and notifications',
    category: TEMPLATE_CATEGORIES.UI_DESIGN,
    type: 'wireframe',
    thumbnail: 'wireframe',
    source: `{SaaS Dashboard}
[[ 🎯 ProjectHub | Projects | Team | Analytics | Settings | [Upgrade] | (@PM) ]]

>> Projects > Website Redesign > Tasks

---

## Project Stats

[stat: 67% | Completed | +5% this week]

[stat: 12 | In Progress | 3 due today]

[stat: 8 | Team Members | 2 online]

[stat: 5 | Days Left | On track]

---

## Quick Actions

[widget: Add Task | + | 📝]

[widget: Schedule Meeting | + | 📅]

[widget: Upload Files | + | 📤]

[widget: Invite Member | + | 👥]

---

## Task Board

[data-table: 5 rows]

---

## Recent Files

[upload: Drop files here to upload]

---

## Team Activity

[activity: Emma updated the design mockups | 10 min ago]

[activity: James completed "API Integration" | 1 hour ago]

[activity: Sarah commented on "Homepage Design" | 2 hours ago]

---

## Upcoming Deadlines

[toast: Sprint review meeting in 2 hours | warning]

[toast: Design approval deadline tomorrow | info]

---

## Need Help?

[accordion: Getting Started Guide | Keyboard Shortcuts | Contact Support]

---

[fab: +]

[toast: Changes saved automatically | success]`,
  },

  // ============================================
  // APP DESIGN BUNDLES (Wireframes + User Journey)
  // ============================================

  // E-commerce App Bundle - Home Page
  {
    id: 'ecommerce-home',
    name: '🛒 E-commerce: Home Page',
    description: 'E-commerce app home page with featured products and categories',
    category: TEMPLATE_CATEGORIES.APP_BUNDLES,
    type: 'wireframe',
    thumbnail: 'wireframe',
    bundle: 'E-commerce App',
    bundleOrder: 1,
    source: `{ShopFlow - Home}
[[ 🛒 ShopFlow | Categories | Deals | 🔍 Search... | ❤️ | 🛒 (3) | [Sign In] ]]

>> Home

---

[hero: Summer Sale - Up to 50% Off | Discover amazing deals on thousands of products. Limited time offer! | Shop Now]

---

## Featured Categories

<card>
[feature: 👗 | Fashion | Latest trends in clothing]

[feature: 📱 | Electronics | Gadgets & devices]

[feature: 🏠 | Home & Living | Furniture & decor]

[feature: 🎮 | Gaming | Consoles & accessories]
</>

---

## Trending Products

<card>
|Product|Price|Rating|
|Wireless Earbuds|$79.99|⭐⭐⭐⭐⭐|
|Smart Watch Pro|$299.99|⭐⭐⭐⭐|
|Laptop Stand|$49.99|⭐⭐⭐⭐⭐|
|USB-C Hub|$39.99|⭐⭐⭐⭐|
</>

---

## Special Offers

[stat: 2,847 | Products on Sale | 🔥]

[stat: 50% | Max Discount | 💰]

[stat: 24h | Flash Deal Ends | ⏰]

---

[footer: Shop | Categories | Deals :: Account | Orders | Wishlist :: Help | Contact | Returns :: © 2024 ShopFlow]`,
  },

  // E-commerce App Bundle - Product Page
  {
    id: 'ecommerce-product',
    name: '🛒 E-commerce: Product Page',
    description: 'Product detail page with images, specs, and reviews',
    category: TEMPLATE_CATEGORIES.APP_BUNDLES,
    type: 'wireframe',
    thumbnail: 'wireframe',
    bundle: 'E-commerce App',
    bundleOrder: 2,
    source: `{ShopFlow - Product}
[[ 🛒 ShopFlow | Categories | Deals | 🔍 Search... | ❤️ | 🛒 (3) | [Sign In] ]]

>> Home > Electronics > Headphones > Wireless Earbuds Pro

---

<card>
## Product Images

[img: Main product image]

[img 1:1] [img 1:1] [img 1:1] [img 1:1]
</>

<Sidebar>
## Wireless Earbuds Pro

⭐⭐⭐⭐⭐ (2,847 reviews)

### $79.99 ~~$129.99~~

{badge:sale} 38% OFF

---

**Color**
(( Black | White | Navy ))

**Quantity**
[v 1      ]

---

[Add to Cart]
[Buy Now]

---

- ✓ Free shipping over $50
- ✓ 30-day return policy
- ✓ 2-year warranty
</>

---

## Product Details

<card>
(( Description | Specifications | Reviews ))

Premium wireless earbuds with active noise cancellation,
30-hour battery life, and crystal-clear audio quality.

- Active Noise Cancellation
- 30-hour total battery life
- IPX4 water resistance
- Touch controls
- Bluetooth 5.3
</>

---

## Customer Reviews

<card>
[testimonial: Amazing sound quality! | Sarah M. | ⭐⭐⭐⭐⭐]

[testimonial: Best earbuds I've owned | John D. | ⭐⭐⭐⭐⭐]

[testimonial: Great value for money | Mike R. | ⭐⭐⭐⭐]
</>

---

## You May Also Like

|Product|Price|
|Charging Case|$29.99|
|Ear Tips Pack|$12.99|
|Carry Pouch|$19.99|`,
  },

  // E-commerce App Bundle - Cart Page
  {
    id: 'ecommerce-cart',
    name: '🛒 E-commerce: Cart Page',
    description: 'Shopping cart with items, quantities, and order summary',
    category: TEMPLATE_CATEGORIES.APP_BUNDLES,
    type: 'wireframe',
    thumbnail: 'wireframe',
    bundle: 'E-commerce App',
    bundleOrder: 3,
    source: `{ShopFlow - Cart}
[[ 🛒 ShopFlow | Categories | Deals | 🔍 Search... | ❤️ | 🛒 (3) | [Sign In] ]]

>> Home > Shopping Cart

---

## Shopping Cart (3 items)

<card>
### Cart Items

---

|Product|Price|Qty|Total|
|Wireless Earbuds Pro|$79.99|[v 1]|$79.99|
|Smart Watch Pro|$299.99|[v 1]|$299.99|
|USB-C Hub|$39.99|[v 2]|$79.98|

---

[🗑️ Remove Selected]  [Continue Shopping]
</>

<Sidebar>
### Order Summary

---

Subtotal: **$459.96**

Shipping: **Free**

Tax: **$36.80**

---

[___Promo Code___] [Apply]

---

### Total: **$496.76**

---

[Proceed to Checkout]

---

[✓] I agree to terms and conditions

---

**We Accept**
💳 Visa | Mastercard | PayPal | Apple Pay
</>

---

## Recommended For You

<card>
[feature: 🎧 | Headphone Stand | $24.99]

[feature: 🔌 | Fast Charger | $19.99]

[feature: 📱 | Phone Case | $14.99]
</>

---

[toast: Item added to cart | success]`,
  },

  // E-commerce App Bundle - Checkout Page
  {
    id: 'ecommerce-checkout',
    name: '🛒 E-commerce: Checkout Page',
    description: 'Checkout flow with shipping, payment, and confirmation',
    category: TEMPLATE_CATEGORIES.APP_BUNDLES,
    type: 'wireframe',
    thumbnail: 'wireframe',
    bundle: 'E-commerce App',
    bundleOrder: 4,
    source: `{ShopFlow - Checkout}
[[ 🛒 ShopFlow | 🔒 Secure Checkout ]]

---

[step: 2/4]

## Checkout

---

<card>
### 1. Shipping Address ✓

John Doe
123 Main Street, Apt 4B
New York, NY 10001
📞 (555) 123-4567

[Edit]
</>

<card>
### 2. Payment Method

(( 💳 Credit Card | PayPal | Apple Pay ))

---

**Card Number**
[____1234 5678 9012 3456____]

**Expiry**          **CVV**
[__12/25__]         [__***__]

**Name on Card**
[____John Doe____]

---

[x] Save card for future purchases
</>

<card>
### 3. Review Order

|Item|Qty|Price|
|Wireless Earbuds Pro|1|$79.99|
|Smart Watch Pro|1|$299.99|
|USB-C Hub|2|$79.98|

---

Subtotal: $459.96
Shipping: Free
Tax: $36.80

---

**Total: $496.76**
</>

---

<Sidebar>
### Order Summary

3 items

---

**Subtotal:** $459.96
**Shipping:** Free
**Tax:** $36.80

---

### Total
## $496.76

---

[Place Order]

---

🔒 Your payment info is secure

---

- ✓ 30-day returns
- ✓ Free shipping
- ✓ Secure payment
</>

---

[toast: Shipping address confirmed | success]`,
  },

  // E-commerce App Bundle - Order Confirmation
  {
    id: 'ecommerce-confirmation',
    name: '🛒 E-commerce: Order Confirmation',
    description: 'Order success page with details and tracking',
    category: TEMPLATE_CATEGORIES.APP_BUNDLES,
    type: 'wireframe',
    thumbnail: 'wireframe',
    bundle: 'E-commerce App',
    bundleOrder: 5,
    source: `{ShopFlow - Order Confirmed}
[[ 🛒 ShopFlow | Categories | Deals | 🔍 Search... | ❤️ | 🛒 | (@John) ]]

---

<card>
## ✅ Order Confirmed!

Thank you for your purchase, John!

---

**Order Number:** #SHP-2024-78542

**Estimated Delivery:** Jan 5-7, 2025

---

[Track Order]  [View Order Details]
</>

---

## Order Summary

<card>
|Item|Qty|Price|
|Wireless Earbuds Pro|1|$79.99|
|Smart Watch Pro|1|$299.99|
|USB-C Hub|2|$79.98|

---

**Total Paid: $496.76**
</>

---

## Shipping To

<card>
**John Doe**
123 Main Street, Apt 4B
New York, NY 10001

📦 Standard Shipping (3-5 business days)
</>

---

## What's Next?

<card>
[feature: 📧 | Confirmation Email | Check your inbox for order details]

[feature: 📦 | Shipping Updates | We'll notify you when your order ships]

[feature: 📱 | Track Anytime | Use your order number to track delivery]
</>

---

[Continue Shopping]

---

[toast: Order #SHP-2024-78542 placed successfully! | success]

---

[footer: Shop | My Orders | Help :: © 2024 ShopFlow]`,
  },

  // E-commerce App Bundle - User Journey
  {
    id: 'ecommerce-user-journey',
    name: '🛒 E-commerce: User Journey',
    description: 'Complete shopping flow from browsing to purchase',
    category: TEMPLATE_CATEGORIES.APP_BUNDLES,
    type: 'journey',
    thumbnail: 'journey',
    bundle: 'E-commerce App',
    bundleOrder: 6,
    source: `[user] Customer

[screen:ecommerce-home] Home Page
[screen:ecommerce-product] Product Page
[screen:ecommerce-cart] Cart
[screen:ecommerce-checkout] Checkout
[success:ecommerce-confirmation] Order Confirmed

Customer -> Home Page
Home Page -browse-> Product Page
Product Page -add to cart-> Cart
Product Page -back-> Home Page
Cart -checkout-> Checkout
Cart -edit-> Cart
Cart -continue-> Home Page
Checkout -place order-> Order Confirmed
Checkout -back-> Cart`,
  },

  // SaaS App Bundle - Dashboard
  {
    id: 'saas-dashboard',
    name: '📊 SaaS App: Dashboard',
    description: 'Main dashboard with metrics and activity',
    category: TEMPLATE_CATEGORIES.APP_BUNDLES,
    type: 'wireframe',
    thumbnail: 'wireframe',
    bundle: 'SaaS App',
    bundleOrder: 1,
    source: `{TaskFlow - Dashboard}
[[ 📊 TaskFlow | Dashboard | Projects | Team | Reports | [Upgrade] | (@PM) ]]

>> Dashboard

---

[hero: Welcome back, Sarah! | You have 5 tasks due today and 2 meetings scheduled. | View Tasks]

---

## Key Metrics

[stat: 24 | Active Projects | +3]

[stat: 156 | Tasks Completed | +12%]

[stat: 8 | Team Members | +1]

[stat: 94% | On-time Rate | +2%]

---

## Recent Projects

<card>
|Project|Status|Progress|Due Date|
|Website Redesign|{badge:In Progress}|[====----] 60%|Jan 15|
|Mobile App v2|{badge:On Track}|[=======--] 80%|Jan 10|
|API Integration|{badge:At Risk}|[===------] 35%|Jan 8|
|Documentation|{badge:Complete}|[=========] 100%|Done|
</>

---

## Recent Activity

[activity: Sarah completed "Design Review" | 10 min ago]

[activity: Mike commented on "API Endpoints" | 1 hour ago]

[activity: Team meeting scheduled for tomorrow | 2 hours ago]

[activity: New task assigned: "Update landing page" | 3 hours ago]

---

## Upcoming Deadlines

[toast: API Integration due in 2 days | warning]

[toast: Team standup in 30 minutes | info]

---

[fab: +]`,
  },

  // SaaS App Bundle - Projects List
  {
    id: 'saas-projects',
    name: '📊 SaaS App: Projects',
    description: 'Projects list with filters and actions',
    category: TEMPLATE_CATEGORIES.APP_BUNDLES,
    type: 'wireframe',
    thumbnail: 'wireframe',
    bundle: 'SaaS App',
    bundleOrder: 2,
    source: `{TaskFlow - Projects}
[[ 📊 TaskFlow | Dashboard | Projects | Team | Reports | [Upgrade] | (@PM) ]]

>> Projects

---

## All Projects

<card>
[🔍___Search projects...___] [v All Status] [v All Teams] [+ New Project]
</>

---

<card>
### Website Redesign
**Team Alpha** • 6 members

[====------] 60% Complete

12 tasks remaining • Due Jan 15

{badge:In Progress} {badge:High Priority}

[View] [Edit]
</>

<card>
### Mobile App v2
**Team Beta** • 4 members

[========--] 80% Complete

5 tasks remaining • Due Jan 10

{badge:On Track} {badge:Medium Priority}

[View] [Edit]
</>

<card>
### API Integration
**Team Alpha** • 3 members

[===-------] 35% Complete

18 tasks remaining • Due Jan 8

{badge:At Risk} {badge:High Priority}

[View] [Edit]
</>

---

[< 1 2 3 ... 5 >]

---

[fab: +]`,
  },

  // SaaS App Bundle - Settings
  {
    id: 'saas-settings',
    name: '📊 SaaS App: Settings',
    description: 'Account and app settings page',
    category: TEMPLATE_CATEGORIES.APP_BUNDLES,
    type: 'wireframe',
    thumbnail: 'wireframe',
    bundle: 'SaaS App',
    bundleOrder: 3,
    source: `{TaskFlow - Settings}
[[ 📊 TaskFlow | Dashboard | Projects | Team | Reports | [Upgrade] | (@PM) ]]

>> Settings

---

<Sidebar>
## Settings

- 👤 Profile
- 🔔 Notifications
- 🔒 Security
- 💳 Billing
- 🎨 Appearance
- 🔗 Integrations
- 👥 Team
</>

<card>
## Profile Settings

---

[img 1:1]

[Upload Photo]

---

**Full Name**
[____Sarah Johnson____]

**Email**
[____sarah@company.com____]

**Role**
[v Project Manager    ]

**Timezone**
[v UTC-5 (Eastern)    ]

---

**Bio**
[________________________________________]
[________________________________________]

---

[Save Changes]  [Cancel]
</>

---

<card>
## Notification Preferences

---

[x] Email notifications for task assignments
[x] Push notifications for mentions
[ ] Weekly summary email
[x] Desktop notifications
[ ] SMS alerts for urgent items

---

[Save Preferences]
</>

---

[toast: Settings saved successfully | success]`,
  },

  // SaaS App Bundle - User Journey
  {
    id: 'saas-user-journey',
    name: '📊 SaaS App: User Journey',
    description: 'User flow through the SaaS application',
    category: TEMPLATE_CATEGORIES.APP_BUNDLES,
    type: 'journey',
    thumbnail: 'journey',
    bundle: 'SaaS App',
    bundleOrder: 4,
    source: `[user] Project Manager

[screen:saas-dashboard] Dashboard
[screen:saas-projects] Projects
[screen:saas-settings] Settings
[success] Task Complete

Project Manager -> Dashboard
Dashboard -view projects-> Projects
Dashboard -settings-> Settings
Projects -select-> Projects
Projects -back-> Dashboard
Settings -save-> Dashboard
Projects -complete task-> Task Complete`,
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
