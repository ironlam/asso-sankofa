/** gold est reserve aux fonds sombres : sur fond clair il tombe a 2:1. */
const TONES = {
  mute: "text-ink-mute",
  gold: "text-gold",
  terra: "text-terra-text",
} as const;

export default function Overline({
  children,
  tone = "mute",
  className = "",
}: {
  children: React.ReactNode;
  tone?: keyof typeof TONES;
  className?: string;
}) {
  return (
    <p
      className={`font-mono text-[11px] leading-[1.4] tracking-[0.14em] uppercase ${TONES[tone]} ${className}`}
    >
      {children}
    </p>
  );
}
