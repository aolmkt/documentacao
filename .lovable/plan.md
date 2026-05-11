# Backredirect infalível com pushState trick

## Objetivo

Capturar o botão "voltar" do navegador em 3 pontos do funil:

```
/  (LandingV2)        --voltar-->  /br1?<params>
/br1 (Backredirect1)  --voltar-->  /br2?<params>
/br2 (Backredirect2)  --voltar-->  checkout Hotmart (com UTMs + sck + br=2 + step=backredirect-2)
```

Os parâmetros da URL atual (utm_*, fbclid, src, gclid, etc.) são sempre preservados no destino.

## Como funciona (técnica)

O "pushState trick" é o padrão de mercado:

1. Ao montar a página, a gente faz `history.pushState(null, '', window.location.href)` — empurra uma entrada falsa no histórico, idêntica à URL atual.
2. Adiciona um listener `popstate` (disparado quando o usuário clica voltar).
3. Quando o popstate dispara, em vez de o navegador sair da página, a gente intercepta e chama `window.location.replace(destino)`.
4. No unmount, remove o listener.

Isso prende o usuário no funil sem quebrar refresh, scroll ou navegação normal por links.

## Arquivo novo

**`src/lib/backredirect.ts`** — hook reutilizável `useBackredirect(getDestination)`:

- Recebe uma função que retorna a URL de destino (pra poder ser dinâmica, ex: o checkout precisa do `sck` mais recente).
- Faz o `pushState` no mount + listener `popstate`.
- Cleanup no unmount.
- Helper `withCurrentParams(path)` que pega `window.location.search` e cola no path (ex: `/br1?utm_source=fb&fbclid=xyz&src=ad01`).

## Edits

### `src/pages/LandingV2.tsx`
Adicionar `useBackredirect(() => withCurrentParams('/br1'))` no topo do componente.

### `src/pages/Backredirect1.tsx`
Adicionar `useBackredirect(() => withCurrentParams('/br2'))`.

### `src/pages/Backredirect2.tsx`
Adicionar `useBackredirect(() => buildHotmartUrl({ br: '2', step: 'backredirect-2', srcAppend: 'br2' }))`.

Antes do redirect pro checkout, dispara `fireInitiateCheckout()` (consistência com os CTAs).

## O que NÃO muda

- Design das páginas.
- Tracking existente (PageView, ViewContent, AddToWishlist, InitiateCheckout nos CTAs).
- Rotas.
- `tracker.js`, `index.html`, `checkout.ts` (já tem tudo que precisa).
- `/b` (legacy) — fica intacto, sem backredirect.

## Detalhes técnicos

- **Replace vs push**: uso `location.replace()` no destino pra não poluir o histórico (o usuário não fica empilhando entradas se ficar martelando voltar).
- **SSR-safe**: hook só roda dentro de `useEffect`, então `window` sempre existe.
- **Mobile**: pushState trick funciona em iOS Safari, Chrome Android, Firefox mobile (testado em mercado há anos).
- **Edge case refresh**: o pushState é re-aplicado a cada mount, então refresh continua funcionando normal.
- **Edge case link interno**: como só temos `<a href>` externos (Hotmart), não há conflito com navegação SPA.

## Validação

1. Abrir `/?utm_source=fb&src=ad01` → apertar voltar → deve ir pra `/br1?utm_source=fb&src=ad01`.
2. Em `/br1` → voltar → `/br2?utm_source=fb&src=ad01`.
3. Em `/br2` → voltar → `pay.hotmart.com/L104708967T?...&src=ad01%7Cbr2&br=2&step=backredirect-2&sck=...` + evento `InitiateCheckout` no console.
4. Refresh em qualquer rota: continua funcionando, params preservados.
5. CTAs normais: continuam indo direto pro checkout sem interferência.
