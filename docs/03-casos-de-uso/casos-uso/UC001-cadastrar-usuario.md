# UC001 — Cadastrar usuário
**Estado:** especificação proposta.
**Ator:** Visitante.
**Objetivo:** Criar uma conta pessoal.
**Pré-condições:** Não possuir conta com o email informado; API disponível.
**Gatilho:** o ator inicia a ação descrita no primeiro passo.

## Fluxo principal
1. Acessar Criar conta.
2. Informar nome, username, email e senha.
3. Enviar formulário.
4. Sistema valida os dados e verifica unicidade.
5. Sistema registra a conta e confirma criação.

## Fluxos alternativos
- A1 — Dados inválidos: indicar campos e preservar dados não sensíveis.
- A2 — Email utilizado: impedir duplicata e orientar entrada/recuperação.
- A3 — Falha de rede: informar falha sem confirmar criação; permitir tentativa.

## Pós-condições
Conta criada uma única vez. Em falha, não criar conta parcial.

**Rastreabilidade:** RF001; RN001, RN007. Ver [matriz](../../02-requisitos/rastreabilidade.md).
