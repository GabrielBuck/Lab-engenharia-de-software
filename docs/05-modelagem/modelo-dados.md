# Modelo de dados persistente

O backend usa PostgreSQL e mantém a evolução do esquema em migrations SQL incrementais. O portfólio não copia o banco nem suas credenciais; registra somente a topologia pública necessária para compreender o sistema.

## Grupos de tabelas

| Grupo | Estruturas principais | Integridade relevante |
| --- | --- | --- |
| Identidade | users, user_preferences, external_users | email, username e nome com índices de unicidade; exclusão lógica |
| Sessão e segurança | refresh_tokens, password_reset_tokens, two_factor_states | expiração, revogação/consumo e estado de 2FA |
| Catálogo | books | índices de título, autores, gêneros, ISBN e identidade do provedor |
| Biblioteca | library_items, reading_sessions, shelves, shelf_items | item ativo único por usuário/livro e histórico de progresso |
| Conteúdo | reviews, annotations, attachments | propriedade, exclusão lógica e vínculos com livro/biblioteca |
| Feed | feed_posts, feed_comments, feed_likes | índices temporais e unicidade de interação |
| Social | follows, user_blocks, reports | direção da relação, bloqueio e alvo de denúncia |
| Clubes | clubs, club_members, club_invites, club_messages, club_posts, club_goals, club_progress, club_score_events | papéis, estado de membro, ordenação e deduplicação de eventos |
| Operação | notifications, push_tokens, search_history, recommendation_events | escopo por usuário e ordenação temporal |
| Empréstimos | loans | empréstimo ativo único para o mesmo livro e relação |

## Evolução das migrations

| Migration | Evolução |
| --- | --- |
| 0001 | Núcleo persistente de usuários, catálogo, biblioteca, feed, clubes e notificações |
| 0002 | Empréstimos persistentes |
| 0003 | Anotações, seguidores e histórico de busca |
| 0004 | Proveniência e metadados do catálogo Amazon Creators |
| 0005 | Histórico de leitura |
| 0006 | Notas em incrementos de meia estrela |
| 0007 | Índice de ISBN |
| 0008 | Identificadores, assuntos, editora e proveniência para resolução de livros |
| 0009 | Bloqueios e denúncias |
| 0010 | Aceite de termos e retenção/exclusão de conta |

As migrations são idempotentes e executadas como etapa controlada antes do deploy da aplicação. A CI oficial também valida o histórico e o esquema contra PostgreSQL; este repositório mantém apenas a representação documental.

---

[Modelo de domínio](modelo-dominio.md) · [Índice da documentação](../README.md) · [Página do projeto](../../README.md)
