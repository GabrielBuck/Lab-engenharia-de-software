# Diagrama de pacotes

Organização lógica dos clientes e do backend atual.
```mermaid
flowchart LR
  UI["UI / Navigation"] --> State["ViewModel / State"]
  State --> ClientRepos["Use cases / Repositories"]
  ClientRepos --> Client["API client / DTOs"]
  Client --> API["Controllers / DTO validation"]
  API --> Services["Services / regras"]
  Services --> Contracts["Repository interfaces"]
  Adapters["PostgreSQL adapters"] -.->|implementam| Contracts
  Services --> Providers["External providers"]
```
Dependências concretas são resolvidas pela composição dos módulos. Regras críticas de autorização, privacidade e integridade permanecem no backend; os clientes concentram experiência, estado de tela e adaptação do contrato.

---

[Índice da documentação](../README.md) · [Página do projeto](../../README.md)
