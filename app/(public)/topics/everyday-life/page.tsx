import { Smartphone } from "lucide-react";
import { TopicPageLayout } from "@/components/topics/TopicPageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI in Daily Life | AI Literacy Quiz",
  description: "Recommendations, navigation, smart speakers. AI is already shaping your day, often invisibly.",
};

export default function EverydayLifePage() {
  return (
    <TopicPageLayout
      title="AI in Daily Life"
      subtitle="Recommendations, navigation, smart speakers. AI is already shaping your day, often invisibly."
      Icon={Smartphone}
      headerCls="bg-emerald-100 text-emerald-900"
      iconCls="text-emerald-600"
    >

      <section aria-labelledby="daily-s1">
        <h2 id="daily-s1" className="font-heading font-semibold text-xl text-foreground mb-3">
          Filter bubbles and recommendation engines
        </h2>
        <p className="font-sans text-base text-foreground leading-relaxed mb-3">
          Every streaming service, social platform, and news app uses AI to decide what you see. These systems optimise for engagement, the metric that keeps you on the platform longest. Over time they learn your preferences and narrow the content you are exposed to, creating a <strong>filter bubble</strong>: a personalised information environment that feels comprehensive but is actually highly selective [1].
        </p>
        <p className="font-sans text-base text-foreground leading-relaxed">
          Filter bubbles are not inevitable. Actively searching outside your usual content, using multiple platforms, and deliberately seeking out perspectives you disagree with are all effective counterstrategies. Some platforms offer "diversity" or "discovery" modes specifically to reduce bubble effects, which are worth exploring.
        </p>
      </section>

      <section aria-labelledby="daily-s2">
        <h2 id="daily-s2" className="font-heading font-semibold text-xl text-foreground mb-3">
          Persuasive design and your attention
        </h2>
        <p className="font-sans text-base text-foreground leading-relaxed">
          Recommendation is only part of it. Many apps are built with features engineered to maximise the time you spend: autoplay that rolls into the next video, infinite scroll with no natural stopping point, streaks that punish a missed day, and notifications timed for variable reward. These are deliberate design choices aimed at capturing attention, not neutral defaults, and they can work against your own intentions for your time [2]. Recognising them as designed persuasion is the first step toward countermeasures like time limits, disabling autoplay, or turning off non-essential notifications.
        </p>
      </section>

      <section aria-labelledby="daily-s3">
        <h2 id="daily-s3" className="font-heading font-semibold text-xl text-foreground mb-3">
          When individual optimisation becomes a collective problem
        </h2>
        <p className="font-sans text-base text-foreground leading-relaxed mb-3">
          AI navigation apps like Waze optimise routes for individual drivers, saving a few minutes by rerouting through quiet residential streets. When millions of users follow the same algorithm simultaneously, those "quiet" streets become congested cut-through routes, with real costs to the communities that live there [3]. No individual driver chose to harm those neighbourhoods; the harm emerges from the aggregate of individually rational choices.
        </p>
        <p className="font-sans text-base text-foreground leading-relaxed">
          This pattern, AI systems optimising for individuals while creating collective problems, recurs across many domains: energy consumption, financial markets, social media dynamics. The same logic appears in <strong>dynamic pricing</strong>, where an algorithm may show you and a friend different prices for the same flight based on signals like your device, location, or browsing history. It is one of the central challenges of AI governance: how do you regulate systems whose harms are distributed and emergent rather than intentional?
        </p>
      </section>

      <section aria-labelledby="daily-s4">
        <h2 id="daily-s4" className="font-heading font-semibold text-xl text-foreground mb-3">
          Always-on devices and ambient data collection
        </h2>
        <p className="font-sans text-base text-foreground leading-relaxed mb-3">
          Smart speakers and AI assistants listen continuously for a wake word, which means microphones are always active. Occasionally they trigger on sounds that resemble the wake word, sending snippets of ambient conversation to company servers. Major tech companies have confirmed that human reviewers listen to some of these clips for quality improvement [4].
        </p>
        <p className="font-sans text-base text-foreground leading-relaxed">
          The same caution applies to other connected devices in the home. AI-powered toys with microphones record what a child says and process it on company servers, and there have been real cases of insecure storage and breaches of children's voice data [5]. The questions to ask are consistent: what is recorded, where is it stored, who can access it, how long is it kept, and can you review and delete it. Practical steps include reviewing and deleting voice history in settings, using a physical mute button, and understanding what each device shares and with whom. Convenience and privacy involve a real trade-off, and the value is in making that choice consciously.
        </p>
      </section>

      <section aria-labelledby="daily-s5">
        <h2 id="daily-s5" className="font-heading font-semibold text-xl text-foreground mb-3">
          When AI gets it confidently wrong
        </h2>
        <p className="font-sans text-base text-foreground leading-relaxed mb-3">
          AI now sits between you and everyday information. Search engines place AI-generated summaries above their results, and customer-support chatbots answer questions about policies and refunds. Both can state things that are wrong, outdated, or stitched together from mismatched sources, and prominent placement lends a false sense of authority. Treat these outputs as a starting point: follow the cited links, confirm important details such as refunds or fees against the official written terms or a human agent, and keep a record of what you were told.
        </p>
        <p className="font-sans text-base text-foreground leading-relaxed mb-3">
          A more delicate case is the rise of AI companion apps used for emotional support. They can feel genuinely helpful, but they are often built to keep you engaged and are agreeable in ways real relationships are not, and they carry no clinical accountability. The thoughtful concern is not that the connection is "fake" but that leaning on them can crowd out human relationships and professional help when those are what is actually needed. Awareness of the product's incentives matters here as much as anywhere.
        </p>
        <p className="font-sans text-base text-foreground leading-relaxed">
          Ready to test what you know?
        </p>
      </section>

      <section aria-labelledby="daily-sources" className="mt-8 pt-6 border-t border-border">
        <h2 id="daily-sources" className="font-heading font-semibold text-xl text-foreground mb-3">
          Sources
        </h2>
        <ol className="font-sans text-sm text-muted-foreground space-y-2 list-decimal list-inside">
          <li>Pariser, E. *The Filter Bubble: What the Internet Is Hiding from You.* Penguin Press, 2011. <a href="https://www.penguinrandomhouse.com/books/310664/the-filter-bubble-by-eli-pariser/" className="underline hover:opacity-70 break-all" target="_blank" rel="noopener noreferrer">https://www.penguinrandomhouse.com/books/310664/the-filter-bubble-by-eli-pariser/</a></li>
          <li>Center for Humane Technology. *Ledger of Harms.* <a href="https://ledger.humanetech.com/" className="underline hover:opacity-70 break-all" target="_blank" rel="noopener noreferrer">https://ledger.humanetech.com/</a></li>
          <li>Macfarlane, J. *Your Navigation App Is Making Traffic Unmanageable.* IEEE Spectrum, 2019. <a href="https://spectrum.ieee.org/your-navigation-app-is-making-traffic-unmanageable" className="underline hover:opacity-70 break-all" target="_blank" rel="noopener noreferrer">https://spectrum.ieee.org/your-navigation-app-is-making-traffic-unmanageable</a></li>
          <li>Day, M., Turner, G. & Drozdiak, N. *Amazon Workers Are Listening to What You Tell Alexa.* Bloomberg, 2019. <a href="https://www.bloomberg.com/news/articles/2019-04-10/is-anyone-listening-to-you-on-alexa-a-global-team-reviews-audio" className="underline hover:opacity-70 break-all" target="_blank" rel="noopener noreferrer">https://www.bloomberg.com/news/articles/2019-04-10/is-anyone-listening-to-you-on-alexa-a-global-team-reviews-audio</a></li>
          <li>US Federal Trade Commission. *Electronic Toy Maker VTech Settles FTC Allegations.* 2018. <a href="https://www.ftc.gov/news-events/news/press-releases/2018/01/electronic-toy-maker-vtech-settles-ftc-allegations-it-violated-childrens-privacy-law-ftc-act" className="underline hover:opacity-70 break-all" target="_blank" rel="noopener noreferrer">https://www.ftc.gov/news-events/news/press-releases/2018/01/electronic-toy-maker-vtech-settles-ftc-allegations-it-violated-childrens-privacy-law-ftc-act</a></li>
        </ol>
      </section>
    </TopicPageLayout>
  );
}
