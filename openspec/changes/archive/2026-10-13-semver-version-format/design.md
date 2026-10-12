## Context

Il calcolo vive in `scripts/version.mjs`, invocato a build-time da `vite.config.ts` via `define`. Vedi `proposal.md` — Why. La revisione proposta suggeriva anche di eliminare `git rev-parse` usando lo sha che `describe --always` restituisce e di usare `--match 'v[0-9]*'`: entrambe sono state verificate e scartate (vedi Decisions).

## Goals / Non-Goals

**Goals:**
- Un solo formato SemVer, corretto sulla precedenza.
- Base dei tag robusta: un tag non-version non deve diventare la base.

**Non-Goals:**
- Non spostare il calcolo a runtime.
- Non cambiare il fallback a `package.json`.
- Non introdurre tool di rilascio o gestione tag.

## Decisions

1. **Dirty come build metadata `+dirty`**, in tutti i rami. Alternativa scartata: prerelease `-dirty`/`.dirty`, che abbassa la precedenza di una release sporca sotto la release pulita.
2. **Pre-release `-dev.N.g<SHA>`** dopo il tag. Alternativa `-N.g<SHA>`: valida ma non distingue una build di sviluppo.
3. **`--match 'v[0-9]*.[0-9]*.[0-9]*'`** invece di `v*` / `v[0-9]*`. Verificato che con `v[0-9]*` un tag `v9zzz` è scelto da `describe` e oscura `v1.0.0`; con il match stretto `describe` torna `v1.0.0-...`.
4. **Lo sha nel ramo senza tag viene da `git rev-parse --short HEAD`, non da `cleanDesc`.** Se `describe` ha matchato un tag non conforme, `cleanDesc` vale `v9zzz-0-g<sha>` e non è uno sha. Il costo è uno spawn di processo in più solo nel ramo raro: non vale il rischio. Alternativa suggerita dall'analisi: scartata.
5. **`--always` resta.** Senza, `describe` lancia quando non c'è tag e si perderebbe il ramo "nessun tag" a favore del fallback `package.json`.

## Risks / Trade-offs

- [Il formato osservabile cambia] → nessuna persistenza usa la versione (localStorage ha un wrapper suo), quindi nessun impatto sui dati; rollback = revert.
- [Un tag non conforme più vicino del tag valido] → gestito dal match stretto (decisione 3) e dallo sha da `rev-parse` (decisione 4).
- [Zeri iniziali nei numeri (`v01.2.3`)] → non gestito: accettato come caso raro, `\d+` lo permette.
