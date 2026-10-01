# Contribuição

## Fluxo Git

`main` mantém a documentação pública revisada. Mudanças usam branches curtas por objetivo e retornam por pull request. O portfólio não recebe cópias diretas do código oficial; cada sincronização registra referências, delta funcional e limites de segurança.

A documentação é publicada em main.

## Passos

1. Auditar a fonte oficial sem alterar seu checkout.
2. Vincular a alteração a um requisito ou artefato.
3. Atualizar documentos relacionados, snapshot e rastreabilidade.
4. Confirmar que nenhum segredo, dado pessoal ou identificador interno foi copiado.
5. Executar `node scripts/validate-docs.mjs`.
6. Abrir PR com motivo, impacto, referências e evidências.
7. Solicitar revisão de outro integrante; integrar após aceite.

## Commits

```text
docs: adiciona visão do produto
docs: revisa casos de uso
feat: implementa cadastro de usuário
test: verifica isolamento da biblioteca
docs: sincroniza arquitetura oficial
```

## Qualidade

Não inventar entrevistas, resultados, integrantes ou aprovações. Preservar autoria e licença das fontes; não versionar segredos, bancos locais, dados pessoais ou dependências geradas.
