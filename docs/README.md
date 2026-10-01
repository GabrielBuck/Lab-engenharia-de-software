# Documentação do BookLog

Os artefatos preservam a primeira entrega e registram o estado atual auditado nos repositórios oficiais.

**[Estado atual](estado-atual.md)** · **[Guia da primeira entrega](entregas/primeira-entrega.md)** · **[Página do projeto](../README.md)**

## 01 · Visão do produto

- [Visão do produto](01-visao-produto/visao-produto.md) — problema, público e escopo.
- [Proposta de valor](01-visao-produto/proposta-valor.md) — necessidades e resposta do produto.
- [Personas](01-visao-produto/personas.md) — perfis conceituais que orientam o design.

## 02 · Requisitos

- [Requisitos funcionais](02-requisitos/requisitos-funcionais.md) — baseline RF001–RF007 e capacidades atuais RF008–RF019.
- [Requisitos não funcionais](02-requisitos/requisitos-nao-funcionais.md) — metas de qualidade pela organização FURPS.
- [Regras de negócio](02-requisitos/regras-negocio.md) — invariantes e restrições.
- [Stakeholders](02-requisitos/stakeholders.md) — interesses e atividades de levantamento.
- [Glossário](02-requisitos/glossario.md) — vocabulário compartilhado.
- [Rastreabilidade](02-requisitos/rastreabilidade.md) — vínculos entre requisitos, casos e testes.

## 03 · Casos de uso

- [Modelo UML e índice](03-casos-de-uso/README.md).
- [UC001 — Cadastrar usuário](03-casos-de-uso/casos-uso/UC001-cadastrar-usuario.md).
- [UC002 — Entrar](03-casos-de-uso/casos-uso/UC002-login.md).
- [UC003 — Buscar e adicionar livro](03-casos-de-uso/casos-uso/UC003-gerenciar-biblioteca.md).
- [UC004 — Atualizar status e progresso](03-casos-de-uso/casos-uso/UC004-registrar-progresso.md).
- [UC005 — Consultar biblioteca](03-casos-de-uso/casos-uso/UC005-consultar-biblioteca.md).

## 04 · Design

- [Jornada do usuário](04-design/jornada-usuario.md) — ações, pensamentos e emoções.
- [Wireframes](04-design/wireframes/README.md) — entrada, biblioteca, busca e progresso.

## 05 · Modelagem

- [Modelo de domínio](05-modelagem/modelo-dominio.md) — entidades, relações e invariantes.
- [Modelo de dados](05-modelagem/modelo-dados.md) — grupos de tabelas, constraints e migrations.
- [Sequência de registro de progresso](05-modelagem/diagrama-sequencia/registrar-progresso.md) — interação entre cliente, API e persistência.

## 06 · Arquitetura

- [Visão arquitetural](06-arquitetura/visao-arquitetural.md).
- [Componentes](06-arquitetura/diagrama-componentes.md).
- [Pacotes](06-arquitetura/diagrama-pacotes.md).
- [Implantação](06-arquitetura/diagrama-implantacao.md).
- [Decisões arquiteturais](06-arquitetura/decisoes-arquiteturais.md) — contexto, alternativas e consequências.
- [Contratos da API](06-arquitetura/contratos-api.md) — convenções e famílias de endpoints.

## 07 · Processo e qualidade

- [Sprint 01](07-sprints/sprint-01.md) — artefatos produzidos.
- [Sprint 02](07-sprints/sprint-02.md) — sincronização com o produto real.
- [Plano de testes](../tests/plano-testes.md) — CT001 a CT012.
- [Contribuição](../CONTRIBUTING.md) — práticas de colaboração.
- [Fontes técnicas](fontes-e-premissas.md).

## 08 · Operação

- [Ambiente de desenvolvimento](08-operacao/ambiente-desenvolvimento.md) — execução local, configuração segura e CI/CD.
