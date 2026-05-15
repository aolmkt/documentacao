# Padronizar `src` no checkout para identificar a página da venda

Hoje o token `src` que vai pra Hotmart está inconsistente: a landing principal não envia nenhum token, e as páginas de voltar mandam `br1` / `br2`. Você pediu `pv`, `voltar1` e `voltar2`.

A função `buildHotmartUrl()` (em `src/lib/checkout.ts`) já faz a concatenação correta — pega o `src` que veio na URL do anúncio, divide por `|`, e adiciona o token novo no final sem duplicar. Só precisa ser chamada com o token certo em cada página.

## Mudanças

| Página | Arquivo | Token atual | Token novo |
|---|---|---|---|
| Principal `/` | `src/pages/LandingV2.tsx` (`openHotmart`, linha 47) | (nenhum) | `pv` |
| Voltar 1 `/br1` | `src/pages/Backredirect1.tsx` (linha 53) | `br1` | `voltar1` |
| Voltar 2 `/br2` | `src/pages/Backredirect2.tsx` (linhas 33, 69, 77) | `br2` | `voltar2` |

Resultado: se o anúncio mandar `?src=fb_campanha7`, ao clicar no CTA da principal o usuário vai pra Hotmart com `src=fb_campanha7|pv`. Se cair no `/br1` e clicar, vira `src=fb_campanha7|pv|voltar1`. Em `/br2`, `src=fb_campanha7|pv|voltar1|voltar2`. Você consegue ver na Hotmart exatamente onde a venda fechou.

## O que NÃO muda

- Lógica do `buildHotmartUrl` (já funciona, só estava sendo chamada errado).
- UTMs, `sck`, Pixel, copy, visual.
- `/b` (legado) continua igual.
- 6 botões da `LandingV2` usam o mesmo `openHotmart` — todos passam a mandar `pv` automaticamente.
