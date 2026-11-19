# Implantação no Railway

Serviços observados no projeto **BookLog** em **19/11/2026**: nove serviços em um único environment Railway, denominado `production`. A homologação usa serviços próprios, sem constituir um segundo environment Railway.

\`\`\`mermaid
flowchart TB
  IOS["App iOS · App Store"] -->|HTTPS| PROD["booklog-backend"]
  AND["App Android · beta"] -->|HTTPS| PROD
  subgraph R["Projeto BookLog · Railway"]
    PROD --> DB[("Postgres")]
    STAGE["booklog-backend-staging"] --> SDB[("Postgres-BookLog-Staging")]
    WEB["Booklog-Home-Page"] --> WDB[("Postgres-Website")]
    HUB["Booklog-Company-Hub"] --> HDB[("Postgres-Company-Hub")]
    SYNC["catalogy-sync"]
  end
  PROD <-->|catálogo e ofertas| EXT["Google Books · Amazon Creators"]
\`\`\`

| Função | Serviço e persistência |
| --- | --- |
| Aplicativo em operação | `booklog-backend` + `Postgres` |
| Homologação | `booklog-backend-staging` + `Postgres-BookLog-Staging` |
| Site | `Booklog-Home-Page` + `Postgres-Website` |
| Hub de apoio | `Booklog-Company-Hub` + `Postgres-Company-Hub` |
| Catálogo | `catalogy-sync` |

Os aplicativos não acessam diretamente o banco. O backend centraliza a validação e a persistência, e as consultas analíticas ficam fora da requisição normal. A verificação de disponibilidade exposta no código consultado é o controlador de `GET /v1/health`; não se atribui aqui uma rota adicional de readiness sem evidência.

[Visão arquitetural](visao-arquitetural.md) · [Contrato da API](contratos-api.md) · [← Índice](../README.md)
