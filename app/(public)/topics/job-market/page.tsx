import { Briefcase } from "lucide-react";
import { TopicPageLayout } from "@/components/topics/TopicPageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI & the Job Market | AI Literacy Quiz",
  description: "Which roles are changing, which are emerging, and what it means when an algorithm decides your CV goes in the bin.",
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
          The common fear, "AI will take everyone's jobs," misses an important nuance. AI is very effective at automating specific <em>tasks</em> within jobs, particularly tasks that are repetitive, rule-based, and operate on predictable inputs: data entry, invoice processing, basic customer-service scripts, certain types of legal document review. Entire jobs are rarely automated at once; more commonly, the mix of tasks within a role shifts [1].
        </p>
        <p className="font-sans text-base text-foreground leading-relaxed">
          Jobs that require physical dexterity in unpredictable environments, complex social judgment, genuine creativity, or emotional connection are significantly harder to automate. The economic disruption is real, and workers in heavily automated roles may need to retrain, but "AI takes all jobs" is not a useful frame for thinking about your own career.
        </p>
      </section>

      <section aria-labelledby="jobs-s2">
        <h2 id="jobs-s2" className="font-heading font-semibold text-xl text-foreground mb-3">
          Augmentation and its flip side
        </h2>
        <p className="font-sans text-base text-foreground leading-relaxed mb-3">
          In many real deployments AI works best not by replacing a skilled worker but by assisting one. This is <strong>augmentation</strong>, sometimes called a "centaur" model: the tool drafts, retrieves, or flags, and the person decides. A field study of customer-support agents found that access to an AI assistant raised productivity most for less-experienced workers, by spreading the know-how of the best performers [2]. The useful question becomes less "which jobs vanish" and more "which tasks get reshaped."
        </p>
        <p className="font-sans text-base text-foreground leading-relaxed">
          There is a flip side. When a tool handles part of a skilled task, the underlying human expertise can erode from disuse, a pattern called <strong>deskilling</strong> that is well documented in aviation and medicine. A clinician who leans entirely on an AI that flags abnormalities may grow less sharp at spotting them unaided, which matters most exactly when the tool fails or meets a case outside its competence. Designing for sustained human skill, not just short-term efficiency, is part of deploying these systems responsibly.
        </p>
      </section>

      <section aria-labelledby="jobs-s3">
        <h2 id="jobs-s3" className="font-heading font-semibold text-xl text-foreground mb-3">
          Algorithmic hiring and its problems
        </h2>
        <p className="font-sans text-base text-foreground leading-relaxed mb-3">
          Many large employers now use AI to screen CVs before any human sees them. In principle this speeds up hiring; in practice it can embed and amplify historical biases. Amazon scrapped an experimental AI recruiting tool after discovering it systematically downgraded CVs that included the word "women's," such as "women's chess club captain," because the model had learned from a decade of past hiring data that skewed male [3]. The algorithm encoded the bias of its training data.
        </p>
        <p className="font-sans text-base text-foreground leading-relaxed mb-3">
          Newer tools that score recorded video interviews from word choice, tone, and facial expression raise a further concern: they can penalise candidates whose accent, culture, or disability differs from the training norm, while measuring presentation rather than ability to do the job. Several vendors have stepped back from facial analysis after criticism that it lacked a sound scientific basis [4].
        </p>
        <p className="font-sans text-base text-foreground leading-relaxed">
          <strong>Human-in-the-loop</strong> means keeping a human decision-maker who can review and override AI recommendations before they become final. For high-stakes decisions like hiring, lending, or medical diagnosis, this is not optional, it is an ethical requirement. Invisible automated rejection with no appeal route is an accountability failure, which is also why transparency matters: people affected by an automated decision deserve to know it happened and to seek review.
        </p>
      </section>

      <section aria-labelledby="jobs-s4">
        <h2 id="jobs-s4" className="font-heading font-semibold text-xl text-foreground mb-3">
          The rules are catching up
        </h2>
        <p className="font-sans text-base text-foreground leading-relaxed">
          Regulation increasingly treats employment AI as a serious matter. Under the EU's AI Act, AI systems used for recruitment, candidate evaluation, promotion, termination, task allocation, and performance monitoring are classified as <strong>high-risk</strong> (Annex III) [5]. That classification does not ban these tools; it triggers obligations such as risk management, data governance, transparency to affected people, and meaningful human oversight. The aim is to keep a human accountable for consequential decisions rather than to certify any system as bias-free.
        </p>
      </section>

      <section aria-labelledby="jobs-s5">
        <h2 id="jobs-s5" className="font-heading font-semibold text-xl text-foreground mb-3">
          Algorithmic management and new roles
        </h2>
        <p className="font-sans text-base text-foreground leading-relaxed mb-3">
          A growing number of workers are managed not by a person but by software. Gig-economy couriers and drivers are assigned jobs, rated, and sometimes deactivated by an app, with no manager to explain or overturn a decision. This <strong>algorithmic management</strong> can leave a worker penalised by a system they cannot question, where a single misread situation cuts their income [6]. The concerns echo other high-stakes automated decisions: transparency, accuracy, and a real route to appeal.
        </p>
        <p className="font-sans text-base text-foreground leading-relaxed mb-3">
          Remote work has also driven demand for AI monitoring tools that track keystrokes, take screenshots, and analyse webcam footage to score "productivity." Research consistently shows these tools damage trust, increase stress, and often measure activity rather than output. A developer thinking through a hard problem may type very little while doing genuinely valuable work, and people tend to optimise for whatever is measured.
        </p>
        <p className="font-sans text-base text-foreground leading-relaxed mb-3">
          On the other side, AI is creating roles that did not exist a few years ago. Prompt engineers design and test effective AI instructions. AI auditors assess systems for bias and failure modes. Machine learning engineers and data scientists are in high demand. The transition between old and new roles is the hard part: it does not happen automatically, and it does not benefit everyone equally, which is why investment in reskilling and transition support matters more than either banning the technology or waiting for harm to accumulate.
        </p>
        <p className="font-sans text-base text-foreground leading-relaxed">
          Ready to test what you know?
        </p>
      </section>

      <section aria-labelledby="jobs-sources" className="mt-8 pt-6 border-t border-border">
        <h2 id="jobs-sources" className="font-heading font-semibold text-xl text-foreground mb-3">
          Sources
        </h2>
        <ol className="font-sans text-sm text-muted-foreground space-y-2 list-decimal list-inside">
          <li>Autor, D. *Why Are There Still So Many Jobs? The History and Future of Workplace Automation.* Journal of Economic Perspectives, 2015. <a href="https://www.aeaweb.org/articles?id=10.1257/jep.29.3.3" className="underline hover:opacity-70 break-all" target="_blank" rel="noopener noreferrer">https://www.aeaweb.org/articles?id=10.1257/jep.29.3.3</a></li>
          <li>Brynjolfsson, E., Li, D. & Raymond, L. *Generative AI at Work.* NBER Working Paper 31161, 2023. <a href="https://www.nber.org/papers/w31161" className="underline hover:opacity-70 break-all" target="_blank" rel="noopener noreferrer">https://www.nber.org/papers/w31161</a></li>
          <li>Dastin, J. *Amazon scraps secret AI recruiting tool that showed bias against women.* Reuters, 2018. <a href="https://www.reuters.com/article/world/insight-amazon-scraps-secret-ai-recruiting-tool-that-showed-bias-against-women-idUSKCN1MK0AG/" className="underline hover:opacity-70 break-all" target="_blank" rel="noopener noreferrer">https://www.reuters.com/article/world/insight-amazon-scraps-secret-ai-recruiting-tool-that-showed-bias-against-women-idUSKCN1MK0AG/</a></li>
          <li>Engler, A. *For some employment algorithms, disability discrimination by default.* Brookings Institution, 2021. <a href="https://www.brookings.edu/articles/for-some-employment-algorithms-disability-discrimination-by-default/" className="underline hover:opacity-70 break-all" target="_blank" rel="noopener noreferrer">https://www.brookings.edu/articles/for-some-employment-algorithms-disability-discrimination-by-default/</a></li>
          <li>EU Artificial Intelligence Act. *Annex III: High-Risk AI Systems Referred to in Article 6(2).* 2024. <a href="https://artificialintelligenceact.eu/annex/3/" className="underline hover:opacity-70 break-all" target="_blank" rel="noopener noreferrer">https://artificialintelligenceact.eu/annex/3/</a></li>
          <li>Möhlmann, M. & Zalmanson, L. *Hands on the wheel: Navigating algorithmic management and Uber drivers' autonomy.* ICIS, 2017. <a href="https://aisel.aisnet.org/icis2017/DigitalPlatforms/Presentations/3/" className="underline hover:opacity-70 break-all" target="_blank" rel="noopener noreferrer">https://aisel.aisnet.org/icis2017/DigitalPlatforms/Presentations/3/</a></li>
        </ol>
      </section>
    </TopicPageLayout>
  );
}
