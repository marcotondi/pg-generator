## Context

Vedi `proposal.md` — Why. Il motore Rōnin è in `src/lib/games/ronin/engine/` (`index.ts`, `utils.ts`) con i dati in `engine/data/` (contenuto italiano nel dizionario `it.json`). A differenza di PirateBorg, **non ci sono segnaposto**: i dati sono reali. L'audit ha quindi prodotto solo regole, non contenuti.

## Goals / Non-Goals

**Goals:**
- Allineare le quattro deviazioni al manuale.
- Formalizzare la pipeline Rōnin in una spec, così le regole sono verificabili.

**Non-Goals:**
- Nessuna modifica ai contenuti (tabelle, nomi, testi): sono già completi e tradotti.
- Nessuna "senza classe"/Landlubber: il generatore pesca sempre tra le 10 classi.
- Nessuna scelta manuale di classe (l'app è un generatore).

## Decisions

1. **Onore/Disonore solo sulle abilità.** `rollDice` applica ±1 solo quando `numberOfDice === 3`; oggi l'unico altro tiro a 3 dadi è il punteggio di Onore. Si toglie l'`honourState` dal tiro di Onore. Ryo (3d6 per Erudite/Bakuto), PF, difetti, equipaggiamento e testi non passano da tiri a 3 dadi, quindi non sono toccati.

2. **Niente arma iniziale casuale.** Le classi ricevono solo le armi fisse; `rollForStartingWeapon` e l'uso di `startingWeaponsMap` spariscono. La tabella resta nel repository solo se un domani servisse la variante "senza classe" — per ora non serve, quindi si rimuove per non lasciare dati morti.

3. **Niente sostituzioni sulle stringhe di quantità.** Il dizionario già esprime le formule corrette (`Spirito+4 usi`, `1d4 shuriken`): si mostra la stringa così com'è. La formula `Spirito+4` indica il **modificatore** di Spirito, ma il testo resta una formula (coerente con `Spirito+6 ore` della lanterna), quindi non si risolve a un numero in creazione.

4. **Armatura e Testi.** La regola dei Testi ha **precedenza**: si calcola `hasText` = (classe Yamabushi o Onmyoji) **oppure** (l'oggetto casuale pescato è un Testo); se vero, l'armatura è tirata con d2 (Tier 0–1). Altrimenti Erudite Samurai → Tier 2, Sword Saint → Tier 3, gli altri → d4. Così un Erudite/Sword Saint che pesca un Testo non resta con armatura Media/Pesante che gli impedirebbe di usarlo.

5. **Selezione classe: nessuna.** Il motore sceglie casualmente tra le 10 classi, come oggi.

## Risks / Trade-offs

- [Togliere l'arma casuale cambia i personaggi generati (una voce in meno)] → è la regola del manuale; la scheda mostra le armi di classe.
- [Le stringhe con formule invece di numeri risolti] → coerente col resto del dizionario (`Spirito+6 ore`); il numero si conosce comunque dal modificatore mostrato in scheda.

## Migration Plan

Nessuna migrazione dati. Il modello del personaggio non cambia forma, quindi `ENVELOPE_VERSION` resta. Solo i valori generati cambiano.

## Open Questions

Nessuna: le regole sono confermate dal manuale. `generation-engine` (PirateBorg) resta una capability distinta.
