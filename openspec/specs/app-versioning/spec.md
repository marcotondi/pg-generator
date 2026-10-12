# app-versioning Specification

## Purpose
Deriva la versione dell'app dalla storia git al momento della build, con la convenzione GitVersion (SemVer), così il footer mostra sempre la versione della build corrente.
## Requirements
### Requirement: La versione SHALL essere derivata dalla storia git
La versione dell'app mostrata nel footer SHALL essere calcolata a build-time dalla storia git secondo SemVer 2.0. Il tag più recente nella forma `vMAJOR.MINOR.PATCH` SHALL fornire la base; un tag che non rispetta questa forma NON SHALL essere usato come base. A N commit (`N > 0`) da quel tag la versione SHALL essere la pre-release `MAJOR.MINOR.(PATCH+1)-dev.N.gSHA`, dove SHA è l'abbreviazione del commit di build. In assenza di alcun tag valido la versione SHALL essere `0.1.0-dev.N.gSHA`. Un working tree con modifiche non committate SHALL aggiungere i metadati di build `+dirty`, che non modificano la precedenza SemVer.

#### Scenario: Build su un tag
- **QUANDO** il build avviene con HEAD esattamente sul tag `v1.2.3` e working tree pulito
- **ALLORA** la versione DEVE essere `1.2.3`, senza suffissi

#### Scenario: Build dopo un tag
- **QUANDO** il build avviene a N commit dal tag `v1.2.3` (`N > 0`)
- **ALLORA** la versione DEVE essere `1.2.4-dev.N.g<sha>`, con N e lo sha del commit di build

#### Scenario: Nessun tag nel repository
- **QUANDO** il repository non ha alcun tag nella forma `vMAJOR.MINOR.PATCH`
- **ALLORA** la versione DEVE essere `0.1.0-dev.N.g<sha>`, con N numero di commit totali

#### Scenario: Working tree sporco
- **QUANDO** il working tree contiene modifiche non committate
- **ALLORA** la versione DEVE aggiungere i metadati di build `+dirty`, senza abbassare la precedenza della versione

#### Scenario: Tag non-version
- **QUANDO** esiste un tag più recente che non rispetta la forma `vMAJOR.MINOR.PATCH` (es. `v9zzz`)
- **ALLORA** quel tag DEVE essere ignorato e la base DEVE restare l'ultimo tag `vMAJOR.MINOR.PATCH` valido

### Requirement: La versione SHALL avere un fallback quando git non è disponibile
Se la storia git non è disponibile al momento del build (es. checkout senza storia), la versione SHALL essere derivata dal campo `version` di `package.json`.

#### Scenario: Build senza storia git
- **QUANDO** il build non riesce a leggere la storia git
- **ALLORA** la versione DEVE essere il valore `version` di `package.json`

### Requirement: La versione SHALL essere mostrata nel footer
Il footer dell'app SHALL mostrare la versione derivata, preceduta da `v`, accanto al link GitHub. Non SHALL esistere alcun calcolo a runtime: il valore è fissato a build-time.

#### Scenario: Versione visibile nel footer
- **QUANDO** l'utente apre una qualsiasi pagina gioco
- **ALLORA** DEVE vedere nel footer la versione della build corrente, nella forma `v<versione>`

### Requirement: Il build SHALL completare la storia git quando il clone è shallow
Quando il build parte da un clone shallow (es. Cloudflare Pages), il sistema SHALL tentare di recuperare storia e tag (`git fetch --unshallow --tags`) prima di calcolare la versione, così che la derivazione dalla storia git funzioni anche lì. Se il recupero non è possibile, SHALL restare valido il fallback a `package.json`.

#### Scenario: Build da clone shallow
- **QUANDO** il build parte da un repository con storia incompleta
- **ALLORA** il sistema DEVE tentare di completare storia e tag prima di calcolare la versione

#### Scenario: Recupero non possibile
- **QUANDO** il completamento della storia non riesce (git assente o senza rete)
- **ALLORA** la versione DEVE usare il fallback di `package.json`, senza far fallire il build

#### Scenario: Repository già completo
- **QUANDO** il repository ha già storia e tag completi
- **ALLORA** il sistema NON DEVE eseguire operazioni di rete e DEVE calcolare la versione dalla storia esistente

