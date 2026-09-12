import { CloverMark } from "@/components/CloverMark";

const WAVE_BARS = [14, 24, 34, 29, 18, 11, 8, 13, 23, 38, 31, 17, 14, 20, 26, 23, 19, 25];

function VoiceWave({ duration, active = false }: { duration: string; active?: boolean }) {
  return (
    <div className={`flex items-center gap-2 rounded-full px-3 py-2.5 ${active ? "bg-ink text-background" : "bg-mist text-ink"}`}>
      <span className={`grid size-7 shrink-0 place-items-center rounded-full ${active ? "bg-gold" : "bg-ink"}`}>
        <span className={`ml-0.5 block size-0 border-y-[5px] border-l-[8px] border-y-transparent ${active ? "border-l-ink" : "border-l-background"}`} />
      </span>
      <span className="flex h-9 min-w-0 flex-1 items-center gap-1" aria-hidden="true">
        {WAVE_BARS.map((height, index) => (
          <span
            key={`${height}-${index}`}
            className="voice-bar w-[3px] flex-1 rounded-full bg-current opacity-55"
            style={{ height }}
          />
        ))}
      </span>
      <span className="text-[10px] font-bold">{duration}</span>
    </div>
  );
}

export function AppPreviewMockup({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`app-device mx-auto w-full ${compact ? "max-w-[18rem]" : "max-w-[23rem]"}`}>
      <div className="mb-4 flex items-center gap-2 rounded-full border border-glass-stroke bg-glass px-4 py-2.5 shadow-glass backdrop-blur-xl">
        <CloverMark className="size-8" />
        <div className="min-w-0">
          <p className="text-[9px] font-bold uppercase tracking-[0.24em] text-muted-foreground">Clovely</p>
          <p className="truncate font-display text-lg font-extrabold leading-none">Discover</p>
        </div>
        <span className="ml-auto grid size-8 place-items-center rounded-full bg-sky text-sm font-bold text-ink">2</span>
      </div>

      <div className="rounded-[1.8rem] border border-glass-stroke bg-glass p-4 shadow-glass backdrop-blur-xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-display text-xl font-extrabold leading-tight">Aaron, 31</p>
            <p className="text-xs text-muted-foreground">Man · Temecula, CA</p>
          </div>
          <div className="rounded-2xl bg-tangerine px-3 py-2 text-center text-ink shadow-tactile">
            <p className="font-display text-lg font-extrabold leading-none">88%</p>
            <p className="mt-1 text-[8px] font-bold uppercase tracking-wider">Aligned</p>
          </div>
        </div>

        <div className="mt-4 rounded-[1.5rem] bg-ink p-4 text-background">
          <p className="mb-3 text-xs font-bold italic">“How do you repair an argument with your boo?”</p>
          <VoiceWave duration="0:41" active />
        </div>

        <div className="mt-3 flex items-center justify-center gap-2 rounded-full bg-sage/40 px-3 py-2 text-[11px] font-semibold text-ink">
          <LockIcon /> Photos stay hidden until you both agree to reveal.
        </div>
        <button type="button" className="mt-3 w-full text-center text-xs font-bold text-ink">
          Why we matched you⌄
        </button>
      </div>

      <div className="mt-5 flex items-center justify-center gap-7">
        <span className="grid size-12 place-items-center rounded-full border border-glass-stroke bg-glass text-2xl text-muted-foreground shadow-glass">×</span>
        <span className="grid size-16 place-items-center rounded-full bg-coral text-background shadow-tactile">
          <MicIcon />
        </span>
        <span className="grid size-12 place-items-center rounded-full border border-glass-stroke bg-glass text-xl text-muted-foreground shadow-glass">↻</span>
      </div>
      <p className="mt-2 text-center text-[10px] font-bold uppercase tracking-[0.12em] text-muted-foreground">Connect</p>

      {!compact && (
        <div className="mt-5 space-y-2 rounded-[1.5rem] border border-glass-stroke bg-glass p-3 shadow-glass backdrop-blur-xl">
          <p className="px-1 text-[9px] font-extrabold uppercase tracking-[0.22em] text-muted-foreground">Voice chat preview</p>
          <VoiceWave duration="0:38" />
          <VoiceWave duration="0:44" active />
        </div>
      )}
    </div>
  );
}

function LockIcon() {
  return (
    <svg className="size-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="5" y="10" width="14" height="10" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

function MicIcon() {
  return (
    <svg className="size-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="9" y="3" width="6" height="12" rx="3" />
      <path d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v3M9 21h6" />
    </svg>
  );
}