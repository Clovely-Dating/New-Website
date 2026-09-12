import { createFileRoute, Link } from "@tanstack/react-router";
import { CloverMark } from "@/components/CloverMark";
import { AppPreviewMockup } from "@/components/AppPreviewMockup";
import heroWoman from "@/assets/hero-woman.jpg";
import coachImg from "@/assets/remote-relationship-coach.jpg";
import coachConversation from "@/assets/coach-conversation.png.asset.json";
import compatibilityMapping from "@/assets/compatibility-mapping.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Clovely — Personality-first dating for something real" },
      {
        name: "description",
        content:
          "Clovely is personality-first, voice-led dating. Match on what actually predicts a lasting relationship, with a relationship coach in your corner.",
      },
      { property: "og:title", content: "Clovely — Dating built for the long term" },
      {
        property: "og:description",
        content:
          "Personality-first, voice-led matching grounded in relationship research, plus a licensed relationship coach. A warmer way to meet someone who wants what you want.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const SECTION = "border-t border-border py-16 sm:py-20 lg:py-24";
const EYEBROW = "text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground";
const H2 = "mt-4 font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl";

function Index() {
  return (
    <div className="prism-field min-h-screen bg-background font-body text-[17px] leading-relaxed text-foreground antialiased sm:text-lg">
      {/* NAV */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <CloverMark className="size-10" />
          <div>
            <p className="font-display text-xl font-bold leading-none tracking-tight">Clovely</p>
            <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              Personality-first dating
            </p>
          </div>
        </div>
        <nav className="hidden items-center gap-8 text-base text-muted-foreground md:flex">
          <a href="#method" className="transition-colors hover:text-foreground">
            How It Works
          </a>
          <a href="#coach" className="transition-colors hover:text-foreground">
            The Coach
          </a>
          <a href="#safety" className="transition-colors hover:text-foreground">
            Privacy & Safety
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <Link
            to="/auth"
            className="hidden text-base text-muted-foreground transition-colors hover:text-foreground sm:block"
          >
            Sign In
          </Link>
          <Link
            to="/auth"
            className="rounded-full bg-primary px-5 py-2.5 text-base font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Create Profile
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6">
        {/* HERO */}
        <section className="grid items-center gap-10 pb-16 pt-8 sm:gap-12 sm:pb-20 lg:grid-cols-12 lg:gap-16 lg:pb-24">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3.5 py-2 text-sm text-muted-foreground">
              <span className="size-1.5 rounded-full bg-sage-deep" />
              Personality-first &amp; voice-led
            </div>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl">
              For the long haul, not the{" "}
              <span className="text-gradient-warm">next swipe.</span>
            </h1>
            <p className="mt-6 max-w-xl text-xl leading-relaxed text-muted-foreground sm:text-2xl">
              Clovely reads the signals that predict a lasting relationship and pairs you with a
              coach that will help you reach your relationship goals.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#join"
                className="rounded-full bg-gradient-warm px-7 py-4 text-lg font-medium text-primary-foreground shadow-soft transition-opacity hover:opacity-90"
              >
                Start matching
              </a>
              <a
                href="#method"
                className="rounded-full border border-border px-7 py-4 text-lg text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
              >
                See how it works
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-coral" /> Voices before photos
              </div>
              <div className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-sage-deep" /> Matches with quality, not
                quantity
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <AppPreviewMockup showVoicePreview={false} />
          </div>
        </section>

        {/* METHOD */}
        <section id="method" className={SECTION}>
          <div className="grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_minmax(17rem,0.72fr)] md:gap-10 lg:gap-14">
            <div className="max-w-2xl">
              <p className={EYEBROW}>HOW IT WORKS</p>
              <h2 className={H2}>Personality first. Looks come later.</h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Photos are blurred until you&rsquo;ve heard each other. Every match starts with a
                voice note, so you fall for how someone thinks and talks — not just how they look.
                Underneath it all, decades of relationship research quietly do the math.
              </p>
            </div>
            <div className="flex w-full items-center justify-center overflow-hidden rounded-3xl border border-glass-stroke bg-glass p-2 shadow-glass backdrop-blur-xl">
              <img
                src={compatibilityMapping.url}
                alt="Compatibility mapping showing why two people matched"
                width={398}
                height={279}
                loading="lazy"
                className="h-auto w-full rounded-2xl object-contain"
              />
            </div>
          </div>
          <div className="mt-10 grid items-stretch gap-6 sm:mt-12 md:grid-cols-3">
            {[
              {
                n: "01",
                tone: "bg-coral/15 text-coral",
                title: "Voice-led first impressions",
                body: "Introduce yourself with a voice note, not a highlight reel. You hear a laugh, a pause, a vibe — the stuff a photo never shows.",
              },
              {
                n: "02",
                tone: "bg-sage/40 text-sage-deep",
                title: "Values & life goals",
                body: "Family, money, ambition — the life you want in ten years. We match on the things that matter long after the spark.",
              },
              {
                n: "03",
                tone: "bg-taupe/30 text-plum",
                title: 'How you "make up"',
                body: "Every couple disagrees. What counts is how you come back together — so we coach you on overcoming the friction.\u00a0",
              },
            ].map((c) => (
              <div key={c.n} className="rounded-3xl border border-glass-stroke bg-glass p-6 shadow-glass backdrop-blur-xl sm:p-8">
                <div
                  className={`grid size-12 place-items-center rounded-xl font-display text-xl font-bold ${c.tone}`}
                >
                  {c.n}
                </div>
                <p className="mt-6 font-display text-xl font-bold">{c.title}</p>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{c.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* COACH */}
        <section id="coach" className={SECTION}>
          <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-16">
            <div className="mx-auto grid w-full max-w-2xl grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] items-center gap-3 sm:gap-5 lg:mx-0">
              <img
                src={coachImg}
                alt="A Clovely relationship coach helping remotely from her computer"
                width={1200}
                height={1200}
                loading="lazy"
                className="aspect-[4/5] w-full rounded-3xl object-cover shadow-soft"
              />
              <div className="w-full overflow-hidden rounded-3xl border border-glass-stroke bg-glass p-2 shadow-glass backdrop-blur-xl sm:p-3">
                <img
                  src={coachConversation.url}
                  alt="A private conversation with a Clovely relationship coach"
                  width={446}
                  height={482}
                  loading="lazy"
                  className="aspect-[446/482] w-full rounded-2xl object-cover"
                />
              </div>
            </div>
            <div className="max-w-xl lg:max-w-none">
              <p className={EYEBROW}>The coach</p>
              <h2 className={H2}>A relationship coach in your corner</h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Your Clovely relationship coach spots the patterns, cheers the wins, and walks with you
                through the wobbles — like a wise friend.
              </p>
              <ul className="mt-8 space-y-4 text-base text-muted-foreground">
                {[
                  [
                    "bg-coral",
                    "Gentle check-ins throughout the dating phase and after going exclusive",
                  ],
                  [
                    "bg-sage-deep",
                    "A private space to text your coach to share issues ",
                  ],
                  ["bg-plum", "Virtual or in-person sessions with a licensed relationship coach"],
                ].map(([tone, text]) => (
                  <li key={text} className="flex gap-3">
                    <span className={`mt-2 size-1.5 shrink-0 rounded-full ${tone}`} />
                    {text}
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-2xl border border-glass-stroke bg-glass p-6 shadow-glass backdrop-blur-xl">
                <p className="text-base leading-relaxed text-muted-foreground">
                  &ldquo;I was about to ghost a genuinely good match. My coach reframed the tension
                  and gave me a line to use. We're still together a month later.&rdquo;
                </p>
                <p className="mt-3 font-display text-base font-bold">
                  Priya, 28 · Member since 2026
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SAFETY */}
        <section id="safety" className={SECTION}>
          <div className="grid items-center gap-10 sm:gap-12 md:grid-cols-2 md:gap-10 lg:gap-16">
            <div className="max-w-xl">
              <p className={EYEBROW}>PRIVACY & SAFETY</p>
              <h2 className={H2}>Built so you feel heard, not exposed</h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Everyone is photo and voice-verified before matching begins. We give you the best
                matches; you decide who to connect with.&nbsp; Photos are unlocked after users decide
                to mutually reveal.&nbsp;
              </p>
            </div>
            <img
              src={heroWoman}
              alt="A Clovely couple laughing together at home"
              width={1024}
              height={1024}
              loading="lazy"
              className="aspect-square w-full rounded-3xl object-cover shadow-soft"
            />
          </div>
        </section>

        {/* CTA */}
        <section id="join" className={SECTION}>
           <div className="rounded-[2rem] border border-glass-stroke bg-glass p-8 text-center shadow-glass backdrop-blur-xl sm:p-14">
            <CloverMark className="mx-auto size-14" />
            <h2 className="mx-auto mt-6 max-w-2xl font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl">
              Ready to meet someone worth the group chat debrief?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              Personality-first, voice-led, coach-backed. A warmer way to meet someone who wants
              what you want.
            </p>
            <form className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="flex-1 rounded-full border border-border bg-card px-5 py-3.5 text-base outline-none placeholder:text-muted-foreground/70 focus:border-ring"
              />
              <button
                type="button"
                className="rounded-full bg-gradient-warm px-6 py-3.5 text-base font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Create your profile
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-border px-6 py-10 text-sm text-muted-foreground sm:flex-row">
        <div className="flex items-center gap-2">
          <CloverMark className="size-8" />
          <span>Clovely · Reclaiming human connection from the scroll</span>
        </div>
        <div className="flex gap-6">
          <a href="#safety" className="transition-colors hover:text-foreground">
            Join Today
          </a>
          <a href="#method" className="transition-colors hover:text-foreground">
            Terms & Condictions
          </a>
          <a href="#join" className="transition-colors hover:text-foreground">
            Privacy Policy
          </a>
        </div>
      </footer>
    </div>
  );
}
