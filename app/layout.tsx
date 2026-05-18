import type { Metadata } from "next";
import { Fredoka, Nunito } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI Literacy Quiz",
  description:
    "Test your knowledge of responsible AI use across privacy, education, jobs, bias, daily life, and misinformation.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fredoka.variable} ${nunito.variable} h-full`}
    >
      <body className="flex flex-col min-h-dvh font-sans antialiased bg-background text-foreground">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <footer className="border-t-[3px] border-border py-6 text-center text-sm text-muted-foreground font-sans">
          AI Literacy Quiz · University Final Project · 2025
        </footer>
      </body>
    </html>
  );
}
