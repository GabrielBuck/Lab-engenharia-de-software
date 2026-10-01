# Contratos públicos da API

A API é REST, versionada sob `/v1` e documentada por Swagger/OpenAPI no backend oficial. Esta página resume famílias de recursos sem reproduzir URLs de ambiente, credenciais ou detalhes administrativos.

## Convenções transversais

- JSON para entrada e saída; DTOs validados no limite HTTP.
- JWT Bearer nas operações pessoais e sociais protegidas.
- refresh token com revogação e expiração; logout invalida a sessão correspondente.
- paginação por cursor ou limite conforme o recurso.
- erros HTTP não devem incluir senha, token, segredo ou dado pessoal desnecessário.
- autorização e visibilidade são aplicadas no backend, inclusive para perfis, feed e clubes.
- notas aceitam incrementos de 0,5 no intervalo definido pelo domínio.
- uploads, integrações e IA são capacidades configuráveis por provider.

## Famílias de endpoints

| Prefixo ou recurso | Métodos principais | Responsabilidade |
| --- | --- | --- |
| `/auth` e `/me` | POST, GET, PATCH, DELETE | Cadastro, login, OAuth, refresh/logout, senha, 2FA, perfil próprio, preferências e exclusão |
| `/books` e `/catalog/books` | GET, POST, PATCH | Catálogo, detalhe, categorias, tendências, resolução/importação e oferta de compra |
| `/library` | GET, POST, PATCH, DELETE | Itens, progresso, conclusão, estatísticas, estantes e livros de estante |
| `/library/imports` | POST, GET | Jobs de importação e resolução de conflitos |
| `/reviews` e `/books/:id/reviews` | GET, POST, PATCH, DELETE | Reviews pessoais e públicas |
| `/feed` e `/comments` | GET, POST, PATCH, DELETE | Posts, comentários e curtidas |
| `/users`, `/me/friends`, `/me/followers` | GET, POST, DELETE | Perfil público, biblioteca pública e relações sociais |
| `/clubs` e `/club-invites` | GET, POST, PATCH, DELETE | Clubes, membros, convites, mensagens, posts, metas, progresso e ranking |
| `/loans` | GET, POST, PATCH | Empréstimos e devolução |
| `/annotations` e `/me/annotations` | GET, POST, PATCH, DELETE | Anotações e apoio opcional de IA |
| `/recommendations` | GET, POST | Lista personalizada e eventos de feedback |
| `/notifications` | GET, PATCH, POST | Caixa de notificações, leitura e push token |
| `/search/history` | GET, POST, DELETE | Histórico de busca por usuário |
| `/uploads` | POST, GET, DELETE | Ciclo de arquivos autorizado |
| `/reports`, `/users/:id/block`, `/me/blocks` | POST, GET, DELETE | Denúncia, bloqueio e desbloqueio |
| `/health` | GET | Liveness e readiness |

## Compatibilidade entre clientes

iOS e Android consomem o mesmo backend, mas não precisam lançar todas as interfaces na mesma revisão. Quando um campo passa a ser sanitizado ou opcional, os decoders dos clientes devem preservar compatibilidade. Mudanças incompatíveis exigem nova versão do contrato ou migração coordenada.

O detalhamento definitivo permanece no Swagger e nos DTOs do backend oficial. Este resumo serve para arquitetura, apresentação e rastreabilidade pública.

---

[Visão arquitetural](visao-arquitetural.md) · [Estado atual](../estado-atual.md) · [Índice](../README.md)
