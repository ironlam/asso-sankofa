/*
  Avatar d'organisation GitHub, a televerser a la main sur
  https://github.com/organizations/Asso-Sankofa/settings/profile
  (l'API REST n'expose aucun parametre d'avatar sur PATCH /orgs/{org}).

  Usage : node scripts/generate-org-avatar.mjs

  Pas de coins arrondis dans l'image : GitHub arrondit lui-meme les avatars.
  Un rx=22 comme dans le kit du signe cumulerait les deux arrondis et
  laisserait voir des encoches transparentes. D'ou le carre a fond perdu.
*/
import sharp from "sharp";

const INDIGO = "#1B1464";
const PAPER = "#FAF7F0";
const GOLD = "#E0A831";

/*
  Le signe occupe 78 % du cadre. GitHub affiche les avatars a 20 ou 40px dans
  ses listes : a 62 % le signe ne faisait que 25px et le detail de la tete se
  perdait. Remplir davantage le cadre est la regle pour un avatar, comme pour
  un favicon.

  x est decale de 18px vers la gauche par rapport au centrage geometrique : le
  trace n'est pas symetrique (le bec deborde a gauche, la volte a droite) et un
  centrage strict le faisait pencher vers la droite.
*/
const svg = `<svg width="1000" height="1000" xmlns="http://www.w3.org/2000/svg">
  <rect width="1000" height="1000" fill="${INDIGO}"/>
  <svg x="92" y="110" width="780" height="780" viewBox="0 0 100 100">
    <g transform="translate(-2 -1.2)">
      <path d="M27.4 73.2 A 30 30 0 1 0 52 26 A 13 13 0 0 1 39.4 16.4"
            stroke="${PAPER}" stroke-width="13" stroke-linecap="round" fill="none"/>
      <path d="M36.7 11.6 L26 24 L42.1 21.2 Z" fill="${PAPER}"/>
      <circle cx="41.5" cy="15.2" r="2.3" fill="${INDIGO}"/>
      <circle cx="47" cy="51" r="8.5" fill="${GOLD}"/>
    </g>
  </svg>
</svg>`;

const info = await sharp(Buffer.from(svg)).png().toFile("public/org-avatar.png");
console.log(`public/org-avatar.png ${info.width}x${info.height} ${info.size} o`);
