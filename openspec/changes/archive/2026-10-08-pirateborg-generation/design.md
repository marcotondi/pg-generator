## Context

Vedi `proposal.md` — Why. Il motore PirateBorg oggi è table-driven (`roll(tableId)` con `tables.ts`) ma le regole sono applicate male o per niente; Rōnin fa lo stesso pattern (numero casuale → risultato dalla tabella) e resta il riferimento concettuale. I dati (`classes.ts`) contengono già le tabelle delle classi e delle opzionali, in parte non collegate.

## Goals / Non-Goals

**Goals:**
- Rendere la generazione PirateBorg fedele alla procedura a tiri/tabelle.
- Un modello di personaggio che espone solo i modificatori e include il tratto di classe e un background strutturato.
- Classi opzionali come opzione di generazione.
- Predisporre le tabelle mancanti (d100, nomi) come segnaposto popolabili.

**Non-Goals:**
- Riscrivere il motore di Rōnin o unificare i due motori in un'astrazione comune.
- Popolare i contenuti definitivi delle tabelle d100/nomi (arriveranno dopo).
- Migrare i salvataggi esistenti.

## Decisions

1. **Pattern tiro→tabella unico.** Ogni valore passa da `roll()` su una tabella registrata. Nessun valore costruito a mano. Questo è già il pattern di Rōnin; lo si applica coerentemente a PirateBorg.

2. **Solo il modificatore.** Come da regolamento, il totale dei dadi non serve in gioco. Il modello espone `{ name, mod }`; la scheda mostra il mod. Il tiro è 3d6 secco → tabella `modMap`. Alternativa scartata: mantenere `value` (nessuno la usa).

3. **Ordine abilità → classe.** Prima si tirano le abilità, poi si sommano i `cls.modifiers`. Alternativa scartata: tirare le abilità dopo la classe — irrilevante ai fini del risultato, ma la sequenza del regolamento è tira-poi-applica.

4. **Classi opzionali come parametro.** `generatePirate({ optionalClasses: boolean })`. La tabella `classi` si costruisce di conseguenza (6 base, oppure 8 con le opzionali). Le sotto-tabelle delle opzionali (`classi_aggiuntive`, `mutanti_acquatici`) vanno registrate, altrimenti `roll()` lancia "tabella non trovata". Alternativa scartata: tenere le opzionali sempre incluse ma inerti (stato attuale, rotto).

5. **Arma a cascata.** `weaponTable` → tira; altrimenti `weapon` fisso; altrimenti tabella `weapons` (d10). `hasMusket` aggiunge un moschetto in coda all'equipaggiamento.

6. **Tratto di classe generalizzato.** Ogni classe può avere una "tabella tratto" (specialità, abilità, stile, preghiera, incantesimo, tormento, frottola). Il risultato viene esposto come `classTrait { label, value }` con l'etichetta della categoria, e la scheda lo mostra. Alternativa scartata: campi separati per ogni categoria (rigidità inutile).

7. **Segnaposto espliciti.** Le tabelle senza contenuto definitivo restano strutturate (array popolabili) e producono `Professione #42`. Così si vede che è provvisorio e la struttura è già pronta.

8. **Keep disgrazie e cose preziose.** Fanno parte del background come generato oggi, oltre a quanto elencato nella procedura.

9. **Bump di `ENVELOPE_VERSION`.** Il modello salvato cambia (niente `value`, `classTrait`, `background` strutturato). Si porta a 2: i salvataggi vecchi vengono ignorati da `storage.read` senza corrompere l'elenco. Alternativa scartata: migrazione automatica (costo non giustificato ora).

10. **Pulizia `attributes.ts`.** Oggi `roll.ts` duplica `attributeNames`/`modMap`. Si tiene una sola fonte: il motore. `attributes.ts` sparisce.

## Risks / Trade-offs

- [Cambiare la forma del modello rompe i salvataggi esistenti] → bump di `ENVELOPE_VERSION` e scarto pulito; accettato (progetto personale).
- [Il parser delle classi opzionali con sotto-tabelle può rilanciare "tabella non trovata"] → le sotto-tabelle vanno registrate e coperte da uno smoke test che genera con opzionali attive.
- [I segnaposto potrebbero sembrare contenuto reale] → formato `X #n` esplicito, e i contenuti definitivi li sostituiranno senza cambiare la struttura.
- [Il tratto di classe è una generalizzazione: classi senza tabella] → il campo è opzionale; per classi senza tabella il tratto non compare.

## Migration Plan

1. Correggere `roll.ts` (3d6 → mod, niente scarto) e rimuovere `attributes.ts`.
2. Estendere il modello e `index.ts` (mod di classe, tratto, arma a cascata, equip 1 economico, background strutturato, `optionalClasses`).
3. Registrare le sotto-tabelle e aggiungere le tabelle segnaposto (d100, nomi).
4. Aggiornare `Sheet.svelte` (solo mod + tratto di classe + background strutturato).
5. Bump `ENVELOPE_VERSION` a 2.
6. Smoke test: molte generazioni con opzionali on/off, nessun campo mancante, nessuna "tabella non trovata".

**Rollback:** `git revert`; nessun dato esterno da riconciliare.

## Open Questions

- Il formato temporaneo del "legame/oggetto narrativo" del background (`Professione #42` copre professione; legame e oggetto seguono lo stesso schema) — deferibile, non cambia l'approccio.
