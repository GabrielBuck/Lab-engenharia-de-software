# Matriz de rastreabilidade

Os vínculos abaixo mostram cobertura planejada. Nenhum teste de produto foi executado neste repositório.

| Requisito | Caso de uso | Regra | Componente | Teste |
| --- | --- | --- | --- | --- |
| RF001 | UC001 | RN001, RN007 | Auth | CT001 |
| RF002 | UC002 | RN002 | Auth | CT002 |
| RF003 | UC003 | — | Books | CT003 |
| RF004 | UC003 | RN002, RN003, RN004 | Library | CT004 |
| RF005 | UC004 | RN002, RN004, RN006 | Library | CT005 |
| RF006 | UC004 | RN002, RN005 | Library | CT006 |
| RF007 | UC005 | RN002, RN004 | Library | CT007 |

| Qualidade | Verificação |
| --- | --- |
| RNF001 | CT002, CT008 |
| RNF002 | CT009 |
| RNF003 | CT010 |
| RNF004 | CT011 |
| RNF005 | CI documental + revisão de PR |
| RNF006 | CT012 |
| RNF007 | CT004, CT006, CT008 automatizados na integração futura |

Consulte [casos de uso](../03-casos-de-uso/README.md) e [plano de testes](../../tests/plano-testes.md). Em cada mudança, verificar também impactos na jornada, modelo e arquitetura.

---

[Índice da documentação](../README.md) · [Página do projeto](../../README.md)
