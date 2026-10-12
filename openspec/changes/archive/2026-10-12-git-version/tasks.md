## 1. Script di generazione versione

- [x] 1.1 `scripts/version.mjs`: `getVersion()` che usa `git describe --tags --long --dirty --always --match 'v*'` e mappa a SemVer (tag esatto → `X.Y.Z`; N commit dopo → `X.Y.(Z+1)-<N>.g<sha8>`; nessun tag → `0.1.0-<N>.g<sha8>` con `rev-list --count`; sporco → `.dirty`)
- [x] 1.2 Fallback al `version` di `package.json` quando git non è disponibile (non-repo o comando fallito)

## 2. Integrazione nel build

- [x] 2.1 `vite.config.ts`: esporre la versione come `__APP_VERSION__` via `define`
- [x] 2.2 `src/app.d.ts`: dichiarare la costante `__APP_VERSION__`
- [x] 2.3 `AppShell.svelte`: mostrare `v{__APP_VERSION__}` e togliere l'import di `package.json`

## 3. CI

- [x] 3.1 `.github/workflows/ci.yml`: `actions/checkout@v4` con `fetch-depth: 0` (e `fetch-tags: true`) così `git describe` vede tag e storia

## 4. Verifica

- [x] 4.1 `npm run check` e `npm run smoke` puliti
- [x] 4.2 `npm run build` pulito e footer con la versione git (senza tag oggi: `0.1.0-<N>.g<sha>`)
- [x] 4.3 Prova manuale: versione visibile nel footer su una pagina gioco, coincidente con `git describe`