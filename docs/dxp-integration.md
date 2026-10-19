# DXP document ingestion

CMS receives immutable documents through:

- `POST /api/dxp/notices` for `notice.accepted`
- `POST /api/dxp/consents` for `consent.issued`

These are root paths, without the `/cms` prefix. Configure the reverse proxy to
forward both paths to this Next.js application.

## Setup

1. Set server environment variable `DXP_INTEGRATION_KEY` to the same integration
   key configured for DXP deliveries. It is never a `NEXT_PUBLIC_` variable.
2. Apply the checked-in migration with `npx prisma migrate deploy`, and generate
   the client with `npx prisma generate` before building/restarting CMS.
3. Configure the two delivery URLs in DXP using the public CMS origin.

### Kubernetes deployment

CMS `.env` is ignored by Git. Pushing application code does not send that file
to the deployed container or set Kubernetes environment variables.

From a PowerShell terminal with kubectl access to the correct cluster, run:

```powershell
./scripts/configure-dxp-kubernetes.ps1 -Deployment <cms-deployment-name> -Namespace <cms-namespace>
```

The script reads `DXP_INTEGRATION_KEY` from the process environment or the local
CMS `.env`, creates/updates the `dxp-integration` Secret in the target namespace,
attaches its environment variable to the existing deployment, and restarts CMS.
It does not upload the rest of `.env` or print the key. The script can be committed;
the key remains in local configuration and the Kubernetes Secret.

Run the script once after deployment, and again when rotating the key. A normal
image update/restart retains this deployment setting, unless your deployment
pipeline replaces it. If a separate Helm chart or deployment manifest manages
the environment, add a `DXP_INTEGRATION_KEY` `secretKeyRef` pointing to
`dxp-integration` / `DXP_INTEGRATION_KEY` there as well.

Requests require `Content-Type: application/json` and `X-API-Key`. The body must
be UTF-8 JSON matching the supplied DXP envelope. Extra fields are accepted at
every level. If `X-DXP-Event` or `X-DXP-Event-Id` is supplied, it must agree with
the body. These headers are not used as a replacement for the body identifiers.

## Persistence and retries

The PostgreSQL `dxp_documents` table stores the complete original request bytes
in `raw_body` (`BYTEA`), including whitespace, unknown fields, and original
numeric representations. It does not reconstruct the document from parsed JSON.
The indexed columns are `event_id`, `request_ref`, `event` and `consent_id`.

The unique `(event, request_ref)` constraint makes notice/consent retries
idempotent, including concurrent deliveries. A retry leaves the first stored
document unchanged and returns 200. `event_id` and non-null `consent_id` are also
unique; reuse for a different request is a storage conflict and is not acknowledged.
A notice does not require a consent. The receiver does not require a CMS
business-process mapping or create records in the existing CMS consent tables.

200 is returned only after the database write (or confirmation of an existing
document). Missing/incorrect keys return 401; malformed JSON, invalid UTF-8,
invalid envelopes, wrong events or inconsistent DXP headers return 400.
Unconfigured integration and database failures return 503 so DXP can retry.
The handler awaits storage directly, with no background acknowledgement.
DXP's 10-second delivery timeout remains a sender-side timeout: a write may commit
even if the sender has timed out, and the retry is then safely ignored.

Notice hashes, signatures and public keys are retained in the original body;
cryptographic verification is not performed. No key or payload is logged.

## Viewing documents and live status

The sidebar has an expanded **DXP DOCUMENTS** section with two separate options:

- **DXP Notices** at `/cms/data-fiduciary/dxp-notices`, showing only `notice.accepted` documents.
- **DXP Consent Artifacts** at `/cms/data-fiduciary/dxp-consent-artifacts`, showing only `consent.issued` documents.

Both pages require `CONSENT_RECORD:READ`, which is granted to the standard CMS
operator, administrator, DPO and auditor roles. Search by request reference or
consent ID, then select **View notice** or **View consent** to render the stored
DXP display. The earlier combined `/cms/data-fiduciary/dxp-documents` URL still works.
Only documents successfully received and stored by the POST endpoints appear;
fix delivery/configuration errors before expecting new records in these lists.

The viewer reads the stored `display` block and renders the title, subtitle,
and sections in the supplied order. It supports label/value rows, tables
(string columns with array rows or rows keyed by column name), and string lists.
Values are rendered as plain text with React escaping, never as HTML.

Set `DXP_PLATFORM_URL` to the DXP platform origin (for example,
`https://dxp.example.com`). Every **View consent** click invokes a server action
that requests `GET /api/integration/consents/{consent_id}/status` from that origin
using the server-side `DXP_INTEGRATION_KEY`. If a consent ID is unavailable,
the request reference is used instead. The key is never sent to the browser.

Status requests use `cache: no-store`, do not follow redirects, and time out
after eight seconds. Every view clears the previous status and shows a checking
indicator while waiting. A successful response displays `display_status` and,
when non-null, `reason` in a badge. No status is read from the stored document.
On timeout, non-2xx, malformed/mismatched response, or missing configuration,
the viewer still renders the stored consent and shows **Status could not be checked**.
It never falls back to a previously active status. Status is not persisted.

### Consent artifact detail layout

**View consent** opens a full-width detail view with the live status badge beside
the title, validity/data-item cards, consent terms, scope, consented fields
and their treatments, recipient obligations, and signed artifact JSON. History
is omitted. The access-usage card is not displayed. If the live status check
fails, the stored artifact is still shown with an unknown-status badge.

**View notice** opens a wide modal with a fixed request title and scrollable
body. It renders the blue notice heading, supplied summary, party/contact cards,
dataset and purpose, scope, data-item table, processing conditions, revocation
and grievance information, and platform information from the received notice's
display sections. Acceptance time (IST) and the original SHA-256 hash are shown
at the bottom. Missing sections are not filled with invented notice terms.

The download contains the original complete received JSON document, including
its signature and public key. CMS does not claim a verified signature: the
banner states that the signature is retained and verification is not performed.
Obligations and treatment output names are populated from the received document;
missing platform-specific obligations are not invented. No revoke integration
is configured because the supplied DXP contract does not define a revoke API.

Run tests with:

```sh
npx tsx --test lib/dxp-ingestion.test.ts lib/services/dxp-document-service.test.ts lib/services/dxp-status-service.test.ts components/dxp-document-view.test.tsx components/dxp-consent-artifact-view.test.tsx components/dxp-notice-view.test.tsx
```

On Windows PowerShell, use `npx.cmd` if script execution policy blocks `npx.ps1`.
