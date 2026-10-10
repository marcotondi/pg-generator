## MODIFIED Requirements

### Requirement: La scheda SHALL mostrare tutti i dati del personaggio
La scheda SHALL mostrare tutti i campi prodotti dal motore del gioco: nome, classe, punti ferita, risorsa di fortuna, equipaggiamento, background e tratti specifici dell'ambientazione, incluso il tratto di classe. Gli attributi SHALL essere mostrati come soli modificatori, senza il valore del tiro.

#### Scenario: Visualizzazione completa
- **QUANDO** l'utente genera un nuovo personaggio o ne carica uno salvato
- **ALLORA** la scheda DEVE mostrare tutti i dati di quel personaggio

#### Scenario: Attributi come modificatori
- **QUANDO** la scheda mostra gli attributi
- **ALLORA** DEVE mostrare solo il modificatore di ciascuna abilità, senza il valore del tiro

#### Scenario: Tratto di classe mostrato
- **QUANDO** il personaggio ha un tratto di classe
- **ALLORA** la scheda DEVE mostrarlo con la sua etichetta di categoria
