## 1. Fix al motore

- [x] 1.1 Onore/Disonore: il ±1 non deve toccare il tiro del punteggio di Onore
- [x] 1.2 Rimuovere l'arma iniziale casuale (d10) e l'uso di `startingWeaponsMap`
- [x] 1.3 Quantità: rimuovere il `replace("4", …)`; mostrare le stringhe del dizionario invariate
- [x] 1.4 Armatura: `hasText` include i Testi di classe (Yamabushi/Onmyoji) oltre a quelli pescati

## 2. Verifica

- [x] 2.1 Smoke test: N generazioni, nessun campo mancante, nessuna arma casuale, Onore senza ±1, armatura T0–1 per chi ha un Testo
- [x] 2.2 `npm run check` e `npm run build` puliti
- [x] 2.3 Confronto visivo della scheda Rōnin
