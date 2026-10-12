# character-sheet Specification

## Purpose
Definisce come viene mostrato un personaggio completato: una scheda costruita da mattoni condivisi, vestita con il tema del gioco, stampabile.
## Requirements
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

### Requirement: La scheda SHALL comporsi da mattoni condivisi con tema per gioco
La scheda SHALL usare i mattoni comuni (cornice, blocco attributo, intestazione di sezione, lista di elementi, separatori) e SHALL applicare il tema del gioco. I campi specifici di un gioco SHALL vivere nel modulo di quel gioco, non nella shell.

#### Scenario: Scheda Rōnin
- **QUANDO** è visualizzata la scheda di un personaggio Rōnin
- **ALLORA** DEVE includere le sezioni proprie di Rōnin (es. precetti d'onore, testi) con il tema Rōnin

#### Scenario: Scheda PirateBorg
- **QUANDO** è visualizzata la scheda di un personaggio PirateBorg
- **ALLORA** DEVE includere le sezioni proprie di PirateBorg (es. contenitore, vestiti, cappello, fortuna del diavolo) con il tema PirateBorg

### Requirement: La scheda SHALL offrire le azioni salva e stampa
La scheda SHALL offrire le azioni "Salva Personaggio" e "Stampa" accanto alla scheda, in una riga subito sotto la scheda e visibili solo quando esiste un personaggio.

#### Scenario: Azione stampa
- **QUANDO** l'utente fa clic su "Stampa"
- **ALLORA** l'app DEVE avviare la stampa del documento

#### Scenario: Azioni contestuali alla scheda
- **QUANDO** esiste un personaggio generato
- **ALLORA** le azioni Salva e Stampa DEVONO essere raggiungibili accanto alla scheda, senza dover tornare in cima alla pagina

### Requirement: La scheda SHALL essere stampabile
La scheda SHALL includere stili di stampa che nascondono header, footer, menu, pulsante di generazione e pulsanti azione, lasciando visibile solo la scheda in un layout pulito adatto all'uso fisico.

#### Scenario: Stampa pulita
- **QUANDO** l'utente stampa la pagina
- **ALLORA** DEVONO essere visibili solo la scheda e i suoi dati, senza elementi di interfaccia

