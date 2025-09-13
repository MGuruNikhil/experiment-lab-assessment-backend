"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
// Support both custom-generated client path and default @prisma/client
// Using dynamic require keeps runtime working from both src (ts-node) and dist builds.
// eslint-disable-next-line @typescript-eslint/no-var-requires
let PrismaClient;
try {
    // When generator output is set to ../src/generated/prisma
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    PrismaClient = require("../generated/prisma").PrismaClient;
}
catch {
    // Fallback to default package
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    PrismaClient = require("@prisma/client").PrismaClient;
}
exports.prisma = global.prisma ?? new PrismaClient();
if (process.env.NODE_ENV !== "production") {
    global.prisma = exports.prisma;
}
//# sourceMappingURL=prisma.js.map