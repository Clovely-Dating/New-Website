import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { toast } from "sonner";

import { CloverMark } from "@/components/CloverMark";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/_authenticated/profile")({
  head: () => ({
    meta: [
      { title: "Your Clovely profile" },
      {
        name: "description",
        content: "Update your Clovely username, photo, and the details that shape your matches.",
      },
      { property: "og:title", content: "Your Clovely profile" },
      {
        property: "og:description",
        content: "Update the details that shape your Clovely matches.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProfilePage,
});

type ProfileForm = {
  username: string;
  display_name: string;
  bio: string;
  birthdate: string;
  gender: string;
  looking_for: string;
  location: string;
};

const EMPTY: ProfileForm = {
  username: "",
  display_name: "",
  bio: "",
  birthdate: "",
  gender: "",
  looking_for: "",
  location: "",
};

function ProfilePage() {
  const { user } = Route.useRouteContext();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [form, setForm] = useState<ProfileForm>(EMPTY);
  const [saving, setSaving] = useState(false);

  const { data, isLoading } = useQuery({
    queryKey: ["profile", user.id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .maybeSingle();
      if (error) throw error;
      return data;
    },
  });

  useEffect(() => {
    if (!data) return;
    setForm({
      username: data.username ?? "",
      display_name: data.display_name ?? "",
      bio: data.bio ?? "",
      birthdate: data.birthdate ?? "",
      gender: data.gender ?? "",
      looking_for: data.looking_for ?? "",
      location: data.location ?? "",
    });
  }, [data]);

  const set = (key: keyof ProfileForm) => (v: string) => setForm((f) => ({ ...f, [key]: v }));

  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    const { error } = await supabase.from("profiles").upsert({
      id: user.id,
      username: form.username.trim().toLowerCase() || null,
      display_name: form.display_name.trim() || null,
      bio: form.bio.trim() || null,
      birthdate: form.birthdate || null,
      gender: form.gender || null,
      looking_for: form.looking_for || null,
      location: form.location.trim() || null,
      onboarding_complete: true,
    });
    setSaving(false);
    if (error) {
      toast.error(
        error.code === "23505" ? "That username is taken — try another." : error.message,
      );
      return;
    }
    queryClient.invalidateQueries({ queryKey: ["profile", user.id] });
    toast.success("Profile saved");
  };

  const signOut = async () => {
    await queryClient.cancelQueries();
    queryClient.clear();
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  };

  return (
    <main className="min-h-screen bg-background px-5 py-10 sm:py-14">
      <div className="mx-auto w-full max-w-2xl">
        <header className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <CloverMark className="h-9 w-9" />
            <span className="font-display text-xl font-bold tracking-tight">Clovely</span>
          </Link>
          <button
            onClick={signOut}
            className="rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
          >
            Sign out
          </button>
        </header>

        <h1 className="mt-10 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Your profile
        </h1>
        <p className="mt-2 text-base text-muted-foreground">
          Signed in as {user.email}. These details shape who we introduce you to.
        </p>

        {isLoading ? (
          <p className="mt-10 text-base text-muted-foreground">Loading…</p>
        ) : (
          <form
            onSubmit={save}
            className="mt-8 space-y-5 rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Username" value={form.username} onChange={set("username")} required />
              <Field
                label="Display name"
                value={form.display_name}
                onChange={set("display_name")}
              />
              <Field
                label="Birthday"
                type="date"
                value={form.birthdate}
                onChange={set("birthdate")}
              />
              <Field label="Location" value={form.location} onChange={set("location")} />
              <Select
                label="I am"
                value={form.gender}
                onChange={set("gender")}
                options={["Woman", "Man", "Non-binary", "Prefer not to say"]}
              />
              <Select
                label="Looking for"
                value={form.looking_for}
                onChange={set("looking_for")}
                options={["Women", "Men", "Everyone"]}
              />
            </div>

            <label className="block">
              <span className="mb-1.5 block text-sm font-medium">About you</span>
              <textarea
                rows={4}
                value={form.bio}
                onChange={(e) => set("bio")(e.target.value)}
                placeholder="The stuff a photo can't say."
                className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-base outline-none transition-colors focus:border-primary"
              />
            </label>

            <button
              type="submit"
              disabled={saving}
              className="w-full rounded-full bg-primary px-5 py-3 text-base font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60 sm:w-auto sm:px-8"
            >
              {saving ? "Saving…" : "Save profile"}
            </button>
          </form>
        )}
      </div>
    </main>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium">{label}</span>
      <input
        type={type}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-base outline-none transition-colors focus:border-primary"
      />
    </label>
  );
}

function Select({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-base outline-none transition-colors focus:border-primary"
      >
        <option value="">Select…</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}
