## Context

Vedi `proposal.md` — Why. Il codice è già nel target; questo change allinea solo le spec. Serve perché l'archivio impone che le main specs riflettano il comportamento osservabile.

## Goals / Non-Goals

**Goals:**
- Riportare `character-generation` e `homepage` in linea con il comportamento attuale.
- Trasformare requisiti visivi fragili ("i colori devono cambiare") in contratti osservabili (identità distinta tramite accento/tipografia/immagini; sfondo condiviso).

**Non-Goals:**
- Nessun cambiamento di codice.
- Nessuna nuova capability.

## Decisions

1. **Un change per la sincronizzazione, non modifiche dirette alle main specs.** Le main specs sono la fonte di verità; le modifiche passano da delta + archivio, così resta la tracciabilità. Alternativa scartata: editare `openspec/specs/` a mano.

2. **Requisiti visivi più solidi.** "Colori, font e immagini DEVONO cambiare" viene sostituito da "identità distinta tramite accento, tipografia e immagini, con sfondo condiviso": descrive l'esito percepibile senza imporre un dettaglio implementativo (lo sfondo uguale) che è cambiato.

## Risks / Trade-offs

- [Le spec tornano a divergere se si cambia ancora comportamento senza aggiornarle] → stessa regola di sempre: cambi di comportamento passano da un change.
