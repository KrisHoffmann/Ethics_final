import Link from "next/link";
import { Trophy } from "lucide-react";
import { TopicsDropdown } from "./navbar/TopicsDropdown";
import { AuthButtons } from "./navbar/AuthButtons";
import { MobileMenu } from "./navbar/MobileMenu";

export function Navbar() {
  return (
    <header
      className="sticky top-0 z-40 bg-card/90 backdrop-blur-sm
                 border-b-[3px] border-border shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="font-heading font-bold text-xl text-primary hover:text-primary/80
                       transition-colors duration-150
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-lg"
          >
            AI Quiz
          </Link>

          {/* Desktop nav */}
          <nav
            aria-label="Main navigation"
            className="hidden md:flex items-center gap-1"
          >
            <TopicsDropdown />
            <Link
              href="/leaderboard"
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl font-sans font-semibold text-sm
                         text-foreground hover:bg-muted transition-colors duration-150
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <Trophy size={16} aria-hidden="true" className="text-amber-600" />
              Leaderboard
            </Link>
          </nav>

          {/* Desktop auth + mobile hamburger */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex">
              <AuthButtons />
            </div>
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
