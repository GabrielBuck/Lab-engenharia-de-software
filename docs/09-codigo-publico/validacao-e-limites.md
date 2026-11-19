# Qualidade e limites de verificação

## Estratégia técnica

O produto usa contratos tipados e validação de DTOs no backend, camadas de repositório/serviço nos clientes e separação funcional entre produção e homologação.

## Cenários de teste a demonstrar

| Cenário | Resultado que deve ser verificado |
| --- | --- |
| Buscar livro | Busca e paginação tratam resultados ausentes |
| Adicionar à biblioteca | Atualiza status sem perder histórico |
| Registrar progresso | Rejeita páginas negativas e durações inválidas |
| Falha de rede | Cliente apresenta erro sem expor dados internos |
| Autenticação | Usuário não acessa registros alheios |
| Comunidade | Feed e clube respeitam permissões |

Esta tabela é um **plano de teste**, não um relatório de testes reexecutados agora. Não se afirma cobertura, número de testes aprovados ou pipelines verdes sem execução específica.

## Escopo de segurança da publicação

Nenhum segredo, certificado, arquivo real de ambiente, dado pessoal ou URL interna foi incluído. Somente seis arquivos pequenos, examinados previamente, estão expostos como evidência de código. Este repositório acadêmico não é um deploy nem uma distribuição do aplicativo completo.
