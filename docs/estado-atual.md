# Estado atual e sincronização com o BookLog oficial

**Snapshot público:** 01/10/2026
**Baseline anterior deste repositório:** `e1ea7d4` / tag `Entrega_1`

Este repositório continua sendo o portfólio público de Engenharia de Software. A implementação permanece nos repositórios oficiais, enquanto este espaço registra, de forma auditável e segura, a arquitetura, o domínio, os contratos e as funcionalidades que já existem no BookLog.

## Referências auditadas

| Componente oficial | Referência auditada | Papel |
| --- | --- | --- |
| Backend | `a2852bc` (`backend/moderation-compatible`) | API NestJS, regras de negócio, persistência, integrações e infraestrutura |
| Android | `b4ed80f` (`origin/dev`) | Cliente Kotlin/Jetpack Compose |
| iOS | `cafaf44` (`origin/dev`) | Cliente Swift/SwiftUI |

O ponto usado na primeira entrega foi o backend `5d3dc4a`, observado em 17/09/2026. Naquele momento, o portfólio documentou apenas cadastro, sessão, catálogo, biblioteca, status e progresso. Esses fluxos continuam válidos, mas representam somente uma parte do sistema atual.

## Matriz da evolução

| Área | Oficial atual | Estado anterior no público | Ação desta sincronização |
| --- | --- | --- | --- |
| Autenticação e conta | Cadastro, login, refresh/logout, recuperação de senha, OAuth, 2FA, preferências e exclusão de conta | Parcial | Atualizar requisitos, domínio e contratos |
| Catálogo de livros | Catálogo persistente, resolução entre provedores, detalhes, categorias, tendências e compra afiliada | Parcial | Documentar provedores e fluxo de resolução sem publicar credenciais |
| Biblioteca | Status, progresso, histórico de leitura, estatísticas, estantes e importação CSV | Parcial | Expandir domínio, API e rastreabilidade |
| Avaliações | Reviews e notas em incrementos de meia estrela | Ausente | Incorporar ao escopo atual |
| Feed social | Posts, imagens, notas, comentários e curtidas | Ausente | Incorporar ao escopo atual |
| Perfis e relações sociais | Perfil público/privado, seguidores, amigos e solicitações | Ausente | Incorporar ao escopo atual |
| Clubes | Descoberta, membros, convites, mensagens, posts, metas, progresso, ranking e pontuação | Ausente | Incorporar ao escopo atual |
| Empréstimos | Empréstimo a amigos, acompanhamento e devolução | Ausente | Incorporar ao escopo atual |
| Recomendações | Recomendações personalizadas e eventos de feedback | Ausente | Incorporar ao escopo atual |
| Anotações e apoio de IA | Anotações e geração assistida de resumo/rascunho | Ausente | Documentar como capacidade opcional e configurável |
| Segurança e confiança | Perfil privado, bloqueio, denúncia, moderação de conteúdo e retenção/exclusão de conta | Ausente | Incorporar requisitos de privacidade e moderação |
| Clientes | iOS e Android nativos consumindo o mesmo contrato REST | Apenas iOS conceitual | Representar os dois clientes e suas camadas |
| Persistência | PostgreSQL com migrations incrementais, constraints e índices | Três entidades conceituais | Publicar modelo lógico resumido e histórico de migrations |
| Entrega | CI de qualidade, integração PostgreSQL, imagem Docker, CDK e deploy controlado | CI documental e topologia local proposta | Representar a arquitetura real sem dados da conta cloud |

## O que permanece fora do repositório público

- valores de variáveis de ambiente, tokens, chaves, certificados e credenciais OAuth;
- IDs de conta, ARNs, nomes internos de recursos, URLs privadas e dados operacionais;
- dados de usuários, bancos, logs e evidências que possam conter informação pessoal;
- dumps e inventários internos usados nas validações dos repositórios oficiais;
- código duplicado dos clientes e do backend, evitando uma cópia divergente da fonte da verdade.

## Limite desta evidência

A sincronização comprova a leitura dos artefatos e do histórico Git dos componentes oficiais. A CI deste repositório valida estrutura, links e rastreabilidade documental; ela não recompila os aplicativos nem substitui os testes executados nos repositórios de implementação.

Consulte a [arquitetura atual](06-arquitetura/visao-arquitetural.md), o [contrato público da API](06-arquitetura/contratos-api.md), o [modelo de dados](05-modelagem/modelo-dados.md) e o [ambiente de desenvolvimento](08-operacao/ambiente-desenvolvimento.md).

---

[Índice da documentação](README.md) · [Página do projeto](../README.md)
