const TONES = { gold: "bg-gold", terra: "bg-terra" } as const;

export default function SquareList({
  items,
  tone = "gold",
  mono = false,
  className = "",
}: {
  items: string[];
  tone?: keyof typeof TONES;
  mono?: boolean;
  className?: string;
}) {
  return (
    <ul className={`flex flex-col gap-2.5 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex items-baseline gap-3">
          <span
            aria-hidden="true"
            className={`mt-[7px] size-[5px] shrink-0 ${TONES[tone]}`}
          />
          <span
            className={
              mono
                ? "font-mono text-[13px] leading-[1.6] text-ink-soft"
                : "text-[16px] leading-[1.6] text-ink-soft"
            }
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
