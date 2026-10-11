## Context

Vedi `proposal.md` — Why. Oggi `AppShell` mostra un header compatto con un pulsante hamburger che apre `SavedMenu` (un drawer laterale con Home + elenco). Il titolo del gioco è già reso nel contenuto da `GameTitle`. La landing è una pagina a sé, senza barra.

## Goals / Non-Goals

**Goals:**
- Barra di navigazione condivisa (marchio, selettore di gioco, accesso ai salvati).
- Azioni Salva/Stampa contestuali alla scheda, con variante mobile fissa in basso.
- Pannello salvati ancorato (popover desktop, foglio mobile).

**Non-Goals:**
- Nessuna modifica ai motori di gioco, al formato di salvataggio o alla stampa.
- Nessuna icona per gioco nel selettore (l'utente non ne ha ancora).

## Decisions

1. **La barra vive in `AppShell`; la home ha la stessa `Navbar`.** `AppShell` smette di avere l'header compatto e il menu: rende `Navbar` + contenuto + footer. La landing monta la stessa `Navbar` con `currentGame = null` (niente selettore attivo). Così la barra è una sola.

2. **Selettore di gioco come link di rotta.** `[Rōnin | PirateBorg]` sono due `href`; cambiare gioco naviga e la pagina genera subito il nuovo personaggio (comportamento già esistente all'apertura). Nessuno stato condiviso.

3. **Azioni contestuali con una sola sorgente.** `SheetActions` rende Salva/Stampa: su `min-width: 768px` è una riga sotto la scheda; sotto i 768px è una barra `position: fixed` in basso, mostrata solo se c'è un personaggio. Una media query, non due componenti.

4. **Salvati: popover su desktop, bottom sheet su mobile.** Stesso contenuto, due presentazioni via media query. Chiusura con Escape, clic fuori, e trascinamento verso il basso sul foglio. Il pulsante riporta `aria-expanded` e riprende il focus alla chiusura. Riusa `getCharacters`/`getCharacter`/`deleteCharacter`.

5. **"Genera" resta l'unico primario.** Nella barra mobile in basso NON si mette "Genera": resta nel contenuto per non avere due azioni primarie.

## Risks / Trade-offs

- [La barra sticky ruba spazio verticale su schermi bassi] → altezza contenuta e barra azioni solo quando serve (con un personaggio).
- [La barra azioni fissa copre il footer] → padding-bottom sul contenuto quando la barra è visibile.
- [Il foglio mobile e il popover desktop possono divergere] → stesso markup, differenza solo di CSS.

## Migration Plan

Nessuna migrazione. Rollback: `git revert`.

## Open Questions

Nessuna: le quattro decisioni dell'utente sono fissate (Salva/Stampa contestuali B/C, home mantenuta, pannello ancorato, bottom sheet mobile).
