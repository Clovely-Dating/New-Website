type Props = { className?: string };

/**
 * Clovely brand mark: four round heart-like petals pinwheeling around a centre,
 * rotated for a playful clover feel.
 * Warmth (coral), Openness (sage), Joy (taupe), Clarity (plum).
 */
const PETAL =
  "M50 47C33 47 25 38 25 27 25 15 34 6 43 6c4 0 7 3 7 3s3-3 7-3c9 0 18 9 18 21 0 11-8 20-25 20Z";

export function CloverMark({ className }: Props) {
  return (
    <svg viewBox="0 0 100 100" className={className} role="img" aria-label="Clovely">
      <g transform="rotate(24 50 50)">
        <path d={PETAL} fill="var(--color-coral)" />
        <path d={PETAL} fill="var(--color-sage)" transform="rotate(90 50 50)" />
        <path d={PETAL} fill="var(--color-taupe)" transform="rotate(180 50 50)" />
        <path d={PETAL} fill="var(--color-plum)" transform="rotate(270 50 50)" />
        <circle cx="50" cy="50" r="6" fill="var(--color-background)" />
      </g>
    </svg>
  );
}
