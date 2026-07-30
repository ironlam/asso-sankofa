// Genere les icones et l'image OG a partir du signe.
// Lancer une fois, commiter les PNG : node scripts/generate-icons.mjs
// sharp vient en transitif de Next, il n'est pas declare en dependance.
import sharp from "sharp";

const INDIGO = "#1B1464";
const INDIGO_DEEP = "#0D0A2B";
const PAPER = "#FAF7F0";
const GOLD = "#E0A831";

/** Signe seul, dans un viewBox 100x100. */
function mark({ color, egg, eye }) {
  return `
    <g transform="translate(-2 -1.2)">
      <path d="M27.4 73.2 A 30 30 0 1 0 52 26 A 13 13 0 0 1 39.4 16.4"
            stroke="${color}" stroke-width="13" stroke-linecap="round" fill="none"/>
      <path d="M36.7 11.6 L26 24 L42.1 21.2 Z" fill="${color}"/>
      ${eye ? `<circle cx="41.5" cy="15.2" r="2.3" fill="${eye}"/>` : ""}
      <circle cx="47" cy="51" r="8.5" fill="${egg}"/>
    </g>`;
}

/** Signe creme sur carre indigo, pour les icones d'application. */
const iconSvg = `<svg width="512" height="512" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" rx="22" fill="${INDIGO}"/>
  ${mark({ color: PAPER, egg: GOLD, eye: INDIGO })}
</svg>`;

/** Signe et mot sur indigo profond, 1200x630. */
const ogSvg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="${INDIGO_DEEP}"/>
  <svg x="130" y="175" width="280" height="280" viewBox="0 0 100 100">
    ${mark({ color: PAPER, egg: GOLD, eye: INDIGO_DEEP })}
  </svg>
  <text x="470" y="330" font-family="Archivo, DejaVu Sans, system-ui, sans-serif"
        font-size="104" font-weight="700" letter-spacing="-3.6" fill="${PAPER}">Sankofa</text>
  <text x="470" y="392" font-family="IBM Plex Mono, DejaVu Sans Mono, monospace"
        font-size="26" letter-spacing="3" fill="${GOLD}">ASSOCIATION LOI 1901</text>
</svg>`;

const targets = [
  { svg: iconSvg, size: 192, out: "public/icon-192.png" },
  { svg: iconSvg, size: 512, out: "public/icon-512.png" },
  { svg: iconSvg, size: 180, out: "public/apple-icon.png" },
];

for (const { svg, size, out } of targets) {
  const info = await sharp(Buffer.from(svg)).resize(size, size).png().toFile(out);
  console.log(out, `${info.width}x${info.height}`, `${info.size} o`);
}

const og = await sharp(Buffer.from(ogSvg)).png().toFile("public/og-sankofa.png");
console.log("public/og-sankofa.png", `${og.width}x${og.height}`, `${og.size} o`);
