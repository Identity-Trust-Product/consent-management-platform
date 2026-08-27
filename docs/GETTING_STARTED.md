# Getting Started with Open Bharart Digital Consent

This guide will help you set up the Open Bharart Digital Consent Consent Management Platform on your local machine.

## Prerequisites

Ensure you have the following installed:

- **Node.js**: Version 20 or later
- **Package Manager**: `pnpm` (Recommended), `npm`, or `yarn`
- **Database**: PostgreSQL (v14+)
- **Docker** (Optional, for containerized deployment)

## Installation

1.  **Clone the repository**

    ```bash
    git clone <repository-url>
    cd consent-manager-platform
    ```

2.  **Install dependencies**

    We recommend using `pnpm` as it is the lockfile format used in this project.

    ```bash
    pnpm install
    ```

## Environment Configuration

Create a `.env.local` file in the root directory. You can copy the example below:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/privy_opencms"

# Authentication (NextAuth.js)
AUTH_SECRET="your-generated-secret-key" # Generate with: openssl rand -base64 32
BASE_PATH="http://localhost:3000/cms"

# Email Service (Postmark)
EMAIL_PROVIDER="postmark"
POSTMARK_API_KEY="your-postmark-server-token"
EMAIL_FROM_ADDRESS="noreply@yourdomain.com"
EMAIL_FROM_NAME="Open Bharart Digital Consent"

# Google Cloud Services (Optional - for Translations & Storage)
GCS_PROJECT_ID="your-google-cloud-project-id"
GCS_KEYFILE_PATH="./path/to/service-account.json"
```

## Database Setup

1.  **Run Migrations**

    Apply the Prisma schema to your local database.

    ```bash
    npx prisma migrate dev
    ```

2.  **Seed Data** (Optional)

    Populate the database with initial data (roles, default configurations).

    ```bash
    npx prisma db seed
    ```

## Running the Application

1.  **Start the Development Server**

    ```bash
    pnpm dev
    ```

2.  **Access the App**

    Open [http://localhost:3000](http://localhost:3000) in your browser.

## Docker Deployment

To run the application using Docker:

```bash
# Build and start the container
docker-compose up -d --build
```

The application will be available at [http://localhost:3000](http://localhost:3000).
