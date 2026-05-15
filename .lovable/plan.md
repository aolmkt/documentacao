## Diagnóstico

Hoje o token de página (`pv`/`voltar1`/`voltar2`/`b`) já é injetado **apenas no link de checkout** via `srcAppend`. Bom.

Mas há **uma exceção** que está poluindo a URL do navegador:

**`src/pages/Backredirect2.tsx`** (linhas 62–68, função `onCheckout`):
```ts
// ensure br1 is in the src chain even if user landed straight on /br2
const current = new URLSearchParams(window.location.search);
const prev = current.get("src") || "";
const tokens = prev ? prev.split("|") : [];
if (!tokens.includes("br1")) tokens.unshift("br1");
current.set("src", tokens.join("|"));
history.replaceState(null, "", `${window.location.pathname}?${current.toString()}`);
```

Esse bloco escreve `src=br1|...` na barra de endereço via `replaceState` antes de abrir o checkout. É exatamente o tipo de poluição que você não quer. Além disso usa o token errado (`br1` em vez de `voltar1`).

Nada mais escreve `src` na URL — `withCurrentParams` apenas repassa os params que já vieram do anúncio entre `/` → `/br1` → `/br2`.

## Comportamento depois do ajuste

- URL do navegador (em qualquer rota) carrega **só** o que veio do anúncio (`src=ig...`, `utm_*`, `fbclid`, etc.).
- Link do checkout monta sempre: `original_src (cookie) | src_da_url | token_da_pagina`, com dedupe.
- Tokens por rota:
  - `/` → `pv`
  - `/br1` → `voltar1`
  - `/br2` → `voltar2`
  - `/b` → `b`

Exemplos:

| Rota | URL navegador | src no checkout |
|---|---|---|
| `/?src=ig_camp` | `/?src=ig_camp` | `ig_camp\|pv` |
| Volta → `/br1` | `/br1?src=ig_camp` | `ig_camp\|voltar1` |
| Volta → `/br2` | `/br2?src=ig_camp` | `ig_camp\|voltar2` |
| `/b` direto via inbox | `/b` (sem params) | `ig_camp\|b` (cookie) |

Observação: o token da página anterior (ex.: `voltar1`) **não** aparece na cadeia do `/br2`, porque ele nunca é persistido. Se você quiser rastrear "passou pelo br1 antes do br2" me avisa — daria pra resolver com um cookie separado (`page_path`) sem sujar a URL.

## Mudança técnica

Em `src/pages/Backredirect2.tsx`, função `onCheckout`: remover o bloco que faz `replaceState` na URL. Fica apenas:
```ts
const onCheckout = (e: MouseEvent) => {
  e.preventDefault();
  fireInitiateCheckout();
  window.open(buildHotmartUrl({ br: "2", step: "backredirect-2", srcAppend: "voltar2" }), "_self");
};
```

Nenhuma outra alteração é necessária — `tracker.js`, `checkout.ts`, `LandingV2.tsx`, `Index.tsx` e `Backredirect1.tsx` já estão corretos.