import type { Prisma } from "@prisma/client";

export const INDIA_TIME_ZONE = "Asia/Kolkata";
const DAY_MS = 24 * 60 * 60 * 1000;
const IST_OFFSET_MS = 330 * 60 * 1000;

export function indiaDateKey(date: Date) {
  return new Date(date.getTime() + IST_OFFSET_MS).toISOString().slice(0, 10);
}

export function activityWindowStart(now: Date) {
  const midnight = new Date(`${indiaDateKey(now)}T00:00:00+05:30`);
  return new Date(midnight.getTime() - 29 * DAY_MS);
}

export type NoticeView = "pending" | "accepted" | "rejected" | "other";
export function noticeFilter(view?: string): Prisma.NoticeWhereInput {
  if (view === "accepted" || view === "rejected")
    return { consentStatus: view };
  const undecided: Prisma.NoticeWhereInput = {
    OR: [
      { consentStatus: null },
      { consentStatus: { notIn: ["accepted", "rejected"] } },
    ],
  };
  if (view === "pending") return { AND: [{ status: "pending" }, undecided] };
  if (view === "other")
    return { AND: [{ status: { not: "pending" } }, undecided] };
  return {};
}

export function activeConsentFilter(now: Date): Prisma.ConsentWhereInput {
  return {
    status: "accepted",
    isExpired: false,
    OR: [{ expiresAt: null }, { expiresAt: { gt: now } }],
  };
}

export function buildTrend(
  notices: {
    createdAt: Date;
    consentStatus: string | null;
    markCompletedTimestamp: Date | null;
    updatedAt: Date;
  }[],
  now: Date,
) {
  const start = activityWindowStart(now);
  const points = Array.from({ length: 30 }, (_, offset) => {
    const date = new Date(start.getTime() + offset * DAY_MS);
    return {
      date: indiaDateKey(date),
      label: new Intl.DateTimeFormat("en-IN", {
        day: "2-digit",
        month: "short",
        timeZone: INDIA_TIME_ZONE,
      }).format(date),
      notices: 0,
      accepted: 0,
      rejected: 0,
    };
  });
  const byDate = new Map(points.map((point) => [point.date, point]));
  for (const notice of notices) {
    const created = byDate.get(indiaDateKey(notice.createdAt));
    if (notice.createdAt <= now && created) created.notices++;
    const decisionDate = notice.markCompletedTimestamp ?? notice.updatedAt;
    const decided = byDate.get(indiaDateKey(decisionDate));
    if (
      decisionDate <= now &&
      decided &&
      (notice.consentStatus === "accepted" ||
        notice.consentStatus === "rejected")
    )
      decided[notice.consentStatus]++;
  }
  return points;
}
