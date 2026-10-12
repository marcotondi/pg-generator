## Why

Il calcolo della versione aveva **due formati dirty** (`-dirty` sul tag esatto, `.dirty` come prerelease dopo il tag) e un `--match 'v*'` che poteva scegliere come base un tag non-version (es. `v9zzz`). La spec `app-versioning` non fissa il formato del suffisso, quindi entrambi passavano: è proprio la vaghezza a permettere la regressione. Inoltre `-dirty` come prerelease **abbassa la precedenza SemVer** di una release sporca sotto la release pulita, che è semanticamente sbagliato.

## What Changes

- Il marcatore "working tree sporco" diventa **build metadata `+dirty`** in tutti i rami (non altera la precedenza SemVer). **BREAKING** rispetto al formato precedente `-dirty` / `.dirty`.
- Il suffisso dei commit dopo il tag diventa **pre-release `-dev.<N>.g<SHA>`** (prima `-<N>.g<SHA>`).
- Il ramo "nessun tag" parte da **`0.1.0-dev.<N>.g<SHA>`**.
- Il match dei tag passa da `v*` a **`v[0-9]*.[0-9]*.[0-9]*`**: un tag non-version più recente viene ignorato e la base resta l'ultimo `vX.Y.Z` valido.
- La spec `app-versioning` **fissa il formato esatto** della versione, così è testabile e non può tornare a divergere.

## Capabilities

### New Capabilities
Nessuna.

### Modified Capabilities
- `app-versioning`: il requisito "La versione SHALL essere derivata dalla storia git" viene rafforzato con il formato SemVer esatto (pre-release `dev.<N>.g<SHA>` e dirty come `+dirty`) e con lo scenario "tag non-version ignorato".

## Impact

- **Codice**: `scripts/version.mjs` (formato e match dei tag).
- **Osservabile**: la stringa mostrata nel footer cambia da `1.0.1-4.g<sha>` / `1.0.0-dirty` a `1.0.1-dev.4.g<sha>` / `1.0.0+dirty`.
- **Spec**: `app-versioning` (requisito modificato).
