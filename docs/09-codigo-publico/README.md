# Código real selecionado — espelho acadêmico

São **seis arquivos integrais, sem modificação de conteúdo**, copiados das fontes oficiais para demonstrar tecnologias e decisões de engenharia. Não representam o app completo e podem depender de tipos/módulos privados.

| Código | Fonte original | O que demonstra |
| --- | --- | --- |
| [HealthService NestJS](backend/health.service.ts) | Backend, src/health/health.service.ts | Injeção de dependência e health check |
| [UpdateProgressDto NestJS](backend/update-progress.dto.ts) | Backend, src/modules/library/dto/update-progress.dto.ts | Contrato e validação |
| [PaginationDTOs Swift](ios/PaginationDTOs.swift) | iOS, DTOs/Common/PaginationDTOs.swift | Modelo de paginação tipado |
| [SearchHistoryDTOs Swift](ios/SearchHistoryDTOs.swift) | iOS, DTOs/Search/SearchHistoryDTOs.swift | Contratos de histórico de busca |
| [ApiResult Kotlin](android/ApiResult.kt) | Android, core/error/ApiResult.kt | Erros tipados |
| [BookFormatLabel Kotlin](android/BookFormatLabel.kt) | Android, core/text/BookFormatLabel.kt | Regra de apresentação |

## Proveniência das cópias

- Backend: Bin4ryLibr4ry/booklog-backend, branch main, commit **27d9511c8ef5c83691b0327cc357e98d3b4d5c1d**.
- iOS: Bin4ryLibr4ry/BookLogApp-IOS, branch dev, commit **ad0e4c2c45584fec692f0f35d66e3f47407dd50f**.
- Android: Bin4ryLibr4ry/BookLogApp-Android, branch dev, commit **0d546307859e89005c47c91f55d254a8a02a6d11**.

Os repositórios de origem são privados. Não há espelhamento automático e nada desta cópia é enviado de volta à organização. Foram selecionados arquivos sem credenciais, endpoints internos ou dados pessoais.

[Validação e limites](validacao-e-limites.md)
