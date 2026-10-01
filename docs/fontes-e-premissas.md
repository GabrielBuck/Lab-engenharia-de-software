# Fontes, premissas e estado da documentação

Baseline inicial: 17/09/2026.
Sincronização atual: 01/10/2026.

## Fontes consultadas

- Orientação fornecida pelo solicitante: organizar um portfólio em sete frentes, com requisitos, casos narrativos, design, UML, arquitetura e sprints.
- Confirmação do solicitante: projeto BookLog; integrantes Gabriel Nottoli Buck (RA 10425384) e Julia Andrade (RA 10427828).
- Baseline da primeira entrega: README, package.json e DTOs de cadastro/biblioteca do backend `5d3dc4a`.
- Backend oficial auditado em `a2852bc` (`backend/moderation-compatible`): módulos, controllers, DTOs, repositories, migrations, testes, CI/CD e guia de implantação no Railway.
- Android oficial auditado em `b4ed80f` (`origin/dev`): features, serviços de API, configuração de build, testes e histórico recente.
- iOS oficial auditado em `cafaf44` (`origin/dev`): features, services/endpoints, DTOs, testes e configuração de schemes.
- Histórico Git e comparação funcional desde a baseline, sem depender apenas de equivalência de hashes.

## Premissas

- Os repositórios oficiais da organização `Bin4ryLibr4ry` são a fonte da verdade.
- Este repositório mantém representação documental pública e não duplica o código executável.
- “Implementado” significa que a capacidade possui código/contrato correspondente no snapshot auditado; não significa que foi reexecutada neste portfólio.
- O estado de produção não é inferido apenas da existência de código. Staging, release e operação exigem evidências próprias dos repositórios oficiais.
- A infraestrutura AWS/CDK preservada no backend é histórica; Railway é a infraestrutura oficial atual, conforme confirmação do solicitante e guia de deploy do projeto.

## Exclusões de segurança

Não foram transportados valores de `.env`, credenciais, identificadores de conta, nomes internos adicionais de recursos, URLs privadas, dados de usuários, bancos, logs ou inventários internos. As configurações públicas usam apenas nomes de variáveis e placeholders.

Consulte a [matriz de sincronização](estado-atual.md) para o delta completo.

---

[Índice da documentação](README.md) · [Página do projeto](../README.md)
