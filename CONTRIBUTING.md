# Contribuição
## Fluxo Git proposto
`main` mantém entregas revisadas; `develop` integra o ciclo; branches curtas `feature/requisitos`, `feature/prototipo`, `feature/modelagem` e `feature/backend` nascem de develop e retornam por PR. Releases revisadas seguem de develop para main.

A baseline inicial é publicada em main. develop e branches de trabalho serão criadas quando houver trabalho de sprint; proteção de branch não é configurada por este documento.

## Passos
1. Vincular alteração a um requisito ou artefato.
2. Atualizar documentos relacionados e matriz de rastreabilidade.
3. Executar `node scripts/validate-docs.mjs`.
4. Abrir PR com motivo, impacto, evidências e pendências.
5. Solicitar revisão de outro integrante; integrar após aceite.

## Commits
```text
docs: adiciona visão do produto
docs: revisa casos de uso
feat: implementa cadastro de usuário
test: verifica isolamento da biblioteca
```

## Qualidade
Não inventar entrevistas, resultados, integrantes ou aprovações. Marcar propostas e pendências. Preservar autoria e licença das fontes; não versionar segredos, bancos locais, dados pessoais ou dependências geradas.
