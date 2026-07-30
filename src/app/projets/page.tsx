import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Overline from "@/components/ui/Overline";
import Button from "@/components/ui/Button";
import DataTable from "@/components/ui/DataTable";
import SquareList from "@/components/ui/SquareList";
import { getStats } from "@/lib/stats";

export const metadata: Metadata = {
  title: "Projets",
  description:
    "Les projets de l'Association Sankofa pour la transparence démocratique.",
};

const DATA_GOUV =
  "https://www.data.gouv.fr/dataservices/poligraph-api-transparence-politique-affaires-judiciaires-et-fact-checks-rest-json";

type Ligne = {
  nom: string;
  objet: string;
  statut: "en production" | "à venir";
  accent: string;
  lien: { href: string; label: string } | null;
};

const INDEX: Ligne[] = [
  {
    nom: "Poligraph",
    objet:
      "Votes, affaires judiciaires et fact-checks des responsables politiques",
    statut: "en production",
    accent: "bg-indigo",
    lien: { href: "https://poligraph.fr", label: "poligraph.fr" },
  },
  {
    nom: "CNuisible",
    objet:
      "Déontologie journalistique : sanctions Arcom, avis CDJM, Charte de Munich",
    statut: "en production",
    accent: "bg-terra",
    lien: { href: "https://cnuisible.fr", label: "cnuisible.fr" },
  },
  {
    nom: "Déontologie publique",
    objet:
      "Suivi des obligations déontologiques des élus et responsables publics",
    statut: "à venir",
    accent: "",
    lien: null,
  },
  {
    nom: "Observatoire des lobbies",
    objet:
      "Cartographie des relations entre lobbies et décideurs via les données HATVP",
    statut: "à venir",
    accent: "",
    lien: null,
  },
];

const STACK_POLIGRAPH =
  "Next.js 16 · React 19 · TypeScript · Prisma 7 · PostgreSQL · Tailwind CSS 4 · Inngest · Vercel";

const STACK_CNUISIBLE =
  "Next.js 16 · React 19 · TypeScript · Supabase · Tailwind CSS 4 · Vercel";

const FEATURES_CNUISIBLE = [
  "Documentation factuelle des infractions sourcées",
  "Mapping vers les 10 devoirs de la Charte de Munich",
  "Témoignages anonymisés de journalistes ex-CNews",
  "Cartographie de la galaxie médiatique Bolloré",
  "Export PDF du dossier pour l'Arcom et les élus",
  "Filtres par type d'infraction et article de la Charte",
  "Page « Pourquoi ce site » avec méthodologie complète",
];

export default async function ProjetsPage() {
  const stats = await getStats();
  const nombre = (valeur: number) => valeur.toLocaleString("fr-FR");

  const featuresPoligraph = [
    `Fiches complètes de ${nombre(stats.politiques)} responsables politiques`,
    `Analyse de ${nombre(stats.scrutins)} scrutins parlementaires`,
    `Suivi de ${nombre(stats.affaires)} affaires judiciaires sourcées`,
    `${nombre(stats.dossiers)} dossiers législatifs avec impact citoyen`,
    "Serveur MCP pour interroger les données via IA",
    "Newsletter hebdomadaire automatisée",
    "API publique et open data",
  ];

  return (
    <>
      {/* 1. En-tete de page */}
      <section className="border-b border-rule">
        <Container className="py-16">
          <Overline className="mb-6">Projets</Overline>
          <h1 className="mb-6 text-[clamp(34px,9vw,46px)] font-bold leading-[1.0] tracking-[-0.04em] lg:text-[clamp(40px,4.8vw,64px)]">
            Nos projets
          </h1>
          <p className="max-w-[60ch] text-[19px] leading-[1.55] text-ink-soft">
            Poligraph cartographie la vie politique française. CNuisible
            documente les manquements à la déontologie journalistique. Deux
            autres chantiers sont ouverts.
          </p>
        </Container>
      </section>

      {/* 2. Index des projets */}
      <section className="border-b border-rule">
        <Container className="py-16">
          <table className="hidden w-full border-collapse lg:table">
            <thead>
              <tr className="border-b border-rule-strong text-left">
                {["Projet", "Objet", "Statut", "Accès"].map((entete) => (
                  <th
                    key={entete}
                    className="pb-3 font-mono text-[10px] font-medium tracking-[0.12em] uppercase text-ink-mute"
                  >
                    {entete}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {INDEX.map((projet) => {
                const aVenir = projet.statut === "à venir";
                return (
                  <tr
                    key={projet.nom}
                    className={`border-b border-rule-soft transition-colors duration-150 hover:bg-surface-2 ${
                      aVenir ? "opacity-50" : ""
                    }`}
                  >
                    <td className="w-[200px] py-4 text-[17px] font-semibold text-ink">
                      {projet.nom}
                    </td>
                    <td className="py-4 pr-8 text-[15px] text-ink-soft">
                      {projet.objet}
                    </td>
                    <td className="w-[150px] py-4">
                      <span className="flex items-center gap-2.5 font-mono text-[12px] text-ink-soft">
                        <span
                          aria-hidden="true"
                          className={`size-1.5 shrink-0 ${
                            aVenir ? "border border-ink-mute" : projet.accent
                          }`}
                        />
                        {projet.statut}
                      </span>
                    </td>
                    <td className="w-[130px] py-4">
                      {projet.lien ? (
                        <a
                          href={projet.lien.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-[12px] text-indigo underline transition-colors duration-150 hover:text-gold-text"
                        >
                          {projet.lien.label}
                        </a>
                      ) : null}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {/* Cartes empilees sous 1024px */}
          <div className="flex flex-col gap-px bg-rule lg:hidden">
            {INDEX.map((projet) => {
              const aVenir = projet.statut === "à venir";
              return (
                <div
                  key={projet.nom}
                  className={`bg-surface p-5 ${aVenir ? "opacity-50" : ""}`}
                >
                  <div className="mb-2 flex items-baseline justify-between gap-4">
                    <h2 className="text-[17px] font-semibold text-ink">
                      {projet.nom}
                    </h2>
                    <span className="flex shrink-0 items-center gap-2 font-mono text-[11px] text-ink-soft">
                      <span
                        aria-hidden="true"
                        className={`size-1.5 shrink-0 ${
                          aVenir ? "border border-ink-mute" : projet.accent
                        }`}
                      />
                      {projet.statut}
                    </span>
                  </div>
                  <p className="text-[15px] leading-[1.6] text-ink-soft">
                    {projet.objet}
                  </p>
                  {projet.lien ? (
                    <a
                      href={projet.lien.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block font-mono text-[12px] text-indigo underline"
                    >
                      {projet.lien.label}
                    </a>
                  ) : null}
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 3. Fiche Poligraph */}
      <section className="border-b border-rule bg-surface">
        <Container className="grid grid-cols-1 py-20 lg:grid-cols-[1.25fr_1fr] lg:gap-14">
          <div>
            <Overline className="mb-6">
              01 · Projet principal · en production
            </Overline>
            <h2 className="mb-6 text-[clamp(30px,4vw,48px)] font-bold leading-[1.05] tracking-[-0.04em] text-ink">
              Poligraph
            </h2>
            <p className="mb-5 max-w-[62ch] text-[17px] leading-[1.6] text-ink-soft">
              Poligraph est une plateforme web qui agrège et croise les données
              publiques sur les responsables politiques français : votes
              parlementaires, affaires judiciaires, fact-checks, affiliations,
              déclarations de patrimoine et mandats.
            </p>
            <p className="mb-9 max-w-[62ch] text-[17px] leading-[1.6] text-ink-soft">
              Le projet tire ses données de {stats.sources} sources de données
              publiques (Assemblée nationale, Sénat, Gouvernement, HATVP,
              Parlement européen, Wikidata, etc.) et les rend accessibles via
              une interface web et un serveur MCP compatible avec les assistants
              IA.
            </p>

            <h3 className="mb-4 font-mono text-[11px] font-medium tracking-[0.12em] uppercase text-ink-mute">
              Fonctionnalités
            </h3>
            <SquareList items={featuresPoligraph} className="mb-9" />

            <h3 className="mb-3 font-mono text-[11px] font-medium tracking-[0.12em] uppercase text-ink-mute">
              Stack technique
            </h3>
            <p className="mb-9 font-mono text-[13px] leading-[1.7] text-ink-soft">
              {STACK_POLIGRAPH}
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="https://poligraph.fr" external arrow>
                Visiter poligraph.fr
              </Button>
              <Button
                href="https://github.com/ironlam/poligraph-mcp"
                variant="ghost"
                external
              >
                Serveur MCP sur GitHub
              </Button>
            </div>
          </div>

          <div className="mt-10 lg:mt-0 lg:border-l lg:border-rule lg:pl-14">
            <h3 className="mb-4 font-mono text-[11px] font-medium tracking-[0.12em] uppercase text-ink-mute">
              Chiffres clés
            </h3>
            <DataTable
              className="mb-10"
              rows={[
                {
                  label: "Responsables publiés",
                  value: nombre(stats.politiques),
                },
                { label: "Scrutins analysés", value: nombre(stats.scrutins) },
                {
                  label: "Affaires judiciaires",
                  value: nombre(stats.affaires),
                },
                {
                  label: "Dossiers législatifs",
                  value: nombre(stats.dossiers),
                },
                { label: "Sources de données", value: String(stats.sources) },
                { label: "Outils MCP", value: String(stats.outilsMcp) },
              ]}
            />
            <div className="bg-surface-2 p-8">
              <h3 className="mb-3 font-mono text-[11px] font-medium tracking-[0.12em] uppercase text-gold-text">
                Référence
              </h3>
              <p className="mb-4 text-[15px] leading-[1.6] text-ink-soft">
                L'API publique de Poligraph est référencée comme service de
                données sur le portail national.
              </p>
              <a
                href={DATA_GOUV}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[12px] tracking-[0.06em] text-indigo underline transition-colors duration-150 hover:text-gold-text"
              >
                data.gouv.fr &rarr;
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Fiche CNuisible */}
      <section className="border-b border-rule">
        <Container className="grid grid-cols-1 py-20 lg:grid-cols-[1.25fr_1fr] lg:gap-14">
          <div>
            <Overline tone="terra" className="mb-6">
              02 · Second projet · en production
            </Overline>
            <h2 className="mb-6 text-[clamp(28px,3.6vw,44px)] font-bold leading-[1.05] tracking-[-0.04em] text-ink">
              CNuisible
            </h2>
            <p className="mb-5 max-w-[62ch] text-[17px] leading-[1.6] text-ink-soft">
              CNuisible documente chaque sanction de l'Arcom contre CNews,
              chaque avis du Conseil de déontologie journalistique (CDJM),
              chaque manquement à la Charte de Munich (1971). Tout est sourcé,
              vérifiable, partageable.
            </p>
            <p className="mb-9 max-w-[62ch] text-[17px] leading-[1.6] text-ink-soft">
              Le projet ne juge pas les opinions : il mesure l'écart entre une
              pratique éditoriale et les standards professionnels. Chaque fait
              est sourcé par une URL vérifiable, relu avant publication, et le
              droit de réponse est ouvert.
            </p>

            <h3 className="mb-4 font-mono text-[11px] font-medium tracking-[0.12em] uppercase text-ink-mute">
              Fonctionnalités
            </h3>
            <SquareList
              items={FEATURES_CNUISIBLE}
              tone="terra"
              className="mb-9"
            />

            <h3 className="mb-3 font-mono text-[11px] font-medium tracking-[0.12em] uppercase text-ink-mute">
              Stack technique
            </h3>
            <p className="mb-9 font-mono text-[13px] leading-[1.7] text-ink-soft">
              {STACK_CNUISIBLE}
            </p>

            <Button href="https://cnuisible.fr" variant="terra" external arrow>
              Visiter cnuisible.fr
            </Button>
          </div>

          <div className="mt-10 lg:mt-0 lg:border-l lg:border-rule lg:pl-14">
            <h3 className="mb-4 font-mono text-[11px] font-medium tracking-[0.12em] uppercase text-ink-mute">
              Chiffres clés
            </h3>
            <DataTable
              className="mb-10"
              rows={[
                { label: "Cas vérifiés", value: String(stats.infractions) },
                { label: "Avis CDJM", value: String(stats.avisCdjm) },
                {
                  label: "Rappels à l'ordre Arcom",
                  value: String(stats.rappelsArcom),
                },
                {
                  label: "Devoirs de Munich couverts",
                  value: String(stats.devoirsMunich),
                },
              ]}
            />
            <div className="bg-surface-2 p-8">
              <h3 className="mb-3 font-mono text-[11px] font-medium tracking-[0.12em] uppercase text-terra-text">
                Démarche éditoriale
              </h3>
              <p className="text-[15px] leading-[1.6] text-ink-soft">
                Chaque fait est sourcé par une URL vérifiable (Arcom, CDJM,
                Conseil d'État, presse). Formulation factuelle, revue humaine
                avant publication, droit de réponse ouvert.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. Une idee de projet */}
      <section className="py-16">
        <Container>
          <div className="flex flex-col items-start gap-6 bg-surface-2 p-8 sm:p-10 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="mb-2 text-[25px] font-semibold tracking-[-0.025em] text-ink">
                Vous avez une idée de projet ?
              </h2>
              <p className="text-[16px] text-ink-soft">
                D'autres chantiers sont ouverts.
              </p>
            </div>
            <Button href="/contribuer" arrow>
              Proposez-la
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
