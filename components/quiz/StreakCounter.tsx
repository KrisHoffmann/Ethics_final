import { Flame } from "lucide-react";

interface StreakCounterProps {
  streak: number;
  popping: boolean;
}

export function StreakCounter({ streak, popping }: StreakCounterProps) {
  return (
    <div
      aria-live="polite"
      aria-label={`Current streak: ${streak}`}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl
                  bg-[#FEF3C7] border-[3px] border-amber-300
                  font-heading font-bold text-xl text-amber-700
                  transition-all duration-200
                  ${popping ? "animate-streak-pop" : ""}`}
    >
      <Flame size={20} aria-hidden="true" />
      {streak}
    </div>
  );
}
