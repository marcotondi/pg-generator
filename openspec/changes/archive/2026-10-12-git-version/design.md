## Context

Oggi `AppShell.svelte` importa `package.json` e mostra `v{pkg.version}` (`1.0.0`, statico). Il build è `vite build` con `adapter-static`; il deploy è un unico progetto Cloudflare Pages; la CI (`.github/workflows/ci.yml`) fa `actions/checkout@v4` (clone superficiale di default). Il repository oggi **non ha nessun tag**. Vedi `proposal.md` — Why.

## Goals / Non-Goals

**Goals:**
- Versione SemVer derivata dalla storia git a build-time, visibile nel footer.
- Base `0.x` finché non esiste il primo tag, poi `MAJOR.MINOR.PATCH` dai tag `v*`.
- Fallback a `package.json` quando git non è leggibile.
- Funziona in dev (`vite dev`), in CI e su Cloudflare Pages.

**Non-Goals:**
- Non si installa il tool .NET GitVersion: si implementa la stessa convenzione con un piccolo script Node.
- Nessuna semantica di rilascio automatico (bump di versione, changelog, tag automatici).
- Nessun calcolo della versione a runtime nel browser.

## Decisions

1. **Convenzione SemVer da `git describe`.** Lo script usa `git describe --tags --long --dirty --always --match 'v*'`:
   - HEAD esattamente su `vX.Y.Z` → `X.Y.Z` (niente suffissi).
   - N commit dopo `vX.Y.Z` → `X.Y.(Z+1)-<N>.g<sha8>` (bump di patch del prossimo rilascio, pre-release = conteggio commit + abbrev sha). Questo ricalca GitVersion sul ramo `main`: il lavoro non rilasciato è la prossima versione di patch, commettibile a mano quando serve (GitVersion usa i messaggi `+semver:`; qui il tag è l'unico comando).
   - Nessun tag → `0.1.0-<N>.g<sha8>` (GitVersion parte da `0.1.0` senza tag; N da `git rev-list --count HEAD`).
   - Working tree sporco → si aggiunge `.dirty` alla parte pre-release, es. `1.2.4-5.gabc1234.dirty`.
   - Fallback: se un comando git fallisce (non è un repo, niente storia), si usa `version` di `package.json`.

2. **Iniezione a build-time via Vite `define`, non runtime.** `vite.config.ts` calcola la versione una volta (importando `scripts/version.mjs`) e la espone come `__APP_VERSION__`. Il tipo si dichiara in `src/app.d.ts`. `AppShell.svelte` mostra `v{__APP_VERSION__}` e smette di importare `package.json`. Il modulo Node resta fuori dal check TS (il progetto non ha `@types/node`), come `scripts/smoke.mjs`: `scripts/version.d.mts` ne dichiara solo la firma. Nessun modulo runtime, nessun fetch, build riproducibile tra commit uguali.

3. **CI con stori completa.** `actions/checkout@v4` di default è shallow (1 commit, niente tag): senza stori la versione degraderebbe sempre al fallback. Si passa a `fetch-depth: 0` (e `fetch-tags: true`). Cloudflare Pages clona il repository (tag inclusi), quindi il build di produzione ha la storia.

4. **Formato tag**: `vMAJOR.MINOR.PATCH` (es. `v1.0.0`). Il `--match 'v*'` ignora tag che non seguono la convenzione.

## Risks / Trade-offs

- [Clone shallow in ambienti di build → versione degradata al fallback] → CI con `fetch-depth: 0`; su Cloudflare Pages il clone è completo; il fallback resta come rete di sicurezza, non come percorso normale.
- [La versione "sporca" locale (`-dirty`) è un rumore in dev] → è voluta: segnala che la build locale non è riproducibile. Le build CI/Pages partono da checkout puliti.
- [Bump di patch automatico può "scavalcare" un tag] → irrilevante: la versione deriva sempre dal tag,l'etichetta `N.gsha` è solo informativa; niente pubblicazioni con quella stringa.
- [Vite `define` fa la sostituzione a livello di bundle] → nessun impatto su service worker o nomi cache (`$service-worker` usa il proprio `version`, non toccato).

## Migration Plan

- Merge della change; nessuna migrazione dati.
- Al prossimo rilascio: si tagga `vX.Y.Z` sul commit da rilasciare; la build successiva mostra la versione "pulita".
- Rollback: `git revert` della change; il footer torna a `pkg.version`.

## Open Questions

Nessuna.