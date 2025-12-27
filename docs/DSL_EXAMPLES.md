# DSL Examples

This document contains example DSL for all 22+ diagram types supported by the Universal Diagram Engine.

## 1. Mind Map

```
Project Plan
  Research Phase
    Market Analysis
    Competitor Review
    User Interviews
  Design Phase
    Wireframes
    Prototypes
    User Testing
  Development Phase
    Frontend
      React Components
      State Management
    Backend
      API Design
      Database
    Testing
      Unit Tests
      Integration
  Launch Phase
    Marketing
    Documentation
    Support
```

## 2. Architecture

```
[clients] Web App, Mobile App, Admin Panel
[gateway] API Gateway, Load Balancer
[services] Auth Service, User Service, Order Service, Payment Service
[cache] Redis Cluster
[databases] PostgreSQL, MongoDB
[queue] RabbitMQ

Web App -> API Gateway
Mobile App -> API Gateway
Admin Panel -> API Gateway
API Gateway -> Auth Service
API Gateway -> User Service
API Gateway -> Order Service
Auth Service -> Redis Cluster
User Service -> PostgreSQL
Order Service -> MongoDB
Order Service -> RabbitMQ
Payment Service -> RabbitMQ
```

## 3. ERD (Entity Relationship)

```sql
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  name VARCHAR(100),
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE organizations (
  id UUID PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  slug VARCHAR(100) UNIQUE,
  owner_id UUID REFERENCES users(id)
);

CREATE TABLE projects (
  id UUID PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  description TEXT,
  org_id UUID REFERENCES organizations(id),
  created_by UUID REFERENCES users(id),
  status VARCHAR(50) DEFAULT 'active'
);

CREATE TABLE tasks (
  id UUID PRIMARY KEY,
  title VARCHAR(300) NOT NULL,
  project_id UUID REFERENCES projects(id),
  assignee_id UUID REFERENCES users(id),
  priority INTEGER DEFAULT 0,
  due_date DATE
);
```

## 4. Sequence Diagram

```
participant Client, API, Auth, Database, Cache

Client -> API: POST /login
API -> Auth: Validate credentials
Auth -> Database: Query user
Database --> Auth: User record
Auth -> Auth: Verify password
Auth -> Auth: Generate JWT
Auth -> Cache: Store session
Cache --> Auth: OK
Auth --> API: JWT Token
API --> Client: 200 OK + Token

Client -> API: GET /profile (with JWT)
API -> Auth: Verify JWT
Auth -> Cache: Check session
Cache --> Auth: Valid
Auth --> API: User ID
API -> Database: Get user data
Database --> API: User profile
API --> Client: 200 OK + Profile
```

## 5. Flowchart

```
(start) User Visits Site
User Visits Site -> (decision) Logged In?
Logged In? -> (process) Show Dashboard
Logged In? -> (process) Show Login Form
Show Login Form -> (io) Enter Credentials
Enter Credentials -> (decision) Valid?
Valid? -> (process) Create Session
Valid? -> (process) Show Error
Show Error -> (io) Enter Credentials
Create Session -> (process) Show Dashboard
Show Dashboard -> (end) Complete
```

## 6. State Machine

```
(initial) Idle

Idle -> Loading: FETCH_DATA
Loading -> Success: RESOLVE
Loading -> Error: REJECT
Success -> Idle: RESET
Error -> Loading: RETRY
Error -> Idle: DISMISS

(final) Success
```

## 7. User Journey

```
[actor] New User
[page] Landing Page
[action] Sign Up CTA
[form] Registration Form
[email] Verification Email
[action] Email Confirmation
[page] Onboarding Flow
[form] Profile Setup
[page] Dashboard
[notification] Welcome Message

New User -Discovers-> Landing Page
Landing Page -Clicks CTA-> Sign Up CTA
Sign Up CTA -Opens-> Registration Form
Registration Form -Submits-> Verification Email
Verification Email -Clicks Link-> Email Confirmation
Email Confirmation -Redirects-> Onboarding Flow
Onboarding Flow -Completes-> Profile Setup
Profile Setup -Saves-> Dashboard
Dashboard -Shows-> Welcome Message
```

## 8. Timeline

```
[Q1 2024] *Project Kickoff | Team assembled, requirements gathered
[Q1 2024] Design Phase | UI/UX designs completed
[Q2 2024] *Alpha Release | Core features implemented
[Q2 2024] Beta Testing | User feedback collected
[Q3 2024] *Public Launch | Product goes live
[Q3 2024] Marketing Push | Campaign starts
[Q4 2024] Scale Up | Infrastructure expansion
[Q4 2024] *Series A | Funding secured
```

## 9. Org Chart

```
CEO [Chief Executive Officer]
  CTO [Chief Technology Officer]
    VP Engineering
      Engineering Manager
        Senior Developer
        Developer
        Developer
      QA Lead
        QA Engineer
        QA Engineer
    VP Product
      Product Manager
      Product Designer
  CFO [Chief Financial Officer]
    Finance Manager
      Accountant
    HR Manager
      Recruiter
  CMO [Chief Marketing Officer]
    Marketing Director
      Content Lead
      Growth Lead
```

## 10. Network Diagram

```
[cloud] Internet
[firewall] Edge Firewall (10.0.0.1)
[router] Core Router (10.0.1.1)
[switch] Distribution Switch (10.0.2.1)
[server] Web Server 1 (10.0.2.10)
[server] Web Server 2 (10.0.2.11)
[server] App Server (10.0.2.20)
[server] Database Server (10.0.2.30)
[computer] Admin Workstation (10.0.3.10)

Internet -- Edge Firewall: HTTPS
Edge Firewall -- Core Router: Internal
Core Router -- Distribution Switch: Trunk
Distribution Switch -- Web Server 1: HTTP
Distribution Switch -- Web Server 2: HTTP
Distribution Switch -- App Server: API
Distribution Switch -- Database Server: PostgreSQL
Core Router -- Admin Workstation: SSH
```

## 11. Gantt Chart

```
Research, 0, 3
Requirements, 2, 2
Design, 4, 4
Prototyping, 6, 3
Development, 8, 8
Testing, 14, 4
Documentation, 16, 2
Deployment, 17, 2
Launch, 18, 1
```

## 12. Deployment Diagram

```
[cloud] AWS Cloud
  [cluster] EKS Cluster
    [container] Frontend Pod
    [container] API Pod
    [container] Worker Pod
  [database] RDS PostgreSQL
  [storage] S3 Bucket
  [cache] ElastiCache Redis
[cloud] Cloudflare
  [component] CDN
  [component] WAF
[device] User Browser
[device] Mobile App
```

## 13. Pie Chart

```
"Engineering": 45
"Product": 20
"Marketing": 15
"Sales": 12
"Operations": 8
```

## 14. Quadrant Chart

```
title: Technology Adoption Matrix
x-axis: Effort Required →
y-axis: Business Impact →
quadrant-1: Quick Wins
quadrant-2: Major Projects
quadrant-3: Fill-ins
quadrant-4: Thankless Tasks

React Upgrade: [25, 85]
Database Migration: [80, 90]
CI/CD Pipeline: [40, 75]
Documentation: [20, 40]
Legacy Refactor: [90, 60]
API Versioning: [55, 70]
Monitoring: [30, 65]
Tech Debt: [70, 35]
```

## 15. Git Graph

```
commit "Initial commit"
commit "Add project structure"
commit "Setup CI/CD"
branch develop
commit "Feature: User auth"
commit "Feature: Dashboard"
checkout main
commit "Hotfix: Security patch"
merge develop
commit "Release v1.0.0"
branch feature/payments
commit "Add payment gateway"
commit "Add subscription logic"
checkout develop
merge feature/payments
checkout main
merge develop
commit "Release v1.1.0"
```

## 16. Wireframe

```
{Dashboard App}
[[ 🏠 Home | 📊 Analytics | ⚙️ Settings | 👤 Profile ]]

>> Dashboard > Overview

# Welcome Back, John

<Summary Cards>
|📈 Revenue|👥 Users|📦 Orders|
|$45,230|12,847|1,234|
|+12.5%|+8.3%|+15.2%|
</>

---

<Chart Section>
## 📊 Weekly Performance
[chart: line]
</>

___

<Recent Activity>
## 🔔 Recent Activity

@john completed task "Update dashboard"
@sarah added new product "Widget Pro"
@mike processed order #12847

[~~~]
</>

___

<Quick Actions>
[📝 New Task] [📦 Add Product] [📊 View Report]
</>

---

[i] System status: All services operational

[page: 1/5]
```

## 17. Class Diagram

```
class User
+id: UUID
+email: string
+passwordHash: string
-createdAt: DateTime
+authenticate(password: string): boolean
+updateProfile(data: ProfileData): void
#hashPassword(password: string): string

class Organization
+id: UUID
+name: string
+slug: string
+members: User[]
+addMember(user: User): void
+removeMember(userId: UUID): void

class Project
+id: UUID
+name: string
+description: string
+org: Organization
+tasks: Task[]
+createTask(data: TaskData): Task
+getProgress(): number

class Task
+id: UUID
+title: string
+status: TaskStatus
+assignee: User
+complete(): void
+assign(user: User): void
```

## 18. Activity Diagram

```
[start]
:User opens app;
:Display login screen;
<Credentials valid?>
:Show error message;
:Redirect to dashboard;
:Load user data;
<Has notifications?>
:Display notifications;
:Show main content;
[end]
```

## 19. Use Case Diagram

```
actor Customer
actor Admin
actor System

(Browse Products)
(Add to Cart)
(Checkout)
(Make Payment)
(Track Order)
(Manage Products)
(Process Orders)
(Generate Reports)
(Send Notifications)

Customer -> Browse Products
Customer -> Add to Cart
Customer -> Checkout
Customer -> Make Payment
Customer -> Track Order
Admin -> Manage Products
Admin -> Process Orders
Admin -> Generate Reports
System -> Send Notifications
```

## 20. Component Diagram

```
[component] Web Frontend
[component] Mobile App
[component] API Gateway
[component] Auth Service
[component] User Service
[component] Order Service
[component] Payment Service
[component] Notification Service
[component] Database Layer

Web Frontend --> API Gateway
Mobile App --> API Gateway
API Gateway --> Auth Service
API Gateway --> User Service
API Gateway --> Order Service
Order Service --> Payment Service
Order Service --> Notification Service
Auth Service --> Database Layer
User Service --> Database Layer
Order Service --> Database Layer
```

## 21. C4 Diagram

```
[person] Customer: Uses the web application to browse and purchase products
[person] Admin: Manages products and processes orders

[system] E-Commerce Platform: Main web application for online shopping
[system] Payment Gateway: Processes credit card and digital payments
[system] Email Service: Sends transactional and marketing emails
[system] Analytics: Tracks user behavior and generates reports

[database] Main Database: Stores all application data

Customer -> E-Commerce Platform: Browses, purchases
Admin -> E-Commerce Platform: Manages
E-Commerce Platform -> Payment Gateway: Processes payments
E-Commerce Platform -> Email Service: Sends notifications
E-Commerce Platform -> Analytics: Sends events
E-Commerce Platform -> Main Database: Reads/writes data
```

## 22. Requirement Diagram

```
requirement User Authentication {
text: Users must be able to securely authenticate using email/password or OAuth providers
risk: medium
priority: high
}

requirement Data Encryption {
text: All sensitive data must be encrypted at rest and in transit using AES-256 and TLS 1.3
risk: high
priority: critical
}

requirement Performance {
text: API response times must be under 200ms for 95th percentile of requests
risk: low
priority: medium
}

requirement Availability {
text: System must maintain 99.9% uptime with automatic failover capabilities
risk: medium
priority: high
}

requirement Audit Logging {
text: All user actions and system events must be logged for compliance and debugging
risk: low
priority: medium
}
```
