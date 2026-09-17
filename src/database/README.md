# database
Área reservada a migrations e dados de teste caso seja aprovada a consolidação do código. O backend de referência possui migrations próprias; não duplicá-las antes de definir uma fonte de verdade. Modelo conceitual: Usuario 1:N ItemBiblioteca e Livro 1:N ItemBiblioteca; planejar unicidade usuário/livro e validação de progresso. Não contém esquema executável nesta etapa.

Decisão de organização: [ADR003](../../docs/06-arquitetura/decisoes-arquiteturais.md).
