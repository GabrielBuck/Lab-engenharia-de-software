# BookLog — Laboratório de Engenharia de Software

Portfólio acadêmico do BookLog, um aplicativo para organizar a biblioteca pessoal e acompanhar leituras. Reúne visão de produto, requisitos, casos de uso, design, modelagem, arquitetura e acompanhamento do trabalho.

**Estado:** documentação inicial para revisão da equipe. Os requisitos são uma proposta de recorte acadêmico; não representam aceite do professor nem funcionalidades verificadas neste repositório. Não há aplicação executável aqui nesta etapa.

## Objetivo
Centralizar livros desejados, em leitura e concluídos, permitindo registrar progresso e consultar o histórico pessoal.

## Integrantes
| Nome | RA | Responsabilidade |
| --- | --- | --- |
| A preencher pela equipe | A preencher | A distribuir |

## Tecnologias
| Parte | Referência / proposta |
| --- | --- |
| Frontend | Aplicativo iOS; integração acadêmica a confirmar |
| Backend de referência | NestJS + TypeScript, API REST, JWT e bcrypt |
| Persistência de referência | PostgreSQL; adapter em memória para desenvolvimento |
| Documentação | Markdown, Mermaid e SVG |
| Qualidade deste portfólio | Node.js 22+ e GitHub Actions |

O backend existente está em [Bin4ryLibr4ry/booklog-backend](https://github.com/Bin4ryLibr4ry/booklog-backend). Consulte [fontes e limites](docs/fontes-e-premissas.md) antes de comparar proposta e implementação.

## Documentação
1. [Visão do produto](docs/01-visao-produto/visao-produto.md), [proposta de valor](docs/01-visao-produto/proposta-valor.md) e [personas](docs/01-visao-produto/personas.md).
2. [Requisitos funcionais](docs/02-requisitos/requisitos-funcionais.md), [não funcionais](docs/02-requisitos/requisitos-nao-funcionais.md), [regras de negócio](docs/02-requisitos/regras-negocio.md), [stakeholders](docs/02-requisitos/stakeholders.md) e [glossário](docs/02-requisitos/glossario.md).
3. [Casos de uso e diagrama](docs/03-casos-de-uso/README.md).
4. [Wireframes](docs/04-design/wireframes/README.md), [protótipo](docs/04-design/prototipo-figma.md) e [jornada](docs/04-design/jornada-usuario.md).
5. [Modelo de domínio e classes](docs/05-modelagem/modelo-dominio.md) e [sequência](docs/05-modelagem/diagrama-sequencia/registrar-progresso.md).
6. [Visão arquitetural](docs/06-arquitetura/visao-arquitetural.md) e [decisões](docs/06-arquitetura/decisoes-arquiteturais.md).
7. [Sprint 01](docs/07-sprints/sprint-01.md), [Sprint 02](docs/07-sprints/sprint-02.md) e [review](docs/07-sprints/sprint-review.md).
8. [Rastreabilidade](docs/02-requisitos/rastreabilidade.md) e [plano de testes](tests/plano-testes.md).

## Metodologia
Ciclos curtos com backlog, critérios de aceite, revisão por pares e registro de evidências. Datas, responsáveis e duração das sprints serão definidos pela equipe. Veja o [guia de contribuição e Git Flow](CONTRIBUTING.md).

## Como utilizar
Clone este repositório e abra o README no GitHub ou em um editor com suporte a Mermaid. Para validar a documentação, instale Node.js 22 ou superior e execute:

```bash
node scripts/validate-docs.mjs
```

Não há dependências npm para essa verificação. A CI executa o mesmo comando em pushes e pull requests. Os wireframes SVG podem ser abertos no navegador.

Para executar o sistema de referência, use as instruções do [backend](https://github.com/Bin4ryLibr4ry/booklog-backend#como-rodar-localmente). As pastas [backend](src/backend/README.md), [frontend](src/frontend/README.md) e [database](src/database/README.md) registram o plano de integração; não contêm cópias do software.

## Estrutura
```text
docs/
  01-visao-produto/
  02-requisitos/
  03-casos-de-uso/casos-uso/
  04-design/wireframes/
  05-modelagem/diagrama-sequencia/
  06-arquitetura/
  07-sprints/
src/
  backend/
  frontend/
  database/
tests/
assets/
  imagens/
  diagramas/
scripts/
.github/workflows/
```

## Próximas decisões
- Preencher integrantes e RAs.
- Validar escopo, personas, regras e metas de qualidade.
- Definir datas das sprints e responsáveis.
- Confirmar estratégia de integração dos repositórios e publicar protótipo navegável.
- Escolher licença com os titulares; veja [LICENSE](LICENSE).
