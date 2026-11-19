# BookLog — Atualização acadêmica de 19/11/2026

**Laboratório de Engenharia de Software — Gabriel Nottoli Buck e Julia Andrade**

## Contexto e problema

O BookLog nasceu de uma hipótese de produto: a experiência de leitura costuma ser fragmentada entre listas, registros de progresso e conversas sobre livros. A plataforma integra descobrir, salvar, ler, avaliar e compartilhar. **Não é um leitor de e-books**; organiza leituras e aproxima pessoas.

## Uso do ponto de vista de quem nunca viu o aplicativo

1. Criar conta e perfil.
2. Buscar por título, autor ou ISBN, consultar detalhes do livro.
3. Salvar em biblioteca ou estante; registrar status como quero ler, lendo ou lido.
4. Registrar páginas, metas e histórico de leitura.
5. Avaliar, publicar resenha e acompanhar o feed.
6. Interagir com seguidores, amigos, clubes e desafios.
7. Consultar recomendações e recursos de descoberta quando habilitados na versão do cliente.

**Demonstração para o professor:** buscar um livro, salvar na estante, atualizar o progresso e abrir uma resenha ou clube.

## Engenharia do produto

- **iOS:** Swift e SwiftUI, cliente nativo publicado.
- **Android:** Kotlin e Jetpack Compose, cliente nativo em beta.
- **API:** NestJS, TypeScript e contratos REST com DTOs e autenticação.
- **Dados:** PostgreSQL, acessado pelo backend, nunca diretamente pelos aplicativos.
- **Hospedagem:** Railway, serviços e bancos separados por função.
- **Integrações:** Google Books, Amazon Creators e provedores de login.
- **Operação:** versionamento, homologação e rotinas de testes; métricas externas à transação normal.

[Arquitetura detalhada](../06-arquitetura/railway-2026-11.md) · [Código real selecionado](../09-codigo-publico/README.md)

## Resultados documentados em 19/11/2026

O material acadêmico reuniu **2.555 leitores, 102 clubes e 323 leitores em clubes**. A captura da App Store registrava **4,8/5 em 20 avaliações**. O **Top 6 na categoria Livros do Brasil** é um **pico histórico relatado pelo time**, não posição atual; outra captura já mostrava #21. Os números são datados e não representam acompanhamento em tempo real.

[Indicadores e metodologia](../10-resultados/indicadores-2026-11.md)

## Situação de lançamento

**iOS disponível na App Store:** https://apps.apple.com/br/app/booklog/id6811496005

**Android:** testes beta em novembro de 2026, sem anúncio de disponibilidade geral.

## Escopo público

Esta entrega traz documentação, diagramas e seis arquivos-fonte reais selecionados. Não disponibiliza a base do produto, credenciais, banco, configurações internas nem um quarto app compilável. Os repositórios oficiais da organização não foram alterados. [Qualidade e limites](../09-codigo-publico/validacao-e-limites.md).
