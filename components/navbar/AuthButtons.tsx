"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { User, LogOut } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import type { User as SupabaseUser } from "@supabase/supabase-js";

export function AuthButtons() {
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const supabase = createClient();

    async function loadUser() {
      const { data: { user: currentUser } } = await supabase.auth.getUser();
      setUser(currentUser);

      if (currentUser) {
        const { data } = await supabase
          .from("profiles")
          .select("username")
          .eq("id", currentUser.id)
          .single();
        setUsername(data?.username ?? null);
      }
      setLoading(false);
    }

    loadUser();

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (!session?.user) setUsername(null);
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    window.location.href = "/";
  }

  if (loading) {
    return <div className="w-32 h-9 rounded-xl bg-muted animate-pulse" aria-hidden="true" />;
  }

  if (user) {
    return (
      <div className="flex items-center gap-3">
        <span className="flex items-center gap-1.5 font-sans text-sm font-semibold text-foreground">
          <User size={16} aria-hidden="true" className="text-primary" />
          {username ?? "Player"}
        </span>
        <button
          onClick={handleLogout}
          aria-label="Log out"
          className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-sans font-semibold
                     text-muted-foreground border-[2px] border-border hover:border-destructive
                     hover:text-destructive transition-colors duration-150 cursor-pointer
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <LogOut size={15} aria-hidden="true" />
          Log out
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <Link
        href="/login"
        className="px-4 py-2 rounded-xl text-sm font-sans font-semibold text-primary
                   border-[2px] border-primary/40 hover:bg-primary/10 transition-colors duration-150
                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        Log in
      </Link>
      <Link
        href="/register"
        className="px-4 py-2 rounded-xl text-sm font-sans font-semibold text-primary-foreground
                   bg-primary border-[3px] border-primary/80
                   shadow-[4px_4px_8px_rgba(0,0,0,0.12),inset_-2px_-2px_8px_rgba(255,255,255,0.25)]
                   hover:shadow-[6px_6px_12px_rgba(0,0,0,0.15)]
                   active:scale-95 transition-all duration-200
                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        Register
      </Link>
    </div>
  );
}
