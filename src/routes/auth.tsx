import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";

import { CloverMark } from "@/components/CloverMark";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Sign in to Clovely · Personality-first dating" },
      {
        name: "description",
        content:
          "Sign in or create your Clovely profile with Google, Apple, or email to start personality-first, voice-led dating.",
      },
      { property: "og:title", content: "Sign in to Clovely" },
      {
        property: "og:description",
        content: "Create your Clovely profile and get matched for the long haul.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate({ to: "/profile", replace: true });
    });
  }, [navigate]);

  const oauth = async (provider: "google" | "apple") => {
    try {
      await lovable.auth.signInWithOAuth(provider, {
        redirect_uri: window.location.origin,
      });
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Could not start sign in");
    }
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (mode === "signup") {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: window.location.origin,
            data: { username },
          },
        });
        if (error) throw error;
        if (!data.session) {
          setSent(true);
          return;
        }
        navigate({ to: "/profile" });
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        navigate({ to: "/profile" });
      }
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-5 py-16">
      <div className="w-full max-w-md">
        <Link to="/" className="mb-8 flex items-center justify-center gap-3">
          <CloverMark className="h-10 w-10" />
          <span className="font-display text-2xl font-bold tracking-tight">Clovely</span>
        </Link>

        <div className="rounded-3xl border border-border bg-card p-7 shadow-sm sm:p-9">
          {sent ? (
            <div className="text-center">
              <h1 className="font-display text-2xl font-bold">Check your inbox</h1>
              <p className="mt-3 text-base text-muted-foreground">
                We sent a confirmation link to <span className="font-medium">{email}</span>. Tap it
                and you're in.
              </p>
            </div>
          ) : (
            <>
              <h1 className="text-center font-display text-2xl font-bold tracking-tight sm:text-3xl">
                {mode === "signin" ? "Welcome back" : "Create your profile"}
              </h1>
              <p className="mt-2 text-center text-base text-muted-foreground">
                {mode === "signin"
                  ? "Pick up where you left off."
                  : "A few details now, better matches later."}
              </p>

              <div className="mt-7 space-y-3">
                <button
                  type="button"
                  onClick={() => oauth("google")}
                  className="flex w-full items-center justify-center gap-3 rounded-full border border-border bg-background px-5 py-3 text-base font-medium transition-colors hover:bg-muted"
                >
                  <GoogleIcon /> Continue with Google
                </button>
                <button
                  type="button"
                  onClick={() => oauth("apple")}
                  className="flex w-full items-center justify-center gap-3 rounded-full border border-border bg-background px-5 py-3 text-base font-medium transition-colors hover:bg-muted"
                >
                  <AppleIcon /> Continue with Apple
                </button>
              </div>

              <div className="my-6 flex items-center gap-4">
                <span className="h-px flex-1 bg-border" />
                <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">or</span>
                <span className="h-px flex-1 bg-border" />
              </div>

              <form onSubmit={submit} className="space-y-4">
                {mode === "signup" && (
                  <Field
                    label="Username"
                    value={username}
                    onChange={setUsername}
                    type="text"
                    placeholder="clover_kate"
                    required
                  />
                )}
                <Field
                  label="Email"
                  value={email}
                  onChange={setEmail}
                  type="email"
                  placeholder="you@email.com"
                  required
                />
                <Field
                  label="Password"
                  value={password}
                  onChange={setPassword}
                  type="password"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-full bg-primary px-5 py-3 text-base font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
                >
                  {loading ? "One sec…" : mode === "signin" ? "Sign In" : "Create Profile"}
                </button>
              </form>

              <p className="mt-6 text-center text-base text-muted-foreground">
                {mode === "signin" ? "New to Clovely?" : "Already have an account?"}{" "}
                <button
                  type="button"
                  className="font-medium text-foreground underline underline-offset-4"
                  onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
                >
                  {mode === "signin" ? "Create a profile" : "Sign in"}
                </button>
              </p>
            </>
          )}
        </div>
      </div>
    </main>
  );
}

function Field({
  label,
  value,
  onChange,
  type,
  placeholder,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-foreground">{label}</span>
      <input
        type={type}
        value={value}
        required={required}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-base outline-none transition-colors focus:border-primary"
      />
    </label>
  );
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5a5.6 5.6 0 0 1-2.4 3.7v3h3.9c2.3-2.1 3.5-5.2 3.5-8.9Z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.2 0 5.9-1.1 7.9-2.9l-3.9-3c-1.1.7-2.4 1.2-4 1.2-3.1 0-5.7-2.1-6.6-4.9H1.4v3.1A12 12 0 0 0 12 24Z"
      />
      <path fill="#FBBC05" d="M5.4 14.4a7.2 7.2 0 0 1 0-4.6V6.7H1.4a12 12 0 0 0 0 10.8l4-3.1Z" />
      <path
        fill="#EA4335"
        d="M12 4.8c1.8 0 3.3.6 4.6 1.8l3.4-3.4C17.9 1.2 15.2 0 12 0A12 12 0 0 0 1.4 6.7l4 3.1C6.3 6.9 8.9 4.8 12 4.8Z"
      />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
      <path d="M16.4 12.7c0-2.4 2-3.6 2.1-3.7-1.1-1.7-2.9-1.9-3.5-1.9-1.5-.2-2.9.9-3.6.9-.7 0-1.9-.9-3.1-.8-1.6 0-3.1.9-3.9 2.4-1.7 2.9-.4 7.2 1.2 9.5.8 1.2 1.7 2.5 3 2.4 1.2 0 1.6-.8 3.1-.8 1.4 0 1.8.8 3.1.7 1.3 0 2.1-1.2 2.9-2.3.9-1.3 1.3-2.6 1.3-2.7-.1 0-2.6-1-2.6-3.7ZM14 4.9c.7-.8 1.1-1.9 1-3-1 0-2.2.6-2.9 1.5-.6.7-1.2 1.9-1 3 1.1.1 2.2-.6 2.9-1.5Z" />
    </svg>
  );
}
