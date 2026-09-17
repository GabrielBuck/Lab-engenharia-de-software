# Plano de testes do produto

**Estado de todos os CTs:** planejado / não executado. A CI atual verifica somente documentação.

Pré-condições gerais: ambiente isolado, catálogo conhecido, duas contas de teste A/B, registro da versão, configuração e evidências. Não usar dados reais. Limpar dados de teste de modo controlado.

| ID | Cenário / procedimento | Resultado esperado |
| --- | --- | --- |
| CT001 | Cadastrar dados válidos; repetir email; testar senha inválida | Uma conta no sucesso; rejeição sem duplicata nos demais |
| CT002 | Login válido, inválido e operação com sessão expirada | Sessão apenas no sucesso; recurso protegido negado sem sessão válida |
| CT003 | Buscar título e autor conhecidos, termo inexistente e simular falha de catálogo | Resultados compatíveis; vazio distinto de erro |
| CT004 | A adicionar livro, repetir adição e consultar como B | Um item para A; nenhum item correspondente em B |
| CT005 | Alterar entre três estados, recarregar e enviar estado inválido | Estado válido permanece; inválido não altera item |
| CT006 | Em livro de 200 páginas enviar 0, 100, 200, -1, 201 e 1,5; testar livro sem total | Aceitar inteiros nos limites; rejeitar fora/fracionários; sem total aceitar inteiro não negativo sem percentual |
| CT007 | Consultar biblioteca cheia/vazia e cada filtro | Apenas itens do usuário e filtro; vazio com orientação |
| CT008 | B tentar ler/alterar item de A; repetir sem token; inspecionar logs | Acesso negado, item intacto e nenhum segredo nos logs |
| CT009 | Cinco leitores executarem fluxo após login sem ajuda | Ao menos quatro em até 3 minutos; registrar tempo individual |
| CT010 | Salvar progresso, reiniciar API/PostgreSQL preservando volume e reler; simular falha de gravação | Valor confirmado persiste; falha não exibe sucesso |
| CT011 | Carga conforme RNF004; medir p95 e taxa de erro | p95 < 1 s e erro < 1%; anexar ambiente e relatório |
| CT012 | Navegar telas principais com VoiceOver e revisar estados | Controles nomeados, ordem compreensível e informação independente de cor |

## Evidências

Para cada execução, registrar CT, data, responsável, commit da aplicação, dados/ambiente, resultado esperado/obtido e anexo ou issue. Automatizar regras e autorização na implementação; usabilidade exige observação humana.

## Validação já disponível

`node scripts/validate-docs.mjs` verifica arquivos essenciais, links locais e presença dos IDs rastreados. Não verifica links externos, semântica de UML, conformidade acadêmica ou comportamento da aplicação.
