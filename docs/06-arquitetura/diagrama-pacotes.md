# Diagrama de pacotes
Organização lógica inspirada no backend de referência; as pastas acadêmicas ainda contêm apenas documentação.
```mermaid
flowchart TD
  API["controllers / DTOs"] --> Services["services / regras"]
  Services --> Contracts["interfaces de repositories"]
  Adapters["adapters PostgreSQL / memória"] -.->|implementam| Contracts
  Root["composição / módulos NestJS"] --> API
  Root --> Services
  Root --> Adapters
  API --> Common["common / auth guards / erros"]
```
Dependências concretas são resolvidas pela composição dos módulos. Evitar regras de negócio no cliente e nos controllers.
