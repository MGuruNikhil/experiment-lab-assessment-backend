export type Frequency = "daily" | "weekly" | "biweekly";

// Adds days in UTC to avoid DST/local offset issues
function addUtcDays(base: Date, days: number): Date {
  const d = new Date(Date.UTC(
    base.getUTCFullYear(),
    base.getUTCMonth(),
    base.getUTCDate(),
    base.getUTCHours(),
    base.getUTCMinutes(),
    base.getUTCSeconds(),
    base.getUTCMilliseconds()
  ));
  d.setUTCDate(d.getUTCDate() + days);
  return d;
}

export function computeNextDue(currentDate: Date, frequency: Frequency): Date {
  const days = frequency === "daily" ? 1 : frequency === "weekly" ? 7 : 14;
  return addUtcDays(currentDate, days);
}
