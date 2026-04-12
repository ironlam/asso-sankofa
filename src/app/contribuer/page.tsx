import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Contribuer",
  description:
    "Comment contribuer aux projets de l'Association Sankofa : développement, modération, dons.",
};

export default function ContribuerPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo mb-4">
            Contribuer
          </h1>
          <p className="text-lg text-slate/60 max-w-2xl">
            Code, données, vérification des sources ou financement : voici
            comment aider concrètement.
          </p>
        </div>
      </section>

      {/* Modes de contribution */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Dev */}
            <ScrollReveal>
              <div className="h-full p-8 bg-cream rounded-2xl border border-indigo/5 card-hover card-accent card-accent-indigo">
                <div className="text-3xl mb-4">{"</>"}</div>
                <h3 className="text-xl font-bold text-indigo mb-3 font-display">
                  Développement
                </h3>
                <p className="text-slate/70 leading-relaxed mb-6">
                  Le code de Poligraph est open source. Contribuez au
                  développement de nouvelles fonctionnalités, corrigez des bugs,
                  ou améliorez les pipelines de données.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "Next.js, React, TypeScript",
                    "Prisma, PostgreSQL",
                    "Pipelines de sync (Inngest)",
                    "Serveur MCP",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-slate/60"
                    >
                      <span className="text-gold">&#9670;</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://github.com/ironlam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-indigo font-semibold hover:text-gold transition-colors"
                >
                  Voir sur GitHub <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </ScrollReveal>

            {/* Modération */}
            <ScrollReveal>
              <div className="h-full p-8 bg-cream rounded-2xl border border-indigo/5 card-hover card-accent card-accent-gold">
                <div className="text-3xl mb-4">&#9998;</div>
                <h3 className="text-xl font-bold text-indigo mb-3 font-display">
                  Modération éditoriale
                </h3>
                <p className="text-slate/70 leading-relaxed mb-6">
                  Aidez-nous à vérifier et enrichir les données : fiches
                  politiques, affaires judiciaires, fact-checks. La qualité des
                  données est notre priorité.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "Vérification des sources",
                    "Enrichissement des fiches",
                    "Relecture des affaires judiciaires",
                    "Classification des votes",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-slate/60"
                    >
                      <span className="text-gold">&#9670;</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="mailto:contact@asso-sankofa.org"
                  className="inline-flex items-center gap-2 text-indigo font-semibold hover:text-gold transition-colors"
                >
                  Nous contacter <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </ScrollReveal>

            {/* Données */}
            <ScrollReveal>
              <div className="h-full p-8 bg-cream rounded-2xl border border-indigo/5 card-hover card-accent card-accent-terra">
                <div className="text-3xl mb-4">&#128202;</div>
                <h3 className="text-xl font-bold text-indigo mb-3 font-display">
                  Données et recherche
                </h3>
                <p className="text-slate/70 leading-relaxed mb-6">
                  Chercheurs, data scientists, journalistes : utilisez nos
                  données pour vos travaux. Signalez-nous de nouvelles sources ou
                  proposez des analyses.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "API publique disponible",
                    "Serveur MCP pour requêtes IA",
                    "Données référencées sur data.gouv.fr",
                    "Exports et analyses",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-slate/60"
                    >
                      <span className="text-gold">&#9670;</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://poligraph.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-indigo font-semibold hover:text-gold transition-colors"
                >
                  Explorer les données <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </ScrollReveal>

            {/* Financement */}
            <ScrollReveal>
              <div className="h-full p-8 bg-gold/5 rounded-2xl border border-gold/20 card-hover card-accent card-accent-gold">
                <div className="text-3xl mb-4">&#10084;</div>
                <h3 className="text-xl font-bold text-indigo mb-3 font-display">
                  Soutien financier
                </h3>
                <p className="text-slate/70 leading-relaxed mb-6">
                  Sankofa fonctionne sans publicité et sans financement privé.
                  Chaque don nous aide à maintenir les serveurs, développer de
                  nouvelles fonctionnalités et rester indépendants.
                </p>
                <p className="text-slate/60 text-sm leading-relaxed mb-6">
                  Même un petit montant contribue à couvrir les frais de
                  serveurs, de noms de domaine et de développement.
                </p>
                <a
                  href="https://tipeee.com/poligraph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-terra text-white font-semibold rounded-lg hover:bg-terra-light transition-colors duration-300"
                >
                  Soutenir sur Tipeee
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
