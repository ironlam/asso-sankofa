import Container from "@/components/ui/Container";
import Overline from "@/components/ui/Overline";
import Button from "@/components/ui/Button";
import DataTable from "@/components/ui/DataTable";
import Stat from "@/components/ui/Stat";
import SectionHead from "@/components/ui/SectionHead";
import SankofaMark from "@/components/SankofaMark";
import { getStats } from "@/lib/stats";

const CHANTIERS = [
  {
    titre: "Transparence",
    texte:
      "Agréger et croiser les données publiques sur les responsables politiques : votes, patrimoine, affaires judiciaires, mandats.",
  },
  {
    titre: "Open Data",
    texte:
      "Développer des outils libres et open source pour rendre les données politiques accessibles, structurées et réutilisables par tous.",
  },
  {
    titre: "Éducation civique",
    texte:
      "Expliquer concrètement ce que votent les élus, comment fonctionne une mise en examen, à qui appartient quel média.",
  },
];

const DATA_GOUV =
  "https://www.data.gouv.fr/dataservices/poligraph-api-transparence-politique-affaires-judiciaires-et-fact-checks-rest-json";

const LABEL_SOMBRE = "text-[rgba(250,247,240,0.6)]";

export default async function Home() {
  const stats = await getStats();
  const nombre = (valeur: number) => valeur.toLocaleString("fr-FR");

  const preuve = [
    { value: nombre(stats.politiques), label: "responsables publiés" },
    { value: nombre(stats.scrutins), label: "votes analysés" },
    { value: nombre(stats.affaires), label: "affaires judiciaires" },
    { value: nombre(stats.dossiers), label: "dossiers législatifs" },
    { value: nombre(stats.factchecks), label: "fact-checks" },
  ];

  return (
    <>
      {/* 1. Heros */}
      <section className="border-b border-rule">
        <Container className="grid grid-cols-1 lg:grid-cols-[1.35fr_1fr]">
          <div className="py-12 lg:py-[88px] lg:pr-14">
            <Overline className="mb-7">
              Association loi 1901 · Seine-Saint-Denis
            </Overline>
            <h1 className="mb-7 text-[clamp(34px,9vw,46px)] font-bold leading-[0.98] tracking-[-0.045em] lg:text-[clamp(46px,5.6vw,76px)]">
              Données politiques.
              <br />
              <span className="text-indigo">Transparence réelle.</span>
            </h1>
            <p className="mb-10 max-w-[54ch] text-[19px] leading-[1.55] text-ink-soft">
              Nous développons des outils open source pour cartographier les
              votes, les affaires judiciaires et les manquements déontologiques
              des médias et responsables politiques français.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="/projets" arrow>
                Découvrir nos projets
              </Button>
              <Button href="/contribuer" variant="ghost">
                Contribuer
              </Button>
            </div>
          </div>
          <div className="adinkra-pattern hidden items-center justify-center border-l border-rule lg:flex">
            <SankofaMark size={200} eye="#FAF7F0" />
          </div>
        </Container>
      </section>

      {/* 2. Bandeau de preuve */}
      <section className="bg-indigo-deep">
        <Container className="py-14">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {preuve.map((item, index) => (
              <div
                key={item.label}
                className={`px-5 py-6 lg:border-l lg:border-rule-dark lg:first:border-l-0 lg:first:pl-0 ${
                  index === 4 ? "col-span-2 lg:col-span-1" : ""
                }`}
              >
                <Stat
                  value={item.value}
                  label={item.label}
                  tone="paper"
                  labelClassName={LABEL_SOMBRE}
                />
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 border-t border-rule-dark pt-8 md:flex-row md:items-baseline md:justify-between">
            <p className="max-w-[70ch] text-[15px] leading-[1.6] text-[rgba(250,247,240,0.7)]">
              <span className="font-semibold text-paper">
                {stats.sources} sources de données
              </span>{" "}
              : Assemblée nationale, Sénat, Gouvernement, HATVP, Parlement
              européen, Wikidata, NosDéputés, Datan, OpenSanctions, Google Fact
              Check, presse.
            </p>
            <a
              href={DATA_GOUV}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 font-mono text-[12px] tracking-[0.06em] text-gold transition-colors duration-150 hover:text-gold-light"
            >
              référencé sur data.gouv.fr &rarr;
            </a>
          </div>
        </Container>
      </section>

      {/* 3. Ce qu'on fait concretement */}
      <section className="border-b border-rule">
        <Container className="py-20">
          <SectionHead
            title="Ce qu'on fait concrètement"
            note="trois chantiers, tous open source"
            className="mb-14"
          />
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {CHANTIERS.map((chantier, index) => (
              <div key={chantier.titre} className="border-t-2 border-ink pt-6">
                <p className="mb-4 font-mono text-[11px] tracking-[0.12em] text-ink-mute">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mb-3 text-[23px] font-semibold leading-[1.2] tracking-[-0.025em] text-ink">
                  {chantier.titre}
                </h3>
                <p className="text-[16px] leading-[1.6] text-ink-soft">
                  {chantier.texte}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Poligraph, projet principal */}
      <section className="border-b border-rule bg-surface">
        <Container className="grid grid-cols-1 py-20 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
          <div>
            <Overline className="mb-6">
              Projet principal · en production
            </Overline>
            <h2 className="mb-6 text-[clamp(32px,4vw,54px)] font-bold leading-[1.05] tracking-[-0.04em] text-ink">
              Poligraph
            </h2>
            <p className="mb-9 max-w-[58ch] text-[19px] leading-[1.55] text-ink-soft">
              La plateforme de référence pour comprendre la politique française
              par les données. Poligraph agrège {stats.sources} sources de
              données publiques et rend ces données accessibles aux citoyens,
              journalistes et chercheurs.
            </p>
            <DataTable
              className="mb-9"
              rows={[
                {
                  label: "Responsables publiés",
                  value: nombre(stats.politiques),
                },
                { label: "Scrutins analysés", value: nombre(stats.scrutins) },
                { label: "Affaires judiciaires", value: nombre(stats.affaires) },
                { label: "Outils MCP", value: String(stats.outilsMcp) },
              ]}
            />
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="https://poligraph.fr" external arrow>
                Visiter poligraph.fr
              </Button>
              <Button
                href="https://github.com/ironlam/poligraph-mcp"
                variant="ghost"
                external
              >
                Serveur MCP
              </Button>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 lg:border-l lg:border-rule lg:pl-14">
            <img
              src="/poligraph-og.png"
              alt="Interface publique de Poligraph"
              className="w-full border border-rule"
            />
            <p className="mt-3 font-mono text-[11px] tracking-[0.08em] text-ink-mute">
              poligraph.fr, interface publique
            </p>
          </div>
        </Container>
      </section>

      {/* 5. CNuisible, second projet */}
      <section className="border-b border-rule">
        <Container className="grid grid-cols-1 py-20 lg:grid-cols-[1fr_1.4fr] lg:gap-14">
          <div>
            <Overline tone="terra" className="mb-6">
              Second projet · en production
            </Overline>
            <h2 className="mb-4 text-[clamp(28px,4.5vw,34px)] font-bold leading-[1.05] tracking-[-0.035em] text-ink">
              CNuisible
            </h2>
            <a
              href="https://cnuisible.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[13px] tracking-[0.06em] text-terra-text underline transition-colors duration-150 hover:text-ink"
            >
              cnuisible.fr &rarr;
            </a>
          </div>
          <div className="mt-8 lg:mt-0">
            <p className="mb-5 text-[17px] leading-[1.6] text-ink-soft">
              Un outil de contrôle citoyen de la déontologie journalistique :
              chaque sanction de l'Arcom contre CNews, chaque avis du CDJM,
              chaque manquement à la Charte de Munich, documenté et sourcé.
            </p>
            <p className="mb-9 text-[17px] leading-[1.6] text-ink-soft">
              Le projet ne juge pas les opinions : il mesure l'écart entre une
              pratique éditoriale et les standards professionnels. Chaque fait
              est sourcé par une URL vérifiable, relu avant publication, et le
              droit de réponse est ouvert.
            </p>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              <Stat
                value={String(stats.infractions)}
                label="cas vérifiés"
                tone="terra"
                size="medium"
              />
              <Stat
                value={String(stats.avisCdjm)}
                label="avis CDJM"
                tone="terra"
                size="medium"
              />
              <Stat
                value={String(stats.devoirsMunich)}
                label="devoirs de Munich"
                tone="terra"
                size="medium"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* 6. Soutenir, seul bloc plein de la page */}
      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 gap-10 bg-indigo p-8 sm:p-10 lg:grid-cols-[1.2fr_1fr] lg:p-16">
            <div>
              <Overline tone="gold" className="mb-6">
                Soutenir
              </Overline>
              <h2 className="mb-6 text-[clamp(26px,3.4vw,42px)] font-bold leading-[1.05] tracking-[-0.035em] text-paper">
                Les serveurs coûtent de l'argent, le code prend du temps
              </h2>
              <p className="max-w-[52ch] text-[17px] leading-[1.6] text-[rgba(250,247,240,0.75)]">
                Sankofa n'a pas de publicité, pas de financement privé. Votre
                don couvre directement les coûts d'hébergement et de
                développement.
              </p>
            </div>
            <div className="flex flex-col justify-center gap-3">
              <Button
                href="https://tipeee.com/poligraph"
                variant="gold"
                external
                arrow
                block
              >
                Faire un don sur Tipeee
              </Button>
              <Button href="/contribuer" variant="ghostLight" arrow block>
                Autres manières de contribuer
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
