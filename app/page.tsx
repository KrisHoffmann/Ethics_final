import Link from "next/link";
import { Trophy, Play, Lock } from "lucide-react";
import { TopicGrid } from "@/components/home/TopicGrid";
import { createClient } from "@/lib/supabase/server";

async function getLeaderboardPreview() {
  const supabase = await createClient();
  const { data } = await supabase
    .from("profiles")
    .select("username, best_streak")
    .order("best_streak", { ascending: false })
    .limit(3);
  return data ?? [];
}

async function getIsLoggedIn() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  return !!user;
}

const medals = ["🥇", "🥈", "🥉"];

export default async function HomePage() {
  const [leaderboard, isLoggedIn] = await Promise.all([
    getLeaderboardPreview(),
    getIsLoggedIn(),
  ]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 flex flex-col gap-16">

      {/* ── Hero ── */}
      <section
        aria-labelledby="hero-heading"
        className="flex flex-col items-center text-center gap-6"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10
                        border-[2px] border-primary/30 font-sans text-sm font-semibold text-primary">
          <Play size={14} aria-hidden="true" />
          Free to play · No downloads
        </div>

        <h1
          id="hero-heading"
          className="font-heading font-bold text-4xl sm:text-5xl text-foreground leading-tight max-w-2xl"
        >
          How well do you understand AI?
        </h1>

        <p className="font-sans text-lg text-muted-foreground max-w-xl leading-relaxed">
          A fast, fun quiz that tests what you know about privacy, jobs, bias, and more.
          Answer correctly to build your streak — one wrong answer and it resets.
        </p>

        {isLoggedIn ? (
          <Link
            href="/play"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-heading font-semibold text-lg
                       text-primary-foreground bg-primary border-[3px] border-primary/80 min-h-[52px]
                       shadow-[4px_4px_8px_rgba(0,0,0,0.12),inset_-2px_-2px_8px_rgba(255,255,255,0.25)]
                       hover:shadow-[6px_6px_12px_rgba(0,0,0,0.15)] active:scale-95
                       transition-all duration-200
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <Play size={20} aria-hidden="true" />
            Play now
          </Link>
        ) : (
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <Link
              href="/register"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-heading font-semibold text-lg
                         text-primary-foreground bg-primary border-[3px] border-primary/80 min-h-[52px]
                         shadow-[4px_4px_8px_rgba(0,0,0,0.12),inset_-2px_-2px_8px_rgba(255,255,255,0.25)]
                         hover:shadow-[6px_6px_12px_rgba(0,0,0,0.15)] active:scale-95
                         transition-all duration-200
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Get started free
            </Link>
            <span
              title="Create an account to play"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-xl font-heading font-semibold text-base
                         text-muted-foreground bg-muted border-[3px] border-border min-h-[52px] cursor-not-allowed"
              aria-disabled="true"
            >
              <Lock size={16} aria-hidden="true" />
              Play (log in first)
            </span>
          </div>
        )}
      </section>

      {/* ── Topics ── */}
      <TopicGrid />

      {/* ── Leaderboard teaser ── */}
      {leaderboard.length > 0 && (
        <section aria-labelledby="leaderboard-preview-heading">
          <div className="max-w-sm mx-auto bg-card rounded-3xl border-[3px] border-border
                          shadow-[4px_4px_8px_rgba(0,0,0,0.10),inset_-2px_-2px_8px_rgba(255,255,255,0.5)]
                          p-6 flex flex-col gap-4">
            <h2
              id="leaderboard-preview-heading"
              className="flex items-center gap-2 font-heading font-semibold text-xl text-foreground"
            >
              <Trophy size={20} aria-hidden="true" className="text-amber-500" />
              Top players
            </h2>

            <ol className="flex flex-col gap-2">
              {leaderboard.map((entry, i) => (
                <li
                  key={entry.username}
                  className="flex items-center justify-between py-2 px-3 rounded-xl bg-muted"
                >
                  <span className="font-sans text-sm font-medium text-foreground flex items-center gap-2">
                    <span aria-label={`Rank ${i + 1}`}>{medals[i]}</span>
                    {entry.username}
                  </span>
                  <span className="font-heading font-bold text-primary text-sm">
                    {entry.best_streak} streak
                  </span>
                </li>
              ))}
            </ol>

            <Link
              href="/leaderboard"
              className="text-center font-sans text-sm font-semibold text-primary
                         hover:underline focus-visible:outline-none focus-visible:ring-2
                         focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
            >
              See full leaderboard →
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
