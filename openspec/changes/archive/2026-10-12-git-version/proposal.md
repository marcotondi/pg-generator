## Why

Oggi la versione mostrata nel footer è `1.0.0`, letta statica da `package.json`: non riflette lo stato reale del repository (commit dall'ultimo rilascio, lavoro non rilasciato, working tree sporco). A ogni push su Cloudflare Pages la versione resta la stessa, quindi non si capisce quale build si sta guardando. Serve una versione derivata dalla storia git, con la convenzione GitVersion (SemVer), calcolata a build-time.

## What Changes

- La **versione mostrata nel footer** non è più il valore statico di `package.json`, ma un **numero SemVer generato dalla storia git** a build-time.
- Convenzione: `MAJOR.MINOR.PATCH` dall'ultimo tag `vX.Y.Z`; commit non rilasciati → suffisso di pre-release/… con numero di commit; correct working tree → marcatore `dirty`; nessun tag → si parte da `0.1.0` (o `0.0.0`) con il conteggio dei commit.
- **Fallback**: se git non è disponibile al build (es. checkout senza storia), si usa il `version` di `package.json`.
- Il valore è **iniettato a build-time** nell'app (constante), non calcolato a runtime.
- Il footer mostra la stessa cosa di prima (`v<versione>`), cambia solo la provenienza del numero.

## Capabilities

### New Capabilities
- `app-versioning`: la versione dell'app è derivata dalla storia git a build-time e mostrata nel footer; con fallback a `package.json` quando git non è disponibile.

### Modified Capabilities
Nessuna: la homepage continua a mostrare "licenza, versione e link GitHub" — il requisito non cambia, cambia solo la provenienza del numero.

## Impact

- **Codice**: script di generazione versione (`scripts/`), integrazione nel build Vite (`vite.config.ts` via `define`), dichiarazione del tipo della costante (`app.d.ts`), `AppShell.svelte` che usa la costante al posto di `pkg.version`.
- **Nessun tag esistente oggi**: la prima build produrrà una versione "di sviluppo" (con numero di commit), finché non si crea il primo tag.
- **Spec**: nuova `app-versioning`.