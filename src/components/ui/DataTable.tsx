export default function DataTable({
  rows,
  className = "",
}: {
  rows: { label: string; value: string }[];
  className?: string;
}) {
  return (
    <dl className={`border-t border-rule-strong ${className}`}>
      {rows.map((row) => (
        <div
          key={row.label}
          className="flex items-baseline justify-between gap-6 border-b border-rule-soft py-3.5 transition-colors duration-150 hover:bg-surface-2"
        >
          <dt className="text-[15px] text-ink-soft">{row.label}</dt>
          {/* tabular-nums aligne les chiffres d'une ligne a l'autre. */}
          <dd className="font-mono text-[17px] font-medium tabular-nums text-ink">
            {row.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
