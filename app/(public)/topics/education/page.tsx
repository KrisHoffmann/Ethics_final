import { GraduationCap } from "lucide-react";
import { TopicPageLayout } from "@/components/topics/TopicPageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI & Education | AI Literacy Quiz",
  description: "Explore how AI is changing learning, academic honesty, and what it means to truly understand something.",
};

export default function EducationPage() {
  return (
    <TopicPageLayout
      title="AI & Education"
      subtitle="Tutors, plagiarism detectors, adaptive learning — and what it means to actually understand something."
      Icon={GraduationCap}
      headerCls="bg-blue-100 text-blue-900"
      iconCls="text-blue-600"
    >
      <section aria-labelledby="edu-s1">
        <h2 id="edu-s1" className="font-heading font-semibold text-xl text-foreground mb-3">
          The hallucination problem
        </h2>
        <p className="font-sans text-base text-foreground leading-relaxed mb-3">
          AI language models are trained to produce fluent, plausible text — not necessarily accurate
          text. When a chatbot confidently cites a paper that does not exist, or explains a historical
          event with key facts wrong, it is not lying: it genuinely has no mechanism to know the
          difference between a real and a fabricated claim. This phenomenon is called{" "}
          <strong>hallucination</strong>, and it is a fundamental property of current AI systems,
          not a bug that will simply be fixed.
        </p>
        <p className="font-sans text-base text-foreground leading-relaxed">
          The practical implication for students: use AI as a starting point for thinking, never as a
          final source. Verify specific claims — especially names, dates, statistics, and citations —
          against primary sources before relying on them.
        </p>
      </section>

      <section aria-labelledby="edu-s2">
        <h2 id="edu-s2" className="font-heading font-semibold text-xl text-foreground mb-3">
          Academic honesty in the age of generative AI
        </h2>
        <p className="font-sans text-base text-foreground leading-relaxed mb-3">
          Submitting AI-generated work as your own is dishonest — but the more important reason to
          avoid it is that it cheats yourself. Assignments exist to build skills: critical thinking,
          the ability to construct an argument, the experience of working through confusion toward
          clarity. A chatbot that writes your essay has done none of that for you.
        </p>
        <p className="font-sans text-base text-foreground leading-relaxed">
          Ethical AI use in education means using it as a thinking partner: brainstorming ideas,
          getting explanations of concepts you find confusing, checking your drafts for clarity. The
          argument, the evidence-gathering, and the reasoning should be yours. Most institutions now
          have AI-use policies — reading them carefully is itself an exercise in critical thinking.
        </p>
      </section>

      <section aria-labelledby="edu-s3">
        <h2 id="edu-s3" className="font-heading font-semibold text-xl text-foreground mb-3">
          Adaptive learning and its limits
        </h2>
        <p className="font-sans text-base text-foreground leading-relaxed mb-3">
          AI tutoring systems that adapt to your knowledge level are genuinely useful. They can
          identify exactly which concepts you're struggling with and serve targeted practice — a form
          of personalisation that a teacher managing 30 students cannot always achieve. Studies show
          that well-designed adaptive learning tools can meaningfully accelerate skill acquisition.
        </p>
        <p className="font-sans text-base text-foreground leading-relaxed">
          The limits matter too. Human teachers provide mentorship, emotional support, the ability to
          notice when something is wrong, and lived experience that no algorithm possesses. Adaptive
          AI is a powerful supplement; it is not a replacement. Systems that predict dropout risk or
          recommend career paths based on historical data risk replicating the very inequalities they
          are meant to address.
        </p>
      </section>
    </TopicPageLayout>
  );
}
