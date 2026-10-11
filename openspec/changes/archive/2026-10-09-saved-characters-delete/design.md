## Context

Vedi `proposal.md` — Why. `storage.deleteCharacter(id)` esiste già e funziona; manca solo l'azione nell'interfaccia. Il menu (`SavedMenu.svelte`) legge la lista con `getCharacters()` a ogni apertura e la tiene in `items`.

## Goals / Non-Goals

**Goals:**
- Cancellare un singolo personaggio dal menu, con conferma.
- Aggiornare subito l'elenco dopo la cancellazione.

**Non-Goals:**
- Nessuna modifica al formato di salvataggio.
- Nessuna modifica ai motori di gioco o alle schede.

## Decisions

1. **Conferma prima di cancellare.** Un tocco accidentale non deve distruggere un personaggio: si chiede conferma con `confirm()` (dialogo nativo, nessuna UI nuova da costruire). Alternativa scartata: undo, scomodo dentro un pannello a tendina.

2. **Cancellazione dal menu, non dalla scheda.** Il menu è già l'elenco dei salvati; aggiungere l'azione lì tiene una sola schermata per la gestione. La scheda resta di sola lettura.

3. **Riuso di `deleteCharacter`.** Nessuna nuova funzione di storage: si richiama quella esistente e si rilegge `getCharacters()`.

## Risks / Trade-offs

- [Cancellare il personaggio attualmente aperto] → la scheda a schermo resta, ma non è più salvata; accettabile (il personaggio è di sola lettura e rigenerabile). L'elenco si aggiorna.
- [`confirm()` bloccante] → è un piccolo dialogo nativo; sufficiente per un'azione rara e distruttiva.

## Migration Plan

Nessuna migrazione. Rollback: `git revert`.
