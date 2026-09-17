# Primeira entrega — BookLog

**Disciplina:** Laboratório de Engenharia de Software

**Equipe:** Gabriel Nottoli Buck (10425384) e Julia Andrade (10427828)

Esta entrega reúne a concepção e a especificação inicial do BookLog. O objetivo é demonstrar como o problema dos leitores se traduz em requisitos, fluxos de interação, modelo de domínio e organização técnica.

## Síntese do produto

O BookLog centraliza livros desejados, em leitura e concluídos, com registro de progresso por usuário. O fluxo principal conecta entrada, busca, adição à biblioteca e atualização da leitura.

O recorte cobre RF001 a RF007. Resenhas, clubes, empréstimos e recomendações pertencem ao contexto mais amplo do produto e ficam fora desse recorte.

## Artefatos da entrega

| Artefato | Evidência no repositório | O que demonstra |
| --- | --- | --- |
| Concepção | [Visão](../01-visao-produto/visao-produto.md), [valor](../01-visao-produto/proposta-valor.md) e [personas](../01-visao-produto/personas.md) | Problema, público e foco do produto |
| Especificação | [RF](../02-requisitos/requisitos-funcionais.md), [RNF](../02-requisitos/requisitos-nao-funcionais.md) e [regras](../02-requisitos/regras-negocio.md) | Comportamento esperado e critérios verificáveis |
| Interação | [Casos de uso](../03-casos-de-uso/README.md) | Atores, objetivos, fluxos e exceções |
| Experiência | [Jornada](../04-design/jornada-usuario.md) e [wireframes](../04-design/wireframes/README.md) | Continuidade do fluxo e estados de interface |
| Estrutura do domínio | [Classes](../05-modelagem/modelo-dominio.md) e [sequência](../05-modelagem/diagrama-sequencia/registrar-progresso.md) | Entidades, relações e colaboração |
| Organização técnica | [Arquitetura](../06-arquitetura/visao-arquitetural.md) e [decisões](../06-arquitetura/decisoes-arquiteturais.md) | Responsabilidades e justificativas de projeto |
| Gestão e verificação | [Sprint 01](../07-sprints/sprint-01.md), [rastreabilidade](../02-requisitos/rastreabilidade.md) e [testes](../../tests/plano-testes.md) | Entregas documentais e cobertura de verificação |

## Roteiro de apresentação

1. **Problema e público:** apresentar a dificuldade de organizar listas e retomar leituras; conectar às personas.
2. **Escopo:** explicar o ciclo principal e os limites do recorte.
3. **Requisitos:** apresentar RF006 e seu critério de aceite; relacionar às regras de propriedade e limite de página.
4. **Fluxo do usuário:** abrir UC004 e o wireframe de progresso; mostrar a resposta para entrada inválida e falha de gravação.
5. **Modelo e arquitetura:** explicar Usuario → ItemBiblioteca → Livro, seguido do diagrama de sequência e das camadas da API.
6. **Qualidade:** mostrar o vínculo RF006 → UC004 → RN002/RN005 → CT006 e os cenários de isolamento CT008.
7. **Organização da entrega:** demonstrar o índice documental e a execução da CI.

## Exemplo de rastreabilidade: progresso de leitura

| Perspectiva | Artefato | Decisão ou critério |
| --- | --- | --- |
| Necessidade | Persona Marina | Retomar a leitura e registrar a página atual |
| Funcionalidade | RF006 | Registrar progresso do próprio livro |
| Regra | RN002 / RN005 | Verificar propriedade e validade da página |
| Interação | UC004 | Confirmar a atualização somente após persistência |
| Modelo | ItemBiblioteca | Manter status e página atual por usuário/livro |
| Arquitetura | Library Service / Repository | Separar regras de negócio e gravação |
| Verificação | CT006 / CT008 / CT010 | Limites de página, isolamento e durabilidade |

## Alcance das evidências

- Os arquivos e diagramas constituem a entrega documental.
- Personas e jornada são modelos conceituais, sem atribuição de entrevistas.
- Wireframes são de baixa fidelidade, sem navegação interativa.
- Os cenários do plano de testes especificam a verificação do produto; não são relatórios de execução.
- A CI verifica estrutura, links locais e IDs de rastreabilidade.
- A implementação de referência está em um repositório separado, conforme [ADR003](../06-arquitetura/decisoes-arquiteturais.md).

## Continuidade do projeto

O [planejamento do próximo ciclo](../07-sprints/sprint-02.md) organiza a integração do fluxo principal e a verificação dos critérios de aceite.

[Voltar ao índice da documentação](../README.md) · [Página do projeto](../../README.md)
