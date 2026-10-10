## Purpose

Definisce il contratto del motore di generazione dei personaggi PirateBorg: come i tiri di dado diventano valori del personaggio tramite tabelle.

## ADDED Requirements

### Requirement: Ogni valore SHALL derivare da un tiro su tabella
Il motore SHALL ottenere ogni valore del personaggio da un tiro di dado e dalla relativa tabella. Il motore SHALL NOT costruire valori al di fuori di una tabella, e SHALL risolvere ogni riferimento a una sotto-tabella senza errori.

#### Scenario: Valore da tabella
- **QUANDO** il motore genera un campo
- **ALLORA** il valore DEVE essere il risultato della tabella corrispondente al numero tirato

#### Scenario: Sotto-tabella risolta
- **QUANDO** una voce di tabella rimanda a una sotto-tabella
- **ALLORA** il motore DEVE tirare anche la sotto-tabella e combinarne il risultato, senza errori di "tabella non trovata"

### Requirement: Le abilità SHALL essere generate con 3d6 e usate come modificatori
Il motore SHALL tirare 3d6 per ciascuna delle 5 abilità (Forza, Agilità, Presenza, Vigore, Spirito) e convertire il totale in un modificatore da −3 a +3 tramite tabella. Il personaggio SHALL esporre solo il modificatore, non il totale dei dadi. Il motore SHALL NOT applicare la variante che scarta il dado più basso.

#### Scenario: Solo modificatore
- **QUANDO** viene generata un'abilità
- **ALLORA** il personaggio DEVE contenere il modificatore e NON il valore del tiro

#### Scenario: Tiro standard
- **QUANDO** vengono tirate le abilità
- **ALLORA** ciascuna DEVE derivare da 3d6 senza scarto di dadi

### Requirement: I modificatori di classe SHALL essere sommati dopo il tiro
Dopo aver determinato le abilità, il motore SHALL sommare ai loro modificatori quelli assegnati dalla classe scelta.

#### Scenario: Modificatore di classe applicato
- **QUANDO** la classe scelta assegna un modificatore a un'abilità
- **ALLORA** il modificatore finale DEVE includere quello della classe

### Requirement: La classe SHALL determinare PF, Fortuna e tratto di classe
La classe scelta SHALL determinare il dado dei punti ferita, il dado della Fortuna del Diavolo e un tratto tirato dalla tabella della classe. I punti ferita SHALL essere il dado della classe più il modificatore di Vigore; la Fortuna SHALL essere il tiro del dado della classe.

#### Scenario: PF e Fortuna
- **QUANDO** viene generato un personaggio
- **ALLORA** i PF DEVONO essere dado classe + mod Vigore e la Fortuna il tiro del dado della classe

#### Scenario: Tratto di classe
- **QUANDO** la classe scelta ha una tabella di tratto
- **ALLORA** il personaggio DEVE includere il tratto tirato, con etichetta della categoria e valore

#### Scenario: Classe senza tabella di tratto
- **QUANDO** la classe scelta non ha una tabella di tratto
- **ALLORA** il tratto di classe DEVE essere assente, senza errori

### Requirement: L'equipaggiamento SHALL seguire i tiri del regolamento
Il motore SHALL generare: contenitore (d6), un solo oggetto economico (d12), un oggetto pregiato (d12), abiti/armatura (d10) e cappello (d12).

#### Scenario: Un solo oggetto economico
- **QUANDO** viene generato un personaggio
- **ALLORA** il personaggio DEVE avere esattamente un oggetto economico

#### Scenario: Contenitore, pregiato, abiti, cappello
- **QUANDO** viene generato un personaggio
- **ALLORA** contenitore, oggetto pregiato, abiti/armatura e cappello DEVONO essere presenti e derivati dalle rispettive tabelle

### Requirement: L'arma SHALL derivare dalla classe o dalla tabella armi
Se la classe definisce una tabella di armi, il motore SHALL tirarla; se definisce un'arma fissa, il motore SHALL usarla; altrimenti il motore SHALL tirare la tabella armi generica. Se la classe prevede il moschetto, il motore SHALL aggiungerlo all'equipaggiamento.

#### Scenario: Arma da tabella di classe
- **QUANDO** la classe definisce una tabella di armi
- **ALLORA** il personaggio DEVE ricevere l'arma da quella tabella

#### Scenario: Arma fissa di classe
- **QUANDO** la classe definisce un'arma fissa
- **ALLORA** il personaggio DEVE ricevere quell'arma

#### Scenario: Moschetto
- **QUANDO** la classe prevede il moschetto
- **ALLORA** il personaggio DEVE includere anche un moschetto

### Requirement: Il background SHALL comprendere professione, argento, legame e dettagli
Il motore SHALL tirare da una tabella d100 una professione, un ammontare di monete d'argento e un legame/oggetto narrativo, e SHALL aggiungere i dettagli da una tabella d20 (difetto distintivo, segno fisico, idiosincrasia), oltre a disgrazie e cose preziose.

#### Scenario: Background completo
- **QUANDO** viene generato un personaggio
- **ALLORA** il personaggio DEVE avere professione, argento, legame, dettagli, disgrazie e cose preziose

### Requirement: Le classi opzionali SHALL essere selezionabili
Il motore SHALL permettere di includere o escludere le classi opzionali. Quando incluse, la tabella classi SHALL comprendere anche le classi opzionali; quando escluse, SHALL contenere solo le classi di base. Le sotto-tabelle delle classi opzionali SHALL essere risolvibili.

#### Scenario: Opzionali attive
- **QUANDO** la generazione include le classi opzionali
- **ALLORA** la tabella classi DEVE comprendere anche le classi opzionali

#### Scenario: Opzionali disattive
- **QUANDO** la generazione esclude le classi opzionali
- **ALLORA** la tabella classi DEVE contenere solo le classi di base

### Requirement: I contenuti provvisori SHALL essere segnaposto espliciti
Dove i dati definitivi non sono disponibili (tabelle d100, nomi) il motore SHALL usare tabelle segnaposto strutturate il cui risultato contiene un riferimento numerico esplicito (es. "Professione #42"), senza presentarsi come contenuto definitivo.

#### Scenario: Segnaposto riconoscibile
- **QUANDO** viene tirata una tabella segnaposto
- **ALLORA** il risultato DEVE contenere un riferimento numerico esplicito al posto del contenuto definitivo

### Requirement: La generazione SHALL NOT produrre campi mancanti
Il motore SHALL valorizzare tutti i campi previsti dal modello del personaggio; nessun campo SHALL risultare vuoto o non risolto.

#### Scenario: Nessun campo mancante
- **QUANDO** viene generato un personaggio
- **ALLORA** tutti i campi del modello DEVONO essere valorizzati
