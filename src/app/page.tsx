import Link from "next/link";
import SankofaBird from "@/components/SankofaBird";
import ScrollReveal from "@/components/ScrollReveal";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden adinkra-pattern">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo via-indigo-light to-indigo-dark opacity-95" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center">
          <div className="animate-fade-in-up opacity-0">
            <SankofaBird size={100} color="var(--color-gold)" animated />
          </div>

          <h1 className="mt-8 text-5xl md:text-7xl font-bold text-cream leading-tight animate-fade-in-up opacity-0 delay-200">
            Éclairer le présent
            <br />
            <span className="text-gold">par les données</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-cream/70 max-w-2xl mx-auto leading-relaxed animate-fade-in-up opacity-0 delay-400">
            Association citoyenne pour la transparence démocratique. Nous
            développons des outils libres et gratuits qui rendent les données
            politiques accessibles à tous.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up opacity-0 delay-600">
            <Link
              href="/projets"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-gold text-indigo-dark font-semibold rounded-lg hover:bg-gold-light transition-colors duration-300 shadow-lg shadow-gold/20"
            >
              Découvrir nos projets
            </Link>
            <Link
              href="/contribuer"
              className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-cream/30 text-cream font-semibold rounded-lg hover:bg-cream/10 transition-colors duration-300"
            >
              Contribuer
            </Link>
          </div>
        </div>
      </section>

      {/* Mission - 3 piliers */}
      <section className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-indigo text-center mb-4">
              Notre mission
            </h2>
            <p className="text-center text-slate/60 max-w-xl mx-auto mb-16">
              Trois piliers pour une démocratie plus transparente
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🔍",
                title: "Transparence",
                description:
                  "Agréger et croiser les données publiques sur les responsables politiques : votes, patrimoine, affaires judiciaires, mandats.",
              },
              {
                icon: "📊",
                title: "Open Data",
                description:
                  "Développer des outils libres et open source pour rendre les données politiques accessibles, structurées et réutilisables par tous.",
              },
              {
                icon: "🎓",
                title: "Éducation civique",
                description:
                  "Favoriser l'engagement citoyen et la compréhension du fonctionnement démocratique par la vulgarisation des données.",
              },
            ].map((pillar, i) => (
              <ScrollReveal key={pillar.title} className={`delay-${(i + 1) * 100}`}>
                <div className="h-full p-8 bg-white rounded-2xl border border-indigo/5 card-hover card-accent card-accent-gold">
                  <div className="text-4xl mb-4">{pillar.icon}</div>
                  <h3 className="text-xl font-bold text-indigo mb-3 font-display">
                    {pillar.title}
                  </h3>
                  <p className="text-slate/70 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Projet phare - Poligraph */}
      <section className="py-24 bg-indigo relative noise-overlay">
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">
                Projet phare
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-cream mb-6">
                Poligraph
              </h2>
              <p className="text-cream/70 leading-relaxed mb-6">
                La plateforme de référence pour comprendre la politique
                française par les données. Poligraph agrège 9 sources
                officielles et rend ces données accessibles aux citoyens,
                journalistes et chercheurs.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { value: "1 068", label: "politiques suivis" },
                  { value: "10 145", label: "votes analysés" },
                  { value: "450+", label: "affaires judiciaires" },
                  { value: "1 749", label: "dossiers législatifs" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="p-4 bg-cream/5 rounded-lg border border-cream/10"
                  >
                    <div className="text-2xl font-bold text-gold font-display">
                      {stat.value}
                    </div>
                    <div className="text-xs text-cream/50 mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
              <a
                href="https://poligraph.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-indigo-dark font-semibold rounded-lg hover:bg-gold-light transition-colors duration-300"
              >
                Visiter poligraph.fr
                <span aria-hidden="true">&rarr;</span>
              </a>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative">
                <div className="aspect-video bg-indigo-light rounded-2xl border border-cream/10 overflow-hidden">
                  <img
                    src="/poligraph-og.png"
                    alt="Poligraph - Observatoire citoyen de la vie politique"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold/10 rounded-full blur-2xl" />
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-terra/10 rounded-full blur-xl" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Soutenir */}
      <section className="py-24 bg-cream-dark">
        <ScrollReveal className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo mb-6">
            Soutenez la transparence politique
          </h2>
          <p className="text-slate/70 leading-relaxed mb-10 max-w-xl mx-auto">
            Sankofa est un projet citoyen indépendant. Votre soutien nous permet
            de maintenir et développer nos outils en accès libre et gratuit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://tipeee.com/poligraph"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-terra text-white font-semibold rounded-lg hover:bg-terra-light transition-colors duration-300 shadow-lg shadow-terra/20"
            >
              Faire un don sur Tipeee
            </a>
            <Link
              href="/contribuer"
              className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-indigo/20 text-indigo font-semibold rounded-lg hover:bg-indigo/5 transition-colors duration-300"
            >
              Autres manières de contribuer
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
