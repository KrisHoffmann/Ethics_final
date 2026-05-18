-- Migration 002: Row Level Security
-- CRITICAL: anon key is public; RLS protects the database from client-side writes.

-- ── profiles ──────────────────────────────────────────────────────────────────

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Everyone (including anon) can read usernames + streaks for the leaderboard
CREATE POLICY "profiles_public_read" ON profiles
  FOR SELECT USING (true);

-- Users can only insert their own profile row (called during registration)
CREATE POLICY "profiles_self_insert" ON profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

-- Users can only update their own row (streak updates)
CREATE POLICY "profiles_self_update" ON profiles
  FOR UPDATE
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

-- ── questions ─────────────────────────────────────────────────────────────────

ALTER TABLE questions ENABLE ROW LEVEL SECURITY;

-- Anyone can read questions (needed for the quiz game)
-- No INSERT/UPDATE/DELETE policy = no client writes possible
CREATE POLICY "questions_public_read" ON questions
  FOR SELECT USING (true);
