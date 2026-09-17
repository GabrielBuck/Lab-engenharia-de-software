# UC003 — Buscar e adicionar livro
**Estado:** especificação proposta.
**Ator:** Leitor autenticado.
**Objetivo:** Salvar uma leitura desejada.
**Pré-condições:** Sessão válida; catálogo com livro disponível.
**Gatilho:** o ator inicia a ação descrita no primeiro passo.

## Fluxo principal
1. Pesquisar título ou autor.
2. Sistema apresenta resultados.
3. Abrir detalhes do livro escolhido.
4. Selecionar Adicionar à biblioteca.
5. Sistema verifica propriedade e duplicidade, criando item Quero ler.
6. Exibir confirmação e item na biblioteca.

## Fluxos alternativos
- A1 — Busca vazia: informar ausência e permitir nova consulta.
- A2 — Livro já adicionado: exibir aviso/item existente sem duplicar.
- A3 — Catálogo indisponível: mostrar erro distinto de resultado vazio.
- A4 — Livro externo: importar antes de associar; falha não cria item inválido.

## Pós-condições
Um item válido está associado ao leitor; catálogo não é duplicado pela associação.

**Rastreabilidade:** RF003, RF004; RN002, RN003, RN004. Ver [matriz](../../02-requisitos/rastreabilidade.md).
