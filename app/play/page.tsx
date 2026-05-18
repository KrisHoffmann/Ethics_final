import { redirect } from "next/navigation";
import { Flame } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { QuizCard } from "@/components/quiz/QuizCard";
import type { Metadata } from "next";
import type { Question } from "@/lib/quiz/types";

export const metadata: Metadata = {
  title: "Play | AI Quiz",
  description: "Test your AI literacy — build your streak.",
};

export default async function PlayPage() {
  const supabase = await createClient();

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const [profileResult, questionsResult] = await Promise.all([
    supabase
      .from("profiles")
      .select("username, best_streak")
      .eq("id", user.id)
      .single(),
    supabase
      .from("questions")
      .select("id, topic, difficulty, question_text, options, correct_id, explanation"),
  ]);

  const profile   = profileResult.data;
  const questions = (questionsResult.data ?? []) as Question[];

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10 flex flex-col gap-6">
      {/* Page header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading font-bold text-2xl text-foreground">
            AI Literacy Quiz
          </h1>
          <p className="font-sans text-sm text-muted-foreground mt-0.5">
            Answer correctly to grow your streak. One wrong answer resets it.
          </p>
        </div>

        {profile && profile.best_streak > 0 && (
          <div className="flex flex-col items-end">
            <span className="font-sans text-xs text-muted-foreground font-semibold uppercase tracking-wide">
              Your best
            </span>
            <span className="flex items-center gap-1 font-heading font-bold text-xl text-amber-600">
              <Flame size={18} aria-hidden="true" />
              {profile.best_streak}
            </span>
          </div>
        )}
      </div>

      {/* Quiz */}
      <QuizCard
        questions={questions}
        userId={user.id}
        initialBestStreak={profile?.best_streak ?? 0}
      />
    </div>
  );
}
