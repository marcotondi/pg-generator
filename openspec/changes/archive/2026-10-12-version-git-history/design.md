## Context

`git-version` ha introdotto la versione SemVer da `git describe` a build-time. Il design dava per scontato che Cloudflare Pages clonasse il repository con storia e tag: **non è così**, il clone di Pages è shallow (depth 1). Prova: la produzione ha mostrato `0.1.0-1.geb4860e` (`rev-list --count` = 1, zero tag). La CI è a posto (`fetch-depth: 0`). Vedi `proposal.md` — Why.

## Goals / Non-Goals

**Goals:**
- Rendere la derivazione git corretta anche su Cloudflare Pages.
- Non rallentare né cambiare dev e CI quando la storia è già completa.

**Non-Goals:**
- Non cambiare il formato della versione (`1.0.1-2.g<sha>`).
- Non spostare il calcolo a runtime.
- Non introdurre tool di rilascio (resta fuori scope).

## Decisions

1. **Preflight `prebuild` che completa la storia, best-effort.** Nuovo `scripts/ensure-git-history.mjs`: se `git rev-parse --is-shallow-repository` è `true`, esegue `git fetch --unshallow --tags`. È invocato da `"prebuild"` in `package.json`, quindi gira automaticamente prima di `npm run build` — la stessa cosa che esegue Cloudflare Pages. Locale e CI: repo completo → nessun fetch, nessuna rete.
   - Alternativa scartata: mettere il `git fetch` nella build command di Cloudflare Pages (fuori dal repo, non versionata, da ricordare a mano).
   - Alternativa scartata: unshallow dentro `version.mjs` (un "getter" non deve avere effetti collaterali come una fetch).

2. **Fallback invariato.** Se il fetch fallisce (repo privato, niente rete) lo script esce in silenzio e `version.mjs` usa `package.json`. Il build non fallisce mai per questo.

3. **Nessun cambio al calcolo.** `scripts/version.mjs` resta com'è: gli serve solo che storia e tag siano presenti.

## Risks / Trade-offs

- [Il fetch non riesce nell'ambiente di build e si resta sul fallback] → best-effort con uscita silenziosa; il repo è pubblico, quindi il fetch anonimo funziona; il fallback non peggiora la situazione attuale.
- [`prebuild` non eseguito se il build command non è `npm run build`] → documentato in README/AGENTS; Cloudflare Pages usa `npm run build`.
- [Rete in build] → solo quando il repo è shallow; in locale e CI è un no-op.

## Migration Plan

- Merge + push; al prossimo deploy Cloudflare Pages la versione diventa `1.0.1-2.g<sha>`.
- Rollback: `git revert`; si torna al fallback su Pages.

## Open Questions

Nessuna.