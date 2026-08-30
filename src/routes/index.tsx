import { createFileRoute } from "@tanstack/react-router";
import { CloverMark } from "@/components/CloverMark";
import heroWoman from "@/assets/hero-woman.jpg";
import coachImg from "@/assets/coach.jpg";
import avatarMaya from "@/assets/avatar-maya.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Clovely — Dating built on Gottman relationship research" },
      {
        name: "description",
        content:
          "Clovely matches you on what actually predicts a lasting relationship, and pairs you with a coach who is part AI, part human. Built for people looking for the long term.",
      },
      { property: "og:title", content: "Clovely — Dating built for the long term" },
      {
        property: "og:description",
        content:
          "Matching grounded in Gottman research, plus an AI + human relationship coach. A calmer, safer way to meet someone who wants what you want.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body antialiased">
      {/* NAV */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <CloverMark className="size-9" />
          <div>
            <p className="font-display text-lg font-bold leading-none tracking-tight">Clovely</p>
            <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              Long term matching
            </p>
          </div>
        </div>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#method" className="transition-colors hover:text-foreground">
            How matching works
          </a>
          <a href="#coach" className="transition-colors hover:text-foreground">
            The coach
          </a>
          <a href="#safety" className="transition-colors hover:text-foreground">
            Safety
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden text-sm text-muted-foreground transition-colors hover:text-foreground sm:block">
            Sign in
          </button>
          <a
            href="#join"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Create profile
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6">
        {/* HERO */}
        <section className="grid items-center gap-10 pt-8 pb-20 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1.5 text-xs text-muted-foreground">
              <span className="size-1.5 rounded-full bg-sage-deep" />
              Built on the Gottman Institute&rsquo;s 40 years of research
            </div>
            <h1 className="mt-6 font-display text-5xl leading-[1.04] font-bold tracking-tight text-balance sm:text-6xl">
              For the long haul, not the{" "}
              <span className="text-gradient-warm">next swipe.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Clovely reads the signals that predict a lasting relationship and pairs you with a
              coach that will help you reach your relationship goals.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#join"
                className="rounded-full bg-gradient-warm px-6 py-3.5 font-medium text-primary-foreground shadow-soft transition-opacity hover:opacity-90"
              >
                Start matching
              </a>
              <a
                href="#method"
                className="rounded-full border border-border px-6 py-3.5 text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
              >
                See the science
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-coral" /> 82% report deeper first
                conversations
              </div>
              <div className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-sage-deep" /> 7 in 10 stay 6+ months
              </div>
            </div>
          </div>

          {/* match + coach card */}
          <div className="lg:col-span-5">
            <div className="space-y-4 rounded-3xl border border-border bg-card p-4 shadow-soft">
              <div className="flex items-center justify-between px-1">
                <p className="font-display text-sm font-bold">Your match</p>
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  Compatibility
                </span>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-border bg-secondary p-3">
                <img
                  src={avatarMaya}
                  alt="Maya, a Clovely member"
                  width={512}
                  height={512}
                  loading="lazy"
                  className="size-14 shrink-0 rounded-xl object-cover"
                />
                <div className="min-w-0">
                  <p className="truncate font-display text-sm font-bold">Maya, 31</p>
                  <p className="text-xs text-muted-foreground">Product designer · 22 min away</p>
                </div>
                <div className="ml-auto text-right">
                  <p className="font-display text-xl font-bold text-coral">92</p>
                  <p className="text-[9px] uppercase tracking-widest text-muted-foreground">
                    / 100
                  </p>
                </div>
              </div>

              <div className="space-y-2.5 px-1 text-xs">
                {[
                  { label: "Communication", value: 95, tone: "bg-coral" },
                  { label: "Shared values", value: 88, tone: "bg-plum" },
                  { label: "Conflict style", value: 90, tone: "bg-sage-deep" },
                ].map((s) => (
                  <div key={s.label} className="flex items-center gap-3">
                    <span className="w-28 text-muted-foreground">{s.label}</span>
                    <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
                      <div
                        className={`h-full rounded-full ${s.tone}`}
                        style={{ width: `${s.value}%` }}
                      />
                    </div>
                    <span className="w-7 text-right text-muted-foreground">{s.value}</span>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border border-coral/30 bg-coral/10 p-3">
                <div className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-coral" />
                  <p className="font-display text-xs font-bold text-coral">
                    Your coach · AI + human
                  </p>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Maya and you both handle conflict by reaching for repair. Here&rsquo;s a softer
                  opener for your first video call…
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* METHOD */}
        <section id="method" className="border-t border-border py-20">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">The method</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Match on what actually keeps two people together
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              {
                n: "01",
                tone: "bg-coral/15 text-coral",
                title: "Communication style",
                body: "The way you share needs, ease tension, and come back together after a hard moment — the clearest signal of whether love lasts.",
              },
              {
                n: "02",
                tone: "bg-sage/40 text-sage-deep",
                title: "Core values & life goals",
                body: "Family, money, ambition, and the life you want in ten years. Small mismatches here slowly pull even strong chemistry apart.",
              },
              {
                n: "03",
                tone: "bg-taupe/30 text-plum",
                title: "Conflict & repair",
                body: "Every couple disagrees. What matters is how you repair. We weight your ability to reconnect far above a spark.",
              },
            ].map((c) => (
              <div key={c.n} className="rounded-3xl border border-border bg-card p-6">
                <div
                  className={`grid size-11 place-items-center rounded-xl font-display text-lg font-bold ${c.tone}`}
                >
                  {c.n}
                </div>
                <p className="mt-5 font-display text-lg font-bold">{c.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* COACH */}
        <section id="coach" className="border-t border-border py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <img
              src={coachImg}
              alt="A Clovely relationship coach in her studio"
              width={1024}
              height={1024}
              loading="lazy"
              className="aspect-square w-full rounded-3xl object-cover shadow-soft"
            />
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">The coach</p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                A coach that blends AI insight with human care
              </h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Your AI coach notices patterns in your dating life and flags what to watch for. Then
                a licensed human coach helps you act on it — 20 minutes a month, right when it
                matters.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                {[
                  ["bg-coral", "Gentle nudges before and after each date"],
                  ["bg-sage-deep", "Monthly 1:1 with a licensed relationship coach"],
                  ["bg-plum", "A private journal for you and your coach only"],
                ].map(([tone, text]) => (
                  <li key={text} className="flex gap-3">
                    <span className={`mt-1.5 size-1.5 shrink-0 rounded-full ${tone}`} />
                    {text}
                  </li>
                ))}
              </ul>
              <div className="mt-7 rounded-2xl border border-border bg-secondary p-4">
                <p className="text-xs leading-relaxed text-muted-foreground">
                  &ldquo;I was about to ghost a genuinely good match. My coach reframed the tension
                  and gave me a line to use. We matched a month later.&rdquo;
                </p>
                <p className="mt-3 font-display text-sm font-bold">Priya, 34 · Member since 2024</p>
              </div>
            </div>
          </div>
        </section>

        {/* SAFETY */}
        <section id="safety" className="border-t border-border py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Safety by design
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                Built so you feel held, not exposed
              </h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Every account is identity-verified before messaging starts, you control who can
                reach out first, and the boundaries you set once are enforced automatically.
              </p>
            </div>
            <img
              src={heroWoman}
              alt="A Clovely member at home"
              width={1024}
              height={1024}
              loading="lazy"
              className="aspect-square w-full rounded-3xl object-cover shadow-soft"
            />
          </div>
        </section>

        {/* CTA */}
        <section id="join" className="border-t border-border py-20">
          <div className="rounded-[2rem] border border-border bg-secondary p-10 text-center sm:p-14">
            <CloverMark className="mx-auto size-12" />
            <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-balance sm:text-5xl">
              Ready to stop swiping and start building?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Built for people who want something that lasts. A calmer, safer space to meet someone
              who wants what you want.
            </p>
            <form className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="flex-1 rounded-full border border-border bg-card px-5 py-3.5 text-sm outline-none placeholder:text-muted-foreground/70 focus:border-ring"
              />
              <button
                type="button"
                className="rounded-full bg-gradient-warm px-6 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Create your profile
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-border px-6 py-10 text-xs text-muted-foreground sm:flex-row">
        <div className="flex items-center gap-2">
          <CloverMark className="size-7" />
          <span>Clovely · Finding depth through luck and love</span>
        </div>
        <div className="flex gap-6">
          <a href="#safety" className="transition-colors hover:text-foreground">
            Safety
          </a>
          <a href="#method" className="transition-colors hover:text-foreground">
            The research
          </a>
          <a href="#join" className="transition-colors hover:text-foreground">
            Join
          </a>
        </div>
      </footer>
    </div>
  );
}
