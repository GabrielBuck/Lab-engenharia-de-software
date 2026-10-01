# Requisitos funcionais

Especificação pública sincronizada em 01/10/2026 com os contratos implementados no backend e consumidos pelos clientes iOS e Android. RF001 a RF007 formam a baseline da primeira entrega; os requisitos seguintes registram capacidades que já existem no produto oficial.

## RF001 — Cadastrar usuário

- **Descrição:** Informar nome, username, email e senha para criar uma conta.
- **Ator:** Visitante.
- **Prioridade:** Alta.
- **Critério de aceite:** Dados válidos criam uma única conta; email já utilizado não cria duplicata; campos inválidos produzem orientação sem expor senha.
- **Rastreio:** UC001 / CT001.

## RF002 — Autenticar usuário

- **Descrição:** Entrar com credenciais e obter sessão para acessar recursos pessoais.
- **Ator:** Leitor cadastrado.
- **Prioridade:** Alta.
- **Critério de aceite:** Credenciais válidas iniciam sessão; inválidas retornam mensagem genérica; sessão ausente ou expirada impede acesso à biblioteca.
- **Rastreio:** UC002 / CT002.

## RF003 — Buscar livros

- **Descrição:** Pesquisar o catálogo por título ou autor e abrir detalhes.
- **Ator:** Leitor.
- **Prioridade:** Alta.
- **Critério de aceite:** Uma consulta ao catálogo de teste retorna livros compatíveis; ausência de resultado e indisponibilidade têm estados distintos.
- **Rastreio:** UC003 / CT003.

## RF004 — Adicionar livro à biblioteca

- **Descrição:** Salvar um livro existente com status inicial Quero ler.
- **Ator:** Leitor autenticado.
- **Prioridade:** Alta.
- **Critério de aceite:** O livro aparece na biblioteca do usuário; repetir a ação não duplica o par usuário/livro; outro usuário não recebe o item.
- **Rastreio:** UC003 / CT004.

## RF005 — Alterar status de leitura

- **Descrição:** Marcar um item como Quero ler, Lendo ou Concluído.
- **Ator:** Leitor autenticado.
- **Prioridade:** Alta.
- **Critério de aceite:** O status válido é persistido e reaparece após recarregar; valores fora do recorte e edição de item alheio são rejeitados.
- **Rastreio:** UC004 / CT005.

## RF006 — Registrar progresso

- **Descrição:** Informar a página atual de um livro da própria biblioteca.
- **Ator:** Leitor autenticado.
- **Prioridade:** Alta.
- **Critério de aceite:** Página inteira não negativa é salva; quando o total é conhecido não pode ultrapassá-lo; entrada inválida mantém o estado anterior.
- **Rastreio:** UC004 / CT006.

## RF007 — Consultar biblioteca pessoal

- **Descrição:** Listar os próprios livros e filtrar por status.
- **Ator:** Leitor autenticado.
- **Prioridade:** Alta.
- **Critério de aceite:** Filtros retornam apenas itens do usuário no status escolhido; biblioteca vazia oferece caminho para busca.
- **Rastreio:** UC005 / CT007.

## Capacidades implementadas após a baseline

| ID | Capacidade | Critério observável atual | Componente principal |
| --- | --- | --- | --- |
| RF008 | Avaliar e resenhar livros | Criar, editar e excluir review; nota válida usa incrementos de 0,5 entre 0,5 e 5 | Reviews |
| RF009 | Publicar no feed | Criar, consultar, editar e excluir post; interagir por curtidas e comentários | Feed |
| RF010 | Manter perfil e relações sociais | Consultar perfil conforme visibilidade; seguir, desfazer, aceitar ou rejeitar relações | Users / Social / Public Profile |
| RF011 | Participar de clubes de leitura | Descobrir/criar clube, gerenciar entrada, membros, convites, mensagens, posts, metas, progresso e ranking conforme permissão | Clubs |
| RF012 | Registrar anotações | Criar, listar, editar e excluir anotações vinculadas a um item de biblioteca | Annotations |
| RF013 | Receber recomendações | Obter livros ordenados por sinais do leitor e registrar eventos de feedback | Recommendations |
| RF014 | Gerenciar empréstimos | Registrar empréstimo a um amigo, acompanhar estado e confirmar devolução | Loans |
| RF015 | Receber notificações | Listar notificações, marcar leitura e registrar token de push | Notifications |
| RF016 | Importar biblioteca | Processar arquivo suportado, acompanhar o job e resolver correspondências pendentes sem duplicar títulos | Imports |
| RF017 | Compartilhar leitura | Gerar composição visual a partir de livro, nota e estado reais, sem fabricar estatísticas | Clientes iOS / Android |
| RF018 | Proteger a comunidade e a conta | Usar perfil privado, bloquear usuário, denunciar conteúdo, moderar texto e solicitar exclusão da conta | Visibility / Blocks / Reports / Auth |
| RF019 | Capturar livro por imagem | Usar o fluxo de OCR do Android com recuperação explícita para permissão de câmera negada | Cliente Android |

Os grupos acima descrevem o comportamento público, não cada rota interna. O [contrato da API](../06-arquitetura/contratos-api.md) registra as famílias de endpoints e suas regras transversais.

## Gestão

Usar IDs estáveis. Alterações devem explicar motivo, impacto e decisão em pull request e atualizar a rastreabilidade. Estados documentais: baseline → sincronizado → verificado. Uma capacidade só é descrita como implementada quando há código e contrato correspondentes nos repositórios oficiais; resultados de runtime exigem evidência separada.

---

[Índice da documentação](../README.md) · [Página do projeto](../../README.md)
