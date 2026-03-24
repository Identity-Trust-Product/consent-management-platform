# Architecture & Project Structure

## Tech Stack

Open Bharart Digital Consent is built on a modern, type-safe stack designed for performance and scalability.

-   **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
-   **Language**: [TypeScript 5](https://www.typescriptlang.org/)
-   **Database ORM**: [Prisma 6](https://www.prisma.io/)
-   **Database**: PostgreSQL
-   **Authentication**: [NextAuth.js v5](https://authjs.dev/)
-   **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
-   **UI Components**: [Radix UI](https://www.radix-ui.com/) & [shadcn/ui](https://ui.shadcn.com/)
-   **State Management**: [TanStack Query](https://tanstack.com/query/latest) (React Query)
-   **Forms**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)

## Project Structure

The project follows the Next.js App Router conventions with a clear separation of concerns.

```
consent-manager-platform/
├── actions/                 # Server Actions (Business Logic)
│   ├── admin.ts             # Admin-specific operations
│   ├── grievances.ts        # Grievance redressal logic
│   ├── webhooks.ts          # Webhook event handling
│   └── ...
├── app/                     # Application Routes
│   ├── cms/                 # Main CMS Interface
│   │   ├── admin/           # Admin Dashboard
│   │   ├── data-fiduciary/  # Fiduciary Portal
│   │   └── principal/       # Data Principal Portal
│   └── api/                 # API Routes (v1, Auth)
├── components/              # React Components
│   ├── ui/                  # Reusable UI primitives (Buttons, Inputs)
│   ├── cms-sidebar.tsx      # Main navigation
│   └── ...
├── lib/                     # Shared Utilities
│   ├── services/            # Core Services (Email, Storage, Translation)
│   ├── prisma.ts            # Database client instance
│   └── rbac.ts              # Role-Based Access Control logic
├── prisma/                  # Database Configuration
│   ├── schema.prisma        # Data Models
│   └── migrations/          # SQL Migrations
└── public/                  # Static Assets
```

## Key Concepts

### Server Actions
We use Next.js Server Actions (located in `actions/`) for all data mutations. This ensures type safety from the client to the server and simplifies data fetching.

### Role-Based Access Control (RBAC)
Access is managed via a custom RBAC implementation (`lib/rbac.ts`). Permissions are checked both at the UI level (hiding buttons) and the Server Action level (preventing execution).

### API Architecture
-   **Internal API**: Uses Server Actions.
-   **External API (v1)**: Located in `app/api/v1`. Protected by API Keys (`middleware.ts`). Used for integrations with external systems.
