import { Briefcase } from "lucide-react";
import { TopicPageLayout } from "@/components/topics/TopicPageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI & the Job Market | AI Literacy Quiz",
  description: "Which jobs are at risk, which are emerging, and how AI is reshaping hiring and workplace monitoring.",
};

export default function JobMarketPage() {
  return (
    <TopicPageLayout
      title="AI & the Job Market"
      subtitle="Which roles are changing, which are emerging, and what it means when an algorithm decides your CV goes in the bin."
      Icon={Briefcase}
      headerCls="bg-amber-100 text-amber-900"
      iconCls="text-amber-600"
    >
      <section aria-labelledby="jobs-s1">
        <h2 id="jobs-s1" className="font-heading font-semibold text-xl text-foreground mb-3">
          Automation: tasks, not jobs
        </h2>
        <p className="font-sans text-base text-foreground leading-relaxed mb-3">
          The common fear — "AI will take everyone's jobs" — misses an important nuance. AI is very
          effective at automating specific <em>tasks</em> within jobs, particularly tasks that are
          repetitive, rule-based, and operate on predictable inputs: data entry, invoice processing,
          basic customer-service scripts, certain types of legal document review. Entire jobs are
          rarely automated at once; more commonly, the mix of tasks within a role shifts.
        </p>
        <p className="font-sans text-base text-foreground leading-relaxed">
          Jobs that require physical dexterity in unpredictable environments, complex social judgment,
          genuine creativity, or emotional connection are significantly harder to automate. The
          economic disruption is real — workers in heavily automated roles may need to retrain — but
          "AI takes all jobs" is not a useful frame for thinking about your own career.
        </p>
      </section>

      <section aria-labelledby="jobs-s2">
        <h2 id="jobs-s2" className="font-heading font-semibold text-xl text-foreground mb-3">
          Algorithmic hiring and its problems
        </h2>
        <p className="font-sans text-base text-foreground leading-relaxed mb-3">
          Many large employers now use AI to screen CVs before any human sees them. In principle this
          speeds up hiring; in practice it can embed and amplify historical biases. Amazon famously
          scrapped an AI recruiting tool after discovering it systematically downgraded CVs that
          included the word "women's" — the model had learned from historical hiring data that
          skewed male. The algorithm encoded the bias of its training data.
        </p>
        <p className="font-sans text-base text-foreground leading-relaxed">
          <strong>Human-in-the-loop</strong> means keeping a human decision-maker who can review and
          override AI recommendations before they become final. For high-stakes decisions like hiring,
          lending, or medical diagnosis, this is not optional — it is an ethical requirement. Invisible
          automated rejection with no appeal route is an accountability failure.
        </p>
      </section>

      <section aria-labelledby="jobs-s3">
        <h2 id="jobs-s3" className="font-heading font-semibold text-xl text-foreground mb-3">
          Workplace surveillance and new roles
        </h2>
        <p className="font-sans text-base text-foreground leading-relaxed mb-3">
          Remote work has driven demand for AI monitoring tools that track keystrokes, take
          screenshots, and analyse webcam footage to score "productivity." The research consistently
          shows these tools damage trust, increase stress, and often measure activity rather than
          output — a developer thinking through a hard problem may type very little while doing
          genuinely valuable work.
        </p>
        <p className="font-sans text-base text-foreground leading-relaxed">
          On the other side: AI is also creating new roles that did not exist five years ago. Prompt
          engineers design and test effective AI instructions. AI auditors assess systems for bias and
          failure modes. Machine learning engineers and data scientists are in high demand. The
          transition between old and new roles is the hard part — it does not happen automatically
          and does not benefit everyone equally.
        </p>
      </section>
    </TopicPageLayout>
  );
}
