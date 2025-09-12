"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFound = notFound;
exports.errorHandler = errorHandler;
function notFound(_req, res) {
    res.status(404).json({ error: "Not Found" });
}
function errorHandler(err, _req, res, _next) {
    const status = typeof err?.status === "number" ? err.status : 500;
    const message = err?.message ?? "Internal server error";
    res.status(status).json({ error: message });
}
//# sourceMappingURL=error.middleware.js.map