import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Projets",
  description:
    "Les projets de l'Association Sankofa pour la transparence démocratique.",
};

export default function ProjetsPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo mb-4">
            Nos projets
          </h1>
          <p className="text-lg text-slate/60 max-w-2xl">
            Poligraph cartographie la vie politique française. CNuisible
            documente les manquements de CNews.
          </p>
        </div>
      </section>

      {/* Poligraph - Projet principal */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <ScrollReveal direction="left" className="lg:col-span-3">
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 bg-gold/10 text-gold text-xs font-semibold rounded-full uppercase tracking-wider">
                  En production
                </span>
              </div>
              <h2 className="text-3xl font-bold text-indigo mb-6">Poligraph</h2>
              <p className="text-slate/70 leading-relaxed mb-6">
                Poligraph est une plateforme web qui agrège et croise les
                données publiques sur les responsables politiques français :
                votes parlementaires, affaires judiciaires, fact-checks,
                affiliations, déclarations de patrimoine et mandats.
              </p>
              <p className="text-slate/70 leading-relaxed mb-8">
                Le projet tire ses données de 9 sources officielles (Assemblée
                nationale, Sénat, Gouvernement, HATVP, Wikidata, etc.) et les
                rend accessibles via une interface web moderne et un serveur MCP
                compatible avec les assistants IA.
              </p>

              <h3 className="text-lg font-bold text-indigo mb-4 font-display">
                Fonctionnalités
              </h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Fiches complètes de 1 068 responsables politiques",
                  "Analyse de 10 145 votes parlementaires",
                  "Suivi de 450+ affaires judiciaires sourcées",
                  "1 749 dossiers législatifs avec impact citoyen",
                  "Serveur MCP pour interroger les données via IA",
                  "Newsletter hebdomadaire automatisée",
                  "API publique et open data",
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="text-gold mt-0.5">&#9670;</span>
                    <span className="text-slate/70">{feature}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-lg font-bold text-indigo mb-4 font-display">
                Stack technique
              </h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  "Next.js 16",
                  "React 19",
                  "TypeScript",
                  "Prisma 7",
                  "PostgreSQL",
                  "Tailwind CSS 4",
                  "Inngest",
                  "Vercel",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-indigo/5 text-indigo text-xs font-medium rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://poligraph.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-indigo text-cream font-semibold rounded-lg hover:bg-indigo-light transition-colors duration-300"
                >
                  Visiter poligraph.fr
                  <span aria-hidden="true">&rarr;</span>
                </a>
                <a
                  href="https://github.com/ironlam/poligraph-mcp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-indigo/20 text-indigo font-semibold rounded-lg hover:bg-indigo/5 transition-colors duration-300"
                >
                  Serveur MCP sur GitHub
                </a>
              </div>
            </ScrollReveal>

            {/* Sidebar stats */}
            <ScrollReveal direction="right" className="lg:col-span-2">
              <div className="space-y-6">
                <div className="p-6 bg-cream rounded-2xl border border-indigo/5">
                  <h3 className="text-sm font-semibold text-indigo/50 uppercase tracking-wider mb-6">
                    Chiffres clés
                  </h3>
                  <div className="space-y-6">
                    {[
                      { value: "1 068", label: "politiques publiés" },
                      { value: "10 145", label: "scrutins analysés" },
                      { value: "450+", label: "affaires judiciaires" },
                      { value: "1 749", label: "dossiers législatifs" },
                      { value: "9", label: "sources de données" },
                      { value: "18", label: "outils MCP" },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="flex items-baseline justify-between"
                      >
                        <span className="text-2xl font-bold text-indigo font-display">
                          {stat.value}
                        </span>
                        <span className="text-sm text-slate/50">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 bg-gold/5 rounded-2xl border border-gold/10">
                  <h3 className="text-sm font-semibold text-gold uppercase tracking-wider mb-3">
                    Référence
                  </h3>
                  <p className="text-sm text-slate/60">
                    Poligraph est référencé sur{" "}
                    <a
                      href="https://www.data.gouv.fr/dataservices/poligraph-api-transparence-politique-affaires-judiciaires-et-fact-checks-rest-json"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo underline hover:text-gold transition-colors"
                    >
                      data.gouv.fr
                    </a>{" "}
                    comme service open data citoyen.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CNuisible */}
      <section className="py-16 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <ScrollReveal direction="left" className="lg:col-span-3">
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 bg-terra/10 text-terra text-xs font-semibold rounded-full uppercase tracking-wider">
                  En production
                </span>
              </div>
              <h2 className="text-3xl font-bold text-indigo mb-6">CNuisible</h2>
              <p className="text-slate/70 leading-relaxed mb-6">
                Le dossier factuel contre CNews. CNuisible documente chaque
                sanction de l{"'"}Arcom, chaque avis du Conseil de déontologie
                journalistique (CDJM), chaque manquement à la Charte de Munich
                (1971). Tout est sourcé, vérifiable, partageable.
              </p>
              <p className="text-slate/70 leading-relaxed mb-8">
                Le projet est né du constat que CNews représente aujourd{"'"}hui
                le cas le plus documenté de manquement chronique aux obligations
                du journalisme sur la TNT française. CNuisible ne juge pas les
                opinions : il mesure l{"'"}écart entre la pratique de la chaîne
                et les standards professionnels.
              </p>

              <h3 className="text-lg font-bold text-indigo mb-4 font-display">
                Fonctionnalités
              </h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Documentation factuelle des infractions sourcées",
                  "Mapping vers les 10 devoirs de la Charte de Munich",
                  "Témoignages anonymisés de journalistes ex-CNews",
                  "Cartographie de la galaxie médiatique Bolloré",
                  "Export PDF du dossier pour l'Arcom et les élus",
                  "Filtres par type d'infraction et article de la Charte",
                  "Page \"Pourquoi ce site\" avec méthodologie complète",
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="text-terra mt-0.5">&#9670;</span>
                    <span className="text-slate/70">{feature}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-lg font-bold text-indigo mb-4 font-display">
                Stack technique
              </h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  "Next.js 16",
                  "React 19",
                  "TypeScript",
                  "Supabase",
                  "Tailwind CSS 4",
                  "Vercel",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-indigo/5 text-indigo text-xs font-medium rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href="https://cnuisible.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-terra text-white font-semibold rounded-lg hover:bg-terra-light transition-colors duration-300"
              >
                Visiter cnuisible.fr
                <span aria-hidden="true">&rarr;</span>
              </a>
            </ScrollReveal>

            <ScrollReveal direction="right" className="lg:col-span-2">
              <div className="space-y-6">
                <div className="p-6 bg-white rounded-2xl border border-indigo/5">
                  <h3 className="text-sm font-semibold text-indigo/50 uppercase tracking-wider mb-6">
                    Chiffres clés
                  </h3>
                  <div className="space-y-6">
                    {[
                      { value: "32", label: "infractions documentées" },
                      { value: "6", label: "sanctions Arcom" },
                      { value: "13", label: "avis CDJM" },
                      { value: "9", label: "témoignages publiés" },
                      { value: "10", label: "devoirs de Munich couverts" },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="flex items-baseline justify-between"
                      >
                        <span className="text-2xl font-bold text-terra font-display">
                          {stat.value}
                        </span>
                        <span className="text-sm text-slate/50">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 bg-terra/5 rounded-2xl border border-terra/10">
                  <h3 className="text-sm font-semibold text-terra uppercase tracking-wider mb-3">
                    Démarche éditoriale
                  </h3>
                  <p className="text-sm text-slate/60">
                    Chaque fait est sourcé par une URL vérifiable (Arcom, CDJM,
                    Conseil d{"'"}État, presse). Formulation factuelle, revue
                    humaine avant publication, droit de réponse ouvert.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Prochains projets */}
      <section className="py-24 bg-cream-dark">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-indigo mb-4">
              Prochains projets
            </h2>
            <p className="text-slate/60 max-w-xl mx-auto mb-12">
              D{"'"}autres chantiers sont ouverts.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              {
                title: "Déontologie publique",
                description:
                  "Suivi des obligations déontologiques des élus et responsables publics.",
              },
              {
                title: "Observatoire des lobbies",
                description:
                  "Cartographie des relations entre lobbies et décideurs politiques via les données HATVP.",
              },
            ].map((project) => (
              <ScrollReveal key={project.title}>
                <div className="p-8 bg-white rounded-2xl border border-indigo/5 border-dashed text-left card-hover">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-0.5 bg-slate/5 text-slate/40 text-xs font-medium rounded-full">
                      À venir
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-indigo mb-2 font-display">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate/60">
                    {project.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <p className="mt-12 text-slate/50 text-sm">
              Vous avez une idée de projet ?{" "}
              <Link
                href="/contribuer"
                className="text-indigo underline hover:text-gold transition-colors"
              >
                Proposez-la
              </Link>
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
