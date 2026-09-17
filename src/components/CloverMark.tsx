import logoSrc from "@/assets/clovely-logo.png";

type Props = { className?: string };

export function CloverMark({ className }: Props) {
  return <img src={logoSrc} className={className} alt="Clovely" />;
}
