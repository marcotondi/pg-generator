## ADDED Requirements

### Requirement: L'utente SHALL poter cancellare un personaggio salvato
Il menu dei personaggi salvati SHALL offrire, per ogni voce, un'azione di cancellazione che rimuove il personaggio dalla persistenza e dall'elenco. Prima di cancellare, l'app SHALL chiedere conferma.

#### Scenario: Cancellazione confermata
- **QUANDO** l'utente sceglie di cancellare un personaggio e conferma
- **ALLORA** il personaggio DEVE sparire dall'elenco e dalla persistenza

#### Scenario: Cancellazione annullata
- **QUANDO** l'utente sceglie di cancellare un personaggio e annulla
- **ALLORA** il personaggio DEVE restare nell'elenco e nella persistenza
