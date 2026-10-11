# character-persistence Specification

## Purpose
Definisce la persistenza locale dei personaggi: salvataggio esplicito, formato unificato tra i giochi e lista di richiamo.
## Requirements
### Requirement: Il salvataggio SHALL essere esplicito
Il personaggio SHALL essere persistito solo quando l'utente fa clic su "Salva Personaggio". Non SHALL esistere auto-salvataggio.

#### Scenario: Salvataggio esplicito
- **QUANDO** l'utente fa clic su "Salva Personaggio"
- **ALLORA** il personaggio DEVE essere scritto in localStorage e comparire nella lista

### Requirement: I personaggi salvati SHALL usare un involucro unificato
Ogni personaggio salvato SHALL usare un formato comune `{ version, game, data }`, dove `data` è specifico del gioco. L'involucro SHALL permettere di distinguere il gioco di appartenenza senza leggere i campi interni.

#### Scenario: Riconoscere il gioco di un salvataggio
- **QUANDO** l'app legge l'elenco dei personaggi salvati
- **ALLORA** DEVE conoscere il gioco di ciascuno senza doverlo dedurre dai dati interni

### Requirement: L'elenco SHALL mostrare i personaggi di entrambi i giochi
Un pannello accessibile dalla barra di navigazione SHALL elencare i personaggi salvati di entrambi i giochi, aggiornandosi a ogni apertura, e SHALL indicare il gioco di ciascun elemento.

#### Scenario: Elenco unificato
- **QUANDO** l'utente apre il pannello dopo aver salvato personaggi di entrambi i giochi
- **ALLORA** DEVE vedere entrambi i personaggi, ciascuno con l'indicazione del gioco

### Requirement: Il caricamento SHALL ripristinare la scheda
Selezionando un personaggio salvato l'app SHALL aprirne la scheda, nel tema e nella pagina del gioco corretto.

#### Scenario: Caricamento di un personaggio
- **QUANDO** l'utente seleziona un personaggio PirateBorg dalla lista mentre si trova su `/ronin`
- **ALLORA** l'app DEVE mostrare la scheda di quel personaggio nella pagina PirateBorg

### Requirement: Il salvataggio SHALL essere compatibile con versioni future
L'involucro SHALL contenere una versione. Se la versione di un salvataggio non è riconosciuta, l'app SHALL gestire il caso senza corrompere l'elenco.

#### Scenario: Versione sconosciuta
- **QUANDO** l'app incontra un salvataggio con versione non riconosciuta
- **ALLORA** DEVE ignorarlo o segnalarlo senza interrompere l'elenco

### Requirement: L'utente SHALL poter cancellare un personaggio salvato
Il menu dei personaggi salvati SHALL offrire, per ogni voce, un'azione di cancellazione che rimuove il personaggio dalla persistenza e dall'elenco. Prima di cancellare, l'app SHALL chiedere conferma.

#### Scenario: Cancellazione confermata
- **QUANDO** l'utente sceglie di cancellare un personaggio e conferma
- **ALLORA** il personaggio DEVE sparire dall'elenco e dalla persistenza

#### Scenario: Cancellazione annullata
- **QUANDO** l'utente sceglie di cancellare un personaggio e annulla
- **ALLORA** il personaggio DEVE restare nell'elenco e nella persistenza

