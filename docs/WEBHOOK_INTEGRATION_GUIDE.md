# Webhook Integration Guide

Webhooks allow your external systems to receive real-time notifications when events occur in the Open Bharart Digital Consent platform.

## 1. Supported Events

The following events are currently supported:

| Event Type | Description |
| :--- | :--- |
| `CONSENT_CREATED` | A new consent record has been created. |
| `CONSENT_UPDATED` | An existing consent has been modified (e.g., re-consent). |
| `CONSENT_REVOKED` | A Data Principal has revoked their consent. |
| `CONSENT_EXPIRED` | A consent record has reached its expiration date. |
| `NOTICE_CREATED` | A new privacy notice has been generated. |
| `NOTICE_SUBMITTED` | A privacy notice has been sent to a Data Principal. |

## 2. Payload Structure

All webhooks are sent as `POST` requests with a JSON body.

### Headers

| Header | Description |
| :--- | :--- |
| `Content-Type` | `application/json` |
| `X-Privy-Event-Id` | Unique identifier for the event. |
| `X-Privy-Timestamp` | ISO 8601 timestamp of the event. |
| `X-Privy-Signature` | HMAC-SHA256 signature for verification. |

### Example Payload (`CONSENT_REVOKED`)

```json
{
  "eventId": "evt_1234567890",
  "eventType": "CONSENT_REVOKED",
  "timestamp": "2025-11-24T10:00:00.000Z",
  "data": {
    "consentHandle": "c_987654321",
    "principalId": "user_555",
    "businessProcessId": "bp_marketing_01",
    "revokedAt": "2025-11-24T10:00:00.000Z",
    "reason": "User request via portal"
  }
}
```

## 3. Security & Verification

To ensure that requests are genuinely from Open Bharart Digital Consent, you must verify the `X-Privy-Signature` header.

### Verification Algorithm

1.  **Retrieve the Signing Secret**: You get this when you create the webhook in the dashboard.
2.  **Construct the Signed Payload**: Concatenate the timestamp and the raw request body.
    `signed_payload = timestamp + "." + raw_body`
3.  **Generate HMAC**: Create an HMAC-SHA256 hash of the `signed_payload` using your secret.
4.  **Compare**: The result should match the `v1=<hex>` signature in the header.

### Node.js Example

```javascript
const crypto = require('crypto');

function verifyWebhook(req, secret) {
  const signature = req.headers['x-privy-signature'];
  const timestamp = req.headers['x-privy-timestamp'];
  const body = JSON.stringify(req.body); // Ensure raw body is used

  const [version, hash] = signature.split('=');
  const signedPayload = `${timestamp}.${body}`;
  
  const hmac = crypto.createHmac('sha256', secret);
  hmac.update(signedPayload);
  const calculatedHash = hmac.digest('hex');

  return hash === calculatedHash;
}
```

## 4. Setting Up a Webhook

1.  Go to **Admin > Webhooks**.
2.  Click **Create Webhook**.
3.  Enter your **Endpoint URL** (must be HTTPS).
4.  Select the **Events** you want to subscribe to.
5.  Save the **Signing Secret** securely.

## 5. Testing

You can use tools like [Webhook.site](https://webhook.site) to inspect payloads during development.

1.  Create a temporary URL on Webhook.site.
2.  Register it as a webhook in Open Bharart Digital Consent.
3.  Trigger an event (e.g., revoke a consent in the Principal Portal).
4.  Verify the payload and headers in Webhook.site.
