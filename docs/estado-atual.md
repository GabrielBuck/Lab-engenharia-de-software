# Estado atual do BookLog

**Data da atualização pública: 19/11/2026.** A primeira entrega foi documentada em 17/09/2026; a sincronização seguinte ocorreu em 01/10/2026. Esta página separa claramente esses recortes.

## Produto e lançamento

| Área | Situação em novembro de 2026 |
| --- | --- |
| iOS | Publicado na [App Store](https://apps.apple.com/br/app/booklog/id6811496005) |
| Android | Beta em testes; não apresentado como lançamento geral |
| Backend | NestJS e PostgreSQL, em operação no Railway |
| Infraestrutura | Nove serviços no projeto BookLog e um environment Railway chamado `production` |
| Homologação | Serviço e banco próprios; não é um segundo environment Railway |
| Indicadores | [Dados apresentados em 19/11/2026](10-resultados/indicadores-2026-11.md) |

## Evolução de funcionalidades

A baseline acadêmica contemplava **RF001–RF007**: cadastro, login, busca, biblioteca e progresso. A sincronização posterior passou a documentar autenticação ampliada, catálogo e recomendações, biblioteca e estantes, avaliações, feed, amizades e seguidores, clubes, empréstimos, notificações, segurança e privacidade. A especificação completa está nos [requisitos](02-requisitos/requisitos-funcionais.md).

Essa enumeração indica componentes e fluxos identificados nas fontes oficiais; recursos podem ter disponibilidade distinta entre builds de iOS e Android.

## Fonte de implementação consultada

| Projeto | Branch consultada | Commit |
| --- | --- | --- |
| Backend | `main` | `27d9511c8ef5c83691b0327cc357e98d3b4d5c1d` |
| iOS | `dev` | `ad0e4c2c45584fec692f0f35d66e3f47407dd50f` |
| Android | `dev` | `0d546307859e89005c47c91f55d254a8a02a6d11` |

As versões identificam o recorte dos [arquivos-fonte públicos selecionados](09-codigo-publico/README.md). Os repositórios de implementação continuam privados.

## Engenharia e evidência

- **Clientes:** Swift/SwiftUI e Kotlin/Jetpack Compose.
- **Backend:** NestJS/TypeScript, contratos HTTP, DTOs, serviços e repositórios.
- **Dados:** PostgreSQL; acesso pelo backend.
- **Railway:** serviços distintos para app em produção, homologação, site, hub e sincronização de catálogo.
- **Verificação pública:** validação da documentação em CI. Não corresponde a uma execução de testes completos de produção.

[Arquitetura](06-arquitetura/visao-arquitetural.md) · [Implantação confirmada](06-arquitetura/diagrama-implantacao.md) · [Evidências e premissas](fontes-e-premissas.md)

[← Índice](README.md)
