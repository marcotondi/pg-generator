## Purpose

Rende l'app installabile e utilizzabile offline tramite web app manifest e service worker, per entrambi i giochi.

## ADDED Requirements

### Requirement: L'app SHALL registrare un service worker
Al primo caricamento l'app SHALL registrare un service worker che memorizza nella cache gli asset statici (HTML, CSS, JS, font, icone). Il nome della cache SHALL essere versionato.

#### Scenario: Primo caricamento
- **QUANDO** un utente visita l'app per la prima volta
- **ALLORA** il service worker DEVE essere registrato e gli asset statici DEVONO essere memorizzati nella cache

### Requirement: L'app SHALL funzionare offline
Dopo il caricamento iniziale l'app SHALL essere pienamente funzionale senza connessione, per entrambi i giochi e per il salvataggio locale.

#### Scenario: Accesso offline
- **QUANDO** un utente apre l'app senza connessione dopo averla già visitata
- **ALLORA** l'app DEVE caricarsi e generare personaggi normalmente

### Requirement: L'app SHALL avere un web app manifest
L'app SHALL includere un manifest con nome, nome breve, descrizione, icone, colore del tema, colore di sfondo e modalità `standalone`.

#### Scenario: Prompt di installazione
- **QUANDO** il browser supporta l'installazione e il manifest è valido
- **ALLORA** il browser DEVE poter proporre l'installazione

### Requirement: L'app SHALL notificare la nuova versione
Quando viene rilevato un nuovo service worker in attesa, l'app SHALL mostrare una notifica con un'azione di aggiornamento.

#### Scenario: Aggiornamento disponibile
- **QUANDO** un nuovo service worker è in attesa di attivazione
- **ALLORA** l'app DEVE mostrare un avviso "Nuova versione disponibile" con azione di ricarica
- **QUANDO** l'utente attiva la ricarica
- **ALLORA** il nuovo service worker DEVE attivarsi e la pagina DEVE ricaricarsi
