# character-generation Specification

## Purpose
Definisce come viene creato un personaggio giocabile per un gioco selezionato: uno scatto, tutto insieme, senza passaggi intermedi.
## Requirements
### Requirement: La generazione SHALL essere istantanea e completa
L'app SHALL generare un personaggio completo e giocabile per il gioco selezionato. All'apertura della pagina di un gioco l'app SHALL generare automaticamente un personaggio; il pulsante di generazione SHALL produrre un nuovo personaggio che sostituisce quello mostrato. Nome, attributi, classe, equipaggiamento, background e tratti SHALL essere generati tutti insieme dal motore del gioco.

#### Scenario: Generazione completa
- **QUANDO** l'utente fa clic sul pulsante di generazione
- **ALLORA** l'app DEVE produrre tutti i campi del personaggio per quel gioco e mostrare la scheda

#### Scenario: Generazione all'apertura
- **QUANDO** l'utente apre la pagina di un gioco
- **ALLORA** l'app DEVE generare automaticamente un personaggio e mostrarne la scheda

#### Scenario: Generazione ripetuta
- **QUANDO** l'utente genera un nuovo personaggio dopo il precedente
- **ALLORA** ogni campo DEVE essere ritirato e non DEVE comparire alcun errore di contenuto mancante

### Requirement: Il personaggio SHALL essere di sola lettura
Una volta generato, il personaggio SHALL NOT essere modificabile: tutti i campi SHALL essere di sola lettura e non SHALL esistere campi editabili. Per ottenere un altro personaggio l'utente usa il pulsante di generazione.

#### Scenario: Nessun campo editabile
- **QUANDO** l'utente guarda la scheda di un personaggio generato
- **ALLORA** NON DEVE trovare campi modificabili

#### Scenario: Rigenerazione
- **QUANDO** l'utente vuole un altro personaggio
- **ALLORA** DEVE usare il pulsante di generazione, che produce un personaggio nuovo

### Requirement: L'app SHALL NOT conservare bozze
L'app SHALL NOT preservare personaggi non salvati. Se l'utente genera e abbandona la pagina senza salvare, il personaggio è perso. La bozza SHALL NOT essere scritta in localStorage.

#### Scenario: Abbandono senza salvare
- **QUANDO** l'utente genera un personaggio e ricarica la pagina senza salvarlo
- **ALLORA** il personaggio generato NON DEVE ricomparire

### Requirement: Rōnin SHALL esporre la scelta onore/disonore
Per il gioco Rōnin l'app SHALL offrire una scelta tra onore e disonore che influenza la generazione. Per PirateBorg questa scelta SHALL NOT essere presente.

#### Scenario: Stato onore influenza la generazione
- **QUANDO** l'utente attiva "disonore" e genera un personaggio Rōnin
- **ALLORA** la generazione DEVE tenere conto dello stato di disonore

#### Scenario: Nessuna scelta per PirateBorg
- **QUANDO** l'utente apre la pagina PirateBorg
- **ALLORA** NON DEVE vedere i controlli onore/disonore

