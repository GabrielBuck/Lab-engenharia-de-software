# Decisões arquiteturais

Registros públicos das decisões observadas até 01/10/2026. ADR001 a ADR004 preservam a baseline; os registros seguintes representam a arquitetura implementada.

## ADR001 — Monólito modular em camadas

**Contexto:** escopo acadêmico pequeno e backend NestJS já existente.
**Decisão:** manter um backend modular com controllers, services e repositories por domínio, hoje incluindo identidade, leitura, social, clubes, segurança e integrações.
**Alternativas:** microsserviços; aplicação sem divisão de responsabilidades.
**Consequências:** execução e depuração simples; requer disciplina para evitar dependências circulares.
**Validação:** revisar sequência UC004 e responsabilidades antes da integração.

## ADR002 — PostgreSQL para persistência demonstrável

**Contexto:** progresso precisa sobreviver a reinícios (RNF003).
**Decisão:** usar PostgreSQL nos ambientes persistentes; memória somente para testes e desenvolvimento isolado.
**Alternativas:** apenas memória; banco embarcado.
**Consequências:** exige migrations e configuração; permite restrições de unicidade e persistência.
**Validação:** CT004, CT008 e CT010.

## ADR003 — Portfólio separado da implementação existente

**Contexto:** este repositório estava vazio; o BookLog possui backend separado.
**Decisão:** documentar as fontes e referenciar a implementação em seu repositório, sem duplicar código.
**Alternativas:** monorepo; submodules.
**Consequências:** reduz cópias divergentes; execução depende de outro repositório.

## ADR004 — Diagramas editáveis

**Contexto:** modelos evoluem durante o semestre.
**Decisão inicial:** Mermaid em Markdown para classes, sequência e arquitetura; SVG para UML de casos e wireframes.
**Alternativa:** somente PNG.
**Consequências:** revisão textual e visual no GitHub; exportar PNG quando o formato de entrega exigir.

## ADR005 — Clientes nativos separados com contrato central

**Contexto:** o produto possui clientes iOS e Android com ciclos de release distintos.
**Decisão:** manter repositórios e arquiteturas nativas, compartilhando contratos e regras críticas no backend.
**Consequências:** preserva experiência de plataforma; exige auditoria de compatibilidade em mudanças de DTO/endpoint.

## ADR006 — Railway com staging e produção separados

**Contexto:** staging e produção precisam de execução reproduzível e isolada.
**Decisão:** hospedar a API e o PostgreSQL no Railway, usando `backend-staging` com `Postgres-Staging` para validação e `backend-prod` com `Postgres-Production` para o ambiente usado pelos clientes.
**Consequências:** o deploy e a administração ficam mais simples; migrations continuam sendo uma etapa controlada; dados e segredos permanecem fora da imagem. Os artefatos AWS/CDK preservados no backend são legados e não representam a infraestrutura atual.

## ADR007 — Integrações externas por providers e fallback

**Contexto:** nenhuma fonte única cobre catálogo, capas, idioma e oferta comercial com a mesma qualidade.
**Decisão:** encapsular Open Library, Google Books e Amazon Creators em providers, registrar proveniência e usar fallback.
**Consequências:** resultados dependem de disponibilidade externa; rate limit, timeout, deduplicação e atribuição fazem parte da regra.

## ADR008 — Privacidade e moderação no backend

**Contexto:** feed, perfis e clubes criam superfícies sociais.
**Decisão:** centralizar visibilidade, bloqueios, denúncias, filtro de conteúdo e ciclo de exclusão no backend.
**Consequências:** os clientes não podem inferir acesso apenas pela UI; toda consulta pública deve aplicar as mesmas políticas.

## ADR009 — Analytics fora do caminho transacional

**Contexto:** o projeto precisa consultar e explorar dados sem transformar ferramentas analíticas em dependências do aplicativo.
**Decisão:** usar Metabase para dashboards e consultas e Databricks para exploração e análise, ambos fora do fluxo normal de requisições.
**Consequências:** a API e o PostgreSQL no Railway continuam suficientes para o funcionamento do BookLog; indisponibilidade das ferramentas analíticas não interrompe o aplicativo.

---

[Índice da documentação](../README.md) · [Página do projeto](../../README.md)
