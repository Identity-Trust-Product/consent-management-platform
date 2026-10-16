import { createDxpReceiver } from "@/lib/dxp-ingestion";
import { storeDxpDocument } from "@/lib/services/dxp-document-service";

export const runtime = "nodejs";
export const POST = createDxpReceiver("consent.issued", storeDxpDocument);
