## MODIFIED Requirements

### Requirement: La scheda SHALL offrire le azioni salva e stampa
La scheda SHALL offrire le azioni "Salva Personaggio" e "Stampa" accanto alla scheda: su schermi larghi in una riga subito sotto la scheda; su schermi stretti in una barra fissa in basso, visibile solo quando esiste un personaggio.

#### Scenario: Azione stampa
- **QUANDO** l'utente fa clic su "Stampa"
- **ALLORA** l'app DEVE avviare la stampa del documento

#### Scenario: Azioni contestuali alla scheda
- **QUANDO** esiste un personaggio generato
- **ALLORA** le azioni Salva e Stampa DEVONO essere raggiungibili accanto alla scheda, senza dover tornare in cima alla pagina
