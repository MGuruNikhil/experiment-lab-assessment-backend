// Support both custom-generated client path and default @prisma/client
// Using dynamic require keeps runtime working from both src (ts-node) and dist builds.
// eslint-disable-next-line @typescript-eslint/no-var-requires
let PrismaClient: typeof import("@prisma/client").PrismaClient;
type PrismaClientType = import("@prisma/client").PrismaClient;
try {
  // When generator output is set to ../src/generated/prisma
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  PrismaClient = require("../generated/prisma").PrismaClient;
} catch {
  // Fallback to default package
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  PrismaClient = require("@prisma/client").PrismaClient;
}

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClientType | undefined;
}

export const prisma: PrismaClientType = global.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}


