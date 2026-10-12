## MODIFIED Requirements

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
