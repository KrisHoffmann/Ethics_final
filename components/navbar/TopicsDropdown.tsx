"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  Shield,
  GraduationCap,
  Briefcase,
  Scale,
  Smartphone,
  AlertTriangle,
  ChevronDown,
} from "lucide-react";

const topics = [
  { label: "Privacy",         href: "/topics/privacy",       Icon: Shield,        accent: "text-violet-700" },
  { label: "Education",       href: "/topics/education",     Icon: GraduationCap, accent: "text-blue-700"   },
  { label: "Jobs",            href: "/topics/job-market",    Icon: Briefcase,     accent: "text-amber-700"  },
  { label: "Bias",            href: "/topics/bias",          Icon: Scale,         accent: "text-rose-700"   },
  { label: "Daily Life",      href: "/topics/everyday-life", Icon: Smartphone,    accent: "text-emerald-700"},
  { label: "Misinformation",  href: "/topics/misinformation",Icon: AlertTriangle, accent: "text-orange-700" },
];

export function TopicsDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="true"
        className="flex items-center gap-1 px-3 py-2 rounded-xl font-sans font-semibold text-sm
                   text-foreground hover:bg-muted transition-colors duration-150 cursor-pointer
                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        Topics
        <ChevronDown
          size={16}
          aria-hidden="true"
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute top-full left-0 mt-2 w-52 bg-card rounded-2xl border-[3px] border-border
                     shadow-[4px_4px_8px_rgba(0,0,0,0.12)] z-50 overflow-hidden
                     animate-in fade-in slide-in-from-top-2 duration-150"
        >
          {topics.map(({ label, href, Icon, accent }) => (
            <Link
              key={href}
              href={href}
              role="menuitem"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-4 py-3 font-sans text-sm font-medium
                         text-foreground hover:bg-muted transition-colors duration-100 cursor-pointer
                         focus-visible:outline-none focus-visible:bg-muted"
            >
              <Icon size={16} aria-hidden="true" className={accent} />
              {label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
