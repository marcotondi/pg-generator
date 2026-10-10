## MODIFIED Requirements

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
