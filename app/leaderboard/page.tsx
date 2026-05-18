import { Trophy, Medal } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leaderboard | AI Quiz",
  description: "Top streaks on the AI Literacy Quiz.",
};

export const revalidate = 60;

const rankStyles: Record<number, { bg: string; border: string; label: string; icon: string }> = {
  1: { bg: "bg-amber-50",   border: "border-amber-400", label: "text-amber-700",  icon: "🥇" },
  2: { bg: "bg-slate-50",   border: "border-slate-400", label: "text-slate-700",  icon: "🥈" },
  3: { bg: "bg-orange-50",  border: "border-orange-400",label: "text-orange-700", icon: "🥉" },
};

export default async function LeaderboardPage() {
  const supabase = await createClient();

  const { data: entries, error } = await supabase
    .from("profiles")
    .select("username, best_streak")
    .order("best_streak", { ascending: false })
    .limit(25);

  const { data: { user } } = await supabase.auth.getUser();

  const currentUsername = user
    ? (await supabase
        .from("profiles")
        .select("username")
        .eq("id", user.id)
        .single()
      ).data?.username
    : null;

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12 flex flex-col gap-8">
      <div className="text-center flex flex-col gap-2">
        <div className="flex justify-center">
          <Trophy size={40} aria-hidden="true" className="text-amber-500" />
        </div>
        <h1 className="font-heading font-bold text-3xl text-foreground">Leaderboard</h1>
        <p className="font-sans text-base text-muted-foreground">
          Top 25 players by best streak. One wrong answer resets the streak — make it count.
        </p>
      </div>

      {error && (
        <p className="text-center font-sans text-sm text-destructive">
          Could not load leaderboard. Please refresh.
        </p>
      )}

      {entries && entries.length === 0 && (
        <div className="text-center py-16 font-sans text-muted-foreground">
          <Medal size={40} aria-hidden="true" className="mx-auto mb-3 opacity-40" />
          <p className="font-semibold">No scores yet — be the first!</p>
        </div>
      )}

      {entries && entries.length > 0 && (
        <ol className="flex flex-col gap-3">
          {entries.map((entry, i) => {
            const rank = i + 1;
            const style = rankStyles[rank];
            const isCurrentUser = entry.username === currentUsername;

            return (
              <li
                key={entry.username}
                className={`flex items-center justify-between px-5 py-4 rounded-2xl border-[3px]
                            transition-all duration-150
                            shadow-[4px_4px_8px_rgba(0,0,0,0.07)]
                            ${isCurrentUser
                              ? "bg-primary/5 border-primary"
                              : style
                                ? `${style.bg} ${style.border}`
                                : "bg-card border-border"
                            }`}
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`font-heading font-bold text-lg w-8 text-center
                                ${style ? style.label : "text-muted-foreground"}`}
                    aria-label={`Rank ${rank}`}
                  >
                    {style ? style.icon : rank}
                  </span>
                  <span
                    className={`font-sans font-semibold text-base
                                ${isCurrentUser ? "text-primary" : "text-foreground"}`}
                  >
                    {entry.username}
                    {isCurrentUser && (
                      <span className="ml-2 text-xs font-sans font-normal text-primary/70">(you)</span>
                    )}
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="font-heading font-bold text-lg text-foreground">
                    {entry.best_streak}
                  </span>
                  <span className="font-sans text-sm text-muted-foreground">streak</span>
                </div>
              </li>
            );
          })}
        </ol>
      )}

      {!user && (
        <p className="text-center font-sans text-sm text-muted-foreground border-t-[2px] border-border pt-6">
          <a href="/register" className="font-semibold text-primary hover:underline">
            Create an account
          </a>{" "}
          to appear on the leaderboard.
        </p>
      )}
    </div>
  );
}
