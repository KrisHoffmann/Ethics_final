"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AuthCard } from "@/components/auth/AuthCard";
import { FieldError } from "@/components/auth/FieldError";
import { createClient } from "@/lib/supabase/client";

const USERNAME_RE = /^[a-zA-Z0-9_]{3,20}$/;

const inputCls =
  "w-full px-4 py-3 rounded-xl border-[3px] border-border bg-background font-sans text-base text-foreground " +
  "placeholder:text-muted-foreground transition-colors duration-150 " +
  "focus:outline-none focus:border-primary focus:ring-2 focus:ring-ring/30";

const btnCls =
  "w-full py-3 rounded-xl font-heading font-semibold text-base text-primary-foreground bg-primary " +
  "border-[3px] border-primary/80 min-h-[48px] " +
  "shadow-[4px_4px_8px_rgba(0,0,0,0.12),inset_-2px_-2px_8px_rgba(255,255,255,0.25)] " +
  "hover:shadow-[6px_6px_12px_rgba(0,0,0,0.15)] active:scale-95 transition-all duration-200 " +
  "disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100 cursor-pointer " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

export default function LoginPage() {
  const router = useRouter();
  const [usernameErr, setUsernameErr] = useState<string | null>(null);
  const [passwordErr, setPasswordErr] = useState<string | null>(null);
  const [generalErr, setGeneralErr]   = useState<string | null>(null);
  const [loading, setLoading]         = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setUsernameErr(null);
    setPasswordErr(null);
    setGeneralErr(null);

    const form     = e.currentTarget;
    const username = (form.elements.namedItem("username") as HTMLInputElement).value.trim();
    const password = (form.elements.namedItem("password") as HTMLInputElement).value;

    let valid = true;
    if (!USERNAME_RE.test(username)) {
      setUsernameErr("Username must be 3–20 characters: letters, numbers, or underscore.");
      valid = false;
    }
    if (password.length < 8) {
      setPasswordErr("Password must be at least 8 characters.");
      valid = false;
    }
    if (!valid) return;

    setLoading(true);
    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({
      email: `${username}@quizapp.local`,
      password,
    });
    setLoading(false);

    if (error) {
      setGeneralErr("Incorrect username or password. Please try again.");
      return;
    }

    router.push("/");
    router.refresh();
  }

  return (
    <AuthCard
      title="Welcome back"
      subtitle="Enter your username and password to continue."
    >
      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
        <div>
          <label htmlFor="username" className="block font-sans text-sm font-semibold text-foreground mb-1">
            Username
          </label>
          <input
            id="username"
            name="username"
            type="text"
            autoComplete="username"
            autoCapitalize="none"
            spellCheck={false}
            required
            aria-describedby={usernameErr ? "username-error" : undefined}
            aria-invalid={!!usernameErr}
            className={inputCls}
            placeholder="your_username"
          />
          <FieldError message={usernameErr} id="username-error" />
        </div>

        <div>
          <label htmlFor="password" className="block font-sans text-sm font-semibold text-foreground mb-1">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            aria-describedby={passwordErr ? "password-error" : undefined}
            aria-invalid={!!passwordErr}
            className={inputCls}
            placeholder="••••••••"
          />
          <FieldError message={passwordErr} id="password-error" />
        </div>

        {generalErr && (
          <p role="alert" className="text-sm font-sans text-destructive text-center">
            {generalErr}
          </p>
        )}

        <button type="submit" disabled={loading} className={btnCls}>
          {loading ? "Logging in…" : "Log in"}
        </button>
      </form>

      <p className="text-center font-sans text-sm text-muted-foreground">
        No account?{" "}
        <Link
          href="/register"
          className="font-semibold text-primary hover:underline
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 rounded"
        >
          Register here
        </Link>
      </p>
    </AuthCard>
  );
}
