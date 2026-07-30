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

test("expose toujours les valeurs statiques", async () => {
  const stats = await getStats(async () => jsonResponse(VALID));
  assert.equal(stats.dossiers, STATIC.dossiers);
  assert.equal(stats.outilsMcp, STATIC.outilsMcp);
  assert.equal(stats.sources, STATIC.sources);
  assert.equal(stats.infractions, STATIC.infractions);
  assert.equal(stats.avisCdjm, STATIC.avisCdjm);
  assert.equal(stats.devoirsMunich, STATIC.devoirsMunich);
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
