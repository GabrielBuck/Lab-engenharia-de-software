# UC004 — Atualizar status e progresso

**Estado:** especificação proposta.
**Ator:** Leitor autenticado.
**Objetivo:** Manter sua leitura atualizada.
**Pré-condições:** Livro presente na própria biblioteca.
**Gatilho:** o ator inicia a ação descrita no primeiro passo.

## Fluxo principal

1. Abrir item da biblioteca.
2. Escolher editar progresso ou status.
3. Informar página atual ou escolher um dos três estados.
4. Sistema valida propriedade e dados.
5. Sistema persiste a alteração.
6. Aplicativo exibe confirmação e valor atualizado.

## Fluxos alternativos

- A1 — Página negativa, fracionária ou acima do total conhecido: rejeitar sem alterar estado.
- A2 — Total desconhecido: aceitar inteiro não negativo e omitir percentual.
- A3 — Item alheio/sessão inválida: negar operação sem revelar conteúdo.
- A4 — Falha de gravação: informar falha, manter edição disponível e não exibir sucesso.

## Pós-condições

Somente o item do usuário é atualizado. Conclusão depende de escolha explícita nesta proposta.

**Rastreabilidade:** RF005, RF006; RN002, RN004, RN005, RN006. Ver [matriz](../../02-requisitos/rastreabilidade.md).

---

[Índice da documentação](../../README.md) · [Página do projeto](../../../README.md)
