## GoalForge — Backend (Express + Prisma + PostgreSQL)

This is the REST API server for GoalForge. It uses Express, Prisma, and PostgreSQL. Major domains include authentication, goals and journeys, AI/heuristic suggestions, check-in schedules and entries, tutor sessions with AI replies, and analytics.

## Features

- Auth (JWT)
   - Register, Login, Me, Logout
   - `requireAuth` middleware with Bearer token validation
- Goals & Journeys
   - CRUD for goals, journeys, milestones
   - Milestone dependencies with cycle protection and completion guard rails
- Suggestions (AI or heuristic)
   - Heuristic plan generator based on goal complexity/duration/chunking
   - OpenRouter LLM integration with daily quota (`MAX_LLM_PER_DAY`), caching, and fallback
   - On success, creates journey and milestones transactionally
   - Suggestion history persisted per user/goal
- Check-ins
   - Schedules per goal/milestone (daily/weekly/biweekly)
   - Entries with optional progress update on the linked milestone
   - Daily schedule conflict prevention (one entry per UTC day)
   - Auto-advance next due date
- Tutor
   - Create/list sessions, list messages, send message, close session
   - Uses OpenRouter to generate assistant replies; stores message history
   - Session summary generation and retrieval
- Analytics
   - Overview metrics (goals, completion, velocity, tutor session stats, time series)
   - Per-goal analytics including completion per milestone and session summaries
- Operational
   - CORS configurable via `FRONTEND_URL`
   - Health endpoints: `/health` and `/api/health`

## High-level Architecture

- Express app in `src/app.ts`, server in `src/server.ts`
- Prisma ORM; generated client at `src/generated/prisma`
- Routes
   - `src/routes/auth.routes.ts`
   - `src/routes/goal.routes.ts`
   - `src/routes/checkins.routes.ts`
   - `src/routes/tutor.routes.ts`
   - `src/routes/analytics.routes.ts`
- Controllers and services separate domain logic and persistence
- OpenRouter integration in `src/services/llmService.ts` (with AI SDK fallback and HTTP path)

## Database (Prisma)

Key models (see `prisma/schema.prisma`):

- `User`, `Goal`, `Journey`, `Milestone`, `MilestoneDependency`
- `Suggestion` (stores heuristic/LLM results with optional cache expiry)
- `TutorSession`, `TutorMessage`, `SessionSummary`
- `CheckinSchedule`, `CheckinEntry`

Migrations are included under `prisma/migrations/`. The Prisma client outputs to `src/generated/prisma`.

## Environment Variables

Create `.env` and set:

- DATABASE_URL — PostgreSQL connection string
- JWT_SECRET — HMAC secret for JWT signing/verification
- PORT — app port (default 4000)
- FRONTEND_URL — allowed CORS origin (default http://localhost:3000)

AI/suggestions:

- OPENROUTER_API_KEY — enable LLM features
- OPENROUTER_MODEL — optional, defaults to `openrouter/auto`
- OPENROUTER_REFERER / OPENROUTER_APP_NAME — optional headers for OpenRouter
- MAX_LLM_PER_DAY — per-user daily suggestion limit (default 20)

## Running locally

1) Install dependencies and generate Prisma client

```bash
npm install
npm run prisma:generate
```

2) Apply migrations (creates the database schema)

```bash
npm run prisma:migrate --name init
```

3) Start the server (dev)

```bash
npm run dev
```

Server listens on `http://localhost:${PORT:-4000}`.

## API Surface (selected)

Auth

- POST `/api/auth/register` → `{ name, email, password }`
- POST `/api/auth/login` → `{ email, password }` → `{ accessToken }`
- POST `/api/auth/logout`
- GET `/api/auth/me`

Goals & Journeys

- POST `/api/goals`
- GET `/api/goals`
- GET `/api/goals/:goalId`
- PUT `/api/goals/:goalId`
- DELETE `/api/goals/:goalId`
- POST `/api/goals/:goalId/journeys`
- POST `/api/journeys/:journeyId/milestones`
- PUT `/api/milestones/:milestoneId`
- DELETE `/api/milestones/:milestoneId`
- POST `/api/milestones/:milestoneId/dependencies` (prevents cycles)
- POST `/api/goals/:goalId/suggest` (body: `{ useLLM?: boolean, durationWeeks?, chunking? }`)
- GET `/api/goals/:goalId/suggestions` (history)

Check-ins

- POST `/api/checkins/schedules`
- GET `/api/checkins/schedules` (optional `?goalId=`)
- GET `/api/checkins/schedules/:id`
- DELETE `/api/checkins/schedules/:id`
- POST `/api/checkins/schedules/:id/entries`
- GET `/api/checkins/entries` (`?goalId=&limit=`)

Tutor

- POST `/api/tutor/sessions`
- GET `/api/tutor/sessions`
- GET `/api/tutor/sessions/:sessionId/messages`
- POST `/api/tutor/sessions/:sessionId/message`
- POST `/api/tutor/sessions/:sessionId/close`
- POST `/api/tutor/sessions/:sessionId/summary` (force optional)
- GET `/api/tutor/sessions/:sessionId/summary`

Analytics

- GET `/api/analytics/overview`
- GET `/api/analytics/goal/:goalId`

Health

- GET `/health` or `/api/health`

## Deployment (Vercel)

- Node.js 20+ (see `package.json#engines`)
- `postinstall` runs `prisma generate` automatically; `vercel-build` also generates Prisma client
- Set environment variables in the Vercel project (Production/Preview/Dev) as described above
- Apply DB migrations via CI/CD or a one-off `prisma migrate deploy` against your production database

## Troubleshooting

- 401 Unauthorized
   - Ensure `Authorization: Bearer <token>` is set and `JWT_SECRET` matches the signer
- CORS errors in browser
   - Set `FRONTEND_URL` to your frontend origin; server sends proper CORS headers
- LLM suggestion errors or 429
   - Check `OPENROUTER_API_KEY`; review `MAX_LLM_PER_DAY`; server falls back to heuristic with `llmError: true`
- Prisma client not found
   - Ensure `npm run prisma:generate` has run and `src/generated/prisma` exists



