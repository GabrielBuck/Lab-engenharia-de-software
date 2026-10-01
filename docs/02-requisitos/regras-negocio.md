# Regras de negócio

Regras públicas confirmadas a partir do backend de referência. A primeira entrega preserva RN001 a RN007; as regras adicionais representam a evolução já implementada.

| ID | Regra | Impacto |
| --- | --- | --- |
| RN001 | Uma conta é identificada por email único | Cadastro deve impedir duplicatas |
| RN002 | Cada item de biblioteca pertence a um usuário; só o proprietário pode consultá-lo/alterá-lo pelo fluxo pessoal | Isolamento no backend |
| RN003 | O mesmo livro aparece no máximo uma vez por biblioteca | Adição repetida retorna aviso ou item existente |
| RN004 | Estados de biblioteca incluem Quero ler, Lendo, Concluído e Emprestado | Mapeamento de contrato: wantToRead, reading, finished, borrowed |
| RN005 | Página atual é inteira e não negativa; não ultrapassa total conhecido | Se total é desconhecido, não calcular percentual nem limitar por total fictício |
| RN006 | Conclusão é uma ação explícita de status nesta proposta | Atingir última página não altera automaticamente status; validar comportamento do backend |
| RN007 | Senha tem de 8 a 128 caracteres e inclui maiúscula, minúscula, número e símbolo | Derivada do DTO de cadastro consultado |

| RN008 | Avaliações aceitam somente incrementos de meia estrela entre 0,5 e 5 | Biblioteca, reviews, feed e compartilhamento usam a mesma precisão |
| RN009 | Estantes personalizadas contêm apenas livros da biblioteca e respeitam limites definidos pelo produto | Favoritos e estantes personalizadas não substituem o status de leitura |
| RN010 | Conteúdo e perfis respeitam privacidade, bloqueios e visibilidade | Recursos públicos não podem contornar um bloqueio ou perfil privado |
| RN011 | Denúncias registram alvo e motivo sem expor dados sensíveis ao cliente | Moderação e auditoria permanecem no backend |
| RN012 | Permissões de clube dependem do papel e da associação ativa | Operações administrativas não ficam disponíveis a membros comuns |
| RN013 | Um empréstimo ativo não pode duplicar o mesmo exemplar na mesma relação | A devolução encerra o empréstimo sem apagar seu histórico |
| RN014 | Importações devem reutilizar correspondências confirmadas e evitar duplicidade lógica | Conflitos ficam pendentes de resolução em vez de criar dados silenciosamente |
| RN015 | Exclusão de conta obedece ao período de retenção configurado e preserva consentimento verdadeiro | Dados públicos são sanitizados antes da remoção definitiva |

Não alterar contratos ou invariantes silenciosamente. Mudanças no backend exigem revisão dos dois clientes e desta documentação.

---

[Índice da documentação](../README.md) · [Página do projeto](../../README.md)
