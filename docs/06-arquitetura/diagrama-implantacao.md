# Diagrama de implantação
Topologia proposta para teste integrado. Não representa infraestrutura publicada.
```mermaid
flowchart LR
  subgraph Device["Dispositivo / simulador"]
    App["Aplicativo iOS"]
  end
  subgraph Host["Ambiente de desenvolvimento / teste"]
    API["API NestJS :3000"]
    DB[("PostgreSQL :5432")]
    API -->|Rede interna| DB
  end
  App -->|HTTP em desenvolvimento controlado| API
```
Para exposição remota, usar HTTPS e restringir o banco à rede interna. Configurar URL da API conforme simulador/dispositivo; localhost no dispositivo não aponta para a máquina do backend.
