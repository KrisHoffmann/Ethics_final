export interface QuizOption {
  id: string;
  text: string;
}

export interface Question {
  id: string;
  topic: string;
  difficulty: number;
  question_text: string;
  options: QuizOption[];
  correct_id: string;
  explanation: string;
}

export type AnswerState = "unanswered" | "correct" | "incorrect";
