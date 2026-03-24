# Open-Bharat-Digital-Consent-by-IDfy - Consent Management Platform

**Open-Bharat-Digital-Consent-by-IDfy** is a robust, enterprise-grade Consent Management Platform (CMP) built for the Ministry of Electronics and Information Technology (MeitY). It enables organizations (Data Fiduciaries) to manage the entire lifecycle of user consent, privacy notices, and data processing activities in strict compliance with privacy regulations.

---

## 🚀 Overview

This platform serves as a bridge between Data Fiduciaries and Data Principals (users), ensuring transparency and control over personal data.

- **For Data Fiduciaries**: Define data processing activities, generate privacy notices, and track compliance.
- **For Data Principals**: A dedicated portal to view, manage, and revoke consents, as well as raise grievances.

## ✨ Key Features

- **Consent Lifecycle**: End-to-end management of consent grants, revocations, and re-consents.
- **Dynamic Privacy Notices**: Generate multi-lingual notices on the fly.
- **Grievance Redressal**: Integrated ticketing system with SLA tracking and file attachments.
- **Webhooks & API**: Event-driven architecture for seamless integration with external systems.
- **Role-Based Access Control (RBAC)**: Granular permissions for secure data management.

👉 **[View Detailed Features](./docs/FEATURES.md)**

## 🛠️ Tech Stack

Built with a modern, type-safe stack for performance and reliability:

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript 5
- **Database**: PostgreSQL with Prisma 6
- **Auth**: NextAuth.js v5
- **UI**: Tailwind CSS 4, Radix UI, shadcn/ui

👉 **[View Architecture & Structure](./docs/ARCHITECTURE.md)**

## ⚡ Getting Started

### Prerequisites

- Node.js 20+
- PostgreSQL

### Quick Start

1.  **Clone & Install**

    ```bash
    git clone <repo-url>
    cd consent-manager-platform
    npm ci
    ```

2.  **Setup Environment**
    Copy the example env file and configure your database.

    ```bash
    cp .env.example .env.local
    # Edit .env.local with your DB credentials
    ```

3.  **Run Database Migrations**

    ```bash
    npx prisma migrate deploy --schema=./prisma/schema
    ```

4.  **Start Server**
    ```bash
    npm run start
    ```

👉 **[Read the Full Setup Guide](./docs/GETTING_STARTED.md)**

## 📚 Documentation

We have detailed documentation available in the `docs/` directory:

- **[Getting Started](./docs/GETTING_STARTED.md)**: Installation, Environment Variables, and Docker setup.
- **[Architecture](./docs/ARCHITECTURE.md)**: Project structure, tech stack details, and key concepts.
- **[Features](./docs/FEATURES.md)**: In-depth look at Consent, Grievances, and DPRM.
- **[API Authentication](./docs/API_AUTHENTICATION_GUIDE.md)**: Guide for using the v1 API.
- **[Webhooks](./docs/WEBHOOK_INTEGRATION_GUIDE.md)**: How to consume real-time events.

## 🤝 Contributing

Please refer to `AGENTS.md` for detailed coding standards, git conventions, and development workflows.

---

_Built for MeitY, India._
