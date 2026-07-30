import Link from "next/link";
import SankofaMark from "./SankofaMark";
import Container from "./ui/Container";

const NAV = [
  { href: "/", label: "Accueil" },
  { href: "/projets", label: "Projets" },
  { href: "/contribuer", label: "Contribuer" },
  { href: "/a-propos", label: "À propos" },
];

const PROJETS = [
  { href: "https://poligraph.fr", label: "poligraph.fr" },
  { href: "https://cnuisible.fr", label: "cnuisible.fr" },
  { href: "https://github.com/ironlam", label: "GitHub" },
];

const CONTACT = [
  {
    href: "mailto:contact@asso-sankofa.org",
    label: "contact@asso-sankofa.org",
  },
  {
    href: "https://www.helloasso.com/associations/association-sankofa",
    label: "HelloAsso",
  },
];

const COLUMN_TITLE =
  "font-mono text-[11px] font-medium tracking-[0.12em] uppercase text-gold";
const LINK =
  "text-sm text-[rgba(250,247,240,0.65)] transition-colors duration-150 hover:text-gold";

export default function Footer() {
  return (
    <footer className="bg-indigo-deep">
      <Container className="pt-16 pb-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <SankofaMark size={28} color="#FAF7F0" />
              <span className="text-[19px] font-bold tracking-[-0.035em] text-paper">
                Sankofa
              </span>
            </div>
            <p className="text-sm leading-[1.6] text-[rgba(250,247,240,0.65)]">
              Association loi 1901 pour la transparence démocratique et la
              déontologie publique.
            </p>
            <p className="mt-4 font-mono text-[11px] tracking-[0.08em] text-[rgba(250,247,240,0.45)]">
              RNA W931031256
            </p>
          </div>

          <div>
            <h2 className={COLUMN_TITLE}>Navigation</h2>
            <div className="mt-4 flex flex-col gap-2.5">
              {NAV.map(({ href, label }) => (
                <Link key={href} href={href} className={LINK}>
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className={COLUMN_TITLE}>Projets</h2>
            <div className="mt-4 flex flex-col gap-2.5">
              {PROJETS.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={LINK}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className={COLUMN_TITLE}>Contact</h2>
            <div className="mt-4 flex flex-col gap-2.5">
              {CONTACT.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  {...(href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className={LINK}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-rule-dark pt-8 font-mono text-[11px] tracking-[0.06em] text-[rgba(250,247,240,0.45)] md:flex-row md:justify-between">
          <p>&copy; {new Date().getFullYear()} Association Sankofa</p>
          <p>Retourne chercher ce que tu as oublié</p>
        </div>
      </Container>
    </footer>
  );
}
