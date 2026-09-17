# Visão arquitetural

## Contexto

O BookLog conecta um aplicativo iOS à API REST e à persistência. A referência existente usa NestJS, TypeScript, JWT, bcrypt e PostgreSQL, com interfaces de repositório e adapters em memória.

## Arquitetura proposta para a disciplina

Monólito modular em camadas. Controllers recebem HTTP e validam entradas; services aplicam regras de negócio; repositories abstraem persistência. O aplicativo usa os contratos da API. Esta organização não é uma alegação de adoção integral de Clean Architecture.

## Responsabilidades

| Componente | Responsabilidade | Dependência |
| --- | --- | --- |
| Auth | Cadastro e sessão | Repositório de usuários |
| Books | Catálogo e busca | Repositório de livros; integração externa se necessária |
| Library | Associação, status e progresso | Usuário autenticado e livros |
| Persistência | Consultas e gravações | PostgreSQL no ambiente persistente |

## Limites

O recorte não requer microsserviços, IA, clubes ou busca externa na primeira demonstração. Memória serve para desenvolvimento e não satisfaz durabilidade. Segredos devem ser configurados por ambiente e nunca versionados. Não há deploy realizado por este repositório.

## Diagramas

- [Componentes](diagrama-componentes.md)
- [Pacotes](diagrama-pacotes.md)
- [Implantação](diagrama-implantacao.md)
- [Decisões arquiteturais](decisoes-arquiteturais.md)

## Integração

Conferir DTOs e Swagger antes de implementar o cliente. O backend distingue status da biblioteca e operações de progresso; o recorte conceitual não autoriza mudar o contrato externo. Repositórios de aplicação permanecem separados até decisão formal de integração.

---

[Índice da documentação](../README.md) · [Página do projeto](../../README.md)
