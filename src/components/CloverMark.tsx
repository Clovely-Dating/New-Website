type Props = { className?: string };

/**
 * Clovely brand mark: four heart-shaped petals in the brand palette.
 * Warmth (coral), Openness (sage), Joy (taupe), Clarity (plum).
 */
export function CloverMark({ className }: Props) {
  return (
    <svg viewBox="0 0 100 100" className={className} role="img" aria-label="Clovely">
      {/* top-left — warmth & empathy */}
      <path
        d="M48 48H20C8 48 2 40 2 30 2 20 9 13 18 13c7 0 11 4 13 8 2-6 7-10 14-10 2 0 3 .2 3 .2V48Z"
        fill="var(--color-coral)"
      />
      {/* top-right — openness & curiosity */}
      <path
        d="M52 48V11s1-.2 3-.2c7 0 12 4 14 10 2-4 6-8 13-8 9 0 18 7 18 17 0 10-6 18-18 18H52Z"
        fill="var(--color-sage)"
      />
      {/* bottom-left — joy & optimism */}
      <path
        d="M48 52v37s-1 .2-3 .2c-7 0-12-4-14-10-2 4-6 8-13 8C9 87 2 80 2 70c0-10 6-18 18-18h28Z"
        fill="var(--color-taupe)"
      />
      {/* bottom-right — clarity & calm */}
      <path
        d="M52 52h28c12 0 18 8 18 18 0 10-7 17-16 17-7 0-11-4-13-8-2 6-7 10-14 10-2 0-3-.2-3-.2V52Z"
        fill="var(--color-plum)"
      />
    </svg>
  );
}
