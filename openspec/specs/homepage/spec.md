# homepage Specification

## Purpose
Gestisce l'ingresso all'app: la landing con le due scelte di gioco e la shell condivisa che incornicia entrambe le esperienze.
## Requirements
### Requirement: La landing SHALL offrire la scelta tra due giochi
La pagina iniziale SHALL presentare due scelte: Rōnin e PirateBorg. Ogni scelta SHALL mostrare nome e identità visiva del gioco. Selezionando una scelta l'app SHALL navigare alla pagina di quel gioco.

#### Scenario: Scelta di un gioco
- **QUANDO** l'utente apre l'app e seleziona "PirateBorg"
- **ALLORA** l'app DEVE navigare a `/pirateborg`

#### Scenario: Landing neutra
- **QUANDO** l'utente apre la root `/`
- **ALLORA** DEVE vedere le due scelte, senza che un gioco sia preselezionato

### Requirement: Le pagine gioco SHALL condividere la shell
Le pagine `/ronin` e `/pirateborg` SHALL usare la stessa shell: header con titolo/logo del gioco, contenuto principale, footer con licenza, versione e link GitHub. La shell SHALL essere una sola, parametrizzata dal gioco.

#### Scenario: Footer presente su entrambi i giochi
- **QUANDO** l'utente apre una qualsiasi delle due pagine gioco
- **ALLORA** DEVE vedere il footer con licenza e versione corretti per il gioco

### Requirement: Ogni gioco SHALL avere un'identità visiva distinta
Pur condividendo la struttura, ogni gioco SHALL avere tema proprio (accento, tipografia, immagine, forma degli elementi) coerente con l'ambientazione: Rōnin giapponese feudale, PirateBorg pirata. La distinzione SHALL avvenire tramite valori di tema, non tramite copie della shell.

#### Scenario: Temi distinti
- **QUANDO** l'utente passa da `/ronin` a `/pirateborg`
- **ALLORA** colori, font e immagini DEVONO cambiare pur restando identica la struttura della pagina

### Requirement: L'app SHALL essere solo in italiano
Tutti i testi visibili all'utente SHALL essere in italiano. Non SHALL esistere selezione di lingua né contenuto in altre lingue.

#### Scenario: Nessun cambio lingua
- **QUANDO** l'utente usa l'app
- **ALLORA** non DEVE trovare alcun controllo di lingua e tutti i testi DEVONO essere in italiano

