# Diagrama de componentes

Visão lógica do sistema atual, reduzida aos limites relevantes para exposição pública.
```mermaid
flowchart LR
  iOS["BookLog iOS\nSwift / SwiftUI"] -->|HTTPS REST /v1| API["API NestJS"]
  Android["BookLog Android\nKotlin / Compose"] -->|HTTPS REST /v1| API
  API --> Identity["Auth · Users · Visibility"]
  API --> Reading["Books · Library · Reviews\nAnnotations · Imports"]
  API --> Community["Feed · Social · Clubs\nLoans · Notifications · Reports"]
  API --> Discovery["Catalog · Recommendations · AI"]
  Identity --> Repositories["Repository interfaces"]
  Reading --> Repositories
  Community --> Repositories
  Discovery --> Repositories
  Repositories --> DB[("PostgreSQL")]
  Discovery --> Providers["Catálogo · OAuth · Email · IA"]
```

---

[Índice da documentação](../README.md) · [Página do projeto](../../README.md)
