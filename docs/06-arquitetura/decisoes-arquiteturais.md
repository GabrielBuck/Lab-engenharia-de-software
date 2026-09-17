# Decisões arquiteturais
Registros propostos em 17/09/2026, aguardando revisão da equipe. Nenhuma aprovação foi presumida.

## ADR001 — Monólito modular em camadas
**Contexto:** escopo acadêmico pequeno e backend NestJS já existente.
**Decisão proposta:** separar Auth, Books e Library com controllers, services e repositories.
**Alternativas:** microsserviços; aplicação sem divisão de responsabilidades.
**Consequências:** execução e depuração simples; requer disciplina para evitar dependências circulares.
**Validação:** revisar sequência UC004 e responsabilidades antes da integração.

## ADR002 — PostgreSQL para persistência demonstrável
**Contexto:** progresso precisa sobreviver a reinícios (RNF003).
**Decisão proposta:** usar PostgreSQL no teste integrado; memória somente para desenvolvimento isolado.
**Alternativas:** apenas memória; banco embarcado.
**Consequências:** exige migrations e configuração; permite restrições de unicidade e persistência.
**Validação:** CT004, CT008 e CT010.

## ADR003 — Portfólio separado da implementação existente
**Contexto:** este repositório estava vazio; o BookLog possui backend separado.
**Decisão inicial:** documentar fontes e manter diretórios de integração sem duplicar código.
**Alternativas:** monorepo; submodules.
**Consequências:** reduz cópias divergentes; execução depende de outro repositório.
**Revisão necessária:** confirmar com professor se a entrega exige código consolidado; se exigir, planejar importação preservando histórico/licença.

## ADR004 — Diagramas editáveis
**Contexto:** modelos evoluem durante o semestre.
**Decisão inicial:** Mermaid em Markdown para classes, sequência e arquitetura; SVG para UML de casos e wireframes.
**Alternativa:** somente PNG.
**Consequências:** revisão textual e visual no GitHub; exportar PNG quando o formato de entrega exigir.
