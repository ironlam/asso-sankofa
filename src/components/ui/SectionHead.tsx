export default function SectionHead({
  title,
  note,
  size = "large",
  className = "",
}: {
  title: string;
  note?: string;
  size?: "large" | "small";
  className?: string;
}) {
  const titleClasses =
    size === "large"
      ? "text-[clamp(28px,5vw,40px)] leading-[1.05] tracking-[-0.035em]"
      : "text-[clamp(26px,4.5vw,34px)] leading-[1.05] tracking-[-0.035em]";

  return (
    <div
      className={`flex flex-col gap-4 md:flex-row md:items-end md:justify-between ${className}`}
    >
      <h2 className={`${titleClasses} font-bold text-ink`}>{title}</h2>
      {note ? (
        <p className="font-mono text-[12px] tracking-[0.08em] text-ink-mute">
          {note}
        </p>
      ) : null}
    </div>
  );
}
