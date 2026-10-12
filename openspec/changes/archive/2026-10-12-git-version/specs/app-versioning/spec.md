## Purpose

Deriva la versione dell'app dalla storia git al momento della build, con la convenzione GitVersion (SemVer), così il footer mostra sempre la versione della build corrente.

## ADDED Requirements

### Requirement: La versione SHALL essere derivata dalla storia git
La versione dell'app mostrata nel footer SHALL essere calcolata a build-time dalla storia git, seguendo la convenzione GitVersion (SemVer): `MAJOR.MINOR.PATCH` dall'ultimo tag `vX.Y.Z`; commit successivi al tag SHALL aggiungere il numero di commit; un working tree con modifiche non committate SHALL essere segnalato.

#### Scenario: Build su un tag
- **QUANDO** il build avviene con HEAD esattamente sul tag `v1.2.3`
- **ALLORA** la versione DEVE essere `1.2.3`, senza suffissi

#### Scenario: Build dopo un tag
- **QUANDO** il build avviene a N commit dal tag `v1.2.3`
- **ALLORA** la versione DEVE includere il numero N di commit dal tag

#### Scenario: Nessun tag nel repository
- **QUANDO** il repository non ha ancora alcun tag
- **ALLORA** la versione DEVE partire dal valore di base previsto dalla convenzione e includere il numero di commit trascorsi

#### Scenario: Working tree sporco
- **QUANDO** il working tree contiene modifiche non committate
- **ALLORA** la versione DEVE segnalare lo stato sporco

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