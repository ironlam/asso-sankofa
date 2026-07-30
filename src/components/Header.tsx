"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import SankofaMark from "./SankofaMark";
import Container from "./ui/Container";

const NAV_ITEMS = [
  { href: "/", label: "Accueil" },
  { href: "/projets", label: "Projets" },
  { href: "/contribuer", label: "Contribuer" },
  { href: "/a-propos", label: "À propos" },
];

const TIPEEE = "https://tipeee.com/poligraph";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Le menu mobile ne doit pas rester ouvert apres une navigation.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper">
      <Container className="flex h-[68px] items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <SankofaMark size={32} eye="#FAF7F0" />
          <span className="text-[21px] font-bold tracking-[-0.035em] text-indigo">
            Sankofa
          </span>
        </Link>

        <nav className="hidden items-center gap-[30px] md:flex">
          {NAV_ITEMS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={
                pathname === href
                  ? "border-b-2 border-gold pb-[3px] text-sm font-semibold text-ink"
                  : "text-sm font-medium text-ink-soft transition-colors duration-150 hover:text-ink"
              }
            >
              {label}
            </Link>
          ))}
          <a
            href={TIPEEE}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo px-4 py-2.5 font-mono text-[12px] font-medium tracking-[0.06em] uppercase text-paper transition-colors duration-150 hover:bg-ink"
          >
            Soutenir
          </a>
        </nav>

        <button
          type="button"
          className="flex flex-col gap-1.5 p-2 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          aria-expanded={menuOpen}
          aria-controls="menu-mobile"
        >
          <span className="h-0.5 w-6 bg-indigo" />
          <span className="h-0.5 w-6 bg-indigo" />
          <span className="h-0.5 w-6 bg-indigo" />
        </button>
      </Container>

      {menuOpen && (
        <nav
          id="menu-mobile"
          className="border-b border-rule bg-paper md:hidden"
        >
          <Container className="flex flex-col gap-1 py-4">
            {NAV_ITEMS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={
                  pathname === href
                    ? "flex min-h-12 items-center text-base font-semibold text-ink"
                    : "flex min-h-12 items-center text-base font-medium text-ink-soft"
                }
              >
                {label}
              </Link>
            ))}
            <a
              href={TIPEEE}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex min-h-12 items-center justify-center bg-indigo px-4 font-mono text-[12px] font-medium tracking-[0.06em] uppercase text-paper"
            >
              Soutenir
            </a>
          </Container>
        </nav>
      )}
    </header>
  );
}
