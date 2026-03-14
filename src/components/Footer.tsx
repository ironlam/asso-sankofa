import Link from "next/link";
import SankofaBird from "./SankofaBird";

export default function Footer() {
  return (
    <footer className="bg-indigo-dark text-cream/80 relative noise-overlay">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <SankofaBird size={32} color="var(--color-gold)" />
              <span className="font-display text-xl font-bold text-cream">
                Sankofa
              </span>
            </div>
            <p className="text-sm text-cream/60 leading-relaxed">
              Association loi 1901 pour la transparence démocratique et la
              déontologie publique par le numérique.
            </p>
            <p className="text-xs text-cream/40 mt-3">RNA : W931031256</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display text-gold text-sm font-semibold mb-4 tracking-wide uppercase">
              Navigation
            </h4>
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                className="text-sm text-cream/60 hover:text-gold transition-colors"
              >
                Accueil
              </Link>
              <Link
                href="/projets"
                className="text-sm text-cream/60 hover:text-gold transition-colors"
              >
                Projets
              </Link>
              <Link
                href="/contribuer"
                className="text-sm text-cream/60 hover:text-gold transition-colors"
              >
                Contribuer
              </Link>
              <Link
                href="/a-propos"
                className="text-sm text-cream/60 hover:text-gold transition-colors"
              >
                À propos
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-gold text-sm font-semibold mb-4 tracking-wide uppercase">
              Contact
            </h4>
            <div className="flex flex-col gap-2 text-sm text-cream/60">
              <a
                href="mailto:contact@asso-sankofa.org"
                className="hover:text-gold transition-colors"
              >
                contact@asso-sankofa.org
              </a>
              <a
                href="https://github.com/ironlam"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://tipeee.com/poligraph"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
              >
                Tipeee
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cream/10 text-center text-xs text-cream/40">
          &copy; {new Date().getFullYear()} Association Sankofa. Tous droits
          réservés.
        </div>
      </div>
    </footer>
  );
}
