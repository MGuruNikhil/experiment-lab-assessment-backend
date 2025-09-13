## Auth API (Express + Prisma + PostgreSQL)

### Getting started

1. Copy `.env.example` to `.env` and set values:
   - `DATABASE_URL`
   - `JWT_SECRET`
   - `PORT`

2. Install deps and generate Prisma client:

```bash
npm install
npm run prisma:generate
```

3. Create DB and run migration (edit schema first if needed):

```bash
npm run prisma:migrate --name init
```

To add tutor session/message models later, after editing `prisma/schema.prisma`:

```bash
# generate updated client
npm run prisma:generate
# create and apply migration
npm run prisma:migrate --name add_tutor_models
```

To add check-in scheduling and entries, after editing `prisma/schema.prisma`:

```bash
# create and apply migration
npx prisma migrate dev --name add_checkins
# re-generate the client
npx prisma generate
```

To add session summaries for tutor sessions, after editing `prisma/schema.prisma`:

```bash
# create and apply migration
npx prisma migrate dev --name add_session_summary
# re-generate the client
npx prisma generate
```

4. Run dev server:

```bash
npm run dev
```

### Deploying to Vercel

This backend is set up to run as Vercel Serverless Functions using Express.

- Functions live under `backend/api/` and export the Express app.
- `backend/vercel.json` pins the functions runtime to Node.js 20.
- Prisma client is generated during install via `postinstall` and also in `vercel-build`.

Required environment variables (set in Vercel → Project Settings → Environment Variables):

- `DATABASE_URL` (PostgreSQL connection string)
- `JWT_SECRET`
- Optional LLM-related:
   - `OPENROUTER_API_KEY`
   - `LLM_PROVIDER` (e.g. `openrouter` or leave empty for heuristic)
   - `MAX_LLM_PER_DAY` (number)
- CORS:
   - `FRONTEND_URL` (e.g. your deployed frontend URL)

Notes:

- Use Vercel Postgres or any externally accessible PostgreSQL.
- Run `npx prisma migrate deploy` locally or via a CI/CD job to apply migrations to production DB before switching traffic. Vercel serverless functions shouldn't run long migrations during cold starts.
- Health check: `GET /api/health`.

### Endpoints

- POST `/api/auth/register` body: `{ name, email, password }`
- POST `/api/auth/login` body: `{ email, password }` → returns `{ accessToken }`
- POST `/api/auth/logout` → `{ message }`
- GET `/api/auth/me` header: `Authorization: Bearer <token>`

### Notes

- Passwords hashed with bcrypt.
- JWT used for auth; set `JWT_SECRET`.
- 400 on invalid input, 401 on unauthorized.


