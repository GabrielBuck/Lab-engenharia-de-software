# Desenvolvimento, testes e entrega

## Portfólio acadêmico

O repositório público contém documentação, diagramas e um recorte pequeno de código. A validação não exige instalar dependências:

\`\`\`bash
node scripts/validate-docs.mjs
\`\`\`

Requer **Node.js 22 ou superior**. O mesmo comando é executado no GitHub Actions em cada push e pull request.

## Backend oficial — NestJS e TypeScript

Comandos existentes no `package.json` da branch main consultada:

\`\`\`bash
npm ci
npm run build
npm run lint
npm run test
npm run test:cov
npm run start:dev
\`\`\`

Configuração de banco e credenciais deve ser feita exclusivamente no ambiente privado autorizado. O código de inicialização define o prefixo `/v1`, e o controlador de health observado atende `GET /v1/health`. Não há neste repositório conexão a um banco ou necessidade de secrets.

## Clientes oficiais

- **Android:** Java 21 e Android Studio; comandos documentados no projeto: `./gradlew assembleDebug`, `./gradlew testDebugUnitTest` e `./gradlew lintDebug`.
- **iOS:** projeto Swift/SwiftUI desenvolvido e distribuído com o toolchain Xcode.

## Publicação e validação

O GitHub Actions **deste portfólio** testa documentação, links, integridade de referências e busca de segredos. Build, testes unitários e implantação dos produtos reais pertencem aos projetos oficiais.

No Railway, há um serviço de aplicação e um banco para produção e outros dois serviços próprios para homologação, todos no mesmo environment informado pelo painel. A relação completa está no [diagrama](../06-arquitetura/diagrama-implantacao.md).

[← Índice](../README.md)
