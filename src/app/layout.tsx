import type { Metadata } from "next";
import { Playfair_Display, Libre_Franklin } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Association Sankofa",
    template: "%s | Association Sankofa",
  },
  description:
    "Association loi 1901 pour la transparence démocratique et la déontologie publique par le numérique, l'open data et l'intelligence artificielle.",
  metadataBase: new URL("https://asso-sankofa.org"),
  openGraph: {
    siteName: "Association Sankofa",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${playfair.variable} ${libreFranklin.variable}`}
    >
      <body className="antialiased">
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
