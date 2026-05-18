"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Trophy,
  Shield,
  GraduationCap,
  Briefcase,
  Scale,
  Smartphone,
  AlertTriangle,
} from "lucide-react";
import { AuthButtons } from "./AuthButtons";

const topicLinks = [
  { label: "Privacy",        href: "/topics/privacy",        Icon: Shield,        accent: "text-violet-700" },
  { label: "Education",      href: "/topics/education",      Icon: GraduationCap, accent: "text-blue-700"   },
  { label: "Jobs",           href: "/topics/job-market",     Icon: Briefcase,     accent: "text-amber-700"  },
  { label: "Bias",           href: "/topics/bias",           Icon: Scale,         accent: "text-rose-700"   },
  { label: "Daily Life",     href: "/topics/everyday-life",  Icon: Smartphone,    accent: "text-emerald-700"},
  { label: "Misinformation", href: "/topics/misinformation", Icon: AlertTriangle, accent: "text-orange-700" },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="p-2 rounded-xl text-foreground hover:bg-muted transition-colors duration-150 cursor-pointer
                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
      </button>

      {open && (
        <div
          className="absolute top-full left-0 right-0 bg-card border-b-[3px] border-border
                     shadow-[0_4px_12px_rgba(0,0,0,0.08)] z-40 px-4 pb-6 pt-4
                     animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <nav aria-label="Mobile navigation">
            <p className="text-xs font-sans font-semibold text-muted-foreground uppercase tracking-wide mb-2 px-1">
              Topics
            </p>
            <ul className="space-y-1 mb-4">
              {topicLinks.map(({ label, href, Icon, accent }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl font-sans text-sm font-medium
                               text-foreground hover:bg-muted transition-colors duration-100 cursor-pointer"
                  >
                    <Icon size={16} aria-hidden="true" className={accent} />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="/leaderboard"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl font-sans text-sm font-medium
                         text-foreground hover:bg-muted transition-colors duration-100 cursor-pointer mb-4"
            >
              <Trophy size={16} aria-hidden="true" className="text-amber-600" />
              Leaderboard
            </Link>

            <div className="border-t-[2px] border-border pt-4">
              <AuthButtons />
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
