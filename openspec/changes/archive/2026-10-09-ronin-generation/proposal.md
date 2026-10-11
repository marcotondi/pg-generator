## Why

La generazione Rōnin è in gran parte fedele al manuale, ma l'audit contro le regole ha trovato **quattro deviazioni** e la pipeline non è mai stata formalizzata in una spec. Oggi: il bonus di Onore/Disonore si applica anche al tiro di Onore (dovrebbe toccare solo le quattro abilità), viene sempre aggiunta un'arma casuale d10 (le classi hanno solo armi fisse), la quantità degli oggetti viene "ritagliata" con un `replace("4", …)` che **corrompe le stringhe** del dizionario (`Spirito+4 usi` → `Spirito+2 usi`), e l'armatura d2 per chi ha un Testo non copre i Testi di classe (Yamabushi/Onmyoji).

## What Changes

- **BREAKING**: il **±1 di Onore/Disonore** si applica **solo ai tiri delle quattro abilità** (non più anche al tiro di Onore, Ryo, PF, equipaggiamento, difetti, testi).
- **Rimossa l'arma iniziale casuale d10**: il personaggio riceve **solo le armi fisse della classe**.
- **Corretto il bug delle quantità**: eliminate le sostituzioni sulle stringhe; le formule del dizionario (`Spirito+4`, `1d4`) restano invariate.
- **Armatura**: la regola del **d2 (Tier 0–1)** si applica a **chiunque parta con un Testo**, di classe (Yamabushi/Onmyoji) o pescato dall'equipaggiamento; Erudite Samurai → Tier 2, Sword Saint → Tier 3; gli altri → d4.
- **Codificata la pipeline** in una nuova capability `ronin-generation`.
- **Nessuna scelta manuale**: il generatore sceglie casualmente tra le 10 classi (niente "senza classe", niente selettore).

## Capabilities

### New Capabilities
- `ronin-generation`: contratto della generazione Rōnin — abilità 3d6 + mod di classe, Onore grezzo, bonus Onore solo sulle abilità, PF (Resilienza + dado), Ryo/Virtù per classe, equipaggiamento e armi di classe, armatura con regola dei Testi, difetti/testi, nomi dalle tabelle, nessuna scelta manuale, nessun campo mancante.

### Modified Capabilities
Nessuna.

## Impact

- **Codice**: `src/lib/games/ronin/engine/index.ts` (onore, arma, quantità, armatura), `engine/utils.ts` (firma `rollDice`/`rollArmor` se serve), `data/equipment.ts` (`startingWeaponsMap` non più usato).
- **Nessuna modifica alla scheda**: l'armatura ha già un rango, i testi sono già mostrati.
- **Spec**: nuova `ronin-generation`. Le regole già conformi (mod tabella, PF, Ryo/Virtù, armatura fissa, nomi) restano invariate.
