const ENDPOINT = "https://poligraph.fr/api/stats";
const TIMEOUT_MS = 5000;

/*
  Valeurs de repli verifiees le 2026-07-30 sur ENDPOINT, qui ne compte que
  les entites publiees (publicationStatus vaut PUBLISHED). Elles ne servent
  que si le build ne peut pas joindre l'API : le build ne doit jamais
  echouer a cause de Poligraph.
*/
type ApiCounts = {
  politiques: number;
  scrutins: number;
  affaires: number;
  factchecks: number;
};

const FALLBACK: ApiCounts = {
  politiques: 22683,
  scrutins: 12829,
  affaires: 341,
  factchecks: 829,
};

/*
  Chiffres sans API publique, a mettre a jour a la main.
  dossiers        poligraph.fr/parlement/dossiers
  outilsMcp       19 appels registerTool dans transparence-politique-mcp/src/tools
  sources         poligraph.fr/sources en liste 11, dont 5 institutions
  infractions     cnuisible.fr, 37 cas verifies
  avisCdjm        seed 20260412_009_seed_cdjm_avis.sql
  devoirsMunich   Charte de Munich, fait statique
  Tous verifies le 2026-07-30.
*/
export const STATIC = {
  dossiers: 2130,
  outilsMcp: 19,
  sources: 11,
  infractions: 37,
  avisCdjm: 13,
  devoirsMunich: 10,
} as const;

export type Stats = ApiCounts & typeof STATIC;

type ApiPayload = {
  politicians: number;
  scrutins: number;
  affairs: number;
  factchecks: number;
};

const REQUIRED = ["politicians", "scrutins", "affairs", "factchecks"] as const;

function isValidPayload(value: unknown): value is ApiPayload {
  if (typeof value !== "object" || value === null) return false;
  const record = value as Record<string, unknown>;
  return REQUIRED.every((key) => {
    const n = record[key];
    return typeof n === "number" && Number.isFinite(n) && n > 0;
  });
}

/**
 * Chiffres du site. Appele au build : le site est en output export, donc les
 * valeurs sont figees dans le HTML au moment du deploiement.
 *
 * fetchImpl n'existe que pour les tests, ne pas le passer en production.
 */
export async function getStats(
  fetchImpl: typeof fetch = fetch,
): Promise<Stats> {
  try {
    const response = await fetchImpl(ENDPOINT, {
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
    if (!response.ok) return { ...FALLBACK, ...STATIC };

    const payload: unknown = await response.json();
    if (!isValidPayload(payload)) return { ...FALLBACK, ...STATIC };

    return {
      politiques: payload.politicians,
      scrutins: payload.scrutins,
      affaires: payload.affairs,
      factchecks: payload.factchecks,
      ...STATIC,
    };
  } catch {
    return { ...FALLBACK, ...STATIC };
  }
}
