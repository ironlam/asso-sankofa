const TONES = {
  gold: "text-gold",
  terra: "text-terra",
  paper: "text-paper",
  ink: "text-ink",
} as const;

export default function Stat({
  value,
  label,
  tone = "ink",
  size = "display",
  labelClassName = "text-ink-mute",
}: {
  value: string;
  label: string;
  tone?: keyof typeof TONES;
  size?: "display" | "medium";
  /**
   * Couleur du libelle. Sur fond sombre, passer une valeur claire :
   * ink-mute ne donne que 4,4:1 sur indigo-deep.
   */
  labelClassName?: string;
}) {
  const valueClasses =
    size === "display"
      ? "text-[38px] font-bold leading-none tracking-[-0.035em]"
      : "font-mono text-[26px] font-medium leading-none";

  return (
    <div>
      <div className={`${valueClasses} tabular-nums ${TONES[tone]}`}>
        {value}
      </div>
      <div
        className={`mt-2.5 font-mono text-[11px] leading-[1.5] tracking-[0.08em] uppercase ${labelClassName}`}
      >
        {label}
      </div>
    </div>
  );
}
