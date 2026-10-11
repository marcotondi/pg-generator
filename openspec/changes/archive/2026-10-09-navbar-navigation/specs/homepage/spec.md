## ADDED Requirements

### Requirement: La navigazione SHALL essere accessibile da ogni pagina
Ogni pagina SHALL mostrare una barra di navigazione con il marchio che riporta alla home. Nelle pagine gioco la barra SHALL offrire il passaggio diretto all'altro gioco, senza passare dalla home. La barra SHALL offrire l'accesso ai personaggi salvati da qualsiasi pagina.

#### Scenario: Cambio gioco dalla barra
- **QUANDO** l'utente è su `/ronin` e sceglie PirateBorg nella barra
- **ALLORA** l'app DEVE passare a `/pirateborg` senza passare dalla home

#### Scenario: Ritorno alla home
- **QUANDO** l'utente sceglie il marchio nella barra
- **ALLORA** l'app DEVE tornare alla home

#### Scenario: Accesso ai salvati da ogni pagina
- **QUANDO** l'utente apre i personaggi salvati dalla barra, anche dalla home
- **ALLORA** DEVE vedere l'elenco dei personaggi di entrambi i giochi

## MODIFIED Requirements

### Requirement: Le pagine gioco SHALL condividere la shell
Le pagine `/ronin` e `/pirateborg` SHALL usare la stessa shell: una barra di navigazione in alto con marchio, selettore di gioco e accesso ai personaggi salvati; il contenuto principale; e il footer con licenza, versione e link GitHub. Il titolo e il sottotitolo del gioco SHALL essere mostrati all'inizio del contenuto tramite lo stesso componente condiviso. La shell SHALL essere una sola, parametrizzata dal gioco.

#### Scenario: Footer presente su entrambi i giochi
- **QUANDO** l'utente apre una qualsiasi delle due pagine gioco
- **ALLORA** DEVE vedere il footer con licenza e versione corretti per il gioco

#### Scenario: Titolo reso dal componente condiviso
- **QUANDO** l'utente apre una delle due pagine gioco
- **ALLORA** DEVE vedere il titolo del gioco (nome e sottotitolo) all'inizio del contenuto, nella stessa forma su entrambi i giochi
