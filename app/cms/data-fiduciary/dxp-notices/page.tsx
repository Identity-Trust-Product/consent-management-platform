import DxpDocumentsPageContent from "@/components/dxp-documents-page";

export const dynamic = "force-dynamic";

export default function DxpNoticesPage(props: {
  searchParams: Promise<{ query?: string; page?: string }>;
}) {
  return <DxpDocumentsPageContent {...props} kind="notices" />;
}
