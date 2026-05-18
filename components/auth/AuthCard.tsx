import type { ReactNode } from "react";

interface AuthCardProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

export function AuthCard({ title, subtitle, children }: AuthCardProps) {
  return (
    <div className="min-h-[calc(100dvh-10rem)] flex items-center justify-center px-4 py-12">
      <div
        className="w-full max-w-sm bg-card rounded-3xl border-[3px] border-border
                   shadow-[4px_4px_8px_rgba(0,0,0,0.10),inset_-2px_-2px_8px_rgba(255,255,255,0.5)]
                   p-8 flex flex-col gap-6"
      >
        <div className="text-center">
          <h1 className="font-heading font-bold text-2xl text-foreground">{title}</h1>
          <p className="font-sans text-sm text-muted-foreground mt-1">{subtitle}</p>
        </div>
        {children}
      </div>
    </div>
  );
}
