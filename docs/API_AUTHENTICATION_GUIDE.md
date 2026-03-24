# API Authentication Guide

This guide explains how to authenticate with the Open Bharart Digital Consent v1 API using API Keys.

## Overview

The v1 API uses **API Keys** for authentication. This allows external systems (like Data Fiduciaries' backend services) to interact with the platform programmatically without user sessions.

## 1. Obtaining an API Key

1.  Log in to the **Data Fiduciary Portal**.
2.  Navigate to **Settings > API Keys**.
3.  Click **Create API Key**.
4.  Give your key a descriptive name (e.g., "Production Backend").
5.  **Copy the key immediately**. It will be shown only once.
    *   Format: `pk_<random-string>`

## 2. Making Authenticated Requests

Include the API Key in the `Authorization` header of your HTTP requests.

**Header Format:**
`Authorization: Bearer <your-api-key>`

### Example: Validate Consent

**Request:**

```bash
curl -X POST http://localhost:3000/cms/api/v1/consents/validate \
  -H "Authorization: Bearer pk_abc123..." \
  -H "Content-Type: application/json" \
  -d '{
    "consentHandle": "c_123456",
    "purposeId": "pur_789"
  }'
```

**Response:**

```json
{
  "success": true,
  "data": {
    "isValid": true,
    "status": "GRANTED",
    "scope": ["email", "phone"]
  }
}
```

## 3. Error Responses

If authentication fails, the API will return a `401 Unauthorized` response.

| Status Code | Error Code | Description |
| :--- | :--- | :--- |
| 401 | `MISSING_API_KEY` | The Authorization header is missing. |
| 401 | `INVALID_API_KEY` | The provided API Key is invalid or does not exist. |
| 403 | `REVOKED_API_KEY` | The API Key has been revoked by an admin. |

---

## For Developers: Adding New Endpoints

If you are contributing to the platform and adding new v1 endpoints, use the `withApiAuth` middleware.

### Example Implementation

Create a new route file: `app/cms/api/v1/my-resource/route.ts`

```typescript
import { withApiAuth } from "@/lib/api-auth-middleware";
import { createSuccessResponse } from "@/lib/api-response";
import { NextResponse } from "next/server";

export const GET = withApiAuth(async (request, context) => {
  // Access the authenticated user and key info
  const { user, apiKey } = context;

  return createSuccessResponse({
    message: "Authenticated successfully",
    keyName: apiKey.name,
    userId: user.id
  });
});
```

The `withApiAuth` wrapper automatically:
1.  Extracts the token from the header.
2.  Validates it against the database (with caching).
3.  Injects the `context` object.
4.  Handles 401/403 errors.
