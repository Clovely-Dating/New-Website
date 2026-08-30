type Props = { className?: string };

/**
 * Clovely brand mark: four abstract rounded petals pinwheeling around a centre.
 * Warmth (coral), Openness (sage), Joy (taupe), Clarity (plum).
 */
export function CloverMark({ className }: Props) {
  return (
    <svg viewBox="0 0 100 100" className={className} role="img" aria-label="Clovely">
      <g>
        {/* top — warmth */}
        <path
          d="M50 46C34 46 26 38 26 26S36 6 50 6s24 8 24 20-8 20-24 20Z"
          fill="var(--color-coral)"
          transform="rotate(-12 50 50)"
        />
        {/* right — openness */}
        <path
          d="M54 50c0-16 8-24 20-24s20 10 20 24-8 24-20 24-20-8-20-24Z"
          fill="var(--color-sage)"
          transform="rotate(-12 50 50)"
        />
        {/* bottom — joy */}
        <path
          d="M50 54c16 0 24 8 24 20S64 94 50 94s-24-8-24-20 8-20 24-20Z"
          fill="var(--color-taupe)"
          transform="rotate(-12 50 50)"
        />
        {/* left — clarity */}
        <path
          d="M46 50c0 16-8 24-20 24S6 64 6 50s8-24 20-24 20 8 20 24Z"
          fill="var(--color-plum)"
          transform="rotate(-12 50 50)"
        />
        <circle cx="50" cy="50" r="6" fill="var(--color-background)" />
      </g>
    </svg>
  );
}
