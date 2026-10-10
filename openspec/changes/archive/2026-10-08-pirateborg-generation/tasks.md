## 1. Motore e dati

- [x] 1.1 Correggere `roll.ts`: 3d6 secco → `modMap`; rimuovere lo scarto del dado e il d6 aggiuntivo
- [x] 1.2 Rimuovere `data/attributes.ts` e usare una sola fonte (`attributeNames`, `modMap`)
- [x] 1.3 Modello personaggio: abilità come `{ name, mod }`, `classTrait { label, value }`, `background` strutturato
- [x] 1.4 Applicare `cls.modifiers` ai modificatori delle abilità dopo il tiro
- [x] 1.5 `generatePirate({ optionalClasses })`: tabella classi 6 base o 8 con opzionali
- [x] 1.6 Registrare le sotto-tabelle mancanti (`classi_aggiuntive`, `mutanti_acquatici`)
- [x] 1.7 Arma a cascata: `weaponTable` → `weapon` fisso → tabella `weapons`; `hasMusket` aggiunge il moschetto
- [x] 1.8 Tratto di classe: tirare la tabella della classe e produrre `classTrait` (assente se non c'è tabella)
- [x] 1.9 Equipaggiamento: 1 oggetto economico (non 2), contenitore/prezioso/abiti/cappello invariati
- [x] 1.10 Background: professione + argento + legame (d100) + dettagli d20 ×3 + disgrazie + cose preziose

## 2. Tabelle segnaposto

- [x] 2.1 Tabella d100 background → `Professione #n`
- [x] 2.2 Tabella d100 argento e legame/oggetto → `#n`
- [x] 2.3 Tabella d100 cose preziose → `Cosa preziosa #n`
- [x] 2.4 Tabella nomi → segnaposto `Nome #n`

## 3. Scheda

- [x] 3.1 `Sheet.svelte`: attributi solo modificatore (niente valore)
- [x] 3.2 `Sheet.svelte`: sezione tratto di classe (etichetta + valore)
- [x] 3.3 `Sheet.svelte`: background strutturato (professione, argento, legame)
- [x] 3.4 Toggle "classi opzionali" nella pagina PirateBorg

## 4. Persistenza

- [x] 4.1 Bump di `ENVELOPE_VERSION` a 2

## 5. Verifica

- [x] 5.1 Smoke test: N generazioni con opzionali on/off, nessun campo mancante, nessuna "tabella non trovata"
- [x] 5.2 `npm run check` e `npm run build` puliti
- [x] 5.3 Confronto visivo della scheda PirateBorg
