# character-sheet Specification

## Purpose
Definisce come viene mostrato un personaggio completato: una scheda costruita da mattoni condivisi, vestita con il tema del gioco, stampabile.
## Requirements
### Requirement: La scheda SHALL mostrare tutti i dati del personaggio
La scheda SHALL mostrare tutti i campi prodotti dal motore del gioco: nome, attributi con modificatori, classe, punti ferita, risorsa di fortuna, equipaggiamento, background e tratti specifici dell'ambientazione.

#### Scenario: Visualizzazione completa
- **QUANDO** l'utente genera un nuovo personaggio o ne carica uno salvato
- **ALLORA** la scheda DEVE mostrare tutti i dati di quel personaggio

### Requirement: La scheda SHALL comporsi da mattoni condivisi con tema per gioco
La scheda SHALL usare i mattoni comuni (cornice, blocco attributo, intestazione di sezione, lista di elementi, separatori) e SHALL applicare il tema del gioco. I campi specifici di un gioco SHALL vivere nel modulo di quel gioco, non nella shell.

#### Scenario: Scheda Rōnin
- **QUANDO** è visualizzata la scheda di un personaggio Rōnin
- **ALLORA** DEVE includere le sezioni proprie di Rōnin (es. precetti d'onore, testi) con il tema Rōnin

#### Scenario: Scheda PirateBorg
- **QUANDO** è visualizzata la scheda di un personaggio PirateBorg
- **ALLORA** DEVE includere le sezioni proprie di PirateBorg (es. contenitore, vestiti, cappello, fortuna del diavolo) con il tema PirateBorg

### Requirement: La scheda SHALL offrire le azioni salva e stampa
La scheda SHALL presentare i pulsanti "Salva Personaggio" e "Stampa".

#### Scenario: Azione stampa
- **QUANDO** l'utente fa clic su "Stampa"
- **ALLORA** l'app DEVE avviare la stampa del documento

### Requirement: La scheda SHALL essere stampabile
La scheda SHALL includere stili di stampa che nascondono header, footer, menu, pulsante di generazione e pulsanti azione, lasciando visibile solo la scheda in un layout pulito adatto all'uso fisico.

#### Scenario: Stampa pulita
- **QUANDO** l'utente stampa la pagina
- **ALLORA** DEVONO essere visibili solo la scheda e i suoi dati, senza elementi di interfaccia

