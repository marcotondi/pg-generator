## ADDED Requirements

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