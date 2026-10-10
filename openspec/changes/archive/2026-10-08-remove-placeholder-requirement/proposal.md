## Why

Tutte le tabelle PirateBorg sono ora popolate (background d100, cose preziose, reliquie, nomi, tratti di classe, sottotabelle). Non esiste più alcun contenuto segnaposto, quindi il requisito che imponeva di usarli per i dati mancanti è obsoleto e va rimosso.

## What Changes

- Rimosso da `generation-engine` il requisito **"I contenuti provvisori SHALL essere segnaposto espliciti"** (e il suo scenario).

## Capabilities

### New Capabilities
Nessuna.

### Modified Capabilities
- `generation-engine`: rimozione di un requisito non più valido.

## Impact

Solo specifiche (`openspec/specs/generation-engine`). Nessuna modifica al codice: il comportamento attuale (contenuti definitivi) non era in conflitto con il requisito, lo rende semplicemente inapplicabile.
