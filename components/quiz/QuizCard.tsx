"use client";

import { useState, useCallback, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import { selectQuestion } from "@/lib/quiz/selectQuestion";
import { StreakCounter } from "./StreakCounter";
import { ExplanationCard } from "./ExplanationCard";
import type { Question, AnswerState } from "@/lib/quiz/types";

interface QuizCardProps {
  questions: Question[];
  userId: string;
  initialBestStreak: number;
}

export function QuizCard({ questions, userId, initialBestStreak }: QuizCardProps) {
  const [seenIds, setSeenIds]           = useState<Set<string>>(new Set());
  const [current, setCurrent]           = useState<Question | null>(() =>
    selectQuestion(questions, new Set()),
  );
  const [answerState, setAnswerState]   = useState<AnswerState>("unanswered");
  const [selectedId, setSelectedId]     = useState<string | null>(null);
  const [streak, setStreak]             = useState(0);
  const [bestStreak, setBestStreak]     = useState(initialBestStreak);
  const [streakPopping, setStreakPopping] = useState(false);
  const [roundOver, setRoundOver]       = useState(false);

  const supabase = createClient();

  async function updateBestStreak(newStreak: number) {
    if (newStreak <= bestStreak) return;
    setBestStreak(newStreak);
    await supabase
      .from("profiles")
      .update({ best_streak: newStreak })
      .eq("id", userId);
  }

  function handleAnswer(optionId: string) {
    if (answerState !== "unanswered" || !current) return;

    setSelectedId(optionId);
    const correct = optionId === current.correct_id;

    if (correct) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      setAnswerState("correct");
      updateBestStreak(newStreak);
      setStreakPopping(true);
      setTimeout(() => setStreakPopping(false), 450);
    } else {
      setAnswerState("incorrect");
      setRoundOver(true);
    }
  }

  const handleNext = useCallback(() => {
    if (roundOver) {
      // Reset round
      setSeenIds(new Set());
      setStreak(0);
      setRoundOver(false);
      setAnswerState("unanswered");
      setSelectedId(null);
      setCurrent(selectQuestion(questions, new Set()));
      return;
    }

    const newSeen = new Set(seenIds);
    if (current) newSeen.add(current.id);

    const next = selectQuestion(questions, newSeen);
    if (!next) {
      // Pool exhausted — reshuffle
      setSeenIds(new Set());
      setCurrent(selectQuestion(questions, new Set()));
    } else {
      setSeenIds(newSeen);
      setCurrent(next);
    }

    setAnswerState("unanswered");
    setSelectedId(null);
  }, [roundOver, seenIds, current, questions]);

  if (!current) {
    return (
      <div className="bg-card rounded-3xl border-[3px] border-border p-8 text-center">
        <p className="font-sans text-muted-foreground">No questions available. Check back soon.</p>
      </div>
    );
  }

  function optionClassName(optionId: string): string {
    const base =
      "w-full text-left px-5 py-4 rounded-2xl border-[3px] font-sans font-medium text-base " +
      "shadow-[4px_4px_8px_rgba(0,0,0,0.08)] transition-all duration-150 " +
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ";

    if (answerState === "unanswered") {
      return base +
        "bg-muted border-border text-foreground " +
        "hover:border-primary/40 hover:bg-white active:scale-[0.98] cursor-pointer";
    }

    if (optionId === current!.correct_id) {
      return base + "bg-[#DCFCE7] border-[#16A34A] text-[#16A34A] cursor-not-allowed";
    }
    if (optionId === selectedId && answerState === "incorrect") {
      return base + "bg-[#FEE2E2] border-[#DC2626] text-[#DC2626] cursor-not-allowed";
    }
    return base + "bg-muted border-border text-foreground opacity-50 cursor-not-allowed";
  }

  return (
    <div
      className="bg-card rounded-3xl border-[3px] border-border w-full
                 shadow-[4px_4px_8px_rgba(0,0,0,0.10),inset_-2px_-2px_8px_rgba(255,255,255,0.5)]
                 p-6 sm:p-8 flex flex-col gap-6"
    >
      {/* Header row */}
      <div className="flex items-start justify-between gap-4">
        <p className="font-sans text-xs font-semibold text-muted-foreground uppercase tracking-wide">
          {current.topic.replace("_", " ")}
        </p>
        <StreakCounter streak={streak} popping={streakPopping} />
      </div>

      {/* Question */}
      <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground leading-snug">
        {current.question_text}
      </h2>

      {/* Options */}
      <ul className="flex flex-col gap-3" role="list">
        {current.options.map((opt) => (
          <li key={opt.id}>
            <button
              onClick={() => handleAnswer(opt.id)}
              disabled={answerState !== "unanswered"}
              className={optionClassName(opt.id)}
              aria-pressed={selectedId === opt.id}
            >
              <span className="font-semibold mr-2">{opt.id}.</span>
              {opt.text}
            </button>
          </li>
        ))}
      </ul>

      {/* Explanation (shown after answer) */}
      {answerState !== "unanswered" && (
        <ExplanationCard
          state={answerState}
          explanation={current.explanation}
          topic={current.topic}
          onNext={handleNext}
          roundOver={roundOver}
          finalStreak={streak}
        />
      )}
    </div>
  );
}
