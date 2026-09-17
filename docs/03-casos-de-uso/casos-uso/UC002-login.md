# UC002 — Entrar no BookLog

**Estado:** especificação proposta.
**Ator:** Leitor cadastrado.
**Objetivo:** Acessar a biblioteca pessoal.
**Pré-condições:** Conta ativa existente.
**Gatilho:** o ator inicia a ação descrita no primeiro passo.

## Fluxo principal

1. Abrir Entrar.
2. Informar email e senha.
3. Sistema valida credenciais.
4. Sistema inicia sessão.
5. Aplicativo apresenta biblioteca pessoal.

## Fluxos alternativos

- A1 — Credenciais inválidas: mensagem genérica, sem sessão.
- A2 — Falha de rede: manter tela e oferecer nova tentativa.
- A3 — Sessão expirada em uso posterior: solicitar autenticação antes da operação.

## Pós-condições

Sessão válida permite acesso apenas aos recursos autorizados.

**Rastreabilidade:** RF002; RN002. Ver [matriz](../../02-requisitos/rastreabilidade.md).

---

[Índice da documentação](../../README.md) · [Página do projeto](../../../README.md)
