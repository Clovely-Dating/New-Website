import { createFileRoute, Link } from "@tanstack/react-router";

import { CloverMark } from "@/components/CloverMark";
import { AppPreviewMockup } from "@/components/AppPreviewMockup";

// Replace this with your real App Store URL once the app is live.
const APP_STORE_URL = "https://apps.apple.com/app/clovely";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Download Clovely · Personality-first dating" },
      {
        name: "description",
        content:
          "Get Clovely on the App Store. Personality-first, voice-led dating with a relationship coach in your corner.",
      },
      { property: "og:title", content: "Download Clovely on the App Store" },
      {
        property: "og:description",
        content: "Get Clovely on the App Store. Find depth through luck and love.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  return (
    <main className="prism-field relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-6 py-10 sm:py-14">
      <div className="flex w-full max-w-3xl flex-col items-center text-center">
        <Link to="/" className="flex items-center gap-2.5">
          <CloverMark className="h-11 w-11 rounded-2xl shadow-glass" />
          <span className="font-display text-2xl font-bold tracking-tight">Clovely</span>
        </Link>

        <div className="mt-8 max-w-xl">
          <h1 className="font-display text-[2rem] font-extrabold leading-[1.1] tracking-tight text-ink sm:text-5xl">
            (COMING SOON)
            Dating for the long haul, on your phone.
          </h1>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
            Personality-first matching, voice-led connection, and a relationship coach in your corner — built for iOS.
          </p>
        </div>

        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-ink px-6 py-3.5 text-background shadow-tactile transition-transform hover:-translate-y-0.5 active:translate-y-[0.5px]"
        >
          <AppleLogo className="h-8 w-8" />
          <div className="flex flex-col leading-none text-left">
            <span className="text-[0.7rem] font-medium tracking-wide opacity-90">
              Download on the
            </span>
            <span className="font-display text-xl font-semibold tracking-tight">
              App Store
            </span>
          </div>
        </a>

        <p className="mt-3 text-sm text-muted-foreground">
          {"\n\n"}Already have an account?{" "}
          <span className="text-foreground">Open the app to sign in.</span>
        </p>

        <div className="mt-10 w-full max-w-[18rem] sm:mt-12 sm:max-w-[20rem]">
          <PhoneFrame>
            <AppPreviewMockup compact showVoicePreview={false} />
          </PhoneFrame>
        </div>

        <div className="mt-10 grid w-full max-w-lg gap-4 sm:mt-12 sm:grid-cols-3 sm:gap-5">
          <Feature
            icon={<VoiceIcon />}
            title="Voice-first"
            description="Hear personality before photos unlock."
          />
          <Feature
            icon={<HeartIcon />}
            title="Science-backed"
            description="Matched on the values that last."
          />
          <Feature
            icon={<CoachIcon />}
            title="Real coach"
            description="A relationship expert in your corner."
          />
        </div>
      </div>
    </main>
  );
}

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto w-full rounded-[2.6rem] border-[3px] border-ink/10 bg-ink p-2 shadow-soft sm:rounded-[3rem] sm:border-[4px] sm:p-2.5">
      <div className="absolute left-1/2 top-2.5 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-ink sm:top-3 sm:h-6 sm:w-24" />
      <div className="relative overflow-hidden rounded-[2rem] bg-background p-3 pt-8 sm:rounded-[2.4rem] sm:p-4 sm:pt-10">
        {children}
      </div>
    </div>
  );
}

function Feature({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-glass-stroke bg-glass p-4 text-center shadow-glass backdrop-blur-xl">
      <div className="grid h-10 w-10 place-items-center rounded-full bg-background text-ink shadow-tactile">
        {icon}
      </div>
      <p className="mt-3 font-display text-sm font-bold text-ink">{title}</p>
      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{description}</p>
    </div>
  );
}

function AppleLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M17.3 8.4c-.1-1.7 1.4-2.5 1.4-2.6-.8-1.1-2-1.2-2.4-1.3-1-.1-2 .6-2.5.6-.5 0-1.4-.6-2.2-.6-2.2 0-3.8 1.9-3.8 4 0 1.7.6 3.5 1.5 4.7.9 1.2 1.8 2.5 3 2.5 1.2 0 1.7-.8 2.8-.8 1.1 0 1.5.8 2.8.8 1.3 0 2.1-1.1 2.9-2.3.7-1 1.3-2.1 1.3-2.2-.1 0-2.5-1-2.5-3.6-.1-1.6 1.1-2.4 1.1-2.5ZM14.7 4.9c.6-.8 1.1-1.8 1-2.8-1 0-2.1.6-2.8 1.5-.6.7-1.1 1.7-1 2.7 1.1.1 2.1-.5 2.8-1.4Z" />
    </svg>
  );
}

function VoiceIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M12 2v16M8 8v8M4 11v5M16 5v11M20 9v7" strokeLinecap="round" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z" />
    </svg>
  );
}

function CoachIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" strokeLinecap="round" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
    </svg>
  );
}
