<p align="center">
  <img src="src/lib/games/ronin/assets/compwith_ronin.png" alt="Rōnin" height="110" />
  <img src="src/lib/games/pirateborg/assets/pirate-borg-compatible.png" alt="PirateBorg" height="110" />
</p>

# PG Generator

> Generatore di schede personaggio per **Rōnin** e **PirateBorg**, in italiano.

[![SvelteKit](https://img.shields.io/badge/SvelteKit-FF3E00?style=flat-square&logo=svelte&logoColor=white)](https://svelte.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

**PG Generator** è una PWA statica senza account e senza server: apri l'app, scegli il gioco, generi il personaggio e ne stampi la scheda. Un'unica app in cui ogni gioco è un modulo a sé, con la sua scheda, i suoi dati e il suo tema.

## ✨ Cosa genera

**Rōnin**: l'onore, la lama e gli spiriti.

- **10 classi**, dal *Samurai Erudito* al *Monaco Ubriaco*, fino all'*Onmyoji* e al *Sumo Temerario*.
- **Caratterizzazione profonda**: Corpi Infranti, Cronache Oscure e Cattive Abitudini.
- **Testi mistici**: Testi dell'Invisibile e Testi Shintai, in base alla classe.
- **Precetti d'Onore** di classe, più soprannome in kanji.
- **Statistiche calcolate**: PF, Virtù, Onore e Ryo dai modificatori di classe e dai tiri.

**PirateBorg**: teschio, rum e morte.

- **Classi e classi opzionali**, con Devil's Luck, armi e tratti di classe.
- **Tabelle dal regolamento** seguite nel flusso tiro-su-tabella: background, reliquie, oggetti preziosi, nomi dei pirati.
- **Equipaggiamento** ed extra coerenti con classe e tiri.

Per entrambi: personaggi **salvati in locale**, schede di sola lettura pronte da **stampare**, e rigenerazione in un clic.

## 🛠️ Stack

- **SvelteKit 5** con runes (`$state`, `$derived`, `$props`), **TypeScript** e `adapter-static`.
- Motori di gioco in **TypeScript puro**, fuori da Svelte e testabili a parte.
- Token CSS condivisi: i nomi in `core/`, i valori nel `theme.css` di ogni gioco.
- Nessuna dipendenza UI: CSS scritto a mano, stampa via `print.css`.

```
src/lib/
  core/          shell condivisa: layout, mattoni UI, token, storage, stampa, PWA
  games/
    ronin/       motore, dati, tema e scheda di Rōnin
    pirateborg/  motore, dati, tema e scheda di PirateBorg
```

## 🚀 Comandi

```bash
npm install
npm run dev       # server di sviluppo
npm run build     # export statico in build/
npm run preview   # anteprima della build
npm run check     # svelte-check + tsc
```

## 📦 Deploy

Un solo progetto Cloudflare Pages:

| Impostazione | Valore |
| --- | --- |
| Build command | `npm run build` |
| Output directory | `build/` |

## 📖 Licenze

Il **codice** è [MIT](LICENSE). I **contenuti di gioco** e i loghi di compatibilità
no: Rōnin e PirateBorg restano dei rispettivi editori, sotto le loro Third Party
License. Testi richiesti e dettagli in [`LICENSE-CONTENT.md`](LICENSE-CONTENT.md).

## 🚫 Non è un prodotto ufficiale

PG Generator è una produzione indipendente, non affiliata a Slightly
Reckless Games LTD né a Limithron LLC. I testi di licenza sono mostrati nel footer di
ciascun gioco.

## 📚 Documentazione

- `AGENTS.md` — comandi, architettura e convenzioni per chi lavora al codice
- `openspec/` — specifiche e change del progetto

---

<p align="center">Creato con 🤖 e ❤️ per la comunità TTRPG.</p>
