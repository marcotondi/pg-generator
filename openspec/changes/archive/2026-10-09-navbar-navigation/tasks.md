## 1. Barra di navigazione

- [x] 1.1 `Navbar.svelte`: marchio (→ home) + `GameSwitcher` + accesso ai salvati
- [x] 1.2 `GameSwitcher.svelte`: segmento `[Rōnin | PirateBorg]` come link di rotta
- [x] 1.3 `AppShell`: usare `Navbar` e togliere header compatto/hamburger/`showTitle`
- [x] 1.4 `Home`: montare la stessa `Navbar` (senza selettore attivo)

## 2. Azioni contestuali

- [x] 2.1 `SheetActions.svelte`: riga sotto la scheda su desktop, barra fissa in basso su mobile (solo con personaggio)
- [x] 2.2 `GameScreen`: usare `SheetActions`, togliere il vecchio blocco azioni e lo snippet menu
- [x] 2.3 Padding in fondo al contenuto quando la barra mobile è visibile

## 3. Salvati

- [x] 3.1 `SavedPanel.svelte` (sostituisce `SavedMenu`): popover su desktop, foglio dal basso su mobile
- [x] 3.2 Elenco + ricarica + cancellazione (riusa lo storage); Escape/clic fuori/trascinamento per chiudere

## 4. Verifica

- [x] 4.1 `npm run check` e `npm run smoke` puliti
- [x] 4.2 `npm run build` pulito
- [x] 4.3 Prova manuale: cambio gioco dalla barra, ritorno alla home, azioni su desktop e mobile, pannello salvati
