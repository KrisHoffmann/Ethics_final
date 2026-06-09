import { Lock } from "lucide-react";
import { TopicPageLayout } from "@/components/topics/TopicPageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy & AI | AI Literacy Quiz",
  description: "Who actually sees your data? How AI systems collect, store, and sometimes misuse personal information.",
};

export default function PrivacyAIPage() {
  return (
    <TopicPageLayout
      title="Privacy & AI"
      subtitle="Who actually sees your data? How AI systems collect, store, and sometimes misuse personal information."
      Icon={Shield}
      headerCls="bg-violet-100 text-violet-900"
      iconCls="text-violet-600"
    >

      <section aria-labelledby="privacy-ai-s1">
        <h2 id="privacy-ai-s1" className="font-heading font-semibold text-xl text-foreground mb-3">
          Every prompt is a data point
        </h2>
        <p className="font-sans text-base text-foreground leading-relaxed mb-3">
          When you type something into a free AI chatbot, you are not just asking a question, you are contributing data. Most commercial AI services store your conversations and may use them to train future versions of the model. That means a message you sent in a private chat window could end up shaping responses for thousands of future users. Before you type sensitive information such as health concerns, relationship problems, or financial details, check the platform's privacy policy and whether you can opt out of training.
        </p>
        <p className="font-sans text-base text-foreground leading-relaxed">
          The rule of thumb: treat a free AI chat interface the way you would treat a postcard, not a sealed letter. If you would not want a stranger to read it, do not type it.
        </p>
      </section>

      <section aria-labelledby="privacy-ai-s2">
        <h2 id="privacy-ai-s2" className="font-heading font-semibold text-xl text-foreground mb-3">
          Permissions and data minimisation
        </h2>
        <p className="font-sans text-base text-foreground leading-relaxed mb-3">
          AI-powered apps frequently request access to far more data than they need. A note-taking app with AI features should not need your location or camera roll. The principle of <strong>data minimisation</strong>, collecting only what is genuinely necessary for a stated purpose, is a legal requirement under the EU's GDPR and a basic privacy hygiene practice everywhere [1].
        </p>
        <p className="font-sans text-base text-foreground leading-relaxed">
          When an app asks for permission, ask yourself: does this feature actually require this data? If the answer is no, deny it. The safest principle is least privilege: do not grant access in the first place rather than grant it and hope to revoke it later, because data can be collected in the window before you do.
        </p>
      </section>

      <section aria-labelledby="privacy-ai-s3">
        <h2 id="privacy-ai-s3" className="font-heading font-semibold text-xl text-foreground mb-3">
          Automated decisions about you
        </h2>
        <p className="font-sans text-base text-foreground leading-relaxed mb-3">
          AI is increasingly used to make decisions that affect your life: whether you get a job interview, whether your insurance premium goes up, whether a bank approves your loan. These systems often work invisibly, and you may never know an algorithm was involved. Under GDPR, EU residents have a right not to be subject to a decision based solely on automated processing where it produces significant effects, which in practice includes the right to be informed, to obtain human intervention, and to contest the outcome [2].
        </p>
        <p className="font-sans text-base text-foreground leading-relaxed">
          Awareness is the first step. If you receive an unexplained rejection from a digital service, it is worth asking whether an AI was involved and whether a human can review the decision.
        </p>
      </section>

      <section aria-labelledby="privacy-ai-s4">
        <h2 id="privacy-ai-s4" className="font-heading font-semibold text-xl text-foreground mb-3">
          The myth of "anonymous" data
        </h2>
        <p className="font-sans text-base text-foreground leading-relaxed mb-3">
          Companies often share or sell data they describe as "anonymised" because names have been removed. The problem is that removing names is rarely enough. Combining a few ordinary fields such as postcode, date of birth, and sex can re-single out a specific person, because the combination is far more unique than any field alone. Classic work by Latanya Sweeney estimated that a large share of the US population could be uniquely identified from just those three quasi-identifiers [3]. This is why genuine anonymisation usually requires aggregation or techniques like the one below, not just deleting the obvious labels.
        </p>
        <p className="font-sans text-base text-foreground leading-relaxed">
          A related point: the most revealing data about you is often not what you typed, but what a model infers. Patterns in mundane data, such as what you buy and when, can let a system deduce sensitive facts you never disclosed, including pregnancy, illness, or financial stress. This inferred data can be as private as anything you would deliberately hide, yet it sits outside what most people think they are sharing.
        </p>
      </section>

      <section aria-labelledby="privacy-ai-s5">
        <h2 id="privacy-ai-s5" className="font-heading font-semibold text-xl text-foreground mb-3">
          Privacy-protecting techniques worth knowing
        </h2>
        <p className="font-sans text-base text-foreground leading-relaxed mb-3">
          Not all data handling is equally risky, and a few techniques genuinely reduce exposure. It helps to recognise them when a company claims to use them.
        </p>
        <p className="font-sans text-base text-foreground leading-relaxed mb-3">
          <strong>Differential privacy</strong> adds carefully calibrated statistical noise to data or query results, so that useful patterns can be measured while no single individual can be identified from the output, even by someone holding other information about them. It is a concrete, mathematically defined protection rather than a marketing phrase, and it has been deployed at scale by organisations including Apple and the US Census Bureau [4].
        </p>
        <p className="font-sans text-base text-foreground leading-relaxed">
          <strong>Federated learning</strong> trains a model directly on your device and sends back only aggregated parameter updates, not your raw data. An AI keyboard that improves its predictions this way keeps your actual typing on the phone. It is not a total guarantee, since updates can sometimes leak information, but it is a real shift away from pooling everyone's raw data on a central server [5].
        </p>
      </section>

      <section aria-labelledby="privacy-ai-s6">
        <h2 id="privacy-ai-s6" className="font-heading font-semibold text-xl text-foreground mb-3">
          Dark patterns and consent
        </h2>
        <p className="font-sans text-base text-foreground leading-relaxed">
          Consent only means something if it is freely given. Many cookie banners and sign-up flows use <strong>dark patterns</strong>: designs that steer you toward the choice the company prefers, such as a big bright "Accept all" button next to a tiny grey "Reject" link. Exploiting our tendency to take the easy path is not a neutral design choice. Regulators increasingly treat consent gathered this way as invalid, on the principle that refusing should be as easy as accepting [6]. When you choose the most privacy-protecting option, you are exercising a right the design is often trying to nudge you out of.
        </p>
      </section>

      <section aria-labelledby="privacy-ai-s7">
        <h2 id="privacy-ai-s7" className="font-heading font-semibold text-xl text-foreground mb-3">
          When the data is permanent
        </h2>
        <p className="font-sans text-base text-foreground leading-relaxed mb-3">
          Some data is uniquely sensitive because you cannot change it. A leaked password is bad, but you can reset it. Your face, fingerprints, and iris are permanent, so a breach of biometric data is effectively forever and can follow you across every system that relies on it. Biometrics can also sometimes be captured without your cooperation. The same "you can't reset it" logic is why a continuous, searchable record of everything on your screen, or detailed health and biometric readings from a fitness app, deserves extra caution: the more sensitive and permanent the data, the higher the stakes of every breach.
        </p>
        <p className="font-sans text-base text-foreground leading-relaxed">
          Ready to test what you know?
        </p>
      </section>
    </TopicPageLayout>
  );
}
