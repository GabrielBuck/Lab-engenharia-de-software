# Requisitos funcionais
Especificação de requisitos v0.1. Origem: visão do produto e contratos do backend de referência. Os critérios abaixo descrevem o comportamento exigido, não resultados de testes da implementação.

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

## Gestão
Usar IDs estáveis. Alterações devem explicar motivo, impacto e decisão em pull request e atualizar a rastreabilidade. Estados: proposto → validado → implementado → verificado. Não avançar sem evidência.
