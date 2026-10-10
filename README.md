# PG Generator

Generatore di schede personaggio per giochi di ruolo, in **italiano**, come PWA statica.
Un'unica app SvelteKit con un modulo per gioco: **Rōnin** e **PirateBorg**.

## Cosa c'è qui

```
src/
  lib/
    core/          shell condivisa: layout, mattoni UI, token, storage, stampa, PWA
    games/
      ronin/       motore, dati, tema e scheda di Rōnin
      pirateborg/  motore, dati, tema e scheda di PirateBorg
  routes/
    +page          landing con le due scelte
    ronin/         genera + scheda Rōnin
    pirateborg/    genera + scheda PirateBorg
```

L'app è **solo in italiano**. Non c'è selezione di lingua.

## Comandi

```bash
npm install
npm run dev       # server di sviluppo
npm run build     # export statico in build/
npm run preview   # anteprima della build
npm run check     # svelte-check + tsc
```

## Deploy

Un solo progetto Cloudflare Pages:

| Impostazione | Valore |
|---|---|
| Root directory | `pg-generator/` |
| Build command | `npm run build` |
| Output directory | `build/` |

## Version control

Il progetto ha una storia git propria. I due generatori precedenti
(`ronin-character-generator`, `pirateborg-generator`) sono stati rimossi dopo il
port: il progetto Rōnin resta come repo a sé su GitHub, quello di PirateBorg come
riferimento storico. `docs/ronin-ui-spec.md` conserva la specifica visiva usata
per il port.

## Licenze

Rōnin e PirateBorg sono produzioni indipendenti di Marco Tondi, pubblicate sotto le
rispettive licenze Third Party. I testi di licenza sono mostrati nel footer di ciascun gioco.

## Documentazione

- `AGENTS.md` — comandi, architettura e convenzioni per chi lavora al codice
- `docs/ronin-ui-spec.md` — specifica visiva di Rōnin usata per il port in Svelte
- `openspec/` — specifiche e change del progetto
