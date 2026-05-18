import { Scale } from "lucide-react";
import { TopicPageLayout } from "@/components/topics/TopicPageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Bias | AI Literacy Quiz",
  description: "How AI systems inherit and amplify human biases, and what accountability looks like in practice.",
};

export default function BiasPage() {
  return (
    <TopicPageLayout
      title="AI Bias"
      subtitle="AI does not invent prejudice — it learns it from us. And then applies it at scale."
      Icon={Scale}
      headerCls="bg-rose-100 text-rose-900"
      iconCls="text-rose-600"
    >
      <section aria-labelledby="bias-s1">
        <h2 id="bias-s1" className="font-heading font-semibold text-xl text-foreground mb-3">
          Where bias comes from
        </h2>
        <p className="font-sans text-base text-foreground leading-relaxed mb-3">
          Machine learning models learn patterns from data. If the data reflects historical
          inequalities — and most real-world data does — the model will learn those patterns and apply
          them to new situations. An AI image generator trained on internet photos will produce mostly
          male doctors and mostly female nurses, not because it was programmed to be sexist, but
          because the training data skewed that way. The bias is in the data; the model faithfully
          replicates it.
        </p>
        <p className="font-sans text-base text-foreground leading-relaxed">
          MIT researcher Joy Buolamwini demonstrated that major commercial facial recognition systems
          had error rates up to 34 percentage points higher for dark-skinned women compared to
          light-skinned men. The cause was straightforward: training datasets were dominated by
          lighter-skinned faces. The algorithm performed well on what it had seen most of.
        </p>
      </section>

      <section aria-labelledby="bias-s2">
        <h2 id="bias-s2" className="font-heading font-semibold text-xl text-foreground mb-3">
          Proxy discrimination
        </h2>
        <p className="font-sans text-base text-foreground leading-relaxed mb-3">
          Removing a variable like race or gender from an AI model does not prevent it from
          discriminating on those dimensions. Other variables — postcode, school attended, credit
          history — correlate strongly with race and class due to historical inequality. An AI can
          produce racially disparate outcomes without ever being told anyone's race, by using these
          proxy variables instead. This is sometimes called <strong>proxy discrimination</strong>.
        </p>
        <p className="font-sans text-base text-foreground leading-relaxed">
          Reducing algorithmic bias requires more than removing sensitive variables. It requires
          diverse and representative training data, testing actual outcomes across demographic groups,
          and technical debiasing interventions — combined with ongoing auditing after deployment,
          because bias patterns can change over time.
        </p>
      </section>

      <section aria-labelledby="bias-s3">
        <h2 id="bias-s3" className="font-heading font-semibold text-xl text-foreground mb-3">
          Accountability and what you can do
        </h2>
        <p className="font-sans text-base text-foreground leading-relaxed mb-3">
          <strong>Algorithmic accountability</strong> means that organisations using AI for
          consequential decisions must be able to explain how those decisions are made, allow
          independent audits, and be held responsible when the system causes harm. This is increasingly
          a legal requirement — the EU's AI Act classifies high-risk uses (hiring, credit, education,
          law enforcement) and sets mandatory obligations including transparency and human oversight.
        </p>
        <p className="font-sans text-base text-foreground leading-relaxed">
          As an individual, your most powerful tool is awareness. If you receive an automated decision
          that seems wrong — a rejected application, a suspicious credit score — you have rights:
          to know that an algorithm was involved, to request explanation, and in many jurisdictions to
          demand human review. Exercising those rights is how accountability actually gets enforced.
        </p>
      </section>
    </TopicPageLayout>
  );
}
