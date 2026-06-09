import { BookOpen } from "lucide-react";
import { TopicPageLayout } from "@/components/topics/TopicPageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI & Education | AI Literacy Quiz",
  description: "Tutors, plagiarism detectors, adaptive learning, and what it means to actually understand something.",
};

export default function AIEducationPage() {
  return (
    <TopicPageLayout
      title="AI & Education"
      subtitle="Tutors, plagiarism detectors, adaptive learning, and what it means to actually understand something."
      Icon={GraduationCap}
      headerCls="bg-blue-100 text-blue-900"
      iconCls="text-blue-600"
    >

      <section aria-labelledby="ai-education-s1">
        <h2 id="ai-education-s1" className="font-heading font-semibold text-xl text-foreground mb-3">
          The hallucination problem
        </h2>
        <p className="font-sans text-base text-foreground leading-relaxed mb-3">
          AI language models are trained to produce fluent, plausible text, not necessarily accurate text. When a chatbot confidently cites a paper that does not exist, or explains a historical event with key facts wrong, it is not lying: it genuinely has no mechanism to know the difference between a real and a fabricated claim. This phenomenon is called <strong>hallucination</strong>, and it is a fundamental property of current AI systems, not a bug that will simply be fixed [1].
        </p>
        <p className="font-sans text-base text-foreground leading-relaxed">
          The practical implication for students: use AI as a starting point for thinking, never as a final source. Verify specific claims, especially names, dates, statistics, and citations, against primary sources before relying on them. Confidence is not a signal of accuracy. A model can present a false claim in exactly the same authoritative tone as a true one.
        </p>
      </section>

      <section aria-labelledby="ai-education-s2">
        <h2 id="ai-education-s2" className="font-heading font-semibold text-xl text-foreground mb-3">
          Academic honesty in the age of generative AI
        </h2>
        <p className="font-sans text-base text-foreground leading-relaxed mb-3">
          Submitting AI-generated work as your own is dishonest, but the more important reason to avoid it is that it cheats yourself. Assignments exist to build skills: critical thinking, the ability to construct an argument, the experience of working through confusion toward clarity. A chatbot that writes your essay has done none of that for you.
        </p>
        <p className="font-sans text-base text-foreground leading-relaxed mb-3">
          There is a measurable version of this concern. When people offload a cognitive task to a tool every time, the underlying skill does not develop, and they can be left unable to perform it unaided. Reviews of "cognitive offloading" describe exactly this trade-off between short-term convenience and longer-term capability [2]. The student who has AI write every paragraph may find they cannot structure an argument in a closed-book exam.
        </p>
        <p className="font-sans text-base text-foreground leading-relaxed">
          Ethical AI use in education means using it as a thinking partner: brainstorming ideas, getting explanations of concepts you find confusing, checking your drafts for clarity. The argument, the evidence-gathering, and the reasoning should be yours. Most institutions now have AI-use policies, and where a policy permits assistance, honest and specific disclosure (noting what you used AI for and how) is what keeps your work within the rules.
        </p>
      </section>

      <section aria-labelledby="ai-education-s3">
        <h2 id="ai-education-s3" className="font-heading font-semibold text-xl text-foreground mb-3">
          Why AI detectors are not a verdict
        </h2>
        <p className="font-sans text-base text-foreground leading-relaxed mb-3">
          Faced with AI-written work, many schools turn to detection tools. These tools are unreliable in a way that matters: they produce false positives, flagging genuine human writing as AI-generated. A study of seven widely used detectors found they consistently misclassified essays by non-native English speakers as AI-generated, while rating native-speaker essays accurately, because non-native writing tends to use more predictable vocabulary [3]. OpenAI withdrew its own detector in 2023, citing low accuracy [4].
        </p>
        <p className="font-sans text-base text-foreground leading-relaxed">
          The takeaway is not that detectors are useless, but that a flag is a weak signal, never proof. Treating detector output as evidence of cheating can wrongly penalise honest students, and it should at most be one input alongside human judgement.
        </p>
      </section>

      <section aria-labelledby="ai-education-s4">
        <h2 id="ai-education-s4" className="font-heading font-semibold text-xl text-foreground mb-3">
          Adaptive learning and its limits
        </h2>
        <p className="font-sans text-base text-foreground leading-relaxed mb-3">
          AI tutoring systems that adapt to your knowledge level are genuinely useful. They can identify exactly which concepts you are struggling with and serve targeted practice, a form of personalisation that a teacher managing 30 students cannot always achieve. Well-designed adaptive learning tools can meaningfully accelerate skill acquisition.
        </p>
        <p className="font-sans text-base text-foreground leading-relaxed mb-3">
          The limits matter too. Human teachers provide mentorship, emotional support, the ability to notice when something is wrong, and lived experience that no algorithm possesses. Adaptive AI is a powerful supplement; it is not a replacement.
        </p>
        <p className="font-sans text-base text-foreground leading-relaxed">
          A subtler risk appears when the measure becomes the goal. If an automated grader rewards certain keywords or sentence patterns, students and tutoring services learn to write for the model rather than to communicate, and scores can look healthy while the skill being measured drifts away. This is a classic illustration of Goodhart's law: when a measure becomes a target, it stops being a good measure [5].
        </p>
      </section>

      <section aria-labelledby="ai-education-s5">
        <h2 id="ai-education-s5" className="font-heading font-semibold text-xl text-foreground mb-3">
          Fairness, access, and consequential decisions
        </h2>
        <p className="font-sans text-base text-foreground leading-relaxed mb-3">
          Two further issues sit at the system level rather than the individual one.
        </p>
        <p className="font-sans text-base text-foreground leading-relaxed mb-3">
          First, access. When the most capable AI study tools sit behind a paywall, students who can afford them gain an edge in feedback and tutoring while others make do with weaker free versions. Unequal access to technology can widen the very gaps education is meant to close, which is why many schools weigh providing equitable access rather than assuming everyone arrives equipped [6].
        </p>
        <p className="font-sans text-base text-foreground leading-relaxed mb-3">
          Second, consequential automated decisions. Systems that predict dropout risk or assign final grades can affect a student's future, and a predictive label can become self-fulfilling: a student marked "high risk" who then receives less attention may disengage partly because of the label. Beyond accuracy, the core requirement is transparency and a route to appeal. A student should be able to learn why an automated decision went against them and to request human review. Detailed behavioural data gathered by "free" education platforms raises the same governance questions that apply to any sensitive data about minors: who holds it, how long, and for what.
        </p>
        <p className="font-sans text-base text-foreground leading-relaxed">
          Ready to test what you know?
        </p>
      </section>
    </TopicPageLayout>
  );
}
