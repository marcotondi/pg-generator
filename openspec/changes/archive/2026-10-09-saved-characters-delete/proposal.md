## Why

I personaggi salvati non si possono cancellare: il menu li elenca e li ricarica, ma la lista cresce e basta. A lungo andare lo storage del browser si riempie e il salvataggio smette di funzionare, senza che l'utente possa liberare spazio. La funzione `deleteCharacter` esiste già ma nessuna schermata la usa.

## What Changes

- Il menu dei personaggi salvati SHALL offrire, per ogni voce, un'azione di **cancellazione**.
- La cancellazione SHALL chiedere una **conferma** e, se confermata, rimuovere il personaggio dalla persistenza e dall'elenco.

## Capabilities

### New Capabilities
Nessuna.

### Modified Capabilities
- `character-persistence`: aggiunto il requisito di cancellazione di un personaggio salvato.

## Impact

- **Codice**: `src/lib/core/components/SavedMenu.svelte` (azione di cancellazione + conferma), riusa `deleteCharacter` già presente in `src/lib/core/storage.ts`.
- **Nessuna modifica** al formato di salvataggio né ai motori di gioco.
- **Spec**: `character-persistence`.
