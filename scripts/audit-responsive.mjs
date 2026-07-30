/*
  Audit responsive objectif : 4 routes x 4 paliers = 16 controles.
  Les maquettes du handoff etant desktop uniquement, aucun critere n'est
  visuel : tout est mesure.

  Usage :
    npm run dev                                  # dans un autre terminal
    node scripts/audit-responsive.mjs ./captures

  Playwright n'est pas une dependance de ce depot : le site est statique et
  n'a pas de suite E2E. Le script emprunte une installation existante. Pointer
  PLAYWRIGHT_PATH vers un node_modules/playwright si le chemin par defaut ne
  correspond pas.
*/
const CHEMINS = [
  process.env.PLAYWRIGHT_PATH,
  "/home/ldiaby/projects/politic-tracker/node_modules/playwright/index.mjs",
  "playwright",
].filter(Boolean);

let chromium;
for (const chemin of CHEMINS) {
  try {
    ({ chromium } = await import(chemin));
    break;
  } catch {
    // chemin suivant
  }
}
if (!chromium) {
  console.error(
    "Playwright introuvable. Definir PLAYWRIGHT_PATH vers un node_modules/playwright/index.mjs.",
  );
  process.exit(1);
}

const ROUTES = ["/", "/projets", "/contribuer", "/a-propos"];
const PALIERS = [375, 768, 1280, 1600];
const BASE = "http://localhost:3000";
const SORTIE = process.argv[2] || ".";

const sonde = () => {
  const de = document.documentElement;
  const vw = de.clientWidth;

  const overflowPx = de.scrollWidth - vw;

  const spilling = [...document.querySelectorAll("body *")]
    // Le lien d'evitement est hors ecran par conception (left: -9999px)
    // jusqu'a ce qu'il recoive le focus : ce n'est pas un debordement.
    .filter((el) => !el.classList.contains("skip-link"))
    .filter((el) => {
      const r = el.getBoundingClientRect();
      return r.width > 0 && (r.right > vw + 1 || r.left < -1);
    })
    .slice(0, 8)
    .map((el) => {
      const r = el.getBoundingClientRect();
      const cls =
        typeof el.className === "string" ? el.className.slice(0, 46) : "";
      return `${el.tagName.toLowerCase()}[${cls}] L=${Math.round(r.left)} R=${Math.round(r.right)}`;
    });

  // Cibles tactiles : nav, boutons, et liens porteurs d'une hauteur mini.
  const smallTargets = [
    ...document.querySelectorAll('nav a, button, a[class*="min-h"]'),
  ]
    .filter((el) => {
      const r = el.getBoundingClientRect();
      return r.height > 0 && r.height < 48;
    })
    .map((el) => {
      const r = el.getBoundingClientRect();
      const txt = (el.textContent || "").trim().slice(0, 26);
      return `${el.tagName.toLowerCase()} "${txt}" h=${Math.round(r.height)}`;
    });

  const clipped = [
    ...document.querySelectorAll("h1,h2,h3,p,td,th,li,dt,dd"),
  ]
    .filter((el) => {
      const s = getComputedStyle(el);
      return (
        el.scrollWidth > el.clientWidth + 1 &&
        s.overflowX !== "auto" &&
        s.overflowX !== "scroll"
      );
    })
    .slice(0, 8)
    .map(
      (el) =>
        `${el.tagName.toLowerCase()} "${(el.textContent || "").trim().slice(0, 26)}"`,
    );

  const multiColumnGrids = [...document.querySelectorAll("main *")]
    .filter((el) => getComputedStyle(el).display === "grid")
    .map((el) => getComputedStyle(el).gridTemplateColumns)
    .filter((cols) => cols.split(" ").length > 1);

  const conteneur = document.querySelector("main div[class*='max-w-']");
  const containerWidth = conteneur
    ? Math.round(conteneur.getBoundingClientRect().width)
    : null;
  const containerContent = conteneur
    ? Math.round(
        conteneur.getBoundingClientRect().width -
          parseFloat(getComputedStyle(conteneur).paddingLeft) -
          parseFloat(getComputedStyle(conteneur).paddingRight),
      )
    : null;

  /*
    Le focus doit etre teste sur un element reellement visible. Sur /projets
    le premier lien de main appartient au tableau masque en lg:hidden, et
    focus() sur un element display:none ne produit aucun contour : ce serait
    un faux negatif. /a-propos n'a aucun lien dans main, d'ou le repli sur
    l'en-tete.
  */
  const estVisible = (el) => {
    const r = el.getBoundingClientRect();
    return r.width > 0 && r.height > 0 && getComputedStyle(el).visibility !== "hidden";
  };
  const cible =
    [...document.querySelectorAll("main a, main button")].find(estVisible) ||
    [...document.querySelectorAll("header a, header button")].find(estVisible);
  let focusOutline = null;
  let focusCible = null;
  if (cible) {
    cible.focus();
    focusOutline = getComputedStyle(cible).outlineWidth;
    focusCible = `${cible.tagName.toLowerCase()} "${(cible.textContent || "").trim().slice(0, 20)}"`;
  }

  /*
    Filets verticaux SEPARATEURS DE COLONNE encore actifs.

    Un separateur de colonne se fait sur un seul cote (border-l ou border-r).
    Une bordure sur les quatre cotes encadre un bloc : c'est le cas de la
    grille a filets, presente a tous les paliers par conception, et ce n'est
    pas un separateur. Le critere ne doit compter que le ou exclusif.
  */
  const filetsVerticaux = [...document.querySelectorAll("main section div")]
    .filter((el) => {
      const s = getComputedStyle(el);
      const g = parseFloat(s.borderLeftWidth) > 0;
      const d = parseFloat(s.borderRightWidth) > 0;
      const h = parseFloat(s.borderTopWidth) > 0;
      const b = parseFloat(s.borderBottomWidth) > 0;
      const cadre = g && d && h && b;
      return !cadre && (g !== d);
    })
    .filter((el) => el.getBoundingClientRect().height > 120).length;

  return {
    viewport: vw,
    overflowPx,
    spilling,
    smallTargets,
    clipped,
    multiColumnGrids,
    containerWidth,
    containerContent,
    focusOutline,
    focusCible,
    filetsVerticaux,
  };
};

const browser = await chromium.launch();
const resultats = [];

for (const largeur of PALIERS) {
  for (const route of ROUTES) {
    const page = await browser.newPage({
      viewport: { width: largeur, height: 900 },
    });
    await page.goto(`${BASE}${route}`, {
      waitUntil: "networkidle",
      timeout: 45000,
    });
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(250);
    const mesures = await page.evaluate(sonde);
    const nom = route === "/" ? "accueil" : route.slice(1);
    await page.screenshot({
      path: `${SORTIE}/audit-${nom}-${largeur}.png`,
      fullPage: true,
    });
    resultats.push({ route, largeur, ...mesures });
    await page.close();
  }
}

await browser.close();
console.log(JSON.stringify(resultats, null, 1));
