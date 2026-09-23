import { createFileRoute, Link } from "@tanstack/react-router";
import { CloverMark } from "@/components/CloverMark";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions · Clovely" },
      {
        name: "description",
        content: "Read Clovely's Terms and Conditions governing use of the Clovely app.",
      },
      { property: "og:title", content: "Terms & Conditions · Clovely" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://clovelywebsite.lovable.app/terms" },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "https://clovelywebsite.lovable.app/terms" }],
  }),
  component: TermsPage,
});

const H2 = "mt-10 font-display text-2xl font-bold tracking-tight text-foreground";
const P = "mt-3 text-base leading-relaxed text-muted-foreground";
const UL = "mt-3 list-disc space-y-2 pl-6 text-base leading-relaxed text-muted-foreground";

function TermsPage() {
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
          Terms and Conditions
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">Effective Date: September 12, 2026</p>

        <p className={P}>
          Welcome to Clovely ("Company," "we," "us," or "our"). These Terms and Conditions
          ("Terms") govern your access to and use of the Clovely mobile application and related
          services (collectively, the "App"). By creating an account or using the App, you agree
          to be bound by these Terms.
        </p>

        <h2 className={H2}>1. Eligibility</h2>
        <ul className={UL}>
          <li>You must be at least 18 years of age to create an account and use the App.</li>
          <li>
            By using the App, you represent and warrant that you have the legal capacity to enter
            into a binding contract and have never been convicted of a felony or sexual offense.
          </li>
        </ul>

        <h2 className={H2}>2. Account Creation & Verification</h2>
        <ul className={UL}>
          <li>You agree to provide accurate, current, and complete information during registration.</li>
          <li>
            We reserve the right to require identity verification (including third-party
            verification services such as Stripe ID verification) to access certain features or
            maintain account standing.
          </li>
          <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
        </ul>

        <h2 className={H2}>3. User Content & Conduct</h2>
        <p className={P}>
          <strong className="text-foreground">User Content:</strong> You retain ownership of all
          profile information, photos, text, and voice notes ("User Content") you upload. By
          posting Content, you grant us a worldwide, non-exclusive, royalty-free license to host,
          store, display, and process your Content solely for operating and improving the App.
        </p>
        <p className={P}>
          <strong className="text-foreground">Prohibited Conduct:</strong> You agree not to:
        </p>
        <ul className={UL}>
          <li>Harass, bully, stalk, intimidate, or abuse any user.</li>
          <li>Upload sexually explicit, offensive, hateful, or illegal content.</li>
          <li>Use the App for commercial solicitation, spam, or scams.</li>
          <li>
            Record or redistribute another user's voice notes or private chat content without
            express consent.
          </li>
        </ul>

        <h2 className={H2}>4. Algorithm & Compatibility Disclaimer</h2>
        <p className={P}>
          The App uses proprietary algorithms, data inputs, and automated processing to calculate
          match compatibility and present potential profile recommendations. You acknowledge and
          agree that:
        </p>
        <ul className={UL}>
          <li>
            Compatibility scores, match percentages, and automated suggestions are provided for
            informational and entertainment purposes only and do not guarantee personal
            compatibility, success, or safety in any relationship.
          </li>
          <li>We do not warrant or guarantee that the algorithm will be 100% accurate, error-free, or uninterrupted.</li>
          <li>
            We reserve the right to modify, adjust, or update our matching algorithms and criteria
            at any time without prior notice.
          </li>
        </ul>

        <h2 className={H2}>5. Voice Messaging & Photo Reveals</h2>
        <ul className={UL}>
          <li>
            Interactions within the App may require voice note exchanges prior to unlocking
            additional features (such as photo reveals or text chat).
          </li>
          <li>
            You acknowledge that voice notes sent to other users become accessible to those
            recipients within the App's messaging interface.
          </li>
        </ul>

        <h2 className={H2}>6. Relationship Coaching & AI Features</h2>
        <ul className={UL}>
          <li>
            <strong className="text-foreground">Data Processing Consent:</strong> You acknowledge
            and agree that to provide personalized, context-aware insights, prompts, and advice,
            our AI Relationship Coach may process your first name, age, general location, and
            personality traits, as well as the profile information and personality traits of your
            matches.
          </li>
          <li>
            <strong className="text-foreground">Informational Purpose Only:</strong> Advice,
            prompts, insights, and check-ins provided by our Relationship Coach or human coaches
            are for informational and educational purposes only.
          </li>
          <li>
            <strong className="text-foreground">Not Therapy:</strong> The App itself does not
            provide professional medical, psychological, psychiatric, or licensed clinical therapy
            services. The App is not a substitute for professional mental health advice or crisis
            intervention.
          </li>
        </ul>

        <h2 className={H2}>7. Subscriptions & Payments</h2>
        <ul className={UL}>
          <li>
            Certain features may require a paid subscription or one-time purchases. All purchases
            are processed through standard App Store / Google Play payment systems or third-party
            processors (e.g., Stripe).
          </li>
          <li>
            Subscriptions automatically renew unless canceled at least 24 hours before the end of
            the current billing cycle through your store account settings. Refunds are handled
            directly within the App Store.
          </li>
        </ul>

        <h2 className={H2}>8. Termination</h2>
        <ul className={UL}>
          <li>
            We reserve the right to suspend or terminate your account at any time, without notice
            or liability, if you violate these Terms or engage in conduct harmful to the community.
          </li>
        </ul>

        <h2 className={H2}>9. Limitation of Liability & Disclaimer</h2>
        <p className={P}>
          THE APP IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND. TO THE FULLEST EXTENT
          PERMITTED BY LAW, THE COMPANY SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, OR
          CONSEQUENTIAL DAMAGES ARISING FROM YOUR USE OF THE APP OR INTERACTIONS WITH OTHER USERS.
        </p>
      </main>

      <Footer />
    </div>
  );
}
