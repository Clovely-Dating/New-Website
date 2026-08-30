type Props = { className?: string };

/**
 * Clovely brand mark: four abstract rounded petals pinwheeling around a centre.
 * Warmth (coral), Openness (sage), Joy (taupe), Clarity (plum).
 */
export function CloverMark({ className }: Props) {
  return (
    <svg viewBox="0 0 100 100" className={className} role="img" aria-label="Clovely">
      <g transform="rotate(24 50 50)">
        {/* top — warmth: round heart-like petal */}
        <path
          d="M50 47C30 47 23 36 23 25 23 13 33 5 42 5c5 0 8 3 8 3s3-3 8-3c9 0 19 8 19 20 0 11-7 22-27 22Z"
          fill="var(--color-coral)"
        />
        {/* right — openness */}
        <path
          d="M53 50c0-20 11-27 22-27 12 0 20 10 20 19 0 5-3 8-3 8s3 3 3 8c0 9-8 19-20 19-11 0-22-7-22-27Z"
          fill="var(--color-sage)"
        />
        {/* bottom — joy */}
        <path
          d="M50 53c20 0 27 11 27 22 0 12-10 20-19 20-5 0-8-3-8-3s-3 3-8 3c-9 0-19-8-19-20 0-11 7-22 27-22Z"
          fill="var(--color-taupe)"
        />
        {/* left — clarity */}
        <path
          d="M47 50c0 20-11 27-22 27-12 0-20-10-20-19 0-5 3-8 3-8s-3-3-3-8c0-9 8-19 20-19 11 0 22 7 22 27Z"
          fill="var(--color-plum)"
        />
        <circle cx="50" cy="50" r="6" fill="var(--color-background)" />
      </g>
    </svg>
  );
}
