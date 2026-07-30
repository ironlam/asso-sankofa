import Link from "next/link";

const VARIANTS = {
  solid: "bg-indigo text-paper hover:bg-ink",
  ghost: "border border-[rgba(20,18,46,0.25)] text-ink hover:bg-surface-2",
  gold: "bg-gold text-ink hover:bg-gold-light",
  ghostLight:
    "border border-[rgba(250,247,240,0.35)] text-paper hover:bg-[rgba(250,247,240,0.08)]",
  terra: "bg-terra text-paper hover:bg-terra-text",
} as const;

export default function Button({
  href,
  children,
  variant = "solid",
  external = false,
  arrow = false,
  block = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof VARIANTS;
  external?: boolean;
  arrow?: boolean;
  block?: boolean;
}) {
  const classes = [
    "inline-flex items-center gap-2.5 px-[26px] py-[15px]",
    "text-[15px] font-semibold transition-colors duration-150",
    // 48px minimum : contrainte de cible tactile verifiee sous 768px.
    "min-h-12",
    block ? "w-full justify-center" : "",
    VARIANTS[variant],
  ].join(" ");

  const content = (
    <>
      {children}
      {arrow ? <span aria-hidden="true">&rarr;</span> : null}
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
