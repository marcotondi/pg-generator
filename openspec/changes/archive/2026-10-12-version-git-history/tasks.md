## 1. Preflight storia git

- [x] 1.1 `scripts/ensure-git-history.mjs`: se `git rev-parse --is-shallow-repository` è `true`, esegue `git fetch --unshallow --tags`; errori ignorati
- [x] 1.2 `package.json`: script `prebuild` che lancia `node scripts/ensure-git-history.mjs`

## 2. Verifica

- [x] 2.1 In un clone shallow locale (`git clone --depth=1 --no-tags`), `npm run build` produce `1.0.1-2.g<sha>` e non `0.1.0-1.g<sha>`
- [x] 2.2 Su repo completo `npm run build` è un no-op del preflight (nessuna rete) e la versione resta corretta
- [x] 2.3 `npm run check` e `npm run smoke` puliti