## Context

Vedi `proposal.md` — Why. Stato attuale rilevante:
- `pirateborg-generator/` è una SvelteKit 5 (`adapter-static`) con shell, PWA (`service-worker.ts` + `static/manifest.json`), store con salva/carica su localStorage, stampa. È già **italiano** e **Svelte**: è la base più vicina al target.
- `ronin-character-generator/` è Next.js 15 / React 18 con `next-intl` (it/en), UI in componenti `character/*.tsx`. Il **motore** in `src/lib/character-generator/` è **TS puro** (nessun import React/Next): usa solo una funzione `t()` e chiavi di traduzione.
- I due progetti sono separati: OpenSpec vive dentro ciascun sottoprogetto, `.git` solo in Rōnin.

## Goals / Non-Goals

**Goals:**
- Un solo progetto, una sola shell, un modulo per gioco, un solo deploy a path.
- Preservare l'aspetto di Rōnin e l'identità di PirateBorg.
- Massimizzare il riuso reale (shell, mattoni UI, storage, PWA) senza accoppiare i due giochi.
- Italiano-only.
- Bootstrap del version control del nuovo progetto.

**Non-Goals:**
- Monorepo con workspaces / Turborepo / Nx (non serve a una app sola).
- Selettore dinamico di giochi "per il futuro" o motore di plugin generico.
- Conservare la storia git di Rōnin nel nuovo progetto.
- Mantenere multilingua o predisporlo.

## Decisions

### 1. SvelteKit, non React
Con PirateBorg da riscrivere e Rōnin riconvertibile, il vincolo "non toccare React in produzione" cade. SvelteKit vince per: PWA nativa (`$service-worker`), adattatore statico naturale, runtime piccolo (uso mobile), e perché **italiano-only elimina il motivo principale per restare su Next** (`next-intl`). Alternativa considerata: restare su React per non riconvertire Rōnin — scartata perché significa mantenere due stack per sempre.

### 2. PirateBorg è il seme; Rōnin è il port
La shell nuova nasce da PirateBorg (già Svelte/italiano/PWA/store). Rōnin fornisce il **motore** (port quasi 1:1) e la **specifica visiva** (token in `globals.css`: accento `#EACD2E`, sfondo `#242220`, font `Cinzel` / `IM Fell English` / `Noto Sans JP`, immagine ruotata, struttura componenti), da tradurre in Svelte.

### 3. Una app modulare, non un monorepo
Il target è **una app**: `src/lib/core/` + `src/lib/games/<id>/`. I moduli sono cartelle, non pacchetti. Estrazione a workspaces solo se comparirà un secondo deployabile o un terzo gioco indipendente. Alternativa considerata: `packages/` + `apps/` — scartata come over-engineering per due giochi con un deploy.

### 4. Interfaccia di un modulo gioco, minima
Un gioco espone esattamente: `meta` (id, titolo, licenza, asset), `generate()` (ritorna il personaggio), `<Sheet>` (componente Svelte), `theme.css` (valori token). La shell non conosce pirati né samurai. Alternativa considerata: `<CharacterSheet>` unico e generico con schema di campi — scartata: le due schede hanno campi diversi e un componente unico diventerebbe un accoppiamento forzato pieno di condizionali.

### 5. Contratto di token, valori per gioco
`core/tokens.css` fissa i **nomi** (es. `--accent`, `--font-heading`, `--radius`, `--hero-image`). Ogni gioco fornisce i **valori** nel proprio `theme.css`. Questo è il "grafica simile con piccoli cambiamenti": struttura identica, valori diversi. Alternativa: due fogli di stile completamente separati — scartata, tornerebbero a divergere.

### 6. Sciogliere i18n nel port di Rōnin (opzione B)
Il motore di Rōnin usa chiavi (`characterGenerator.equipmentMap.*`) risolte da `it.json`. Nel port si adotta un **unico dizionario italiano**: `data/it.ts` (generato da `it.json`) con resolver `it(key)`. I file dati mantengono le chiavi, ma spariscono `next-intl`, il parametro `Translator` e l'inglese: `generateCharacter` non prende più il traduttore e chiama `it()` internamente; la UI risolve allo stesso modo. Alternativa scartata: sostituire a mano ~446 chiavi con stringhe letterali nei file dati — meccanico ma rischioso sui confronti del motore (es. `randomEquipment === '...unseenText'`) e sulla `.replace("4", quantity)`. PirateBorg ha già stringhe italiane dirette: stessa convenzione, nessun i18n.

### 7. Salvataggio unificato
Involucro `{ version, game, data }` in localStorage; `data` è owned dal modulo gioco. La lista attraversa i giochi e mostra il gioco di ciascun personaggio. Alternativa: chiavi localStorage separate per gioco — scartata: la lista non sarebbe unificata come richiesto.

### 8. Version control del nuovo progetto
`git init` alla radice `pg-generator/`. Il `.git` locale di `ronin-character-generator` viene rimosso: la storia locale è già tutta spedita sul remote `origin`, che resta come archivio del progetto Rōnin fino a cancellazione. Nessun subtree/filter-repo: la storia di Rōnin è un progetto a sé, il nuovo progetto parte pulito.

## Risks / Trade-offs

- **[Port UI Rōnin perde fedeltà]** → prima di cancellare, estrarre token e comportamento dai componenti; usare i valori reali, non a memoria; confronto visivo in fase di verifica.
- **[Sciogliere i18n dimentica stringhe]** → checklist per file dati (classi, equipaggiamento, difetti, testi, nickname) e verifica che non resti nessuna chiave di traduzione.
- **[Rimozione `.git` di Rōnin irreversibile]** → il remote GitHub è intatto e allineato (branch `refactor/code-review-fixes` già merged, working tree pulito verificato); la rimozione avviene solo dopo conferma che non ci sia lavoro non pushato.
- **[Un solo deploy accoppia i due giochi]** → accettato: progetto personale, poco traffico, nessuna scadenza; il riuso è più importante dell'indipendenza di release.
- **[Cambio config Cloudflare Pages]** → il progetto `ronin-character-generator` attuale non è più il target; il nuovo progetto Pages punta a `pg-generator/`, build `npm run build`, output `build/`.
- **[La landing a due scelte non preserva l'entry point diretto]** → `/ronin` e `/pirateborg` restano raggiungibili direttamente, quindi i link diretti non si rompono.

## Migration Plan

1. Bootstrap: `git init` alla radice; rimozione `.git` di Rōnin; README del container; `AGENTS.md`.
2. Scaffold SvelteKit (italiano, `adapter-static`, PWA) usando PirateBorg come riferimento.
3. `core/`: shell, mattoni UI, token, storage, stampa, PWA.
4. Modulo `pirateborg/`: port dell'esistente su `core/`.
5. Modulo `ronin/engine`: port TS + scioglimento i18n.
6. Modulo `ronin/`: ricostruzione UI in Svelte preservando l'aspetto; `Sheet`, tema, meta.
7. Routing: landing `/`, `/ronin`, `/pirateborg`; unificazione storage/print.
8. Pulizia: rimozione dei due sottoprogetti; deploy Cloudflare Pages.

**Rollback:** i due sottoprogetti e il repo GitHub di Rōnin restano intatti fino al passo 8; fino ad allora il progetto vecchio è recuperabile. Dopo il passo 8 il rollback è `git revert` sul nuovo repo (nessun dato esterno).

## Open Questions

- Quali asset immagine di Rōnin vanno conservati (`compwith_ronin.png` è l'unico in `public/`): da decidere in fase di ricostruzione UI, non cambia le spec.
- Alias dell'attuale URL `ronin-character-generator.pages.dev`: se reindirizzare o abbandonare — deferibile, non cambia l'approccio.
