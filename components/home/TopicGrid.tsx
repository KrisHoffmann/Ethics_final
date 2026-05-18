import Link from "next/link";
import {
  Shield,
  GraduationCap,
  Briefcase,
  Scale,
  Smartphone,
  AlertTriangle,
} from "lucide-react";

const topics = [
  {
    label: "Privacy",
    href: "/topics/privacy",
    Icon: Shield,
    description: "Who sees your data? How AI handles — and sometimes mishandles — personal information.",
    cardCls: "bg-violet-50 border-violet-200 hover:border-violet-400",
    iconCls: "text-violet-600",
    textCls: "text-violet-800",
    mutedCls: "text-violet-600",
  },
  {
    label: "Education",
    href: "/topics/education",
    Icon: GraduationCap,
    description: "AI tutors, plagiarism, and what it really means to learn with a machine.",
    cardCls: "bg-blue-50 border-blue-200 hover:border-blue-400",
    iconCls: "text-blue-600",
    textCls: "text-blue-800",
    mutedCls: "text-blue-600",
  },
  {
    label: "Jobs",
    href: "/topics/job-market",
    Icon: Briefcase,
    description: "Which roles are at risk, which are emerging, and how to stay ahead.",
    cardCls: "bg-amber-50 border-amber-200 hover:border-amber-400",
    iconCls: "text-amber-600",
    textCls: "text-amber-800",
    mutedCls: "text-amber-600",
  },
  {
    label: "Bias",
    href: "/topics/bias",
    Icon: Scale,
    description: "AI inherits human biases — and sometimes amplifies them at massive scale.",
    cardCls: "bg-rose-50 border-rose-200 hover:border-rose-400",
    iconCls: "text-rose-600",
    textCls: "text-rose-800",
    mutedCls: "text-rose-600",
  },
  {
    label: "Daily Life",
    href: "/topics/everyday-life",
    Icon: Smartphone,
    description: "Recommendations, smart devices, navigation — AI is already shaping your day.",
    cardCls: "bg-emerald-50 border-emerald-200 hover:border-emerald-400",
    iconCls: "text-emerald-600",
    textCls: "text-emerald-800",
    mutedCls: "text-emerald-600",
  },
  {
    label: "Misinformation",
    href: "/topics/misinformation",
    Icon: AlertTriangle,
    description: "Deepfakes, hallucinations, and why AI makes the truth harder to verify.",
    cardCls: "bg-orange-50 border-orange-200 hover:border-orange-400",
    iconCls: "text-orange-600",
    textCls: "text-orange-800",
    mutedCls: "text-orange-600",
  },
];

export function TopicGrid() {
  return (
    <section aria-labelledby="topics-heading">
      <h2
        id="topics-heading"
        className="font-heading font-semibold text-2xl text-foreground mb-6 text-center"
      >
        Six topics to explore
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {topics.map(({ label, href, Icon, description, cardCls, iconCls, textCls, mutedCls }) => (
          <li key={href}>
            <Link
              href={href}
              className={`flex flex-col gap-3 p-5 rounded-2xl border-[3px] transition-all duration-200
                          shadow-[4px_4px_8px_rgba(0,0,0,0.08)] hover:shadow-[6px_6px_12px_rgba(0,0,0,0.12)]
                          active:scale-[0.98] cursor-pointer h-full
                          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
                          ${cardCls}`}
            >
              <Icon size={28} aria-hidden="true" className={iconCls} />
              <div>
                <p className={`font-heading font-semibold text-lg ${textCls}`}>{label}</p>
                <p className={`font-sans text-sm mt-1 leading-relaxed ${mutedCls}`}>{description}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
