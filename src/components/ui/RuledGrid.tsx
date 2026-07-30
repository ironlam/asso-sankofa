/**
 * Grille dont les cellules partagent leurs bords : le fond de la grille est
 * visible dans le gap de 1px et dessine les filets. Les cellules doivent
 * porter bg-surface, sinon les filets envahissent tout.
 */
export default function RuledGrid({
  children,
  cols = 3,
  className = "",
}: {
  children: React.ReactNode;
  cols?: 2 | 3;
  className?: string;
}) {
  const lg = cols === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3";
  return (
    <div
      className={`grid grid-cols-1 gap-px bg-rule md:grid-cols-2 ${lg} ${className}`}
    >
      {children}
    </div>
  );
}
