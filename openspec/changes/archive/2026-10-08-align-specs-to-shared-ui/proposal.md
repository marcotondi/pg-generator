## Why

Dopo l'archiviazione di `unify-generator-app` sono cambiate alcune scelte di comportamento e presentazione: la generazione parte all'apertura della pagina, lo sfondo è condiviso da tutta l'app, la shell è compatta e il titolo del gioco vive nel contenuto. Le spec principali non sono state aggiornate, quindi descrivono un comportamento superato (generazione solo su click, colori che cambiano tra i giochi).

## What Changes

- **character-generation**: la generazione avviene anche **automaticamente all'apertura** della pagina di un gioco; il pulsante genera un nuovo personaggio che sostituisce quello mostrato.
- **homepage**: chiarito che lo **sfondo è condiviso** da tutta l'app e che l'identità distinta di ogni gioco sta in **accento, tipografia e immagini**; la shell condivisa è **menu + contenuto + footer**, con titolo/sottotitolo del gioco reso nel contenuto da un componente comune.

## Capabilities

### New Capabilities
Nessuna.

### Modified Capabilities
- `character-generation`: il trigger della generazione include l'apertura della pagina.
- `homepage`: sfondo condiviso; shell compatta con titolo nel contenuto.

## Impact

Solo specifiche (`openspec/specs/`). Nessuna modifica al codice: il comportamento attuale è già quello descritto dalle spec aggiornate.
