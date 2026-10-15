import { test } from "node:test";
import assert from "node:assert/strict";
import {
  buildTrend,
  indiaDateKey,
  activityWindowStart,
  activeConsentFilter,
  noticeFilter,
} from "./dashboard-data";

const now = new Date("2026-10-15T08:00:00Z");
const notice = (
  createdAt: string,
  consentStatus: string | null,
  completed: string | null = null,
  updated = createdAt,
) => ({
  createdAt: new Date(createdAt),
  consentStatus,
  markCompletedTimestamp: completed ? new Date(completed) : null,
  updatedAt: new Date(updated),
});

test("decision activity belongs to its recorded decision day, even for older notices", () => {
  const trend = buildTrend(
    [notice("2026-08-01T00:00:00Z", "accepted", "2026-10-14T10:00:00Z")],
    now,
  );
  assert.equal(trend.find((point) => point.date === "2026-10-14")?.accepted, 1);
  assert.equal(
    trend.reduce((sum, point) => sum + point.notices, 0),
    0,
  );
});
test("uses the last update only when the completion timestamp is absent", () => {
  const trend = buildTrend(
    [
      notice("2026-10-12T12:00:00Z", "rejected", null, "2026-10-13T00:00:00Z"),
      notice(
        "2026-10-12T12:00:00Z",
        "accepted",
        "2026-10-14T00:00:00Z",
        "2026-10-15T00:00:00Z",
      ),
    ],
    now,
  );
  assert.equal(trend.find((point) => point.date === "2026-10-13")?.rejected, 1);
  assert.equal(trend.find((point) => point.date === "2026-10-14")?.accepted, 1);
  assert.equal(trend.at(-1)?.accepted, 0);
});
test("empty databases yield thirty real zero-activity days with IST boundaries", () => {
  const trend = buildTrend([], now);
  assert.equal(trend.length, 30);
  assert.equal(trend[0].date, "2026-09-16");
  assert.equal(trend.at(-1)?.date, "2026-10-15");
  assert.ok(
    trend.every(
      (point) =>
        point.notices === 0 && point.accepted === 0 && point.rejected === 0,
    ),
  );
});
test("does not count future activity or treat pending notices as decisions", () => {
  const trend = buildTrend(
    [
      notice("2026-10-15T23:00:00Z", "accepted"),
      notice("2026-10-15T01:00:00Z", null),
    ],
    now,
  );
  assert.deepEqual(trend.at(-1), {
    date: "2026-10-15",
    label: "15 Oct",
    notices: 1,
    accepted: 0,
    rejected: 0,
  });
});
test("active records exclude expired or revoked consents and require future expiry", () => {
  const filter = activeConsentFilter(now);
  assert.equal(filter.status, "accepted");
  assert.equal(filter.isExpired, false);
  assert.deepEqual(filter.OR, [
    { expiresAt: null },
    { expiresAt: { gt: now } },
  ]);
  assert.deepEqual(noticeFilter("accepted"), { consentStatus: "accepted" });
  assert.deepEqual(noticeFilter("rejected"), { consentStatus: "rejected" });
  assert.deepEqual(noticeFilter("invalid"), {});
});

test("IST dates and query window roll over at 18:30 UTC", () => {
  assert.equal(indiaDateKey(new Date("2026-10-14T18:29:59Z")), "2026-10-14");
  assert.equal(indiaDateKey(new Date("2026-10-14T18:30:00Z")), "2026-10-15");
  assert.equal(
    activityWindowStart(now).toISOString(),
    "2026-09-15T18:30:00.000Z",
  );
  const trend = buildTrend(
    [
      notice("2026-10-14T18:29:59Z", null),
      notice("2026-10-14T18:30:00Z", "accepted"),
    ],
    now,
  );
  assert.equal(trend.find((point) => point.date === "2026-10-14")?.notices, 1);
  assert.equal(trend.at(-1)?.notices, 1);
  assert.equal(trend.at(-1)?.accepted, 1);
});
