import { AlertTriangle } from "lucide-react";
import { TopicPageLayout } from "@/components/topics/TopicPageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI & Misinformation | AI Literacy Quiz",
  description: "Deepfakes, hallucinated citations, and why AI makes the truth harder to verify.",
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
          Deepfake technology uses AI to generate realistic video and audio of people saying and doing things they never did. The quality has improved dramatically: early deepfakes had obvious artefacts; current ones can be hard to distinguish from authentic footage to the naked eye. This changes how we should relate to video evidence, because realism is no longer sufficient proof of authenticity.
        </p>
        <p className="font-sans text-base text-foreground leading-relaxed">
          Before sharing a surprising or inflammatory clip, check whether it has been independently verified by credible news organisations. Fact-checking organisations such as AFP Fact Check and Snopes, plus reverse image and video search, can help trace media to its original source. When inspecting a suspect image, look for tell-tale artefacts (odd hands, garbled text, lighting that does not match across the frame) but treat none of these as conclusive on their own. The reflex to share quickly is exactly what misinformation campaigns exploit.
        </p>
      </section>

      <section aria-labelledby="misinfo-s2">
        <h2 id="misinfo-s2" className="font-heading font-semibold text-xl text-foreground mb-3">
          The liar's dividend
        </h2>
        <p className="font-sans text-base text-foreground leading-relaxed">
          Deepfakes cause a second, less obvious harm. Once people know that video can be faked, the genuinely guilty can wave away authentic evidence as "probably AI." Legal scholars Bobby Chesney and Danielle Citron named this the <strong>liar's dividend</strong>: the benefit a dishonest actor gains simply from the existence of synthetic media, without faking anything themselves [1]. The technology corrodes trust in both directions, since fabrications can deceive and real proof can be dismissed. It is part of why provenance and verification tools matter for protecting truth, not just for catching fakes.
        </p>
      </section>

      <section aria-labelledby="misinfo-s3">
        <h2 id="misinfo-s3" className="font-heading font-semibold text-xl text-foreground mb-3">
          Provenance: proving what is real
        </h2>
        <p className="font-sans text-base text-foreground leading-relaxed">
          If detection alone cannot keep up, one promising defence runs the other way: attaching a verifiable record of where a piece of media came from. Standards such as <strong>C2PA content credentials</strong> add tamper-evident metadata describing an item's origin and edit history, so a viewer can check whether an image came from a real camera or a generator and what was changed afterwards [2]. This is about traceability, not a verdict. A missing credential does not prove a fake, and the approach only helps as adoption spreads, but it adds a useful layer of defence.
        </p>
      </section>

      <section aria-labelledby="misinfo-s4">
        <h2 id="misinfo-s4" className="font-heading font-semibold text-xl text-foreground mb-3">
          Hallucinated citations and confident errors
        </h2>
        <p className="font-sans text-base text-foreground leading-relaxed mb-3">
          AI language models produce text that sounds authoritative but may be entirely fabricated. A notorious example is the generation of fake academic citations: realistic-looking references complete with plausible author names, journal titles, volume numbers, and publication years, none of which exist. The AI is not deliberately lying; it is predicting what a citation in this context would look like, based on patterns in its training data [3].
        </p>
        <p className="font-sans text-base text-foreground leading-relaxed">
          If you use AI for research, verify every specific claim and every citation independently. If you cannot find a cited paper, assume it may not exist. This is not a temporary limitation, it is a structural property of systems that generate plausible text without a ground-truth lookup mechanism.
        </p>
      </section>

      <section aria-labelledby="misinfo-s5">
        <h2 id="misinfo-s5" className="font-heading font-semibold text-xl text-foreground mb-3">
          Why it spreads, and the simpler threat
        </h2>
        <p className="font-sans text-base text-foreground leading-relaxed mb-3">
          Social media recommendation algorithms optimise for engagement. A large study of roughly 126,000 stories on Twitter found that false news spread significantly farther, faster, and more broadly than the truth, in part because falsehoods were more novel and provoked stronger emotional reactions [4]. The algorithm does not "know" it is promoting false content; it rewards what gets clicked and shared. Our own <strong>confirmation bias</strong> compounds this, because a claim that fits what we already believe feels truer and more shareable, so the headlines we most want to pass on are often the ones most worth checking first.
        </p>
        <p className="font-sans text-base text-foreground leading-relaxed">
          It is also worth knowing that the biggest threat is usually not sophisticated AI fakery. Researchers find that most political misinformation is "cheap fakes": real images or clips that are miscaptioned, cropped, or pulled from a different event [5]. Fixating only on high-tech deepfakes can leave you unprepared for the simpler, more common trick. A related tactic is the use of AI to mass-produce articles on networks of sites, some dressed up to look like local news outlets, where sheer volume and a credible appearance can launder errors or agendas into something resembling reporting [6].
        </p>
      </section>

      <section aria-labelledby="misinfo-s6">
        <h2 id="misinfo-s6" className="font-heading font-semibold text-xl text-foreground mb-3">
          Two habits that actually work
        </h2>
        <p className="font-sans text-base text-foreground leading-relaxed mb-3">
          <strong>Lateral reading.</strong> Instead of scrutinising a suspect page on its own terms, leave it and open new tabs to see what independent, reputable sources say about the site, author, or claim. In a Stanford study, professional fact-checkers who read this way reached more accurate judgements in a fraction of the time, while historians and students who "read vertically," staying on the page, were often fooled by professional-looking design and official-sounding names [7]. The most effective personal defence is a pause before sharing: where did this come from, has it been independently verified, and am I sharing because it is true or because it made me feel something?
        </p>
        <p className="font-sans text-base text-foreground leading-relaxed mb-3">
          <strong>Prebunking.</strong> Resistance can be built in advance. Drawing on inoculation theory, briefly exposing people to the <em>techniques</em> of manipulation (false dilemmas, fake experts, emotional bait) before they encounter them in the wild helps them recognise and resist those tactics later, across many specific claims. Controlled studies and large field experiments have found that short prebunking videos measurably improve people's ability to spot manipulation [8]. It complements debunking, which corrects falsehoods one at a time after the fact.
        </p>
        <p className="font-sans text-base text-foreground leading-relaxed">
          Ready to test what you know?
        </p>
      </section>
    </TopicPageLayout>
  );
}
