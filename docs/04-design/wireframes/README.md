# Wireframes de baixa fidelidade

Os wireframes apresentam a organização das telas e as ações principais. Os rótulos descrevem elementos da interface, sem dados de usuários ou de catálogo.

| Entrada | Biblioteca |
| --- | --- |
| ![Wireframe de entrada](entrada.svg) | ![Wireframe da biblioteca](biblioteca.svg) |

| Busca | Progresso |
| --- | --- |
| ![Wireframe de busca](busca.svg) | ![Wireframe de atualização de progresso](progresso.svg) |

## Estados para implementação

| Tela | Carregando | Vazio | Erro | Sucesso |
| --- | --- | --- | --- | --- |
| Entrada | Desabilitar envio em curso | Campos ainda não preenchidos | Credenciais inválidas / rede | Abrir biblioteca |
| Biblioteca | Indicador de carregamento | Convite para buscar | Tentar novamente | Itens e filtros |
| Busca | Indicador de busca | Nenhum livro encontrado | Catálogo indisponível | Resultados e adição |
| Progresso | Salvando | Página ainda não informada | Validar limite / tentar novamente | Confirmar gravação |

Os SVGs mostram um estado principal por tela. Estados alternativos estão especificados na tabela e nos casos de uso.

---

[Índice da documentação](../../README.md) · [Página do projeto](../../../README.md)
