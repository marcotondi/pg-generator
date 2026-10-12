# AGENTS.md

## Comandi

- `npm run dev` — server di sviluppo
- `npm run build` — export statico in `build/` (SvelteKit `adapter-static`)
- `npm run preview` — anteprima della build
- `npm run check` — `svelte-kit sync && svelte-check`
- `openspec` — specifiche e change (root: `openspec/`)

## Architettura

- **SvelteKit 5** con runes (`$state`, `$derived`, `$props`, `$effect`), TypeScript, `adapter-static`.
- **Una sola app, un modulo per gioco.** La shell (`src/lib/core/`) non conosce i giochi.
- **Contratto di un modulo gioco** (`src/lib/games/<id>/`):
  - `meta.ts` — id, titolo, licenza, asset
  - `engine/` — logica di generazione in TS puro (nessun import da Svelte)
  - `data/` — tabelle, classi, equipaggiamento, testi (stringhe italiane dirette)
  - `Sheet.svelte` — composizione della scheda sui mattoni condivisi
  - `theme.css` — valori dei token (accento, font, raggio, immagine)
- **Token condivisi**: i _nomi_ stanno in `src/lib/core/tokens.css`, i _valori_ in ogni `theme.css`.
- **Persistenza**: localStorage con involucro unificato `{ version, game, data }`.

## Convenzioni

- **Solo italiano**: tutti i testi visibili all'utente sono in italiano. Nessun i18n, nessuna lingua.
- Contenuto italiano raccolto nel modulo `data/` di ogni gioco. Rōnin usa un dizionario `it.ts` con resolver `it(key)` perché i dati sorgente erano a chiavi; PirateBorg ha già stringhe italiane dirette.
- **Personaggio di sola lettura**: la scheda non ha campi modificabili; si rigenera dal pulsante.
- Motori di gioco in TS puro: non importano Svelte, sono testabili a parte.
- `.editorconfig` specifica **LF** come fine riga.
- Non ripristinare componenti/pattern dai progetti Next/React precedenti: il port è in Svelte.
- Cambi di comportamento passano da OpenSpec: `openspec/changes/`.

## Riferimenti

- `openspec/` — proposal, specs, design e task del progetto
