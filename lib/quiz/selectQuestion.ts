import type { Question } from "./types";

export function selectQuestion(
  questions: Question[],
  seenIds: Set<string>,
): Question | null {
  const unseen = questions.filter((q) => !seenIds.has(q.id));
  if (unseen.length === 0) return null;
  return unseen[Math.floor(Math.random() * unseen.length)];
}
