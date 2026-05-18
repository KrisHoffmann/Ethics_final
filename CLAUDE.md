# AI Literacy Quiz — Project Plan

## 1. Overview

A gamified web quiz that teaches young adults about responsible AI use. Users encounter multiple-choice questions across six topics (privacy, education, job market, bias, everyday life, misinformation). Each question is followed by an explanation. Correct answers extend a streak; one wrong answer ends the round and resets the score to zero. Top streaks per user appear on a public leaderboard.

This is a university final project for a 5-person team. The site is showcased for grading; expected lifetime user count is under 50. Optimize for clarity, correctness, and a clean demo — not scale.

## 2. Core User Flows

### Unauthenticated visitor
- Lands on a home page explaining the project.
- Can navigate to **informational pages** for each of the six topics. These are static educational content, readable without an account.
- Can see the leaderboard (read-only).
- Cannot play the game.

### Authenticated user
- Registers with a **username + password only** (no email, no email verification).
- Plays the quiz: each round serves randomized questions from a single pool. Correct answer → streak +1, score +1. Wrong answer → round ends, score resets to 0.
- After each question (correct or wrong), an **explanation** is shown. The explanation links to the relevant topic info page for further reading.
- When a round ends, the user's best streak is updated **only if** the round's streak exceeds their current best.
- Sees their own best streak and position on the leaderboard.

## 3. Scope: MVP vs Stretch

### MVP (must-have for grading)
- Home page with navigation
- Six informational topic pages (static content, written in plain language)
- Quiz page with streak mechanic, score reset on wrong answer, explanation shown after each question, link from explanation to topic page
- Username/password auth (no email)
- Leaderboard page showing top N users by best streak
- Question pool seeded from the proposal (these are placeholders pending content review)
- Responsive layout (works on phone and laptop)

### Stretch (only if MVP is solid and time allows)
- Difficulty levels / weighted random selection
- Per-topic game mode (filter pool by topic)
- WhatsApp / social share button on results screen ("I scored X — beat me")
- Per-attempt history (not just best streak)
- Streak multipliers, badges, level system
- Anonymous play mode (play without account, but not eligible for leaderboard)

**Rule**: nothing in stretch gets started until MVP is feature-complete and deployed.

## 4. Tech Stack

| Layer | Choice | Reason |
|---|---|---|
| Frontend framework | Next.js 14+ (App Router) + TypeScript | Best Vercel integration, file-based routing, server components reduce boilerplate |
| Styling | Tailwind CSS | Fast for a team; no CSS conflicts between contributors |
| UI components | shadcn/ui (optional, recommended) | Copy-paste components, good defaults, no heavy dependency |
| Database + auth | Supabase (Postgres + Supabase Auth) | Free tier sufficient; auth handles password hashing and sessions |
| Hosting | Vercel | Free Hobby tier, auto-deploys from GitHub |
| Version control | GitHub | Free private repo, PR workflow |

## 5. Account & Auth Approach

**The "fake email" trick**: Supabase Auth requires email + password. We store users as `<username>@quizapp.local` (or similar fake domain) under the hood. The user never sees or types this — they only enter a username and password. **Email confirmation must be disabled** in Supabase Auth settings.

### Registration flow
1. User submits `{ username, password }` form.
2. Frontend validates: username regex (alphanumeric + underscore, 3–20 chars), password min length 8.
3. Call `supabase.auth.signUp({ email: \`${username}@quizapp.local\`, password })`.
4. On success, insert a row into `profiles` table: `{ id: user.id, username, best_streak: 0 }`.
5. User is logged in.

### Login flow
1. User submits `{ username, password }`.
2. Frontend reconstructs the fake email and calls `supabase.auth.signInWithPassword`.
3. Session token is stored in Supabase's cookie/local storage helpers.

### Username uniqueness
- Enforced by a `UNIQUE` constraint on `profiles.username`.
- Registration must check this **before** calling `signUp`, otherwise you create an auth user with no profile row on collision. Alternatively, wrap both in a Postgres function/transaction (cleaner; see Database section).

## 6. Database Schema

### Tables

**`profiles`** — one row per user
```sql
id            uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE
username      text UNIQUE NOT NULL CHECK (username ~ '^[a-zA-Z0-9_]{3,20}$')
best_streak   integer NOT NULL DEFAULT 0 CHECK (best_streak >= 0)
created_at    timestamptz NOT NULL DEFAULT now()
```

**`questions`** — seedable question pool
```sql
id            uuid PRIMARY KEY DEFAULT gen_random_uuid()
topic         text NOT NULL CHECK (topic IN ('privacy','education','job_market','bias','everyday_life','misinformation'))
difficulty    integer NOT NULL DEFAULT 1 CHECK (difficulty BETWEEN 1 AND 3)
question_text text NOT NULL
options       jsonb NOT NULL  -- e.g. [{"id":"A","text":"..."},{"id":"B","text":"..."}, ...]
correct_id    text NOT NULL   -- "A" / "B" / "C" / "D"
explanation   text NOT NULL
created_at    timestamptz NOT NULL DEFAULT now()
```

Questions are seeded via a SQL migration file in the repo, not hand-entered in the Supabase UI. This way the whole team can version-control the content.

### Row Level Security (RLS) — CRITICAL

**Every table must have RLS enabled.** The anon key ships in the frontend JavaScript; without RLS, anyone can read or modify the entire database.

```sql
-- profiles
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Everyone (including anon) can read username + best_streak for the leaderboard
CREATE POLICY "profiles_public_read" ON profiles FOR SELECT USING (true);

-- Only the user themselves can update their own row
CREATE POLICY "profiles_self_update" ON profiles FOR UPDATE
  USING (auth.uid() = id) WITH CHECK (auth.uid() = id);

-- Only the user themselves can insert their row (during registration)
CREATE POLICY "profiles_self_insert" ON profiles FOR INSERT
  WITH CHECK (auth.uid() = id);

-- questions
ALTER TABLE questions ENABLE ROW LEVEL SECURITY;

-- Anyone can read questions (needed for the quiz). No write policy = no writes from clients.
CREATE POLICY "questions_public_read" ON questions FOR SELECT USING (true);
```

**Anti-cheating note on best_streak**: with the policy above, a malicious user could open the browser console and run `supabase.from('profiles').update({ best_streak: 999999 }).eq('id', ...)`. For a graded showcase with 20 known users this is acceptable, but if it bothers us we can replace the direct update with a **Postgres function** that takes the round's answer log, validates it server-side against the questions table, and only then updates `best_streak`. Mention this as a stretch improvement, not MVP.

### Helpful RPC (recommended)
A Postgres function `register_user(username, password)` that atomically:
1. Checks the username isn't taken,
2. Creates the auth user,
3. Inserts the profile row.

This avoids the race condition where signup succeeds but the profile insert fails.

## 7. Repository Structure

```
/
├── app/                       # Next.js App Router
│   ├── (public)/              # Routes accessible without login
│   │   ├── page.tsx           # Home
│   │   ├── leaderboard/page.tsx
│   │   └── topics/
│   │       ├── privacy/page.tsx
│   │       ├── education/page.tsx
│   │       ├── job-market/page.tsx
│   │       ├── bias/page.tsx
│   │       ├── everyday-life/page.tsx
│   │       └── misinformation/page.tsx
│   ├── (auth)/
│   │   ├── login/page.tsx
│   │   └── register/page.tsx
│   ├── play/page.tsx          # Quiz (protected — redirect if not logged in)
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── ui/                    # shadcn/ui components
│   ├── Navbar.tsx
│   ├── QuizCard.tsx
│   ├── ExplanationCard.tsx
│   └── Leaderboard.tsx
├── lib/
│   ├── supabase/
│   │   ├── client.ts          # Browser client
│   │   └── server.ts          # Server-side client
│   └── quiz/
│       └── selectQuestion.ts  # Random question picker, avoids repeats within a round
├── supabase/
│   └── migrations/            # SQL migrations + seed questions
│       ├── 001_init.sql
│       ├── 002_rls.sql
│       └── 003_seed_questions.sql
├── public/
├── .env.local.example         # Template; real values in .env.local (gitignored)
├── .gitignore
├── README.md
├── PROJECT_PLAN.md            # this file
└── package.json
```

## 8. Environment Variables

Stored in `.env.local` (gitignored). Also configured in Vercel project settings (the team members all see these via the Vercel dashboard).

```
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...   # server-only, never exposed to client
```

A `.env.local.example` file in the repo lists the variable names with empty values so new collaborators know what to set.

## 9. Collaboration Setup

### GitHub
- Repo owner adds the other 4 as **Collaborators** (Settings → Collaborators) with **Write** access.
- Protect the `main` branch: require PR before merge, no direct pushes.
- Branch naming: `feature/<short-description>`, `fix/<short-description>`.
- One person (rotating) reviews each PR before merge.

### Vercel
- Set up as a **Team** (Hobby tier, free), not a personal account.
- Add 4 collaborators via team settings.
- Connect repo; Vercel auto-deploys `main` to production and PRs to preview URLs.

### Supabase
- Create a **Project under an Organization** (not a personal namespace).
- Invite the 4 others via Organization settings, role: **Developer** (or Owner if everyone needs full control).
- All migrations live in `supabase/migrations/` in the repo. Run them via the Supabase CLI or paste into the SQL editor — but always commit them.

## 10. Workflow Conventions

- **No work directly on `main`**. Branch, push, PR, review, merge.
- **One PR = one feature or fix**. Easier to review.
- **Migrations are forward-only**. If a migration is wrong, write a new one to fix it — don't edit the old one once it's been run on the shared database.
- **Question content lives in `003_seed_questions.sql`**, not hardcoded in the frontend. Anyone can propose edits via PR.
- **Type everything**. No `any` in TypeScript unless there's no alternative. Use Supabase's generated types (`supabase gen types typescript`).

## 11. Open Questions / Decisions Pending

These need to be decided by the team, ideally before significant code is written:

1. **Visual design / theme**: dark mode default? Color scheme? Tone (playful vs. serious)?
2. **Number of questions to seed**: aim for at least ~30 (5 per topic) for MVP so streaks are non-trivial. More is better.
3. **Content review**: the proposal's example questions have minor issues (notably the "doctor" image-gen question where option D is arguably also defensible). The team should do one editing pass on all questions before deployment.
4. **Leaderboard size**: top 10? Top 25? Show user's own rank if they're below the cutoff?
5. **Question repetition within a session**: should we avoid showing the same question twice in one streak? (Recommended: yes, until the pool is exhausted.)
6. **What happens when a user has seen all questions in their current streak**: re-shuffle and allow repeats? End the round?

## 12. Risks / Things That Will Go Wrong

Honest list, so the team can plan around them:

- **RLS misconfiguration** is the #1 risk. Test by opening the deployed site in an incognito window and trying to write to `profiles` directly from the console. If it succeeds for someone else's row, RLS is broken.
- **Fake-email auth tripping over Supabase defaults**: confirm that "Confirm email" is disabled in Supabase Auth settings before any signups happen. Otherwise users can't log in.
- **Merge conflicts** in `package.json` and shared component files. Mitigate by keeping PRs small and merging often.
- **One person knowing everything**: avoid the "only Alice can deploy" antipattern by ensuring at least two people set up local environments and have done at least one merge to main.
- **Question quality drift**: content gets written by 5 different people in 5 different tones. Pick a tone guide early (e.g. "second person, conversational, concrete examples") and stick to it.

## 13. Development Rules

### Code Structure
- **No file exceeds 300 lines.** If it's getting long, split it into smaller components or
  utilities and organize them into subfolders. Prefer many small focused files over few
  large ones.

### Frontend Work
- **Always load `design-system/master.md` before writing any UI code.** This file is the
  single source of truth for colors, typography, component classes, animations, and
  per-page design notes. Do not invent styles — use the tokens and patterns defined there.
- Style: Claymorphism — soft 3D, chunky borders (3–4px), double shadows (inner + outer),
  `rounded-2xl/3xl`, subtle spring animations.
- Fonts: Fredoka (headings/questions) + Nunito (body/answers), loaded via `next/font/google`.
- When building a new page, also check `design-system/pages/` for any page-level overrides
  before writing layout code.

### General
- No `any` in TypeScript unless there is genuinely no alternative.
- Migrations are forward-only — never edit a migration that has already been run.
- Question content lives in `supabase/migrations/003_seed_questions.sql`, not hardcoded
  in the frontend.