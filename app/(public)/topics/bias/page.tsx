import { Scale } from "lucide-react";
import { TopicPageLayout } from "@/components/topics/TopicPageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Bias | AI Literacy Quiz",
  description: "AI does not invent prejudice, it learns it from us. And then applies it at scale.",
};

export default function AIBiasPage() {
  return (
    <TopicPageLayout
      title="AI Bias"
      subtitle="AI does not invent prejudice, it learns it from us. And then applies it at scale."
      Icon={Scale}
      headerCls="bg-rose-100 text-rose-900"
      iconCls="text-rose-600"
    >

      <section aria-labelledby="ai-bias-s1">
        <h2 id="ai-bias-s1" className="font-heading font-semibold text-xl text-foreground mb-3">
          Where bias comes from
        </h2>
        <p className="font-sans text-base text-foreground leading-relaxed mb-3">
          Machine learning models learn patterns from data. If the data reflects historical inequalities, and most real-world data does, the model will learn those patterns and apply them to new situations. An AI image generator trained on internet photos will produce mostly male doctors and mostly female nurses, not because it was programmed to be sexist, but because the training data skewed that way. The bias is in the data; the model replicates it.
        </p>
        <p className="font-sans text-base text-foreground leading-relaxed mb-3">
          It helps to name where bias enters, because the fix depends on the source. <strong>Representation bias</strong> arises when the training set under-covers some group, so the model has effectively seen less of them and performs worse for them. <strong>Label bias</strong> arises when the answers the model learns from are themselves skewed, for example when "good employee" is defined by past manager ratings that reflected favouritism. <strong>Measurement and deployment bias</strong> arise from how features are recorded and how the system is later used. A model trained on biased inputs produces biased outputs no matter how sophisticated it is [1].
        </p>
        <p className="font-sans text-base text-foreground leading-relaxed">
          MIT researcher Joy Buolamwini and Timnit Gebru demonstrated representation bias concretely. Testing commercial gender-classification systems, they found error rates of up to 34.7 percent for darker-skinned women, compared with under 1 percent for lighter-skinned men, because the training datasets were dominated by lighter-skinned faces [2]. The system performed well on what it had seen most of.
        </p>
      </section>

      <section aria-labelledby="ai-bias-s2">
        <h2 id="ai-bias-s2" className="font-heading font-semibold text-xl text-foreground mb-3">
          Bias does not just reflect, it amplifies
        </h2>
        <p className="font-sans text-base text-foreground leading-relaxed">
          Models can make a skew worse than the data. Because optimising for the single most likely output pushes toward the majority pattern, a training set that is, say, 60 percent one gender for a given job can yield outputs that show that gender 90 percent of the time. Researchers have documented this <strong>bias amplification</strong> in image and language systems [3]. The practical lesson: "the data was only slightly imbalanced" is not reassuring, because you have to measure the outputs, not just the inputs.
        </p>
      </section>

      <section aria-labelledby="ai-bias-s3">
        <h2 id="ai-bias-s3" className="font-heading font-semibold text-xl text-foreground mb-3">
          Proxy discrimination
        </h2>
        <p className="font-sans text-base text-foreground leading-relaxed mb-3">
          Removing a variable like race or gender from a model does not prevent it from discriminating on those dimensions. Other variables such as postcode, school attended, and credit history correlate strongly with race and class due to historical inequality. An AI can produce racially disparate outcomes without ever being told anyone's race, by using these <strong>proxy variables</strong> instead.
        </p>
        <p className="font-sans text-base text-foreground leading-relaxed mb-3">
          A landmark study by Obermeyer and colleagues showed how this happens even with good intentions. A widely used US healthcare algorithm predicted who needed extra care using past medical spending as a stand-in for need. Because less had historically been spent on Black patients with the same conditions, the model concluded they were healthier than equally sick White patients and under-referred them for care [4]. A convenient proxy smuggled past inequity straight into the predictions.
        </p>
        <p className="font-sans text-base text-foreground leading-relaxed">
          In anti-discrimination terms, this is the difference between <strong>disparate treatment</strong> (deciding based on a protected characteristic directly) and <strong>disparate impact</strong> (a neutral-seeming process that nonetheless falls harder on a protected group). An AI can avoid the first and still cause the second, which is why "we did not use race" is no defence if outcomes are systematically skewed.
        </p>
      </section>

      <section aria-labelledby="ai-bias-s4">
        <h2 id="ai-bias-s4" className="font-heading font-semibold text-xl text-foreground mb-3">
          Feedback loops
        </h2>
        <p className="font-sans text-base text-foreground leading-relaxed">
          Some systems shape the very data that trains their successors. A predictive-policing tool that sends more patrols to areas with high past arrests will generate more recorded arrests there simply because more officers are present, which the model then reads as confirmation, justifying still more patrols. This <strong>feedback loop</strong> makes bias compound over time and can entrench it under a veneer of objectivity [5]. Breaking such loops means measuring real-world outcomes rather than trusting the system's own outputs.
        </p>
      </section>

      <section aria-labelledby="ai-bias-s5">
        <h2 id="ai-bias-s5" className="font-heading font-semibold text-xl text-foreground mb-3">
          Reducing bias is ongoing work
        </h2>
        <p className="font-sans text-base text-foreground leading-relaxed mb-3">
          Because several reasonable definitions of fairness (equal error rates across groups, equal positive rates, calibration) are mathematically incompatible except in trivial cases, there is no single technical fix that is "fair" by every measure at once [6]. Building responsibly means deciding openly which notion of fairness matters most in a given context and being transparent about the trade-off.
        </p>
        <p className="font-sans text-base text-foreground leading-relaxed">
          In practice, reducing bias requires more than removing sensitive variables. It requires diverse and representative training data, testing actual outcomes across demographic groups rather than overall accuracy alone, technical debiasing, and ongoing auditing after deployment, because bias patterns change over time.
        </p>
      </section>

      <section aria-labelledby="ai-bias-s6">
        <h2 id="ai-bias-s6" className="font-heading font-semibold text-xl text-foreground mb-3">
          Accountability and what you can do
        </h2>
        <p className="font-sans text-base text-foreground leading-relaxed mb-3">
          <strong>Algorithmic accountability</strong> means that organisations using AI for consequential decisions must be able to explain how those decisions are made, allow independent audits, and be held responsible when the system causes harm. This is increasingly a legal requirement: the EU's AI Act classifies high-risk uses such as hiring, credit, education, and law enforcement, and sets mandatory obligations including transparency and human oversight [7].
        </p>
        <p className="font-sans text-base text-foreground leading-relaxed mb-3">
          A related idea is <strong>recourse</strong>: an affected person should be able to learn why a decision went against them and what they could realistically change. Without recourse, an automated rejection is a dead end. As an individual, your most powerful tool is awareness. If you receive an automated decision that seems wrong, you often have rights: to know an algorithm was involved, to request an explanation, and in many jurisdictions to demand human review. Exercising those rights is how accountability actually gets enforced.
        </p>
        <p className="font-sans text-base text-foreground leading-relaxed">
          Ready to test what you know?
        </p>
      </section>
    </TopicPageLayout>
  );
}
