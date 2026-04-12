import type { Metadata } from "next";
import SankofaBird from "@/components/SankofaBird";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "À propos",
  description: "L'histoire de l'Association Sankofa, son équipe et sa mission.",
};

export default function AProposPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo mb-4">
            À propos
          </h1>
          <p className="text-lg text-slate/60 max-w-2xl">
            Ce que fait Sankofa, d{"'"}où vient le nom, qui est derrière.
          </p>
        </div>
      </section>

      {/* L'histoire de Sankofa */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <div className="flex items-center gap-6 mb-8">
              <SankofaBird size={80} color="var(--color-indigo)" />
              <div>
                <h2 className="text-2xl font-bold text-indigo mb-2">
                  Qu{"'"}est-ce que Sankofa ?
                </h2>
                <p className="text-sm text-gold font-medium">
                  Symbole Adinkra - Ghana
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="prose prose-slate max-w-none">
              <p className="text-slate/70 leading-relaxed text-lg mb-6">
                <strong className="text-indigo">Sankofa</strong> est un symbole
                Adinkra originaire du Ghana. Il représente un oiseau qui tourne
                la tête vers l{"'"}arrière pour saisir un œuf posé sur son dos.
                Sa signification :{" "}
                <em className="text-indigo">
                  &laquo; retourne chercher ce que tu as oublié &raquo;
                </em>
                .
              </p>
              <p className="text-slate/70 leading-relaxed mb-6">
                Ce symbole incarne notre mission : aller chercher la
                connaissance oubliée, dispersée ou inaccessible pour la rendre
                utile aujourd{"'"}hui. Que ce soient des données politiques, des
                faits historiques ou des savoirs civiques, nous croyons que
                comprendre le passé est la condition pour agir dans le présent.
              </p>
              <p className="text-slate/70 leading-relaxed">
                L{"'"}œuf doré que l{"'"}oiseau récupère représente cette
                connaissance. Une connaissance qui appartient à tous et que nous
                nous efforçons de restituer aux citoyens : structurée, sourcée,
                accessible et libre.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* L'équipe */}
      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-indigo mb-10">
              L{"'"}équipe
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal direction="left">
              <div className="h-full p-8 bg-white rounded-2xl border border-indigo/5 card-hover">
                <div className="w-16 h-16 bg-indigo/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-indigo font-display">
                    LD
                  </span>
                </div>
                <h3 className="text-lg font-bold text-indigo font-display">
                  Lamine Diaby
                </h3>
                <p className="text-gold text-sm font-medium mb-3">
                  Co-Président et fondateur
                </p>
                <p className="text-slate/60 text-sm leading-relaxed">
                  Ingénieur logiciel. Créateur de Poligraph. Convaincu que l
                  {"'"}accès libre à la connaissance et aux données publiques est
                  un levier pour la démocratie et l{"'"}éducation citoyenne.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="h-full p-8 bg-white rounded-2xl border border-indigo/5 card-hover">
                <div className="w-16 h-16 bg-indigo/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-indigo font-display">
                    CD
                  </span>
                </div>
                <h3 className="text-lg font-bold text-indigo font-display">
                  Mouhamadou Ciré Diaby
                </h3>
                <p className="text-gold text-sm font-medium mb-3">
                  Co-Président
                </p>
                <p className="text-slate/60 text-sm leading-relaxed">
                  Co-fondateur de l{"'"}Association Sankofa.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Informations légales */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-indigo mb-8">
              Informations légales
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  label: "Dénomination",
                  value: "Association Sankofa (Sankofa)",
                },
                { label: "Type", value: "Association loi 1901" },
                { label: "Numéro RNA", value: "W931031256" },
                { label: "Date de création", value: "1er mars 2026" },
                {
                  label: "Siège social",
                  value: "Seine-Saint-Denis (domiciliation en cours)",
                },
                { label: "Email", value: "contact@asso-sankofa.org" },
              ].map((info) => (
                <div key={info.label} className="p-4 bg-cream rounded-lg">
                  <div className="text-xs text-slate/40 uppercase tracking-wider mb-1">
                    {info.label}
                  </div>
                  <div className="text-slate font-medium">{info.value}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-cream-dark rounded-2xl">
              <h3 className="text-sm font-semibold text-indigo mb-3 uppercase tracking-wider">
                Objet de l{"'"}association
              </h3>
              <p className="text-slate/70 text-sm leading-relaxed">
                Promouvoir la transparence démocratique et la déontologie
                publique par le numérique, l{"'"}open data et l{"'"}intelligence
                artificielle ; développer des outils citoyens libres et gratuits
                permettant l{"'"}accès, l{"'"}analyse et la diffusion de données
                publiques relatives à la vie politique française et européenne ;
                favoriser l{"'"}éducation civique, l{"'"}engagement citoyen et
                la participation démocratique.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
