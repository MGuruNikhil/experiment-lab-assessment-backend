-- CreateTable
CREATE TABLE "public"."CheckinSchedule" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "goalId" UUID,
    "milestoneId" UUID,
    "frequency" TEXT NOT NULL,
    "nextDueAt" TIMESTAMP(3),
    "enabled" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CheckinSchedule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."CheckinEntry" (
    "id" UUID NOT NULL,
    "scheduleId" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "goalId" UUID,
    "milestoneId" UUID,
    "completedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "answers" JSONB,
    "notes" TEXT,
    "progress" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CheckinEntry_pkey" PRIMARY KEY ("id")
);

-- Indexes
CREATE INDEX "CheckinSchedule_userId_idx" ON "public"."CheckinSchedule"("userId");
CREATE INDEX "CheckinEntry_scheduleId_createdAt_idx" ON "public"."CheckinEntry"("scheduleId", "createdAt");

-- FKs
ALTER TABLE "public"."CheckinSchedule" ADD CONSTRAINT "CheckinSchedule_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "public"."CheckinSchedule" ADD CONSTRAINT "CheckinSchedule_goalId_fkey" FOREIGN KEY ("goalId") REFERENCES "public"."Goal"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."CheckinSchedule" ADD CONSTRAINT "CheckinSchedule_milestoneId_fkey" FOREIGN KEY ("milestoneId") REFERENCES "public"."Milestone"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."CheckinEntry" ADD CONSTRAINT "CheckinEntry_scheduleId_fkey" FOREIGN KEY ("scheduleId") REFERENCES "public"."CheckinSchedule"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "public"."CheckinEntry" ADD CONSTRAINT "CheckinEntry_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "public"."CheckinEntry" ADD CONSTRAINT "CheckinEntry_goalId_fkey" FOREIGN KEY ("goalId") REFERENCES "public"."Goal"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."CheckinEntry" ADD CONSTRAINT "CheckinEntry_milestoneId_fkey" FOREIGN KEY ("milestoneId") REFERENCES "public"."Milestone"("id") ON DELETE SET NULL ON UPDATE CASCADE;
