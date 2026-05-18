import { Shield } from "lucide-react";
import { TopicPageLayout } from "@/components/topics/TopicPageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy & AI | AI Literacy Quiz",
  description: "Learn how AI systems collect, store, and sometimes misuse your personal data.",
};

export default function PrivacyPage() {
  return (
    <TopicPageLayout
      title="Privacy & AI"
      subtitle="Who actually sees your data? How AI systems collect, store, and sometimes misuse personal information."
      Icon={Shield}
      headerCls="bg-violet-100 text-violet-900"
      iconCls="text-violet-600"
    >
      <section aria-labelledby="privacy-s1">
        <h2 id="privacy-s1" className="font-heading font-semibold text-xl text-foreground mb-3">
          Every prompt is a data point
        </h2>
        <p className="font-sans text-base text-foreground leading-relaxed mb-3">
          When you type something into a free AI chatbot, you are not just asking a question — you are
          contributing data. Most commercial AI services store your conversations and may use them to
          train future versions of the model. That means a message you sent in a private chat window
          could end up shaping responses for thousands of future users. Before you type sensitive
          information — health concerns, relationship problems, financial details — check the
          platform's privacy policy and whether you can opt out of training.
        </p>
        <p className="font-sans text-base text-foreground leading-relaxed">
          The rule of thumb: treat a free AI chat interface the way you would treat a postcard, not a
          sealed letter. If you wouldn't want a stranger to read it, don't type it.
        </p>
      </section>

      <section aria-labelledby="privacy-s2">
        <h2 id="privacy-s2" className="font-heading font-semibold text-xl text-foreground mb-3">
          Permissions and data minimisation
        </h2>
        <p className="font-sans text-base text-foreground leading-relaxed mb-3">
          AI-powered apps frequently request access to far more data than they need. A note-taking app
          with AI features should not need your location or camera roll. The principle of{" "}
          <strong>data minimisation</strong> — collecting only what is genuinely necessary — is a
          legal requirement under the EU's GDPR and a basic privacy hygiene practice everywhere.
        </p>
        <p className="font-sans text-base text-foreground leading-relaxed">
          When an app asks for permission, ask yourself: does this feature actually require this data?
          If the answer is no, deny it. Permissions granted are permissions that can be breached.
        </p>
      </section>

      <section aria-labelledby="privacy-s3">
        <h2 id="privacy-s3" className="font-heading font-semibold text-xl text-foreground mb-3">
          Automated decisions about you
        </h2>
        <p className="font-sans text-base text-foreground leading-relaxed mb-3">
          AI is increasingly used to make decisions that affect your life: whether you get a job
          interview, whether your insurance premium goes up, whether a bank approves your loan. These
          systems often work invisibly — you may never know an algorithm was involved. Under GDPR,
          EU residents have a right to know when a purely automated decision has been made about them
          and to request human review.
        </p>
        <p className="font-sans text-base text-foreground leading-relaxed">
          Awareness is the first step. If you receive an unexplained rejection from a digital service,
          it is worth asking whether an AI was involved and whether a human can review the decision.
        </p>
      </section>
    </TopicPageLayout>
  );
}
