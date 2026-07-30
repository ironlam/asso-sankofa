import { test } from "node:test";
import assert from "node:assert/strict";
import { getStats, STATIC } from "./stats.ts";

function jsonResponse(body: unknown, ok = true): Response {
  return {
    ok,
    json: async () => body,
  } as unknown as Response;
}

const VALID = {
  politicians: 22683,
  parties: 131,
  affairs: 341,
  scrutins: 12829,
  factchecks: 829,
  lastUpdated: "2026-07-30T10:29:14.576Z",
};

test("mappe la reponse de l'API vers les noms du site", async () => {
  const stats = await getStats(async () => jsonResponse(VALID));
  assert.equal(stats.politiques, 22683);
  assert.equal(stats.scrutins, 12829);
  assert.equal(stats.affaires, 341);
  assert.equal(stats.factchecks, 829);
});

/*
  Les cles attendues sont listees en dur, et non derivees de STATIC.
  Comparer stats.x a STATIC.x passe meme si les deux valent undefined :
  un tel test ne detecte pas une cle oubliee. C'est arrive une fois, et
  seule la page rendue l'a montre.
*/
const CLES_ATTENDUES = [
  "politiques",
  "scrutins",
  "affaires",
  "factchecks",
  "dossiers",
  "outilsMcp",
  "sources",
  "infractions",
  "avisCdjm",
  "rappelsArcom",
  "devoirsMunich",
] as const;

test("expose toutes les cles attendues, et aucune n'est vide", async () => {
  const stats = await getStats(async () => jsonResponse(VALID));
  for (const cle of CLES_ATTENDUES) {
    const valeur = (stats as Record<string, unknown>)[cle];
    assert.equal(
      typeof valeur,
      "number",
      `${cle} devrait etre un nombre, recu ${String(valeur)}`,
    );
    assert.ok((valeur as number) > 0, `${cle} devrait etre superieur a zero`);
  }
});

test("les valeurs statiques traversent le mapping", async () => {
  const stats = await getStats(async () => jsonResponse(VALID));
  assert.deepEqual(
    {
      dossiers: stats.dossiers,
      outilsMcp: stats.outilsMcp,
      sources: stats.sources,
      infractions: stats.infractions,
      avisCdjm: stats.avisCdjm,
      rappelsArcom: stats.rappelsArcom,
      devoirsMunich: stats.devoirsMunich,
    },
    { ...STATIC },
  );
});

test("replie sur les valeurs commitees si le reseau echoue", async () => {
  const stats = await getStats(async () => {
    throw new Error("ECONNREFUSED");
  });
  assert.equal(stats.politiques, 22683);
  assert.equal(stats.affaires, 341);
  assert.equal(stats.dossiers, STATIC.dossiers);
});

test("replie si l'API repond en erreur", async () => {
  const stats = await getStats(async () => jsonResponse({}, false));
  assert.equal(stats.politiques, 22683);
});

test("replie si un champ attendu manque", async () => {
  const partiel = { politicians: 22683, scrutins: 12829 };
  const stats = await getStats(async () => jsonResponse(partiel));
  assert.equal(stats.affaires, 341);
  assert.equal(stats.factchecks, 829);
});

test("replie si un champ n'est pas un nombre positif", async () => {
  const casse = { ...VALID, affairs: 0 };
  const stats = await getStats(async () => jsonResponse(casse));
  assert.equal(stats.affaires, 341);
});

test("replie si le corps n'est pas un objet", async () => {
  const stats = await getStats(async () => jsonResponse("indisponible"));
  assert.equal(stats.politiques, 22683);
});
