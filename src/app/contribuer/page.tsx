import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Overline from "@/components/ui/Overline";
import Button from "@/components/ui/Button";
import RuledGrid from "@/components/ui/RuledGrid";
import SquareList from "@/components/ui/SquareList";

export const metadata: Metadata = {
  title: "Contribuer",
  description:
    "Comment contribuer aux projets de l'Association Sankofa : développement, modération, dons.",
};

const PRINCIPES = [
  "Tout le code est ouvert.",
  "Toutes les données sont sourcées.",
  "Aucune contribution n'est trop petite.",
];

const VOIES = [
  {
    titre: "Développement",
    texte:
      "Le code de Poligraph est open source. Contribuez au développement de nouvelles fonctionnalités, corrigez des bugs, ou améliorez les pipelines de données.",
    items: [
      "Next.js, React, TypeScript",
      "Prisma, PostgreSQL",
      "Pipelines de sync (Inngest)",
      "Serveur MCP",
    ],
    lien: {
      href: "https://github.com/ironlam",
      label: "Voir sur GitHub",
      external: true,
    },
  },
  {
    titre: "Modération éditoriale",
    texte:
      "Aidez-nous à vérifier et enrichir les données : fiches politiques, affaires judiciaires, fact-checks. La qualité des données est notre priorité.",
    items: [
      "Vérification des sources",
      "Enrichissement des fiches",
      "Relecture des affaires judiciaires",
      "Classification des votes",
    ],
    lien: {
      href: "mailto:contact@asso-sankofa.org",
      label: "Nous contacter",
      external: false,
    },
  },
  {
    titre: "Données et recherche",
    texte:
      "Chercheurs, data scientists, journalistes : utilisez nos données pour vos travaux. Signalez-nous de nouvelles sources ou proposez des analyses.",
    items: [
      "API publique disponible",
      "Serveur MCP pour requêtes IA",
      "Données référencées sur data.gouv.fr",
      "Exports et analyses",
    ],
    lien: {
      href: "https://poligraph.fr",
      label: "Explorer les données",
      external: true,
    },
  },
];

export default function ContribuerPage() {
  return (
    <>
      {/* 1. En-tete. La maquette n'a pas de filet bas ici : padding 72/56,
          gap 56, colonnes alignees sur la ligne de base du bas. */}
      <section>
        <Container className="grid grid-cols-1 pt-[72px] pb-14 lg:grid-cols-[1.3fr_1fr] lg:items-end lg:gap-14">
          <div>
            <Overline className="mb-6">Contribuer</Overline>
            <h1 className="mb-6 text-[clamp(34px,9vw,46px)] font-bold leading-[1.0] tracking-[-0.04em] lg:text-[clamp(40px,4.8vw,64px)]">
              Quatre façons d'aider
            </h1>
            <p className="max-w-[58ch] text-[19px] leading-[1.55] text-ink-soft">
              Code, données, vérification des sources ou financement : voici
              comment aider concrètement.
            </p>
          </div>
          <div className="mt-8 lg:mt-0 lg:border-l lg:border-rule lg:pl-12">
            <div className="flex flex-col gap-2.5">
              {PRINCIPES.map((ligne) => (
                <p
                  key={ligne}
                  className="font-mono text-[13px] leading-[1.6] text-ink-soft"
                >
                  {ligne}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Les trois voies */}
      <section className="border-b border-rule">
        <Container className="py-16">
          <RuledGrid cols={3}>
            {VOIES.map((voie, index) => (
              <div
                key={voie.titre}
                className="flex flex-col bg-surface px-8 py-10"
              >
                <p className="mb-5 font-mono text-[11px] tracking-[0.12em] text-ink-mute">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mb-4 text-[25px] font-semibold leading-[1.2] tracking-[-0.025em] text-ink">
                  {voie.titre}
                </h2>
                <p className="mb-6 text-[16px] leading-[1.6] text-ink-soft">
                  {voie.texte}
                </p>
                <SquareList items={voie.items} mono className="mb-8" />
                <a
                  href={voie.lien.href}
                  {...(voie.lien.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="mt-auto inline-flex min-h-12 items-center text-[15px] font-semibold text-indigo underline transition-colors duration-150 hover:text-gold-text"
                >
                  {voie.lien.label}&nbsp;&rarr;
                </a>
              </div>
            ))}
          </RuledGrid>
        </Container>
      </section>

      {/* 3. Soutien financier */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 gap-10 bg-indigo p-8 sm:p-10 lg:grid-cols-[1.25fr_1fr] lg:p-14">
            <div>
              <p className="mb-5 font-mono text-[11px] tracking-[0.12em] text-[rgba(250,247,240,0.55)]">
                04
              </p>
              <h2 className="mb-5 text-[clamp(26px,3.2vw,40px)] font-bold leading-[1.05] tracking-[-0.035em] text-paper">
                Soutien financier
              </h2>
              <p className="mb-6 max-w-[52ch] text-[17px] leading-[1.6] text-[rgba(250,247,240,0.75)]">
                Sankofa fonctionne sans publicité et sans financement privé.
                Chaque don nous aide à maintenir les serveurs, développer de
                nouvelles fonctionnalités et rester indépendants.
              </p>
              <p className="font-mono text-[13px] leading-[1.6] text-gold">
                Même un petit montant couvre les frais de serveurs, de noms de
                domaine et de développement.
              </p>
            </div>
            <div className="flex flex-col justify-center gap-4">
              <Button
                href="https://tipeee.com/poligraph"
                variant="gold"
                external
                arrow
                block
              >
                Soutenir sur Tipeee
              </Button>
              <p className="text-center font-mono text-[11px] tracking-[0.08em] text-[rgba(250,247,240,0.5)]">
                Association loi 1901 · RNA W931031256
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
