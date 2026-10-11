## Why

Il menu hamburger concentra in un cassetto laterale sia la navigazione sia le azioni, e per muoversi tra i giochi costringe a passare dalla home. Nasconde ciò che serve spesso (dove sono, cambia gioco) e mette sullo stesso piano cose diverse (navigare, salvare, stampare). Serve una barra di navigazione sempre visibile, un selettore di gioco diretto e azioni contestuali vicine alla scheda.

## What Changes

- **Barra di navigazione** su ogni pagina: marchio (→ home), **selettore di gioco** (Rōnin ⇄ PirateBorg) e accesso ai **personaggi salvati**. Sostituisce il menu hamburger.
- **Nessun ritorno forzato alla home** per cambiare gioco: si salta direttamente da un gioco all'altro dalla barra.
- **Azioni contestuali alla scheda**: su schermi larghi Salva/Stampa stanno subito sotto la scheda; su schermi stretti sono una **barra fissa in basso**, visibile solo quando esiste un personaggio.
- **Personaggi salvati**: pannello ancorato (popover su desktop, **foglio dal basso** su mobile), non più un drawer laterale. Elenco, ricarica e cancellazione restano.
- La **home resta** la porta d'ingresso (intro + scelta), raggiungibile dal marchio.

## Capabilities

### New Capabilities
Nessuna.

### Modified Capabilities
- `homepage`: la shell diventa una barra di navigazione; aggiunta la navigazione accessibile da ogni pagina.
- `character-persistence`: l'elenco dei salvati è un pannello accessibile dalla barra.
- `character-sheet`: le azioni Salva/Stampa sono contestuali alla scheda.

## Impact

- **Codice**: nuovi `Navbar`, `GameSwitcher`, `SavedPanel`, `SheetActions`; `AppShell` e `GameScreen` semplificati (via l'hamburger e la logica `showTitle`); rimozione di `SavedMenu`.
- **UX**: stessa logica di generazione e persistenza; cambia solo la presentazione e la navigazione.
- **Spec**: `homepage`, `character-persistence`, `character-sheet`.
