-- CreateTable
CREATE TABLE "public"."SessionSummary" (
    "id" UUID NOT NULL,
    "sessionId" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "summaryText" TEXT NOT NULL,
    "keyPoints" JSONB,
    "actionItems" JSONB,
    "provider" TEXT NOT NULL,
    "rawResponse" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SessionSummary_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SessionSummary_sessionId_key" ON "public"."SessionSummary"("sessionId");

-- CreateIndex
CREATE INDEX "SessionSummary_userId_createdAt_idx" ON "public"."SessionSummary"("userId", "createdAt");

-- AddForeignKey
ALTER TABLE "public"."SessionSummary" ADD CONSTRAINT "SessionSummary_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "public"."TutorSession"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SessionSummary" ADD CONSTRAINT "SessionSummary_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
