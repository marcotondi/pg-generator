## 1. Bootstrap e version control

- [x] 1.1 Estrarre la specifica visiva di Rōnin dai file esistenti (`src/app/globals.css`, `tailwind.config.ts`, `src/components/character/*.tsx`, `[locale]/layout.tsx`) come riferimento per il port
- [x] 1.2 Verificare che il working tree di `ronin-character-generator` sia pulito e tutto pushato su `origin`
- [x] 1.3 Rimuovere `ronin-character-generator/.git` (il repo GitHub resta intatto come archivio)
- [x] 1.4 `git init` alla radice `pg-generator/` con branch `main`
- [x] 1.5 Scrivere il `README.md` del container (progetto unico, struttura, comandi, deploy)
- [x] 1.6 Scrivere `AGENTS.md` (comandi, architettura moduli, convenzioni Italia-only, line endings)
- [x] 1.7 Aggiornare `openspec/config.yaml` con il context del nuovo progetto (stack, italiano-only, convenzioni)

## 2. Scaffold SvelteKit

- [x] 2.1 Creare il progetto SvelteKit 5 con TypeScript e runes
- [x] 2.2 Configurare `adapter-static` (output `build/`, `fallback`, `strict`)
- [x] 2.3 Impostare `.editorconfig` (CRLF) e allineare `tsconfig`
- [x] 2.4 Configurare gli script `dev`, `build`, `preview`, `check`
- [x] 2.5 Aggiungere i font del tema Rōnin e i font del tema PirateBorg in `app.html`/CSS

## 3. Core shell e design token

- [x] 3.1 Definire `core/tokens.css`: nomi dei token condivisi (accento, sfondo, testo, font, raggio, spaziature)
- [x] 3.2 Costruire la shell: `+layout.svelte` con header parametrizzato, main, footer (licenza/versione/GitHub)
- [x] 3.3 Costruire i mattoni UI: `GenerateButton`, `SheetFrame`, `StatBlock`, `SectionHeading`, `ItemList`, `Divider`, `Toast`
- [x] 3.4 Portare `storage.ts` (localStorage) dalla base PirateBorg con l'involucro unificato `{ version, game, data }`
- [x] 3.5 Portare `print.css` dalla base PirateBorg, reso generico per la shell
- [x] 3.6 Definire il contratto di un modulo gioco (`meta`, `generate`, `Sheet`, `theme.css`) e il tipo `GameModule`

## 4. Modulo PirateBorg

- [x] 4.1 Portare il motore (`engine/roll.ts`, `engine/tables.ts`, `data/*`) nel modulo
- [x] 4.2 Portare lo store del personaggio e adattarlo al `core/`
- [x] 4.3 Ricostruire `Sheet.svelte` di PirateBorg sui mattoni condivisi
- [x] 4.4 Creare `theme.css` con i valori brutalisti attuali (giallo/nero, 0px, Anton/JetBrains Mono)
- [x] 4.5 Creare `meta.ts` (titolo, licenza Limithron, asset)
- [x] 4.6 Verifica: generazione, salva/carica, stampa, responsive

## 5. Motore Rōnin (port TS)

- [x] 5.1 Portare `src/lib/character-generator/` (`index.ts`, `utils.ts`, `types.ts`) nel modulo `games/ronin/engine`
- [x] 5.2 Adottare l'opzione B: dizionario italiano `data/it.ts` + resolver `it(key)` (niente `next-intl`, niente inglese)
- [x] 5.3 Rimuovere il parametro `Translator` e lo step `t()` (sostituito da `it()`)
- [x] 5.4 Convertire i nickname (struttura bilingue) in forma italofona
- [x] 5.5 Preservare la logica onore/disonore e i casi speciali (RecklessSumo cibo, Yamabushi/Onmyoji testi, sostituzione quantità)
- [x] 5.6 Verificare con generazioni ripetute che non resti alcun riferimento a chiavi di traduzione

## 6. UI Rōnin in Svelte

- [x] 6.1 Ricostruire `Sheet.svelte` Rōnin sui mattoni condivisi, preservando il layout attuale
- [x] 6.2 Ricostruire i sotto-blocchi: header, statistiche, attributi, precetti d'onore, equipaggiamento, testi
- [x] 6.3 Creare `theme.css` con i valori attuali (`#EACD2E`, `#242220`, Cinzel / IM Fell / Noto Sans JP)
- [x] 6.4 Portare l'immagine hero ruotata e i relativi asset
- [x] 6.5 Creare `meta.ts` (titolo, licenza Slightly Reckless Games, asset)
- [x] 6.6 Aggiungere i controlli onore/disonore nella pagina Rōnin
- [x] 6.7 Verifica visiva contro il Rōnin attuale (fedeltà del look)

## 7. Persistenza e lista unificata

- [x] 7.1 Adattare il salvataggio al formato `{ version, game, data }` per entrambi i moduli
- [x] 7.2 Costruire il menu di richiamo che elenca i personaggi di entrambi i giochi con indicazione del gioco
- [x] 7.3 Gestire il caricamento di un personaggio aprendolo nella pagina gioco corretta
- [x] 7.4 Gestire la versione sconosciuta senza corrompere l'elenco

## 8. Routing e landing

- [x] 8.1 Creare la landing `/` con le due scelte, ciascuna con identità visiva
- [x] 8.2 Creare le route `/ronin` e `/pirateborg` con la shell condivisa
- [x] 8.3 Garantire accesso diretto alle due route senza passare dalla landing

## 9. PWA

- [x] 9.1 Portare `service-worker.ts` (cache versionata degli asset)
- [x] 9.2 Portare `static/manifest.json` con icone, tema e `standalone`
- [x] 9.3 Implementare la notifica "nuova versione disponibile" con azione di ricarica
- [x] 9.4 Verificare il funzionamento offline di entrambi i giochi

## 10. Pulizia e deploy

- [x] 10.1 Rimuovere i sottoprogetti `pirateborg-generator/` e `ronin-character-generator/`
- [x] 10.2 Configurare il progetto Cloudflare Pages (root `pg-generator/`, build `npm run build`, output `build/`)
- [x] 10.3 `npm run check` e `npm run build` puliti
- [x] 10.4 Verifica end-to-end: landing → generazione → salva → carica → stampa, per entrambi i giochi
- [x] 10.5 Archiviare questo change OpenSpec
