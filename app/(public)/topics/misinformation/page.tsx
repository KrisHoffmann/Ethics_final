import { AlertTriangle } from "lucide-react";
import { TopicPageLayout } from "@/components/topics/TopicPageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI & Misinformation | AI Literacy Quiz",
  description: "Deepfakes, hallucinated citations, and why AI makes the truth harder to verify — and what you can do about it.",
};

export default function MisinformationPage() {
  return (
    <TopicPageLayout
      title="AI & Misinformation"
      subtitle="Deepfakes, hallucinated citations, and why AI makes the truth harder to verify."
      Icon={AlertTriangle}
      headerCls="bg-orange-100 text-orange-900"
      iconCls="text-orange-600"
    >
      <section aria-labelledby="misinfo-s1">
        <h2 id="misinfo-s1" className="font-heading font-semibold text-xl text-foreground mb-3">
          Deepfakes: seeing is no longer believing
        </h2>
        <p className="font-sans text-base text-foreground leading-relaxed mb-3">
          Deepfake technology uses AI to generate realistic video and audio of people saying and doing
          things they never did. The quality has improved dramatically: early deepfakes had obvious
          artefacts; current ones can be indistinguishable from authentic footage to the naked eye.
          This fundamentally changes how we should relate to video evidence — realism is no longer
          sufficient proof of authenticity.
        </p>
        <p className="font-sans text-base text-foreground leading-relaxed">
          Before sharing a surprising or inflammatory video clip, check whether it has been
          independently verified by credible news organisations. Fact-checking organisations
          (AFP Fact Check, Snopes, FactCheck.org) and reverse image/video search can help trace
          an image or clip to its original source. The reflex to share quickly is exactly what
          misinformation campaigns exploit.
        </p>
      </section>

      <section aria-labelledby="misinfo-s2">
        <h2 id="misinfo-s2" className="font-heading font-semibold text-xl text-foreground mb-3">
          Hallucinated citations and confident errors
        </h2>
        <p className="font-sans text-base text-foreground leading-relaxed mb-3">
          AI language models produce text that sounds authoritative but may be entirely fabricated.
          A notorious example is the generation of fake academic citations: realistic-looking
          references complete with plausible author names, journal titles, volume numbers, and
          publication years — none of which exist. The AI is not deliberately lying; it is predicting
          what a citation in this context would look like, based on patterns in its training data.
        </p>
        <p className="font-sans text-base text-foreground leading-relaxed">
          If you use AI for research, verify every specific claim and every citation independently.
          If you can't find a cited paper, assume it may not exist. This is not a temporary
          limitation — it is a structural property of systems that generate plausible text without
          a ground-truth lookup mechanism.
        </p>
      </section>

      <section aria-labelledby="misinfo-s3">
        <h2 id="misinfo-s3" className="font-heading font-semibold text-xl text-foreground mb-3">
          Recommendation algorithms and misinformation spread
        </h2>
        <p className="font-sans text-base text-foreground leading-relaxed mb-3">
          Social media recommendation algorithms optimise for engagement. Research consistently shows
          that emotionally charged, surprising, or outrage-inducing content generates more engagement
          than calm, accurate reporting. Misinformation tends to have these properties — it is often
          sensational and confirms existing fears or beliefs. The algorithm does not "know" it is
          promoting false content; it just rewards what gets clicked and shared.
        </p>
        <p className="font-sans text-base text-foreground leading-relaxed">
          The most effective personal defence is a habit of pausing before sharing. Ask: where did
          this come from? Has it been independently verified? Am I sharing because it's true or
          because it made me feel something? The pause is the intervention — misinformation spreads
          fastest when it triggers an immediate emotional reaction that bypasses critical evaluation.
        </p>
      </section>
    </TopicPageLayout>
  );
}
