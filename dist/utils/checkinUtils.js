"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeNextDue = computeNextDue;
// Adds days in UTC to avoid DST/local offset issues
function addUtcDays(base, days) {
    const d = new Date(Date.UTC(base.getUTCFullYear(), base.getUTCMonth(), base.getUTCDate(), base.getUTCHours(), base.getUTCMinutes(), base.getUTCSeconds(), base.getUTCMilliseconds()));
    d.setUTCDate(d.getUTCDate() + days);
    return d;
}
function computeNextDue(currentDate, frequency) {
    const days = frequency === "daily" ? 1 : frequency === "weekly" ? 7 : 14;
    return addUtcDays(currentDate, days);
}
//# sourceMappingURL=checkinUtils.js.map