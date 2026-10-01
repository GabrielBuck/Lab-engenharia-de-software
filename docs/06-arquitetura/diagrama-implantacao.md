# Diagrama de implantação

Topologia implementada, sem identificadores, endereços ou nomes internos da conta cloud.
```mermaid
flowchart LR
  subgraph Clients["Dispositivos"]
    iOS["iOS"]
    Android["Android"]
  end
  subgraph AWS["AWS"]
    ALB["Application Load Balancer"]
    ECS["ECS Fargate\ncontainer da API"]
    RDS[("RDS PostgreSQL")]
    Secrets["Secrets Manager"]
    ECR["ECR"]
    Logs["Logs e métricas"]
    ALB --> ECS
    ECS --> RDS
    Secrets --> ECS
    ECR --> ECS
    ECS --> Logs
  end
  iOS -->|HTTPS| ALB
  Android -->|HTTPS| ALB
  Providers["Serviços externos"] <-->|HTTPS| ECS
  GitHub["GitHub Actions\nOIDC + CI/CD"] -->|imagem e revisão de serviço| ECR
  GitHub -->|migration controlada| ECS
```

Staging e produção usam configurações separadas. O pipeline valida a revisão exata, constrói uma imagem imutável, executa a migration como tarefa única, atualiza o serviço e verifica readiness. O banco não é exposto diretamente aos clientes.

No desenvolvimento local, Docker Compose oferece API e PostgreSQL. Em dispositivo físico, a URL deve apontar para um host alcançável; `localhost` no dispositivo não representa a máquina do backend.

---

[Índice da documentação](../README.md) · [Página do projeto](../../README.md)
