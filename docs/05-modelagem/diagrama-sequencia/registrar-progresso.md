# Sequência — registrar progresso

Cenário UC004; arquitetura proposta. A chamada é conceitual e não substitui o contrato HTTP.

```mermaid
sequenceDiagram
  actor Leitor
  participant App as Aplicativo iOS
  participant API as Controller + Auth Guard
  participant Servico as Library Service
  participant Repo as Library Repository
  participant DB as PostgreSQL
  Leitor->>App: Informar página e salvar
  App->>API: Atualizar progresso com sessão
  alt Sessão ausente ou inválida
    API-->>App: Negar acesso
    App-->>Leitor: Solicitar entrada
  else Sessão válida
    API->>Servico: atualizarProgresso(usuario, item, pagina)
    Servico->>Repo: buscar item do usuário
    Repo->>DB: Consultar item e livro
    DB-->>Repo: Resultado
    Repo-->>Servico: Item e total de páginas
    alt Item alheio/inexistente ou página inválida
      Servico-->>API: Erro de domínio
      API-->>App: Rejeição sem alteração
      App-->>Leitor: Explicar falha
    else Dados válidos
      Servico->>Repo: salvar página
      Repo->>DB: Persistir alteração
      alt Gravação confirmada
        DB-->>Repo: Confirmação
        Repo-->>Servico: Item atualizado
        Servico-->>API: Resultado
        API-->>App: Sucesso
        App-->>Leitor: Exibir progresso salvo
      else Falha de persistência
        DB-->>Repo: Erro
        Repo-->>Servico: Falha
        Servico-->>API: Operação não confirmada
        API-->>App: Erro
        App-->>Leitor: Manter edição e oferecer nova tentativa
      end
    end
  end
```

---

[Índice da documentação](../../README.md) · [Página do projeto](../../../README.md)
