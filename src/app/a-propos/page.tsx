import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Overline from "@/components/ui/Overline";
import RuledGrid from "@/components/ui/RuledGrid";
import SectionHead from "@/components/ui/SectionHead";
import SankofaMark from "@/components/SankofaMark";

export const metadata: Metadata = {
  title: "À propos",
  description: "L'histoire de l'Association Sankofa, son équipe et sa mission.",
};

const EQUIPE = [
  {
    initiales: "LD",
    nom: "Lamine Diaby",
    role: "Co-président et fondateur",
    bio: "Ingénieur logiciel. Créateur de Poligraph et CNuisible.",
  },
  {
    initiales: "CD",
    nom: "Mouhamadou Ciré Diaby",
    role: "Co-président",
    bio: "Co-fondateur de l'Association Sankofa.",
  },
];

const INFOS = [
  {
    label: "Dénomination",
    valeur: "Association Sankofa (Sankofa)",
    mono: false,
  },
  { label: "Type", valeur: "Association loi 1901", mono: false },
  { label: "Numéro RNA", valeur: "W931031256", mono: true },
  { label: "Date de création", valeur: "1er mars 2026", mono: false },
  {
    label: "Siège social",
    valeur: "Seine-Saint-Denis (domiciliation en cours)",
    mono: false,
  },
  { label: "Email", valeur: "contact@asso-sankofa.org", mono: false },
];

export default function AProposPage() {
  return (
    <>
      {/* 1. En-tete */}
      <section className="border-b border-rule">
        <Container className="py-16">
          <Overline className="mb-6">L'association</Overline>
          <h1 className="mb-6 text-[clamp(34px,9vw,46px)] font-bold leading-[1.0] tracking-[-0.04em] lg:text-[clamp(40px,4.8vw,64px)]">
            Ce que fait Sankofa
          </h1>
          <p className="max-w-[60ch] text-[19px] leading-[1.55] text-ink-soft">
            Ce que fait Sankofa, d'où vient le nom, qui est derrière.
          </p>
        </Container>
      </section>

      {/* 2. Qu'est-ce que Sankofa */}
      <section className="border-b border-rule bg-surface">
        <Container className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr]">
          <div className="adinkra-pattern hidden items-center justify-center border-r border-rule py-16 lg:flex">
            <SankofaMark size={168} eye="#FFFFFF" />
          </div>
          <div className="py-16 lg:pl-14">
            <Overline className="mb-6">Symbole adinkra, Ghana</Overline>
            <h2 className="mb-7 text-[clamp(26px,4vw,36px)] font-bold leading-[1.05] tracking-[-0.035em] text-ink">
              Qu'est-ce que Sankofa ?
            </h2>
            <p className="mb-6 max-w-[58ch] text-[19px] leading-[1.55] text-ink-soft">
              <strong className="font-semibold text-ink">Sankofa</strong> est un
              symbole adinkra originaire du Ghana. Il représente un oiseau qui
              tourne la tête vers l'arrière pour saisir un œuf posé sur son dos.
              Sa signification :{" "}
              <em className="text-indigo">
                « retourne chercher ce que tu as oublié »
              </em>
              .
            </p>
            <p className="max-w-[58ch] text-[17px] leading-[1.6] text-ink-soft">
              Appliqué à ce qu'on fait : les données publiques existent (votes,
              affaires, sanctions, patrimoine), mais elles sont dispersées,
              illisibles, rarement croisées. Notre travail, c'est d'aller les
              chercher et de les rendre utilisables.
            </p>
          </div>
        </Container>
      </section>

      {/* 3. L'equipe */}
      <section className="border-b border-rule">
        <Container className="py-16">
          <SectionHead
            title="L'équipe"
            note="deux co-présidents"
            size="small"
            className="mb-12"
          />
          <RuledGrid cols={2}>
            {EQUIPE.map((membre) => (
              <div
                key={membre.nom}
                className="flex items-start gap-5 bg-surface p-8"
              >
                <span
                  aria-hidden="true"
                  className="flex size-14 shrink-0 items-center justify-center border border-rule font-mono text-[15px] text-ink-soft"
                >
                  {membre.initiales}
                </span>
                <div>
                  <h3 className="text-[21px] font-semibold tracking-[-0.025em] text-ink">
                    {membre.nom}
                  </h3>
                  <p className="mt-1 font-mono text-[12px] tracking-[0.08em] uppercase text-gold-text">
                    {membre.role}
                  </p>
                  <p className="mt-3 text-[16px] leading-[1.6] text-ink-soft">
                    {membre.bio}
                  </p>
                </div>
              </div>
            ))}
          </RuledGrid>
        </Container>
      </section>

      {/* 4. Informations legales */}
      <section className="bg-surface">
        <Container className="grid grid-cols-1 py-16 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
          <div>
            <h2 className="mb-8 text-[clamp(26px,4.5vw,34px)] font-bold leading-[1.05] tracking-[-0.035em] text-ink">
              Informations légales
            </h2>
            <dl className="border-t border-rule-strong">
              {INFOS.map((info) => (
                <div
                  key={info.label}
                  className="grid grid-cols-1 gap-1 border-b border-rule-soft py-4 md:grid-cols-[200px_1fr] md:gap-6"
                >
                  <dt className="font-mono text-[11px] tracking-[0.1em] uppercase text-ink-mute">
                    {info.label}
                  </dt>
                  <dd
                    className={
                      info.mono
                        ? "font-mono text-[15px] text-ink"
                        : "text-[16px] font-medium text-ink"
                    }
                  >
                    {info.valeur}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-10 lg:mt-0">
            <div className="bg-surface-2 p-9">
              <h3 className="mb-4 font-mono text-[11px] font-medium tracking-[0.12em] uppercase text-gold-text">
                Objet de l'association
              </h3>
              <p className="text-[15px] leading-[1.7] text-ink-soft">
                Promouvoir la transparence démocratique et la déontologie
                publique par le numérique, l'open data et l'intelligence
                artificielle ; développer des outils citoyens libres et gratuits
                permettant l'accès, l'analyse et la diffusion de données
                publiques relatives à la vie politique française et européenne ;
                favoriser l'éducation civique, l'engagement citoyen et la
                participation démocratique.
              </p>
              <p className="mt-6 border-t border-rule pt-5 font-mono text-[11px] leading-[1.6] tracking-[0.08em] text-ink-mute">
                Extrait des statuts déposés, 1ᵉʳ mars 2026
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
