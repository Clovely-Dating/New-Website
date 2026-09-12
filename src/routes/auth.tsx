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
    <main className="prism-field relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-5 py-12">
      <div className="w-full max-w-5xl">
        <Link to="/" className="mb-10 flex items-center justify-center gap-3">
          <CloverMark className="h-10 w-10" />
          <span className="font-display text-2xl font-bold tracking-tight">Clovely</span>
        </Link>

        <div className="glass-emboss grid items-center gap-9 rounded-[2rem] border border-glass-stroke p-7 sm:p-10 md:grid-cols-[0.9fr_1.1fr] md:gap-12">
          <div className="text-center md:text-left">
            <h1 className="font-display text-2xl font-bold tracking-tight whitespace-nowrap sm:text-[1.75rem]">
              Get Clovely on your phone
            </h1>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              The full experience — personality quiz, voice notes, matches, and your relationship
              coach — is built for iOS. Download the app to get started.
            </p>
          </div>

            <div className="mt-8 flex flex-col items-center gap-4 md:items-start">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-xl bg-ink px-5 py-3 text-background shadow-tactile transition-opacity hover:opacity-90"
            >
              <AppleLogo className="h-7 w-7" />
              <div className="flex flex-col leading-none">
                <span className="text-[0.65rem] font-medium tracking-wide opacity-90">
                  Download on the
                </span>
                <span className="font-display text-lg font-semibold tracking-tight">
                  App Store
                </span>
              </div>
            </a>

            <p className="text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <span className="text-foreground">Open the app to sign in.</span>
            </p>
            </div>
          </div>

          <div className="flex justify-center">
            <AppPreviewMockup compact />
          </div>
        </div>
      </div>
    </main>
  );
}

function AppleLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M17.3 8.4c-.1-1.7 1.4-2.5 1.4-2.6-.8-1.1-2-1.2-2.4-1.3-1-.1-2 .6-2.5.6-.5 0-1.4-.6-2.2-.6-2.2 0-3.8 1.9-3.8 4 0 1.7.6 3.5 1.5 4.7.9 1.2 1.8 2.5 3 2.5 1.2 0 1.7-.8 2.8-.8 1.1 0 1.5.8 2.8.8 1.3 0 2.1-1.1 2.9-2.3.7-1 1.3-2.1 1.3-2.2-.1 0-2.5-1-2.5-3.6-.1-1.6 1.1-2.4 1.1-2.5ZM14.7 4.9c.6-.8 1.1-1.8 1-2.8-1 0-2.1.6-2.8 1.5-.6.7-1.1 1.7-1 2.7 1.1.1 2.1-.5 2.8-1.4Z" />
    </svg>
  );
}
