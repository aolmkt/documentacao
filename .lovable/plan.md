## Objetivo

Quando o usuário passa o mouse sobre os botões de checkout, o navegador deve mostrar a URL real e completa que será aberta — incluindo `src=...|pv` (ou `voltar1`/`voltar2`/`b`), UTMs do anúncio e `sck`. Hoje o `href` é o `HOTMART_URL` cru e a URL real só é montada no `onClick`.

## Solução

Em cada página, calcular o `href` uma vez via `useMemo` usando `buildHotmartUrl(...)` (a mesma função que já roda no clique). O `onClick` passa a só disparar o pixel + `window.open(checkoutHref, "_self")`, sem reconstruir a URL.

Bônus: se o JS falhar, o `<a>` ainda navega corretamente.

## Arquivos

### `src/pages/LandingV2.tsx`
- Importar `useMemo`.
- Dentro do componente: `const checkoutHref = useMemo(() => buildHotmartUrl({ srcAppend: "pv" }), []);`
- Trocar os 6 `href={HOTMART_URL}` por `href={checkoutHref}` (linhas 148, 193, 398, 713, 776, 806).
- Simplificar `openHotmart` para só fazer pixel + `window.open(checkoutHref, "_self")`.

### `src/pages/Backredirect1.tsx`
- Importar `useMemo`.
- `const checkoutHref = useMemo(() => buildHotmartUrl({ br: "1", step: "backredirect", srcAppend: "voltar1" }), []);`
- Trocar `href={HOTMART_URL}` (linha 323) por `href={checkoutHref}`.
- `onCheckout` usa `checkoutHref` no `window.open`.
- Mesmo `checkoutHref` no `FakeBrowserBar` `onBack` permanece como está (vai para `/br2`, não para Hotmart).

### `src/pages/Backredirect2.tsx`
- Importar `useMemo`.
- `const checkoutHref = useMemo(() => buildHotmartUrl({ br: "2", step: "backredirect-2", srcAppend: "voltar2" }), []);`
- Trocar `href={HOTMART_URL}` (linha 257) por `href={checkoutHref}`.
- `onCheckout`, `useBackredirect` e `FakeBrowserBar onBack` passam a usar `checkoutHref` (mesmo valor que já era reconstruído 3x — vira uma referência só).

### `src/pages/Index.tsx` (`/b`)
- Hoje o CTA principal é `<Button onClick>` (sem `href`), então o hover já não mostra URL nenhuma. Para conseguir o preview correto, envolver o `<Button>` num `<a href={checkoutHref}>` ou trocar por `<a>` estilizado.
- `const checkoutHref = useMemo(() => buildHotmartUrl({ srcAppend: "b" }), []);`
- `openHotmart` usa `checkoutHref`.

## Detalhes técnicos

- `buildHotmartUrl` lê `window.location.search`, cookie `original_src` e `window.trackingData.external_id` (setado pelo `tracker.js` antes do bundle React). Tudo já disponível no primeiro render do client.
- Deps `[]` no `useMemo`: URL atual, cookie e `external_id` não mudam durante a sessão da página.
- Sem mudanças em `tracker.js`, `checkout.ts`, ou na lógica de atribuição.

## Fora do escopo

Não tocar em pixel, eventos ou merge de `src`/UTMs. Apenas mover o cálculo do `href` do clique para o mount.
