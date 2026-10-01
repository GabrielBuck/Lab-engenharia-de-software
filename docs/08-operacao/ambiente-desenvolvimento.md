# Ambiente de desenvolvimento

O portfólio é validado sem dependências npm. Os componentes executáveis permanecem nos repositórios oficiais e exigem seus próprios toolchains.

## Portfólio público

```bash
node scripts/validate-docs.mjs
```

Requer Node.js 22 ou superior. A GitHub Action executa a mesma validação em push e pull request.

## Backend de referência

Fluxo local documentado pelo projeto oficial:

```bash
npm install
npm run db:migrate
npm run build
npm run start:dev
```

Alternativa com containers:

```bash
docker compose up --build
docker compose exec api npm run db:migrate
```

Comandos de qualidade disponíveis no backend:

```bash
npm run lint
npm run test
npm run test:cov
npm run build
```

## Clientes

- Android: Android Studio/JDK compatível com o Gradle Wrapper; variantes recebem a base da API por configuração de build.
- iOS: Xcode e schemes separados para desenvolvimento/staging e distribuição; a base da API fica em configuração, não em documentação pública.

## Variáveis de ambiente

Copie `.env.example` somente no checkout do backend e preencha o `.env` local, que não deve ser commitado. As categorias principais são:

| Categoria | Exemplos de chaves |
| --- | --- |
| Aplicação | `PORT`, `NODE_ENV`, `API_PREFIX`, `CORS_ORIGIN` |
| Sessão | `JWT_SECRET`, tempos de expiração |
| Banco | `DATABASE_URL` ou `DB_HOST`, `DB_NAME`, `DB_USER`, `DB_PASSWORD` |
| OAuth | `GOOGLE_CLIENT_ID`, `APPLE_CLIENT_ID` |
| Catálogo | `OPEN_LIBRARY_ENABLED`, `GOOGLE_BOOKS_API_KEY`, credenciais Amazon Creators |
| Email | provedor, remetente e credencial correspondente |
| IA opcional | `GEMINI_API_KEY`, modelo e timeout |
| Storage/push opcionais | credenciais do provider e configuração APNs |

O arquivo [`.env.example`](../../.env.example) deste portfólio contém apenas placeholders mínimos para apresentação. Valores reais pertencem ao gerenciador de segredos do ambiente.

## Fluxo de entrega

O CI oficial executa lint, testes, cobertura, build, auditoria de dependências, integração PostgreSQL, migrations idempotentes e validação do runtime Docker. A aplicação pode ser implantada no Railway pelo Dockerfile ou pelo build Node (`npm ci`, `npm run build` e `npm run start:prod`).

O fluxo operacional promove alterações nesta ordem:

```text
desenvolvimento → backend-staging → Postgres-Staging → validação
              → backend-prod    → Postgres-Production
```

As migrations são aplicadas de forma controlada com `npm run db:migrate`, antes de apontar clientes para a nova versão. O Railway injeta `PORT`, e `/v1/health/ready` verifica a conectividade PostgreSQL. Metabase e Databricks podem consultar dados para análise, mas não fazem parte do atendimento das requisições do aplicativo.

---

[Arquitetura](../06-arquitetura/visao-arquitetural.md) · [Índice](../README.md) · [Página do projeto](../../README.md)
