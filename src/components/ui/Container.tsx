/*
  Largeur de contenu constante de 1180px, gouttieres 20 / 28 / 40.

  Les maquettes de reference sont en box-sizing content-box (defaut du
  navigateur) : leur `max-width: 1180px` vaut pour la boite de contenu et les
  gouttieres s'ajoutent, soit 1260px au total. Tailwind met tout en
  border-box, donc un max-w-[1180px] px-10 ne laisserait que 1100px de
  contenu. Les 80px manquants faisaient passer le H1 de l'accueil de deux a
  trois lignes. D'ou les max-width majorees de la gouttiere.
*/
export default function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto w-full max-w-[1220px] px-5 md:max-w-[1236px] md:px-7 lg:max-w-[1260px] lg:px-10 ${className}`}
    >
      {children}
    </div>
  );
}
