-- Migration 001: initial schema
-- profiles and questions tables exactly as specified in PROJECT_PLAN.md §6

CREATE TABLE IF NOT EXISTS profiles (
  id          uuid        PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  username    text        UNIQUE NOT NULL
                          CHECK (username ~ '^[a-zA-Z0-9_]{3,20}$'),
  best_streak integer     NOT NULL DEFAULT 0
                          CHECK (best_streak >= 0),
  created_at  timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS questions (
  id            uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  topic         text        NOT NULL
                            CHECK (topic IN (
                              'privacy',
                              'education',
                              'job_market',
                              'bias',
                              'everyday_life',
                              'misinformation'
                            )),
  difficulty    integer     NOT NULL DEFAULT 1
                            CHECK (difficulty BETWEEN 1 AND 3),
  question_text text        NOT NULL,
  options       jsonb       NOT NULL,
  -- options format: [{"id":"A","text":"..."},{"id":"B","text":"..."},...]
  correct_id    text        NOT NULL,
  explanation   text        NOT NULL,
  created_at    timestamptz NOT NULL DEFAULT now()
);
