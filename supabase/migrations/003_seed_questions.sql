-- Migration 003: seed question pool
-- 5+ questions per topic (30 total). Content reviewed for accuracy.
-- All question content lives here — never hardcoded in frontend files.
-- Tone: second person, conversational, concrete examples (per PROJECT_PLAN.md §12).

INSERT INTO questions (topic, difficulty, question_text, options, correct_id, explanation) VALUES

-- ── PRIVACY (6 questions) ────────────────────────────────────────────────────

('privacy', 1,
 'You ask a free AI chatbot to help draft a message to your doctor. What should you keep in mind?',
 '[{"id":"A","text":"Free AI tools are legally required to keep medical conversations confidential"},{"id":"B","text":"Your conversation may be stored and used to train future models"},{"id":"C","text":"The AI encrypts your message the same way a hospital does"},{"id":"D","text":"Chatbots cannot read or remember what you type"}]',
 'B',
 'Most free AI chatbots store your chats and may use them for training unless you opt out. Avoid sharing sensitive personal or medical details with AI tools that have unclear privacy policies. Check the privacy settings of any tool before typing something you wouldn''t want a stranger to read.'
),

('privacy', 1,
 'A new AI app asks for access to your camera, contacts, and location — but it''s advertised as a simple text summariser. What''s the most sensible response?',
 '[{"id":"A","text":"Grant all permissions — modern apps need them to function properly"},{"id":"B","text":"Deny all permissions and stop using the app"},{"id":"C","text":"Only grant permissions the app genuinely needs; deny the rest"},{"id":"D","text":"Permissions don''t affect privacy, so it doesn''t matter"}]',
 'C',
 'Excessive permission requests are a red flag. A text summariser has no technical need for your camera or contacts. Granting unnecessary permissions gives companies — or hackers who breach them — access to sensitive data. The principle is: grant the minimum needed, nothing more.'
),

('privacy', 2,
 'An AI system in your country''s job centres automatically screens CVs and flags applicants as "low priority" before any human sees them. Which privacy concern does this raise?',
 '[{"id":"A","text":"The AI might reject people without them ever knowing or being able to appeal"},{"id":"B","text":"The AI will share CV data on social media"},{"id":"C","text":"Job centres are not allowed to use computers for screening"},{"id":"D","text":"This is fine because algorithms are more objective than humans"}]',
 'A',
 'Automated decision-making that affects people''s lives — like job applications — raises serious fairness and transparency concerns. Under the EU''s GDPR, you generally have the right to know when a decision about you was made solely by an algorithm and to request human review. Invisible rejection with no appeal route is a significant privacy and rights issue.'
),

('privacy', 2,
 'Your school uses an AI proctoring tool that watches you through your webcam during online exams. What is a legitimate concern?',
 '[{"id":"A","text":"The tool might record your home environment, revealing personal details about your life"},{"id":"B","text":"AI proctors are illegal everywhere in the EU"},{"id":"C","text":"The tool will automatically share your video with classmates"},{"id":"D","text":"Webcam footage cannot be stored digitally"}]',
 'A',
 'AI proctoring tools capture video and audio of your home, which can unintentionally reveal socioeconomic status, family situation, or religious items. That data is often stored by a third-party company. Legitimate concerns include who can access that footage, how long it''s kept, and whether the analysis is accurate for all students equally.'
),

('privacy', 2,
 'A fitness app uses AI to analyse your sleep and heart rate data. The app is free. Why might this be a privacy risk?',
 '[{"id":"A","text":"Health data is a valuable commodity that may be sold to insurers or advertisers"},{"id":"B","text":"The AI will share your data with your family doctor automatically"},{"id":"C","text":"Free apps are required by law to delete your data weekly"},{"id":"D","text":"Heart rate data is not considered personal data under any privacy law"}]',
 'A',
 '"If you''re not paying, you''re the product." Health and biometric data is among the most sensitive personal data. It can be sold to data brokers, used by insurers to adjust premiums, or targeted by advertisers. Always read the privacy policy of health apps — particularly what they do with data in aggregate or anonymised form.'
),

('privacy', 3,
 'What does "differential privacy" mean when an AI company claims they use it?',
 '[{"id":"A","text":"They treat premium users'' data differently from free users'' data"},{"id":"B","text":"They add mathematical noise to datasets so individuals cannot be identified, even from aggregate statistics"},{"id":"C","text":"Only engineers with different clearance levels can access your data"},{"id":"D","text":"Your data is stored in a different country from where you live"}]',
 'B',
 'Differential privacy is a mathematical technique that adds carefully calibrated noise to data or query results. This means a company can train an AI or publish statistics without being able to identify any specific individual in the dataset — even if an attacker has other information about that person. It''s a concrete, verifiable privacy protection.'
),

-- ── EDUCATION (6 questions) ──────────────────────────────────────────────────

('education', 1,
 'A student submits an essay that was entirely written by an AI chatbot. What is the main ethical problem?',
 '[{"id":"A","text":"The essay might contain good ideas the student did not have"},{"id":"B","text":"The student misrepresents AI-generated work as their own, which is dishonest and defeats the purpose of learning"},{"id":"C","text":"AI essays are always factually wrong"},{"id":"D","text":"Teachers cannot detect AI writing, so there is no real problem"}]',
 'B',
 'Submitting AI-generated work as your own is a form of academic dishonesty — it misrepresents what you know and can do. More practically, the purpose of assignments is to build skills: writing, thinking, research. Using AI to skip that process means skipping the learning. Most institutions now have explicit AI-use policies that distinguish permitted assistance from plagiarism.'
),

('education', 1,
 'You use an AI chatbot to help you study for an exam. It confidently explains a concept, but later you discover the explanation was wrong. What does this illustrate?',
 '[{"id":"A","text":"AI chatbots are useless for studying"},{"id":"B","text":"AI can produce plausible-sounding but incorrect information — always verify important facts"},{"id":"C","text":"The chatbot was deliberately trying to mislead you"},{"id":"D","text":"Only older AI models make factual errors"}]',
 'B',
 'AI language models sometimes "hallucinate" — they generate confident, fluent text that is factually wrong. This happens because they predict plausible-sounding responses rather than look up verified facts. When using AI for studying, treat it as a starting point, not a final authority. Check important claims against textbooks, official sources, or your teacher.'
),

('education', 2,
 'An AI tutoring app adapts its lessons based on your past answers. Which is a genuine benefit of this approach?',
 '[{"id":"A","text":"The app can give you a grade that replaces your teacher''s assessment"},{"id":"B","text":"It can identify gaps in your knowledge and focus practice where you actually need it"},{"id":"C","text":"Adaptive AI always teaches better than any human teacher"},{"id":"D","text":"It makes every student''s learning path identical for fairness"}]',
 'B',
 'Adaptive learning AI can track which concepts you struggle with and serve more practice in those areas — personalisation that would be hard for one teacher managing 30 students. However, it''s a supplement, not a replacement. Human teachers provide mentorship, motivation, emotional support, and real-world context that AI currently cannot replicate.'
),

('education', 2,
 'Some universities are experimenting with AI that predicts which students are likely to drop out. If a student is flagged as "high dropout risk," what is a key concern?',
 '[{"id":"A","text":"The prediction might be self-fulfilling: reduced support or stigma could cause the very outcome predicted"},{"id":"B","text":"The AI will automatically expel high-risk students"},{"id":"C","text":"Dropout predictions are always 100% accurate"},{"id":"D","text":"This is fine because it helps universities save money"}]',
 'A',
 'Predictive systems can create self-fulfilling prophecies. If a student is labelled "at risk" and as a result receives less attention or is tracked into lower-expectation programmes, the label can cause the very outcome it predicted. There''s also the risk of bias: if historical dropout data reflects systemic inequality, the AI will replicate that inequality at scale.'
),

('education', 2,
 'Which of the following is a recommended way to use AI ethically when writing an assignment?',
 '[{"id":"A","text":"Use AI to generate your argument, then edit the wording slightly"},{"id":"B","text":"Use AI to brainstorm ideas and check your draft for clarity, but write the argument yourself"},{"id":"C","text":"Use AI for everything and declare it only if your teacher specifically asks"},{"id":"D","text":"Never use AI tools at all, even for grammar checking"}]',
 'B',
 'Ethical AI use in education means using it as a thinking partner rather than a ghostwriter. Brainstorming, checking grammar, getting explanations of concepts — these support your own work. Writing your argument, drawing your own conclusions, and presenting that as your own is legitimate. Always follow your institution''s specific AI policy and disclose use when required.'
),

('education', 3,
 'A school district replaces human career counsellors with an AI that recommends subjects and career paths. What structural risk does this introduce?',
 '[{"id":"A","text":"Students will enjoy school more with AI counsellors"},{"id":"B","text":"The AI may replicate historical biases in career data, steering certain groups away from high-earning professions"},{"id":"C","text":"Human counsellors are always biased while AI is perfectly neutral"},{"id":"D","text":"Career counselling does not benefit from any human input"}]',
 'B',
 'AI trained on historical career data will reflect historical patterns — including gender, racial, and class-based barriers that kept certain groups out of certain fields. An AI counsellor might, for example, recommend fewer girls toward engineering not because they''re less capable, but because the training data contains fewer female engineers. Human counsellors can consciously counteract these patterns; AI often amplifies them.'
),

-- ── JOB MARKET (5 questions) ─────────────────────────────────────────────────

('job_market', 1,
 'Which jobs are most at risk of being fully automated by AI in the near future?',
 '[{"id":"A","text":"Jobs involving only repetitive, rule-based tasks with predictable inputs"},{"id":"B","text":"All jobs without exception will be automated within 5 years"},{"id":"C","text":"Only jobs in the technology sector"},{"id":"D","text":"Creative and caring professions, because AI is best at emotional tasks"}]',
 'A',
 'Automation historically — and AI currently — is most effective at replacing tasks that are repetitive, rule-based, and predictable: data entry, basic customer service scripts, some accounting tasks, assembly line work. Jobs requiring creativity, complex social judgment, physical dexterity in varied environments, or emotional intelligence are harder to automate. Most jobs involve a mix; AI tends to automate specific tasks within a job rather than the entire role.'
),

('job_market', 1,
 'An employer uses an AI to screen CVs and shortlist candidates. The AI was trained on the company''s past successful hires. What is a likely flaw in this approach?',
 '[{"id":"A","text":"AI cannot read PDFs, so it will miss most CVs"},{"id":"B","text":"If past hires were demographically homogeneous, the AI will favour similar candidates and disadvantage others"},{"id":"C","text":"AI screening is legally required in most countries"},{"id":"D","text":"AI will always score candidates higher than human recruiters would"}]',
 'B',
 'Training an AI on historical hiring decisions encodes the biases of those decisions. Amazon famously scrapped an AI hiring tool after discovering it systematically downgraded CVs containing the word "women''s" (as in "women''s chess club"). The AI had learned that men were historically hired more, and generalised that pattern. Biased inputs produce biased outputs, regardless of how sophisticated the model is.'
),

('job_market', 2,
 'What does "human-in-the-loop" mean in the context of AI-assisted hiring?',
 '[{"id":"A","text":"A human must physically type all job descriptions into the AI"},{"id":"B","text":"A human reviews and can override AI decisions before they become final"},{"id":"C","text":"Only humans, not AI, are allowed to participate in hiring"},{"id":"D","text":"The AI watches humans conduct interviews and scores them"}]',
 'B',
 '"Human-in-the-loop" means keeping a human decision-maker in the process who can review, question, and override AI recommendations. It''s a safety mechanism for high-stakes decisions like hiring, lending, or medical diagnosis. Without it, automated systems can cause harm at scale — rejecting thousands of qualified candidates, for example — without any accountability or correction mechanism.'
),

('job_market', 2,
 'AI is increasingly used to monitor remote workers — tracking keystrokes, screenshots, and webcam activity. What is the main concern with this?',
 '[{"id":"A","text":"Workers will become more productive once they know they are monitored"},{"id":"B","text":"Constant surveillance damages trust, causes stress, and may measure activity rather than actual productivity"},{"id":"C","text":"This type of monitoring is only legal outside the EU"},{"id":"D","text":"AI monitoring tools are always accurate at detecting low performance"}]',
 'B',
 'Surveillance capitalism in the workplace creates a fundamental tension: employees feel distrusted and stressed, which research shows reduces creativity and collaboration. More practically, activity metrics (keystrokes per minute, time on screen) often measure busywork rather than meaningful output. A developer thinking through a hard problem may type little while doing valuable work. Measurement shapes behaviour — workers optimise for what is measured, not what matters.'
),

('job_market', 3,
 'In the next decade, AI is likely to create new jobs as well as displace existing ones. Which of the following new roles is already emerging due to AI?',
 '[{"id":"A","text":"Prompt engineer — designing and refining AI instructions to get useful outputs"},{"id":"B","text":"Data historian — manually re-entering old data into new systems"},{"id":"C","text":"Algorithm poet — writing creative descriptions of how algorithms feel"},{"id":"D","text":"AI ethicist is not a real job title"}]',
 'A',
 'Prompt engineering — crafting effective inputs for large language models — has emerged as a genuine skill set and job title. Other new roles include AI trainers (who label data), AI auditors (who test systems for bias and failure), and machine learning engineers. History suggests technology creates new job categories over time, but the transition period can be disruptive for workers in displaced roles, particularly those with fewer resources to retrain.'
),

-- ── BIAS (5 questions) ───────────────────────────────────────────────────────

('bias', 1,
 'An AI image generator, when asked to create images of "a doctor," almost always generates images of men. What does this reveal?',
 '[{"id":"A","text":"Doctors are statistically mostly men, so the AI is correct"},{"id":"B","text":"The AI was trained on image data that overrepresents men in doctor roles, and it has learned that association"},{"id":"C","text":"The AI is deliberately programmed to be sexist"},{"id":"D","text":"Image generators cannot depict women in professional roles"}]',
 'B',
 'AI systems learn patterns from their training data. If internet images of doctors skew male — because of historical and ongoing gender imbalance, or because certain stock photo libraries are biased — the AI learns that association and replicates it. This isn''t deliberate programming; it''s the model faithfully reflecting (and amplifying) the biases in its training data. The fix requires more diverse training data and explicit debiasing techniques.'
),

('bias', 1,
 'A facial recognition system is tested on a dataset of mostly light-skinned faces. What is the likely result when it''s deployed in the real world?',
 '[{"id":"A","text":"It will work equally well for everyone because the algorithm is the same"},{"id":"B","text":"It will be less accurate for people with darker skin tones, who were underrepresented in training"},{"id":"C","text":"It will automatically update itself to become more accurate"},{"id":"D","text":"Skin tone does not affect facial recognition accuracy"}]',
 'B',
 'This is a documented, real-world problem. MIT researcher Joy Buolamwini found that commercial facial recognition tools had error rates up to 34% higher for dark-skinned women compared to light-skinned men. The cause: training datasets dominated by lighter-skinned faces. The AI becomes less accurate for groups it has seen less of. When deployed in high-stakes contexts — like policing — this translates directly into harm for specific communities.'
),

('bias', 2,
 'A bank uses an AI to decide who gets approved for a loan. The AI was not given applicants'' race as an input variable. Can it still discriminate by race?',
 '[{"id":"A","text":"No — if race is not an input, the AI cannot possibly consider it"},{"id":"B","text":"Yes — other variables like postcode, income history, and education can act as proxies for race due to historical inequality"},{"id":"C","text":"Yes — all AI systems are secretly given race data"},{"id":"D","text":"It depends on whether the bank is publicly or privately owned"}]',
 'B',
 'This is the "proxy discrimination" problem. Variables like postcode correlate strongly with race due to historical housing segregation. Income history correlates with race due to wage inequality. Education correlates with race due to unequal access. An AI that uses these variables will produce racially disparate outcomes even without being told anyone''s race. Removing the race variable is not sufficient — you need to audit the model''s actual outcomes across demographic groups.'
),

('bias', 2,
 'What is "algorithmic accountability" and why does it matter?',
 '[{"id":"A","text":"The idea that algorithms should pay fines when they make mistakes"},{"id":"B","text":"The principle that organisations using AI for consequential decisions should be able to explain, audit, and be held responsible for those decisions"},{"id":"C","text":"A technical requirement that all algorithms must be open source"},{"id":"D","text":"A legal standard requiring AI to achieve 100% accuracy"}]',
 'B',
 'Algorithmic accountability means that when an AI system makes decisions that affect people — loan approvals, parole recommendations, job screenings — the organisations deploying them must be able to explain how decisions are made, allow independent audits of outcomes, and bear responsibility when the system causes harm. Without accountability, automated systems can cause discrimination at scale with no recourse for those harmed.'
),

('bias', 3,
 'Which approach best reduces demographic bias in an AI hiring tool?',
 '[{"id":"A","text":"Remove all demographic information from CVs before the AI sees them"},{"id":"B","text":"Audit the AI''s actual hiring outcomes across demographic groups, and use diverse training data alongside technical debiasing methods"},{"id":"C","text":"Ask the AI to promise not to be biased"},{"id":"D","text":"Only use the AI to screen applicants from majority groups"}]',
 'B',
 'Removing demographic variables (option A, "blinding") is necessary but not sufficient because of proxy variables. Comprehensive bias reduction requires: diverse and representative training data, testing outcomes across demographic groups (not just overall accuracy), technical debiasing interventions, and ongoing human auditing after deployment. Bias in AI is not a one-time fix but an ongoing process of measurement and correction.'
),

-- ── EVERYDAY LIFE (4 questions) ──────────────────────────────────────────────

('everyday_life', 1,
 'You notice that your streaming service''s AI recommendation engine keeps suggesting the same types of content. What is this an example of?',
 '[{"id":"A","text":"A filter bubble — the algorithm optimises for engagement and narrows what you are exposed to"},{"id":"B","text":"The algorithm randomly selecting content to show you"},{"id":"C","text":"The streaming service running out of new content to suggest"},{"id":"D","text":"Your device''s storage being full"}]',
 'A',
 'Recommendation algorithms optimise for engagement — clicks, watch time, likes. Over time, they learn what keeps you on the platform and serve more of it, gradually narrowing the variety of content you see. This "filter bubble" can limit your exposure to different perspectives, genres, or viewpoints. Actively searching for content outside your usual patterns — or using the service''s diversity features — helps counteract this.'
),

('everyday_life', 1,
 'An AI assistant on your phone suggests you call your mum because "you haven''t spoken in 12 days." How does it know this?',
 '[{"id":"A","text":"It randomly generates suggestions based on common social habits"},{"id":"B","text":"It analyses your call history, messages, and contact frequency to infer your social patterns"},{"id":"C","text":"Your mum contacted the AI service directly"},{"id":"D","text":"AI assistants cannot access call logs under any circumstances"}]',
 'B',
 'Modern AI assistants integrate with your phone''s data — call logs, messages, calendar, location history — to provide contextual suggestions. This requires significant data access, which is why permissions matter. The functionality can be genuinely useful, but it means your device is continuously analysing your personal communication patterns. Understanding what data your AI assistant accesses helps you make informed choices about the trade-off between convenience and privacy.'
),

('everyday_life', 2,
 'You use an AI navigation app that suggests a route through a quiet residential area to save 3 minutes. What broader issue does this raise?',
 '[{"id":"A","text":"AI navigation apps are not allowed to suggest residential roads"},{"id":"B","text":"When millions of users follow AI route suggestions, traffic and noise can be pushed into communities that didn''t choose to be cut-through zones"},{"id":"C","text":"The app is malfunctioning if it avoids main roads"},{"id":"D","text":"AI navigation only considers the individual user, so there are no broader effects"}]',
 'B',
 'AI systems optimise for their individual user''s goal, but when millions of people use the same system, individual optimisations aggregate into collective impacts. Waze and similar apps have demonstrably pushed traffic into quiet residential streets, disrupting communities. This is an example of why individual-level AI decisions can have unintended societal effects — a key challenge in AI ethics that goes beyond individual privacy or fairness.'
),

('everyday_life', 2,
 'Smart home devices with AI assistants are always listening for a wake word. What is a privacy consideration this raises?',
 '[{"id":"A","text":"The devices might accidentally record conversations not intended for them, which are then processed on company servers"},{"id":"B","text":"Smart devices cannot connect to the internet, so data stays local"},{"id":"C","text":"Wake word detection happens only when you are actively using the device"},{"id":"D","text":"All smart home data is automatically deleted after 24 hours"}]',
 'A',
 'Always-on microphones occasionally trigger on sounds that resemble the wake word, leading to accidental recordings. These audio clips are sent to company servers for processing. Major tech companies have admitted that human reviewers listen to some of these clips to improve accuracy. This means snippets of private home conversations can reach third parties. Users can mitigate this by reviewing and deleting voice history, using physical mute buttons, and understanding their device''s privacy settings.'
),

-- ── MISINFORMATION (4 questions) ─────────────────────────────────────────────

('misinformation', 1,
 'A video circulates online showing a politician saying something shocking. The video looks completely realistic. What is the first thing you should do?',
 '[{"id":"A","text":"Share it immediately so others can see the shocking statement"},{"id":"B","text":"Check whether the video has been verified by credible news organisations before sharing"},{"id":"C","text":"Report it to the politician''s office"},{"id":"D","text":"Assume it''s real because it looks realistic"}]',
 'B',
 'Deepfake technology can produce highly realistic videos of people saying things they never said. The realistic appearance of a video is not evidence of its authenticity. Before sharing potentially inflammatory content, check whether credible news organisations have independently verified it. Fact-checking organisations (e.g. FactCheck.org, AFP Fact Check) and reverse image/video search tools can help. Sharing unverified shocking content amplifies harm even if you later delete it.'
),

('misinformation', 1,
 'An AI chatbot gives you a confident answer with a citation to an academic paper. You search for the paper and cannot find it. What most likely happened?',
 '[{"id":"A","text":"The paper was deleted from the internet after the AI was trained"},{"id":"B","text":"The AI hallucinated the citation — it generated a plausible-sounding reference that does not exist"},{"id":"C","text":"You are searching the wrong database"},{"id":"D","text":"AI chatbots are legally required to only cite real papers"}]',
 'B',
 'AI language models frequently "hallucinate" citations — generating realistic-looking academic references (complete with plausible authors, journal names, volume numbers, and publication years) that do not exist. This is a serious problem for research use. Always verify citations independently before using them. If you can''t find the paper, assume it may not exist and look for real sources supporting the same claim.'
),

('misinformation', 2,
 'Social media platforms use AI to recommend content. How can this contribute to the spread of misinformation?',
 '[{"id":"A","text":"AI algorithms deliberately promote false content to cause harm"},{"id":"B","text":"Engagement-optimised algorithms amplify emotionally provocative content, which often includes misinformation, because it gets more clicks and shares"},{"id":"C","text":"AI can detect and block all misinformation before it spreads"},{"id":"D","text":"Misinformation only spreads through direct messages, not recommendations"}]',
 'B',
 'Recommendation algorithms optimise for engagement metrics — likes, shares, watch time. Research consistently shows that emotionally charged, surprising, or outrage-inducing content gets more engagement. Misinformation often has these properties (it tends to be sensational or confirms strong existing beliefs). The algorithm doesn''t "know" or "want" to spread misinformation — it just rewards engagement, and misinformation tends to be engaging. This is a structural problem, not a deliberate one.'
),

('misinformation', 2,
 'Which skill is most useful for evaluating whether an AI-generated image is real or fabricated?',
 '[{"id":"A","text":"Counting the number of colours in the image"},{"id":"B","text":"Looking for artefacts like unnatural hands, mismatched lighting, or inconsistent text, and checking metadata and original source"},{"id":"C","text":"Assuming any image shared by friends is real"},{"id":"D","text":"Only images with watermarks are AI-generated"}]',
 'B',
 'AI-generated images have characteristic failure modes: hands often have the wrong number of fingers, text in images is frequently garbled, backgrounds can have repeating or incoherent patterns, and lighting sometimes doesn''t match across the image. Beyond visual inspection, tools like Google reverse image search can trace an image''s origin, and metadata (when not stripped) can reveal generation software. No single method is foolproof — a combination of approaches is most reliable.'
);
