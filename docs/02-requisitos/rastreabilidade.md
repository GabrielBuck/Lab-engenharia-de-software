# Matriz de rastreabilidade

Os vínculos da baseline continuam mostrando a cobertura planejada da primeira entrega. Este repositório não executa os testes de produto; a implementação oficial mantém testes unitários, de contrato, segurança, integração PostgreSQL e runtime de container.

| Requisito | Caso de uso | Regra | Componente | Teste |
| --- | --- | --- | --- | --- |
| RF001 | UC001 | RN001, RN007 | Auth | CT001 |
| RF002 | UC002 | RN002 | Auth | CT002 |
| RF003 | UC003 | — | Books | CT003 |
| RF004 | UC003 | RN002, RN003, RN004 | Library | CT004 |
| RF005 | UC004 | RN002, RN004, RN006 | Library | CT005 |
| RF006 | UC004 | RN002, RN005 | Library | CT006 |
| RF007 | UC005 | RN002, RN004 | Library | CT007 |

## Evolução sincronizada

| Requisito | Regra associada | Módulo oficial | Evidência automatizada no oficial |
| --- | --- | --- | --- |
| RF008 | RN008 | Reviews / Library / Feed | Validação de meia estrela e fluxos de review |
| RF009 | RN010, RN011 | Feed | Contrato, autorização, moderação e integração |
| RF010 | RN010 | Users / Social / Public Profile | Visibilidade e segurança entre contas |
| RF011 | RN012 | Clubs | Serviços, permissões e integração persistente |
| RF012 | RN002 | Annotations | Propriedade e CRUD |
| RF013 | — | Recommendations | Ranking, fallback e sinais do leitor |
| RF014 | RN013 | Loans | Ciclo de empréstimo e persistência |
| RF015 | RN010 | Notifications | Listagem e leitura por usuário |
| RF016 | RN014 | Imports | Casos CSV, resolução e deduplicação |
| RF017 | RN008 | Share nos clientes | Testes de nota, estado e composição |
| RF018 | RN010, RN011, RN015 | Visibility / Blocks / Reports / Auth | Segurança, moderação e PostgreSQL |
| RF019 | — | OCR no Android | Permissão e caminho de recuperação |

| Qualidade | Verificação |
| --- | --- |
| RNF001 | CT002, CT008 |
| RNF002 | CT009 |
| RNF003 | CT010 |
| RNF004 | CT011 |
| RNF005 | CI documental + revisão de PR |
| RNF006 | CT012 |
| RNF007 | CT004, CT006, CT008 e suítes oficiais identificadas por commit |

Consulte [casos de uso](../03-casos-de-uso/README.md), [plano de testes](../../tests/plano-testes.md) e [estado atual](../estado-atual.md). Os casos narrativos UC001 a UC005 permanecem como recorte da primeira entrega; a matriz de evolução evita criar casos artificiais apenas para simular o início do projeto.

---

[Índice da documentação](../README.md) · [Página do projeto](../../README.md)
