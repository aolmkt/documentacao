## Objetivo

Preservar o `src` original do anúncio em cookie e concatenar com novos `src` que chegarem via URL (ex: links enviados no inbox), em todas as rotas (`/`, `/b`, `/br1`, `/br2`).

## Regras confirmadas

- **Comportamento (a)**: cookie do `original_src` é gravado APENAS na 1ª visita. Src novo na URL NÃO sobrescreve o cookie — só entra na concatenação daquela sessão.
- **Validade**: 30 dias (igual `external_id`).
- **Token da página `/b`**: `b`.

## Como vai funcionar

Formato final do `src` enviado ao Hotmart:
```text
src = original_src_do_cookie | src_atual_da_url | token_da_pagina
```

Partes vazias/duplicadas são removidas. Exemplos:

| Cenário | Cookie | URL atual | Página | src final |
|---|---|---|---|---|
| 1ª visita do anúncio | (vazio, será gravado) | `?src=ig_camp123` | `/` | `ig_camp123\|pv` |
| Volta pelo inbox | `ig_camp123` | `?src=inbox` | `/b` | `ig_camp123\|inbox\|b` |
| Volta direto sem src | `ig_camp123` | (sem src) | `/b` | `ig_camp123\|b` |
| Backredirect | `ig_camp123` | (sem src) | `/br1` | `ig_camp123\|voltar1` |

## Mudanças técnicas

**1. `public/tracker.js`** — adicionar gravação do `original_src`:
- Novo cookie `original_src` (30 dias, `path=/`, `SameSite=Lax`, `Secure`).
- Na 1ª visita: se a URL tem `?src=...` e o cookie ainda não existe, grava.
- Visitas seguintes: cookie nunca é sobrescrito.

**2. `src/lib/checkout.ts`** — atualizar a montagem do `src` final:
- Ler cookie `original_src`.
- Ler `src` da URL atual.
- Receber token da página (já recebe hoje: `pv`/`voltar1`/`voltar2`; adicionar `b`).
- Concatenar com `|`, remover duplicatas e vazios.

**3. `src/pages/Index.tsx`** (`/b`) — passar token `b` na chamada do checkout (hoje provavelmente não passa nenhum).

## O que NÃO muda

- `external_id` (já está correto, persistindo via cookie).
- Lógica de `sck` no auto-linker da Hotmart.
- Eventos de Pixel.
- Conteúdo visual de qualquer página.

## Após implementar

Republicar o app para que `metodo.rotinapedagogica.com` receba a versão nova.