import logoAsset from "@/assets/clovely-logo.png.asset.json";

type Props = { className?: string };

export function CloverMark({ className }: Props) {
  return <img src={logoAsset.url} className={className} alt="Clovely" />;
}
