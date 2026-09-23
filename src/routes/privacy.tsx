import { createFileRoute, Link } from "@tanstack/react-router";
import { CloverMark } from "@/components/CloverMark";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy · Clovely" },
      {
        name: "description",
        content: "Read how Clovely collects, uses, and protects your information.",
      },
      { property: "og:title", content: "Privacy Policy · Clovely" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://clovelywebsite.lovable.app/privacy" },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "https://clovelywebsite.lovable.app/privacy" }],
  }),
  component: PrivacyPage,
});

const H2 = "mt-10 font-display text-2xl font-bold tracking-tight text-foreground";
const H3 = "mt-6 font-display text-lg font-bold text-foreground";
const P = "mt-3 text-base leading-relaxed text-muted-foreground";
const UL = "mt-3 list-disc space-y-2 pl-6 text-base leading-relaxed text-muted-foreground";

function PrivacyPage() {
  return (
    <div className="prism-field min-h-screen bg-background font-body text-[17px] leading-relaxed text-foreground antialiased sm:text-lg">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <Link to="/" className="flex items-center gap-3">
            <CloverMark className="size-10" />
            <div>
              <p className="font-display text-xl font-bold leading-none tracking-tight">Clovely</p>
              <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                Personality-first dating
              </p>
            </div>
          </Link>
          <Link
            to="/"
            className="text-base text-muted-foreground transition-colors hover:text-foreground"
          >
            Back home
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 pb-20 pt-6 sm:pb-24">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
          Legal
        </p>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">Effective Date: September 12, 2026</p>

        <p className={P}>
          Clovely ("we," "us," or "our") respects your privacy. This Privacy Policy explains how
          we collect, use, disclose, and safeguard your information when you use our mobile
          application.
        </p>

        <h2 className={H2}>1. Information We Store and Collect</h2>

        <h3 className={H3}>Information You Provide Directly:</h3>
        <ul className={UL}>
          <li>
            <strong className="text-foreground">Account Data:</strong> Name, age, gender identity,
            sexual orientation, email address, phone number, and account credentials.
          </li>
          <li>
            <strong className="text-foreground">Profile Data:</strong> Photos, lifestyle
            preferences, personality traits, religious/political affiliations, relationship goals,
            and answers to onboarding prompts.
          </li>
          <li>
            <strong className="text-foreground">Audio Data:</strong> Voice notes recorded for
            profile anchors, onboarding questions, and in-app messaging.
          </li>
          <li>
            <strong className="text-foreground">Communications:</strong> Messages, audio
            exchanges, and feedback submitted to our support team or AI/Human Relationship Coach.
          </li>
        </ul>

        <h3 className={H3}>Automatically Collected Information:</h3>
        <ul className={UL}>
          <li>
            <strong className="text-foreground">Location Data:</strong> Geolocation data (with
            your permission) to provide local match recommendations and distance filtering.
          </li>
          <li>
            <strong className="text-foreground">Device & Usage Data:</strong> IP address, device
            ID, operating system, app crashes, and feature interaction metrics.
          </li>
        </ul>

        <h3 className={H3}>Third-Party Verification Data:</h3>
        <ul className={UL}>
          <li>
            If you undergo ID verification, third-party partners (e.g., Stripe) collect necessary
            identification documents according to their privacy policies.
          </li>
        </ul>

        <h2 className={H2}>2. How We Use Your Information</h2>
        <p className={P}>We use your information to:</p>
        <ul className={UL}>
          <li>Create and manage your user account.</li>
          <li>Calculate compatibility scores and display profile matches.</li>
          <li>Facilitate voice messaging, photo reveals, and chat interactions.</li>
          <li>Power AI-driven relationship coaching insights and check-in prompts.</li>
          <li>Prevent fraud, enforce our Terms, and maintain platform safety.</li>
        </ul>

        <h2 className={H2}>3. AI Coaching Feature & Personal Data Processing</h2>
        <p className={P}>
          To power our AI coaching feature and deliver contextual advice, conversation starters,
          and relationship guidance, we process specific user and match data:
        </p>
        <ul className={UL}>
          <li>
            <strong className="text-foreground">Contextual Data Collected & Used:</strong> When
            you interact with or receive prompts from the AI coaching agent, we may process your
            first name, age, general location, and personality traits (including profile quiz
            responses, tags, and onboarding answers), alongside the first name, age, location, and
            personality traits of your matches.
          </li>
          <li>
            <strong className="text-foreground">Purpose:</strong> This data is combined to
            generate tailored recommendations and personalized insights unique to your
            interactions and match dynamics.
          </li>
          <li>
            <strong className="text-foreground">Third-Party AI Subprocessors:</strong> Contextual
            data sent to the AI coaching agent may be transmitted securely to our third-party AI
            service providers (e.g., LLM APIs). These providers process this information strictly
            to generate responses for your session and are contractually prohibited from using
            your personal data or match data to train their public or foundational AI models.
          </li>
        </ul>

        <h2 className={H2}>4. Data Sharing & Privacy Controls</h2>
        <ul className={UL}>
          <li>
            <strong className="text-foreground">With Other Users:</strong> Profile details, public
            voice notes, and revealed photos are visible to potential matches according to your
            app settings and interaction flow.
          </li>
          <li>
            <strong className="text-foreground">Human Coach Reviews:</strong> If you explicitly
            opt to use the "Coach Check-in" feature, you are responsible to supply relevant
            conversation texts to authorized coaching staff. We do not automatically grant coaching
            staff full access to your complete historical chat logs.
          </li>
          <li>
            <strong className="text-foreground">Service Providers:</strong> We share data with
            trusted vendors who perform services on our behalf (e.g., cloud hosting, payment
            processing, customer support tools, AI processing infrastructure).
          </li>
          <li>
            <strong className="text-foreground">We Do Not Sell Your Data:</strong> We do not sell
            your personal data or audio recordings to third-party advertisers.
          </li>
        </ul>

        <h2 className={H2}>5. Automated Processing & Algorithms</h2>
        <p className={P}>
          We process the information you provide (such as profile preferences, onboarding
          answers, personality traits, and interaction data) using automated systems and
          algorithms to calculate compatibility scores, generate match recommendations, and feed
          AI coaching features. You can update or change your underlying preferences in your app
          settings at any time to adjust your results.
        </p>

        <h2 className={H2}>6. Data Retention & Deletion</h2>
        <ul className={UL}>
          <li>We retain your information as long as your account remains active.</li>
          <li>
            You may request account deletion at any time directly through the App settings or by
            contacting{" "}
            <a href="mailto:support@clovely.co" className="text-foreground underline">
              support@clovely.co
            </a>
            . Upon deletion, your profile, messages, audio recordings, AI coaching history, and
            match history will be permanently deleted from our primary servers.
          </li>
        </ul>

        <h2 className={H2}>7. Security</h2>
        <p className={P}>
          We implement industry-standard administrative, technical, and physical security
          measures to protect your personal data and audio files against unauthorized access,
          loss, or disclosure.
        </p>

        <h2 className={H2}>8. Contact Us</h2>
        <p className={P}>
          If you have questions or concerns about this Privacy Policy or your data, please
          contact us at:
        </p>
        <ul className={UL}>
          <li>
            Email:{" "}
            <a href="mailto:support@clovely.co" className="text-foreground underline">
              support@clovely.co
            </a>
          </li>
          <li>Company Name & Address: Clovely Inc. 43200 Business Park Dr. Temecula, CA 92590</li>
        </ul>
      </main>

      <Footer />
    </div>
  );
}
