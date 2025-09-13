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

4. Run dev server:

```bash
npm run dev
```

### Endpoints

- POST `/api/auth/register` body: `{ name, email, password }`
- POST `/api/auth/login` body: `{ email, password }` → returns `{ accessToken }`
- POST `/api/auth/logout` → `{ message }`
- GET `/api/auth/me` header: `Authorization: Bearer <token>`

### Notes

- Passwords hashed with bcrypt.
- JWT used for auth; set `JWT_SECRET`.
- 400 on invalid input, 401 on unauthorized.


