# Visão arquitetural

## Contexto

O BookLog conecta aplicativos nativos iOS e Android a uma API REST central. O backend usa NestJS/TypeScript, JWT, bcrypt, validação declarativa e PostgreSQL. Interfaces de repositório separam regras de negócio da persistência; adapters em memória apoiam testes isolados e PostgreSQL sustenta os ambientes persistentes.

## Arquitetura implementada

O backend é um monólito modular em camadas. Controllers expõem o contrato HTTP, DTOs validam entradas, services aplicam regras e repositories abstraem dados. Os clientes mantêm suas próprias camadas de apresentação, domínio e acesso remoto, mas compartilham a mesma fonte de verdade no backend.

## Responsabilidades

| Componente | Responsabilidade | Dependência |
| --- | --- | --- |
| Clientes iOS e Android | Interface, navegação, estado e adaptação dos DTOs | Contrato REST versionado |
| Auth e Users | Identidade, sessão, OAuth, 2FA, preferências e ciclo da conta | Usuários, tokens e email |
| Books e Catalog | Busca, resolução de edições, detalhes e compra | PostgreSQL e provedores de catálogo |
| Library | Status, progresso, histórico, estantes, estatísticas e importações | Usuário autenticado e livros |
| Feed, Reviews e Social | Publicações, avaliações, comentários, curtidas e relações | Visibilidade, usuários e livros |
| Clubs e Loans | Comunidades, metas, ranking e empréstimos | Usuários, livros e notificações |
| Trust & Safety | Privacidade, bloqueios, denúncias e moderação | Auth, Visibility e persistência |
| Persistência | Consultas, constraints, índices e migrations | PostgreSQL |
| Implantação | Serviços separados de API e banco para staging e produção | Railway e PostgreSQL |
| Analytics | Dashboards, consultas e exploração de dados fora do fluxo transacional | Metabase e Databricks |

## Fluxo end-to-end

1. O leitor executa uma ação em iOS ou Android.
2. O cliente envia HTTPS para a API `/v1` com o token quando a rota exige autenticação.
3. O controller valida o DTO e delega a regra ao service do módulo.
4. O service consulta repositories e, quando necessário, provedores externos.
5. O PostgreSQL aplica integridade e persiste o estado.
6. A resposta tipada volta ao cliente, que atualiza sua interface.

Esse fluxo substitui, para a disciplina, uma demonstração artificial de “Hello World”: cadastro, busca, biblioteca, avaliações e interações sociais já atravessam as camadas reais.

## Integrações externas

O catálogo pode resolver dados por Open Library, Google Books e Amazon Creators, com fallback e proveniência. Apple/Google apoiam OAuth, o provedor de email atende recuperação/2FA e Gemini pode apoiar recursos de anotações. Essas APIs são chamadas pelo backend, nunca diretamente pelos aplicativos. Todas as integrações são configuráveis; ausência de uma credencial opcional deve degradar a capacidade correspondente sem revelar segredo.

## Ambientes e dados analíticos

O Railway hospeda `backend-staging` e `backend-prod`, cada um ligado ao seu próprio PostgreSQL. O ambiente de staging recebe e valida alterações antes da promoção para produção. Metabase acessa os bancos para dashboards e consultas; Databricks apoia exploração e análise de dados, mas nenhum dos dois participa da resposta às requisições do aplicativo.

## Limites públicos

Este repositório não contém o código executável, credenciais, URLs privadas ou valores de ambiente. O [ambiente de desenvolvimento](../08-operacao/ambiente-desenvolvimento.md) registra apenas placeholders e comandos públicos.

## Diagramas

- [Componentes](diagrama-componentes.md)
- [Pacotes](diagrama-pacotes.md)
- [Implantação](diagrama-implantacao.md)
- [Decisões arquiteturais](decisoes-arquiteturais.md)
- [Contrato da API](contratos-api.md)

## Integração

Swagger/OpenAPI e DTOs do backend são a referência para os clientes. Mudanças de contrato exigem compatibilidade ou atualização coordenada entre backend, iOS e Android. Os repositórios continuam separados porque têm ciclos de build e distribuição distintos.

---

[Índice da documentação](../README.md) · [Página do projeto](../../README.md)
