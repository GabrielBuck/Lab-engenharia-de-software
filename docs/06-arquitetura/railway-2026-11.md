# BookLog — Arquitetura e implantação (19/11/2026)

## Caminho de uma requisição

Os clientes iOS (SwiftUI) e Android (Jetpack Compose) enviam requisições HTTPS/JSON à API central em NestJS/TypeScript. Controllers validam contratos DTO, serviços aplicam regras de negócio e os repositórios persistem dados em PostgreSQL. Fontes como Google Books e Amazon Creators enriquecem catálogo e ofertas quando necessárias.

[Diagrama de componentes em Mermaid](../../assets/diagramas/componentes-2026-11.mmd) · [Diagrama Railway](../../assets/diagramas/implantacao-2026-11.mmd)

## Hospedagem real

O material de 19/11/2026 mostra nove serviços e quatro instâncias/volumes PostgreSQL no projeto BookLog do Railway. Inclui:

- Produção do app: **booklog-backend** e **Postgres**.
- Homologação: **booklog-backend-staging** e **Postgres-BookLog-Staging**.
- Site: **Booklog-Home-Page** e **Postgres-Website**.
- Hub interno de apoio: **Booklog-Company-Hub** e **Postgres-Company-Hub**.
- Sincronização de catálogo: **catalogy-sync**.

**Precisão importante:** os serviços chamados staging e produção aparecem no ambiente Railway denominado production. Isso não significa que tenham sido verificados dois environments Railway diferentes; a separação documentada é de serviços e bancos.

## Organização do backend

Módulos identificados: autenticação, catálogo, livros, biblioteca, avaliações, feed, social, recomendações, empréstimos, anotações, notificações e usuários. O código segue fronteiras de controllers/DTOs, services e repositórios.

## Exemplo técnico: progresso de leitura

A atualização começa no cliente, chega por HTTPS à API autenticada, tem regras/validações executadas e é gravada no PostgreSQL; a resposta alimenta a interface. [DTO real de progresso](../09-codigo-publico/backend/update-progress.dto.ts) evidencia validações de página e duração.

## Segurança e limites

Nenhuma URL privada, token, arquivo de configuração ou dado de produção é reproduzido nesta documentação. Dashboards e análise não são necessários para atender uma requisição comum do leitor. Os exemplos são educativos e não constituem um ambiente de produção instalável.
