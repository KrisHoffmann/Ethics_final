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

export default function RegisterPage() {
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

    // Client-side validation
    let valid = true;
    if (!USERNAME_RE.test(username)) {
      setUsernameErr("3–20 characters: letters, numbers, or underscore only.");
      valid = false;
    }
    if (password.length < 8) {
      setPasswordErr("Password must be at least 8 characters.");
      valid = false;
    }
    if (!valid) return;

    setLoading(true);
    const supabase = createClient();

    // Check username uniqueness before creating auth user to avoid orphaned auth records
    const { data: existing } = await supabase
      .from("profiles")
      .select("username")
      .eq("username", username)
      .maybeSingle();

    if (existing) {
      setUsernameErr("That username is already taken. Please choose another.");
      setLoading(false);
      return;
    }

    const { data, error: signUpError } = await supabase.auth.signUp({
      email: `${username}@quizapp.local`,
      password,
    });

    if (signUpError || !data.user) {
      setGeneralErr(signUpError?.message ?? "Registration failed. Please try again.");
      setLoading(false);
      return;
    }

    // Insert profile row
    const { error: profileError } = await supabase
      .from("profiles")
      .insert({ id: data.user.id, username, best_streak: 0 });

    if (profileError) {
      // Auth user created but profile failed — surface the error
      setGeneralErr("Account created but profile setup failed. Please contact support.");
      setLoading(false);
      return;
    }

    setLoading(false);
    router.push("/play");
    router.refresh();
  }

  return (
    <AuthCard
      title="Create your account"
      subtitle="Pick a username and password — no email needed."
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
            aria-describedby="username-hint username-error"
            aria-invalid={!!usernameErr}
            className={inputCls}
            placeholder="cool_username"
          />
          <p id="username-hint" className="text-xs font-sans text-muted-foreground mt-1">
            3–20 characters: letters, numbers, underscore
          </p>
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
            autoComplete="new-password"
            required
            aria-describedby="password-hint password-error"
            aria-invalid={!!passwordErr}
            className={inputCls}
            placeholder="••••••••"
          />
          <p id="password-hint" className="text-xs font-sans text-muted-foreground mt-1">
            At least 8 characters
          </p>
          <FieldError message={passwordErr} id="password-error" />
        </div>

        {generalErr && (
          <p role="alert" className="text-sm font-sans text-destructive text-center">
            {generalErr}
          </p>
        )}

        <button type="submit" disabled={loading} className={btnCls}>
          {loading ? "Creating account…" : "Create account"}
        </button>
      </form>

      <p className="text-center font-sans text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-semibold text-primary hover:underline
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 rounded"
        >
          Log in
        </Link>
      </p>
    </AuthCard>
  );
}
