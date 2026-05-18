import Link from "next/link";
import { CheckCircle2, XCircle, ChevronRight } from "lucide-react";
import type { AnswerState } from "@/lib/quiz/types";

const topicHref: Record<string, string> = {
  privacy:        "/topics/privacy",
  education:      "/topics/education",
  job_market:     "/topics/job-market",
  bias:           "/topics/bias",
  everyday_life:  "/topics/everyday-life",
  misinformation: "/topics/misinformation",
};

const topicLabel: Record<string, string> = {
  privacy:        "Privacy",
  education:      "Education",
  job_market:     "Jobs",
  bias:           "Bias",
  everyday_life:  "Daily Life",
  misinformation: "Misinformation",
};

interface ExplanationCardProps {
  state: AnswerState;
  explanation: string;
  topic: string;
  onNext: () => void;
  roundOver: boolean;
  finalStreak: number;
}

export function ExplanationCard({
  state,
  explanation,
  topic,
  onNext,
  roundOver,
  finalStreak,
}: ExplanationCardProps) {
  const isCorrect = state === "correct";

  return (
    <div
      aria-live="polite"
      className="bg-muted rounded-2xl border-[3px] border-border/60 p-5 flex flex-col gap-4
                 animate-in fade-in slide-in-from-bottom-2 duration-300"
    >
      {/* Result banner */}
      <div className={`flex items-center gap-2 font-heading font-semibold text-base
                       ${isCorrect ? "text-[#16A34A]" : "text-[#DC2626]"}`}>
        {isCorrect
          ? <CheckCircle2 size={20} aria-hidden="true" />
          : <XCircle     size={20} aria-hidden="true" />
        }
        {isCorrect ? "Correct!" : "Not quite."}
      </div>

      {/* Explanation text */}
      <p className="font-sans text-sm text-foreground leading-relaxed">{explanation}</p>

      {/* Topic link */}
      <Link
        href={topicHref[topic] ?? "/"}
        className="inline-flex items-center gap-1 font-sans text-sm font-semibold text-primary hover:underline
                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 rounded"
      >
        Learn more about {topicLabel[topic] ?? topic}
        <ChevronRight size={14} aria-hidden="true" />
      </Link>

      {/* Round over message */}
      {roundOver && (
        <div className="border-t-[2px] border-border pt-3 flex flex-col gap-1">
          <p className="font-heading font-semibold text-base text-foreground">
            Round over — streak: {finalStreak}
          </p>
          <p className="font-sans text-sm text-muted-foreground">
            {finalStreak > 0
              ? "Your best streak has been updated if this beats your record."
              : "Answer correctly to start building your streak."}
          </p>
        </div>
      )}

      {/* Next / Play again button */}
      <button
        onClick={onNext}
        className="self-start inline-flex items-center gap-2 px-5 py-2.5 rounded-xl
                   font-heading font-semibold text-sm text-primary-foreground bg-primary
                   border-[3px] border-primary/80 min-h-[44px]
                   shadow-[4px_4px_8px_rgba(0,0,0,0.10)]
                   hover:shadow-[6px_6px_12px_rgba(0,0,0,0.13)]
                   active:scale-95 transition-all duration-200 cursor-pointer
                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        {roundOver ? "Play again" : "Next question"}
        <ChevronRight size={16} aria-hidden="true" />
      </button>
    </div>
  );
}
