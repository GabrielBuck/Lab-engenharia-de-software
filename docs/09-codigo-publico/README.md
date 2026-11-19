# Código real do BookLog — recorte acadêmico

Seis arquivos pequenos, reproduzidos integralmente das fontes oficiais. Demonstram contratos, validação e organização dos clientes, **não** formam uma aplicação independente.

## Backend

**NestJS e TypeScript**

| Arquivo | Responsabilidade |
| --- | --- |
| [health.service.ts](backend/health.service.ts) | Health check com injeção de configuração |
| [update-progress.dto.ts](backend/update-progress.dto.ts) | Validação de páginas, duração e tipo de registro |

A API usa controladores HTTP, serviços e DTOs para separar entrada de dados e regras de negócio.

## iOS

**Swift e SwiftUI**

| Arquivo | Responsabilidade |
| --- | --- |
| [PaginationDTOs.swift](ios/PaginationDTOs.swift) | Modelo de paginação e parâmetros de busca |
| [SearchHistoryDTOs.swift](ios/SearchHistoryDTOs.swift) | Contratos de histórico de pesquisa |

Os tipos descrevem a estrutura esperada nas respostas do backend.

## Android

**Kotlin e Jetpack Compose**

| Arquivo | Responsabilidade |
| --- | --- |
| [ApiResult.kt](android/ApiResult.kt) | Resultado tipado e mensagem de erro |
| [BookFormatLabel.kt](android/BookFormatLabel.kt) | Conversão de formato para rótulos visíveis |

Esses arquivos são componentes de apoio de uma aplicação Android maior.

## Proveniência — 19/11/2026

| Projeto oficial privado | Branch | Commit |
| --- | --- | --- |
| Backend: Bin4ryLibr4ry/booklog-backend | main | `27d9511c8ef5c83691b0327cc357e98d3b4d5c1d` |
| iOS: Bin4ryLibr4ry/BookLogApp-IOS | dev | `ad0e4c2c45584fec692f0f35d66e3f47407dd50f` |
| Android: Bin4ryLibr4ry/BookLogApp-Android | dev | `0d546307859e89005c47c91f55d254a8a02a6d11` |

Os arquivos copiados preservam o conteúdo original. Não há sincronização automática com os repositórios privados nem redistribuição das partes sensíveis.

[Validação e limites](validacao-e-limites.md) · [← Índice](../README.md)
