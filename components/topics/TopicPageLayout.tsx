import type { ReactNode, ElementType } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface TopicPageLayoutProps {
  title: string;
  subtitle: string;
  Icon: ElementType;
  headerCls: string;
  iconCls: string;
  children: ReactNode;
}

export function TopicPageLayout({
  title,
  subtitle,
  Icon,
  headerCls,
  iconCls,
  children,
}: TopicPageLayoutProps) {
  return (
    <article>
      {/* Topic hero header */}
      <div className={`w-full py-12 px-4 sm:px-6 ${headerCls}`}>
        <div className="max-w-2xl mx-auto flex flex-col items-center text-center gap-4">
          <Icon size={48} aria-hidden="true" className={iconCls} />
          <h1 className="font-heading font-bold text-3xl sm:text-4xl">{title}</h1>
          <p className="font-sans text-base leading-relaxed max-w-lg opacity-90">{subtitle}</p>
        </div>
      </div>

      {/* Prose content */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10 flex flex-col gap-8">
        {children}

        {/* CTA */}
        <div className="border-t-[3px] border-border pt-8 flex flex-col items-center gap-3 text-center">
          <p className="font-sans text-base text-muted-foreground">
            Ready to test what you know?
          </p>
          <Link
            href="/play"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-heading font-semibold text-base
                       text-primary-foreground bg-primary border-[3px] border-primary/80 min-h-[48px]
                       shadow-[4px_4px_8px_rgba(0,0,0,0.12),inset_-2px_-2px_8px_rgba(255,255,255,0.25)]
                       hover:shadow-[6px_6px_12px_rgba(0,0,0,0.15)] active:scale-95 transition-all duration-200
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            Play the quiz
            <ChevronRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
