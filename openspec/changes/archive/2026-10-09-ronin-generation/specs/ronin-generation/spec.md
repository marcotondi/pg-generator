## Purpose

Definisce il contratto della generazione dei personaggi Rōnin: come i tiri di dado e le tabelle del manuale producono un personaggio, con le regole di Onore, armi, equipaggiamento e armatura.

## ADDED Requirements

### Requirement: Ogni valore SHALL derivare da un tiro o da una tabella
Il motore SHALL ottenere ogni valore del personaggio Rōnin da un tiro di dado e dalla relativa tabella o regola di classe; SHALL NOT costruire valori al di fuori di esse.

#### Scenario: Valore da regola o tabella
- **QUANDO** il motore genera un campo del personaggio
- **ALLORA** il valore DEVE derivare dalla tabella o dalla regola di classe corrispondente

### Requirement: Le abilità SHALL essere 3d6 più il modificatore di classe, l'Onore SHALL restare grezzo
Il motore SHALL tirare 3d6 per ciascuna delle quattro abilità (Prontezza, Spirito, Vigore, Resilienza), SHALL sommare al tiro grezzo il modificatore della classe e SHALL convertire il totale in un modificatore con la tabella (≤4 → −3; 5–6 → −2; 7–8 → −1; 9–12 → 0; 13–14 → +1; 15–16 → +2; 17–20 → +3). Il punteggio di Onore SHALL essere un numero grezzo (3d6 più il modificatore di classe) e SHALL NOT essere convertito in modificatore.

#### Scenario: Abilità convertita in modificatore
- **QUANDO** viene tirata un'abilità
- **ALLORA** il personaggio DEVE contenere il modificatore ottenuto dal totale grezzo (3d6 + mod di classe) tramite la tabella

#### Scenario: Onore non convertito
- **QUANDO** viene tirato l'Onore
- **ALLORA** il personaggio DEVE contenere il punteggio grezzo, non un modificatore

### Requirement: Il bonus di Onore/Disonore SHALL applicarsi solo alle abilità
Il modificatore di ±1 derivante dall'esito del personaggio precedente SHALL applicarsi esclusivamente ai tiri delle quattro abilità. SHALL NOT applicarsi al punteggio di Onore, ai Ryo, ai Punti Ferita, all'equipaggiamento, ai difetti o ai testi.

#### Scenario: Bonus applicato alle abilità
- **QUANDO** l'utente genera con esito "onore" o "disonore"
- **ALLORA** solo i tiri delle quattro abilità DEVONO ricevere il ±1

#### Scenario: Onore non riceve il bonus
- **QUANDO** l'utente genera con esito "onore" o "disonore"
- **ALLORA** il tiro del punteggio di Onore NON DEVE ricevere il ±1

### Requirement: I Punti Ferita SHALL essere il dado di classe più il modificatore di Resilienza
I Punti Ferita iniziali SHALL essere il dado della classe più il modificatore di Resilienza. Il Vigore SHALL NOT essere usato per i Punti Ferita.

#### Scenario: Calcolo dei PF
- **QUANDO** viene generato un personaggio
- **ALLORA** i PF DEVONO essere dado di classe + modificatore di Resilienza

### Requirement: Ryo e Virtù SHALL derivare dai dadi della classe
I Ryo iniziali e le Virtù SHALL essere tirati con i dadi definiti dalla classe: Forgotten Rōnin 1d6×10 e d2; Erudite Samurai 3d6×10 e d2; Drunken Monk 1d6×10 e d4; Corrupted Shinobi 2d6×10 e d2; Onmyoji 1d6×10 e d4; Bakuto 3d6×10 e d4; Yamabushi 1d6×10 e d4; Wild Dancer 1d6×10 e d2; Reckless Sumo 1d6×10 e d2; Sword Saint 1d6×10 e d2.

#### Scenario: Ryo e Virtù della classe
- **QUANDO** viene generato un personaggio di una data classe
- **ALLORA** i Ryo e le Virtù DEVONO essere il risultato dei dadi di quella classe

### Requirement: Il personaggio SHALL ricevere solo le armi fisse della classe
Il motore SHALL assegnare al personaggio esclusivamente le armi indicate dalla classe. Il motore SHALL NOT generare un'arma casuale aggiuntiva.

#### Scenario: Nessuna arma casuale
- **QUANDO** viene generato un personaggio con una classe
- **ALLORA** le sue armi DEVONO essere solo quelle della classe, senza tiri aggiuntivi

### Requirement: L'equipaggiamento SHALL essere quello di classe più i tiri generali
Il personaggio SHALL ricevere l'equipaggiamento di partenza della classe, più un trasporto (d6), un oggetto casuale (d12), cibo (d4) e acqua (d4). Le stringhe degli oggetti SHALL essere mostrate invariate, senza sostituzioni: le formule come "Spirito+4" o "1d4" SHALL NOT essere alterate.

#### Scenario: Equipaggiamento composto
- **QUANDO** viene generato un personaggio
- **ALLORA** l'equipaggiamento DEVE includere la dotazione di classe, il trasporto, l'oggetto casuale, cibo e acqua

#### Scenario: Formule non alterate
- **QUANDO** un oggetto contiene una formula (es. "Spirito+4 usi")
- **ALLORA** il testo DEVE restare invariato

### Requirement: L'armatura SHALL seguire la regola dei Testi e la classe
Se il personaggio parte con un Testo — di classe (Yamabushi o Onmyoji) oppure pescato dall'equipaggiamento — il tiro dell'armatura SHALL essere d2 (Tier 0–1), con precedenza su qualsiasi armatura di classe. Altrimenti: Tier 2 (Media) fissa per l'Erudite Samurai; Tier 3 (Pesante) fissa per lo Sword Saint; altrimenti tirata con d4 (Tier 0–3).

#### Scenario: Testo limita l'armatura
- **QUANDO** il personaggio parte con un Testo
- **ALLORA** l'armatura DEVE derivare da un tiro di d2 (Tier 0–1), anche se la classe prevede un'armatura fissa

#### Scenario: Armatura fissa di classe
- **QUANDO** viene generato un Erudite Samurai o uno Sword Saint senza Testo
- **ALLORA** l'armatura DEVE essere rispettivamente Tier 2 o Tier 3

### Requirement: Tratti, difetti e testi SHALL essere tirati
Il motore SHALL tirare il tratto di classe (d6), i quattro difetti (Corpi Infranti, Cronache Oscure, Cattive Abitudini, Afflizioni; d20 ciascuno) e i Testi (d10) per i personaggi che ne hanno diritto (classe o equipaggiamento).

#### Scenario: Difetti e tratto
- **QUANDO** viene generato un personaggio
- **ALLORA** DEVE avere un tratto di classe e i quattro difetti

#### Scenario: Testi per chi ne ha diritto
- **QUANDO** la classe o l'equipaggiamento assegna un Testo
- **ALLORA** il personaggio DEVE includere il Testo tirato

### Requirement: Nomi e soprannomi SHALL provenire dalle tabelle
Nome, cognome e soprannome SHALL essere tirati dalle rispettive tabelle del manuale.

#### Scenario: Nome dalle tabelle
- **QUANDO** viene generato un personaggio
- **ALLORA** nome, cognome e soprannome DEVONO derivare dalle rispettive tabelle

### Requirement: Il generatore SHALL NOT offrire scelte manuali
La generazione SHALL scegliere la classe casualmente tra le dieci classi. NON SHALL esistere una selezione manuale di classe né una variante "senza classe".

#### Scenario: Classe casuale
- **QUANDO** l'utente genera un personaggio
- **ALLORA** la classe DEVE essere scelta casualmente tra le dieci, senza alcuna selezione

### Requirement: La generazione SHALL NOT produrre campi mancanti
Il motore SHALL valorizzare tutti i campi previsti dal modello Rōnin; nessun campo SHALL risultare vuoto o non tradotto.

#### Scenario: Nessun campo mancante
- **QUANDO** viene generato un personaggio
- **ALLORA** tutti i campi del modello DEVONO essere valorizzati
