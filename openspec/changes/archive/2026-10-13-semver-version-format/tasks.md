## 1. Calcolo versione (`scripts/version.mjs`)

- [x] 1.1 Match dei tag: `--match 'v[0-9]*.[0-9]*.[0-9]*'`
- [x] 1.2 Dirty come `+dirty` in tutti i rami (tag esatto, dopo il tag, nessun tag)
- [x] 1.3 Pre-release `-dev.N.g<SHA>` dopo il tag e base `0.1.0-dev.N.g<SHA>` senza tag
- [x] 1.4 Ramo senza tag: sha da `git rev-parse --short HEAD` (non da `cleanDesc`)

## 2. Verifica

- [x] 2.1 Working tree sporco → suffisso `+dirty`; working tree pulito su tag → `X.Y.Z`
- [x] 2.2 Dopo il tag → `X.Y.(Z+1)-dev.N.g<sha>` con N = commit dal tag
- [x] 2.3 Tag non-version più recente (es. `v9zzz`): base invariata su `v1.0.0`
- [x] 2.4 `npm run check` e `npm run smoke` puliti
- [x] 2.5 All'archive, la spec principale `openspec/specs/app-versioning/spec.md` riflette il nuovo formato
