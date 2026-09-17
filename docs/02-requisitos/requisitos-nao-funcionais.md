# Requisitos não funcionais
Metas propostas, ainda não medidas. FURPS organiza funcionalidade/segurança (F), usabilidade (U), confiabilidade (R), desempenho (P) e suporte/manutenção (S).

| ID | Categoria | Meta verificável | Verificação e condição |
| --- | --- | --- | --- |
| RNF001 | F / segurança | Toda operação de biblioteca exige sessão válida e propriedade do recurso; senhas e tokens não aparecem em logs | CT008: duas contas, acesso cruzado e sessão ausente/expirada; inspecionar logs de teste |
| RNF002 | U / usabilidade | Ao menos 4 de 5 leitores concluem busca → adição → progresso em até 3 minutos sem ajuda | CT009: teste moderado, primeiro uso após login, catálogo fixo; registrar tempos e dificuldades |
| RNF003 | R / confiabilidade | Uma atualização confirmada permanece após reiniciar API com PostgreSQL; falha de gravação não exibe sucesso | CT010: persistir, reiniciar e reler; simular indisponibilidade em ambiente de teste |
| RNF004 | P / desempenho | p95 da consulta da biblioteca abaixo de 1 segundo, com erro menor que 1% | CT011: 20 usuários concorrentes por 5 minutos, 1.000 livros no catálogo e 100 itens por usuário; registrar hardware, rede e aquecimento de 1 minuto separado |
| RNF005 | S / manutenção | Cada mudança de requisito mantém links internos válidos e atualiza UC/testes afetados | CI documental e revisão humana da rastreabilidade em cada PR |
| RNF006 | U / acessibilidade | Telas principais têm rótulos compreensíveis ao VoiceOver e estados não dependem apenas de cor | CT012: navegar cadastro, biblioteca e progresso com leitor de tela no iOS |
| RNF007 | S / testabilidade | Regras de propriedade, duplicidade e limite de progresso têm testes automatizados de sucesso e falha | Revisão dos testes da aplicação e relatório de execução na futura integração |

O pipeline atual valida documentos, não certifica segurança, desempenho ou acessibilidade do produto. O adapter em memória não atende à meta de durabilidade de RNF003.
