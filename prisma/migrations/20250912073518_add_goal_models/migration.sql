-- CreateTable
CREATE TABLE "public"."Goal" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "complexity" INTEGER,
    "suggestedWeeks" INTEGER,
    "chunking" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Goal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Journey" (
    "id" UUID NOT NULL,
    "goalId" UUID NOT NULL,
    "title" TEXT,
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "meta" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Journey_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Milestone" (
    "id" UUID NOT NULL,
    "journeyId" UUID NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "orderIndex" INTEGER NOT NULL,
    "startWeek" INTEGER,
    "endWeek" INTEGER,
    "estimatedHours" INTEGER,
    "progress" INTEGER NOT NULL DEFAULT 0,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Milestone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."MilestoneDependency" (
    "id" UUID NOT NULL,
    "milestoneId" UUID NOT NULL,
    "dependsOnId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MilestoneDependency_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Suggestion" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "goalId" UUID NOT NULL,
    "provider" TEXT NOT NULL,
    "response" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3),

    CONSTRAINT "Suggestion_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Goal_userId_idx" ON "public"."Goal"("userId");

-- CreateIndex
CREATE INDEX "Goal_createdAt_idx" ON "public"."Goal"("createdAt");

-- CreateIndex
CREATE INDEX "Journey_goalId_idx" ON "public"."Journey"("goalId");

-- CreateIndex
CREATE INDEX "Journey_createdAt_idx" ON "public"."Journey"("createdAt");

-- CreateIndex
CREATE INDEX "Milestone_journeyId_idx" ON "public"."Milestone"("journeyId");

-- CreateIndex
CREATE INDEX "Milestone_createdAt_idx" ON "public"."Milestone"("createdAt");

-- CreateIndex
CREATE INDEX "MilestoneDependency_milestoneId_idx" ON "public"."MilestoneDependency"("milestoneId");

-- CreateIndex
CREATE INDEX "MilestoneDependency_dependsOnId_idx" ON "public"."MilestoneDependency"("dependsOnId");

-- CreateIndex
CREATE INDEX "Suggestion_userId_idx" ON "public"."Suggestion"("userId");

-- CreateIndex
CREATE INDEX "Suggestion_goalId_idx" ON "public"."Suggestion"("goalId");

-- CreateIndex
CREATE INDEX "Suggestion_createdAt_idx" ON "public"."Suggestion"("createdAt");

-- AddForeignKey
ALTER TABLE "public"."Goal" ADD CONSTRAINT "Goal_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Journey" ADD CONSTRAINT "Journey_goalId_fkey" FOREIGN KEY ("goalId") REFERENCES "public"."Goal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Milestone" ADD CONSTRAINT "Milestone_journeyId_fkey" FOREIGN KEY ("journeyId") REFERENCES "public"."Journey"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."MilestoneDependency" ADD CONSTRAINT "MilestoneDependency_milestoneId_fkey" FOREIGN KEY ("milestoneId") REFERENCES "public"."Milestone"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."MilestoneDependency" ADD CONSTRAINT "MilestoneDependency_dependsOnId_fkey" FOREIGN KEY ("dependsOnId") REFERENCES "public"."Milestone"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Suggestion" ADD CONSTRAINT "Suggestion_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Suggestion" ADD CONSTRAINT "Suggestion_goalId_fkey" FOREIGN KEY ("goalId") REFERENCES "public"."Goal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
