## Context

Vedi `proposal.md` — Why. La `generation-engine` è stata archiviata con un requisito sui segnaposto che ha senso solo finché i dati definitivi non sono disponibili. Ora lo sono.

## Goals / Non-Goals

**Goals:**
- Rimuovere il requisito obsoleto mantenendo intatto il resto della capability.

**Non-Goals:**
- Nessuna modifica al codice.
- Nessun altro requisito toccato.

## Decisions

1. **Rimozione, non modifica.** Il requisito non ha controparte reale da aggiornare: l'alternativa (riscriverlo come "i contenuti definitivi SHALL provenire dal manuale") sarebbe una nuova regola, non una correzione. Si rimuove.

## Risks / Trade-offs

- [Perdita della tracciabilità del perché i segnaposto esistevano] → il change archiviato `2026-10-08-pirateborg-generation` conserva la storia.
