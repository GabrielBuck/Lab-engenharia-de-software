# UC005 — Consultar biblioteca

**Estado:** especificação proposta.
**Ator:** Leitor autenticado.
**Objetivo:** Encontrar livros e verificar andamento.
**Pré-condições:** Sessão válida.
**Gatilho:** o ator inicia a ação descrita no primeiro passo.

## Fluxo principal

1. Abrir Minha biblioteca.
2. Sistema carrega itens do usuário.
3. Escolher Todos, Quero ler, Lendo ou Concluído.
4. Sistema apresenta os itens correspondentes.
5. Abrir um item para consultar seu estado.

## Fluxos alternativos

- A1 — Biblioteca vazia: oferecer Buscar livros.
- A2 — Filtro sem itens: indicar ausência no filtro.
- A3 — Rede indisponível: informar falha e oferecer tentar novamente.

## Pós-condições

Biblioteca consultada sem modificar os dados.

**Rastreabilidade:** RF007; RN002, RN004. Ver [matriz](../../02-requisitos/rastreabilidade.md).

---

[Índice da documentação](../../README.md) · [Página do projeto](../../../README.md)
