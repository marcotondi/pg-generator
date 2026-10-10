## Why

Abbiamo due generatori di personaggi molto simili (Rōnin e PirateBorg) manutenuti come progetti separati, con stack diversi (Next/React vs SvelteKit) e feature-set divergenti: ogni miglioramento va fatto due volte. PirateBorg deve comunque essere riscritto da zero, quindi è il momento di unificare in **un unico progetto modulare**: una sola app, una sola shell, un modulo per gioco.

## What Changes

- **Nuovo progetto unico**: l'app SvelteKit nasce alla radice di `pg-generator/`; `pg-generator/` diventa il repo del progetto.
- **BREAKING**: PirateBorg viene riscritto (front-end buttato a terra); Rōnin viene riconvertito da Next/React a SvelteKit mantenendone l'aspetto.
- **Una sola app, due moduli gioco**: shell condivisa (layout, bottone genera, cornice scheda, mattoni UI, salva/stampa, PWA) + un modulo per gioco (`ronin/`, `pirateborg/`) con motore, dati e tema propri.
- **BREAKING**: eliminato il multilingua. L'app è **solo italiano**; sparisce `next-intl`, sparisce il `Translator`, i dati passano da chiavi di traduzione a stringhe italiane.
- **Un deploy con path**: `/` = landing con due scelte, `/ronin`, `/pirateborg`. Un solo progetto Cloudflare Pages.
- **Due identità visive distinte** (giapponese feudale vs pirati) su una shell comune, tramite un contratto di token condiviso.
- **Salvataggio unificato**: involucro comune `{ version, game, data }`, lista personaggi che attraversa i due giochi.
- **Bootstrap**: `git init` nuovo alla radice, rimozione del `.git` locale di `ronin-character-generator` (il repo GitHub resta come progetto a sé finché non verrà cancellato), README del container aggiornato, nuovo `AGENTS.md`.

## Capabilities

### New Capabilities
- `homepage`: landing con le due scelte di gioco, shell condivisa, app solo italiano, identità visive distinte.
- `character-generation`: generazione istantanea e completa in un click, per entrambi i giochi; il personaggio è di sola lettura.
- `character-sheet`: scheda composta da mattoni condivisi con tema per gioco, stampabile, con azioni salva/stampa.
- `character-persistence`: salvataggio esplicito su localStorage con involucro unificato e lista personaggi tra i due giochi.
- `pwa-offline`: manifest e service worker, funzionamento offline, notifica di aggiornamento.

### Modified Capabilities
Nessuna. È un progetto nuovo: le spec esistenti dentro i due sottoprogetti non fanno più da contratto per il nuovo progetto.

## Impact

- **Struttura**: nasce una SvelteKit app alla radice di `pg-generator/`; `src/lib/core/` (shell), `src/lib/games/{ronin,pirateborg}/` (moduli), `src/routes/{,/ronin,/pirateborg}`.
- **Version control**: nuovo `git init` alla radice; `.git` locale di `ronin-character-generator` rimosso; repo GitHub `marcotondi/ronin-character-generator` invariato (archivio) finché non verrà cancellato.
- **Dipendenze**: aggiunte SvelteKit 5 + `adapter-static`; rimosse Next, React, `next-intl`, Tailwind, shadcn/Radix.
- **Codice portato**: motore di Rōnin (`src/lib/character-generator/`, TS puro → modulo `games/ronin/engine`), conservato l'aspetto della sua UI; shell/PWA/salvataggio/stampa da PirateBorg.
- **Deploy**: un progetto Cloudflare Pages su `pg-generator/`, build `npm run build`, output `build/`. L'attuale `ronin-character-generator.pages.dev` non è più il target di sviluppo.
- **Documentazione**: `README.md` del container e `AGENTS.md` riscritti per il nuovo progetto.
- **Pulizia**: i due sottoprogetti attuali restano come riferimento durante il port e vengono rimossi a fine migrazione.
