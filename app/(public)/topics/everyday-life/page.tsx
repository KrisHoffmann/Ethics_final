import { Smartphone } from "lucide-react";
import { TopicPageLayout } from "@/components/topics/TopicPageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI in Daily Life | AI Literacy Quiz",
  description: "How AI shapes your recommendations, routes, smart devices, and what happens when millions of individual choices add up.",
};

export default function EverydayLifePage() {
  return (
    <TopicPageLayout
      title="AI in Daily Life"
      subtitle="Recommendations, navigation, smart speakers — AI is already shaping your day, often invisibly."
      Icon={Smartphone}
      headerCls="bg-emerald-100 text-emerald-900"
      iconCls="text-emerald-600"
    >
      <section aria-labelledby="daily-s1">
        <h2 id="daily-s1" className="font-heading font-semibold text-xl text-foreground mb-3">
          Filter bubbles and recommendation engines
        </h2>
        <p className="font-sans text-base text-foreground leading-relaxed mb-3">
          Every streaming service, social platform, and news app uses AI to decide what you see.
          These systems optimise for engagement — the metric that keeps you on the platform longest.
          Over time they learn your preferences and narrow the content you are exposed to, creating
          a <strong>filter bubble</strong>: a personalised information environment that feels
          comprehensive but is actually highly selective.
        </p>
        <p className="font-sans text-base text-foreground leading-relaxed">
          Filter bubbles are not inevitable. Actively searching outside your usual content, using
          multiple platforms, and deliberately seeking out perspectives you disagree with are all
          effective counterstrategies. Some platforms offer "diversity" or "discovery" modes
          specifically to reduce bubble effects — worth exploring.
        </p>
      </section>

      <section aria-labelledby="daily-s2">
        <h2 id="daily-s2" className="font-heading font-semibold text-xl text-foreground mb-3">
          When individual optimisation becomes a collective problem
        </h2>
        <p className="font-sans text-base text-foreground leading-relaxed mb-3">
          AI navigation apps like Waze optimise routes for individual drivers — saving a few minutes
          by rerouting through quiet residential streets. When millions of users follow the same
          algorithm simultaneously, those "quiet" streets become congested cut-through routes, with
          real costs to the communities that live there. No individual driver chose to harm those
          neighbourhoods; the harm emerges from the aggregate of individually rational choices.
        </p>
        <p className="font-sans text-base text-foreground leading-relaxed">
          This pattern — AI systems optimising for individuals while creating collective problems —
          recurs across many domains: energy consumption, financial markets, social media dynamics.
          It is one of the central challenges of AI governance: how do you regulate systems whose
          harms are distributed and emergent rather than intentional?
        </p>
      </section>

      <section aria-labelledby="daily-s3">
        <h2 id="daily-s3" className="font-heading font-semibold text-xl text-foreground mb-3">
          Always-on devices and ambient data collection
        </h2>
        <p className="font-sans text-base text-foreground leading-relaxed mb-3">
          Smart speakers and AI assistants listen continuously for a wake word, which means microphones
          are always active. Occasionally they trigger on sounds that resemble the wake word, sending
          snippets of ambient conversation to company servers. Major tech companies have confirmed
          that human reviewers listen to some of these clips for quality improvement.
        </p>
        <p className="font-sans text-base text-foreground leading-relaxed">
          Practical steps to manage this: review and delete your voice history in your device's
          settings, use the physical mute button when you don't need the assistant, and understand
          what data your device shares and with whom. Convenience and privacy involve a real
          trade-off — the value is in making that choice consciously.
        </p>
      </section>
    </TopicPageLayout>
  );
}
