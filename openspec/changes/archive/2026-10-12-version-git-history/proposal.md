## Why

Su Cloudflare Pages il build parte da un **clone shallow (depth 1)**: `git describe` non vede il tag di rilascio e `git rev-list --count HEAD` vale `1`, quindi la produzione ha mostrato `0.1.0-1.geb4860e` invece della SemVer attesa. La CI GitHub è corretta (`fetch-depth: 0`); il build di produzione no.

## What Changes

- Prima di calcolare la versione, il build **completa la storia git** quando si trova in un clone shallow (`git fetch --unshallow --tags`), così tag e conteggio dei commit sono disponibili anche su Cloudflare Pages.
- È **best-effort**: se il fetch non è possibile (git assente, niente rete) si resta sul fallback di `package.json` già previsto.
- Nessun effetto su dev e CI: la preflight agisce solo se il repository è shallow.

## Capabilities

### New Capabilities
Nessuna.

### Modified Capabilities
- `app-versioning`: la derivazione dalla storia git SHALL recuperare storia e tag quando il build parte da un clone shallow.

## Impact

- **Codice**: nuovo `scripts/ensure-git-history.mjs`; `package.json` con lo script `prebuild` che lo esegue prima di `build` (quindi anche su Cloudflare Pages, che esegue `npm run build`).
- **Nessun impatto** su dev, CI o formato della versione (`1.0.1-2.g<sha>` resta invariato).
- **Spec**: `app-versioning`.