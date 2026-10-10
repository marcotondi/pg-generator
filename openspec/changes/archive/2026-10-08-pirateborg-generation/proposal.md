## Why

La generazione di PirateBorg è un abbozzo: il tiro delle abilità non segue le regole (scarta il dado più basso e tira un d6 in più), i modificatori di classe sono ignorati, il tratto di classe e le tabelle delle classi non vengono mai usati, le classi opzionali esistono nei dati ma sono inerti (con sotto-tabelle non registrate), e l'equipaggiamento tira due oggetti economici invece di uno. Il regolamento è invece una sequenza chiara di **tiri di dado su tabelle**: la mappiamo fedelmente.

## What Changes

- **BREAKING**: le abilità sono esposte come **solo modificatore** (3d6 → tabella → −3..+3); sparisce il valore del tiro. Nessuna variante "Mozzo da terra".
- I **modificatori di classe** vengono sommati ai modificatori delle abilità dopo il tiro.
- La classe determina **PF, Fortuna del Diavolo e un tratto di classe** tirato dalla sua tabella.
- **Equipaggiamento**: contenitore d6, **1** oggetto economico d12, 1 oggetto pregiato d12, abiti/armatura d10, cappello d12.
- **Arma**: tabella della classe se presente, altrimenti arma fissa della classe, altrimenti tabella armi d10; il Bucaniere aggiunge anche un moschetto.
- **Background**: professione + argento + legame (d100), dettagli d20 ×3, più disgrazie e cose preziose.
- **Classi opzionali selezionabili**: quando attive entrano nella tabella classi; le loro sotto-tabelle diventano risolvibili.
- **Segnaposto espliciti** per i contenuti non ancora disponibili (tabelle d100, nomi): formato `Professione #42`.
- Pulizia dati: rimozione di `data/attributes.ts` (duplicato morto di `roll.ts`).

## Capabilities

### New Capabilities
- `generation-engine`: contratto del motore di generazione — ogni valore da un tiro su tabella, abilità come soli modificatori, mod di classe, PF/Fortuna/tratto di classe, equipaggiamento e arma del regolamento, classi opzionali selezionabili, segnaposto espliciti, nessun campo mancante.

### Modified Capabilities
- `character-sheet`: gli attributi sono mostrati come soli modificatori; la scheda mostra il tratto di classe.

## Impact

- **Codice**: `src/lib/games/pirateborg/engine/` (`roll.ts`, `index.ts`), `data/` (`attributes.ts` rimosso, `classes.ts`, `equipment*.ts`, `background.ts`, nuove tabelle segnaposto per d100 e nomi), `Sheet.svelte` e `state.svelte.ts` (modello senza `value`, con `classTrait` e `background` strutturato).
- **Persistenza**: la forma del personaggio salvato cambia → **bump di `ENVELOPE_VERSION`**; i salvataggi precedenti vengono ignorati (progetto personale, nessuna migrazione).
- **Spec**: nuova `generation-engine`, `character-sheet` modificata.
