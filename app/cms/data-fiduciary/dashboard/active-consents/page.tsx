import Link from "next/link";
import prisma from "@/lib/prisma";
import { activeConsentFilter } from "@/lib/dashboard-data";
import { checkPermission } from "@/lib/rbac";
import { Resources, Actions } from "@/lib/constants/rbac";
import { Forbidden } from "@/components/forbidden";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";

export const dynamic = "force-dynamic";
export default async function ActiveConsentsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  if (!(await checkPermission(Resources.NOTICE, Actions.READ)))
    return <Forbidden requiredRole="privy_cgp_user" />;
  const params = await searchParams;
  const requestedPage = Number(params.page || 1);
  const pageSize = 25;
  const where = activeConsentFilter(new Date());
  const total = await prisma.consent.count({ where });
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const page = Math.min(
    totalPages,
    Number.isInteger(requestedPage) && requestedPage > 0 ? requestedPage : 1,
  );
  const records = await prisma.consent.findMany({
    where,
    orderBy: [{ insertedAt: "desc" }, { id: "desc" }],
    skip: (page - 1) * pageSize,
    take: pageSize,
    include: {
      businessProcess: { select: { name: true } },
      processingPurpose: { select: { name: true } },
    },
  });
  const formatDate = (date: Date) =>
    new Intl.DateTimeFormat("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
      timeZone: "Asia/Kolkata",
      hour12: true,
    }).format(date) + " IST";
  return (
    <div className="space-y-5 px-5 py-6 sm:px-8 lg:px-10">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="font-semibold">
            {total.toLocaleString("en-IN")} active consent records
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Accepted consents that are not expired. Dates shown in IST.
          </p>
        </div>
        <Link
          href="/cms/data-fiduciary/dashboard"
          className="text-sm font-semibold text-primary hover:underline"
        >
          Back to dashboard
        </Link>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            {[
              "Reference ID",
              "User ID",
              "Process",
              "Purpose",
              "Granted",
              "Expires",
             
            ].map((label) => (
              <TableHead key={label}>{label}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {records.map((record) => (
            <TableRow key={record.publicId}>
              <TableCell className="font-mono text-xs">
                {record.referenceId}
              </TableCell>
              <TableCell>{record.dataPrincipalId}</TableCell>
              <TableCell>{record.businessProcess.name}</TableCell>
              <TableCell>{record.processingPurpose.name}</TableCell>
              <TableCell>{formatDate(record.insertedAt)}</TableCell>
              <TableCell>
                {record.expiresAt ? formatDate(record.expiresAt) : "No expiry"}
              </TableCell>
              {/* <TableCell>
                <Link
                  href={`/cms/data-fiduciary/consent-timeline/${encodeURIComponent(record.dataPrincipalId)}?type=data_principal_id`}
                  className="text-primary hover:underline"
                >
                  View timeline
                </Link>
              </TableCell> */}
            </TableRow>
          ))}
          {!records.length && (
            <TableRow>
              <TableCell
                colSpan={7}
                className="h-40 text-center text-muted-foreground"
              >
                No active consents found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className="flex items-center justify-between text-sm">
        <span>
          Page {page} of {totalPages}
        </span>
        <div className="flex gap-4">
          {page > 1 && (
            <Link href={`?page=${page - 1}`} className="text-primary">
              Previous
            </Link>
          )}
          {page < totalPages && (
            <Link href={`?page=${page + 1}`} className="text-primary">
              Next
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
