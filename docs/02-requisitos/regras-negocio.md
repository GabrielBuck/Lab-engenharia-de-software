# Regras de negócio

Regras propostas para o recorte acadêmico; validar contra o backend antes da integração.

| ID | Regra | Impacto |
| --- | --- | --- |
| RN001 | Uma conta é identificada por email único | Cadastro deve impedir duplicatas |
| RN002 | Cada item de biblioteca pertence a um usuário; só o proprietário pode consultá-lo/alterá-lo pelo fluxo pessoal | Isolamento no backend |
| RN003 | O mesmo livro aparece no máximo uma vez por biblioteca | Adição repetida retorna aviso ou item existente |
| RN004 | Estados do recorte: Quero ler, Lendo e Concluído | Mapeamento de contrato: wantToRead, reading, finished |
| RN005 | Página atual é inteira e não negativa; não ultrapassa total conhecido | Se total é desconhecido, não calcular percentual nem limitar por total fictício |
| RN006 | Conclusão é uma ação explícita de status nesta proposta | Atingir última página não altera automaticamente status; validar comportamento do backend |
| RN007 | Senha tem de 8 a 128 caracteres e inclui maiúscula, minúscula, número e símbolo | Derivada do DTO de cadastro consultado |

O backend de referência também cita status borrowed; ele não integra o recorte inicial. RN003, RN005 e RN006 exigem confirmação de comportamento na implementação. Não alterar os contratos existentes silenciosamente.

---

[Índice da documentação](../README.md) · [Página do projeto](../../README.md)
