

## Plano: Corrigir repasse do external_id para o checkout da Hotmart

### Problema
O botão de compra usa `window.open()` via `onClick`, então o auto-linker do `tracker.js` (que só modifica tags `<a>`) não injeta o `sck`. Se o visitante chega sem `?sck=` na URL, o checkout da Hotmart abre sem nenhum identificador de atribuição.

### Solução

**`src/pages/Index.tsx`** — Alterar a função `openHotmart`:

Após capturar os parâmetros da URL e montar o link da Hotmart, verificar se o parâmetro `sck` já existe. Se não existir, buscar o `external_id` do `window.trackingData` (definido pelo `tracker.js`) e adicioná-lo como `sck`.

```typescript
const openHotmart = () => {
  if (typeof (window as any).trackEvent === 'function') {
    (window as any).trackEvent('InitiateCheckout');
  }
  const currentParams = new URLSearchParams(window.location.search);
  const hotmartLink = new URL(hotmartUrl);
  currentParams.forEach((value, key) => {
    hotmartLink.searchParams.set(key, value);
  });

  // Garantir que o sck sempre seja enviado
  if (!hotmartLink.searchParams.get('sck')) {
    const extId = (window as any).trackingData?.external_id;
    if (extId) {
      hotmartLink.searchParams.set('sck', extId);
    }
  }

  window.open(hotmartLink.toString(), "_self");
};
```

### O que muda
- Visitante chega com `?sck=abc` → continua funcionando como antes
- Visitante chega sem parâmetros → o `external_id` gerado pelo tracker é incluído como `sck` no checkout

### O que não muda
- Layout, cores, botões, textos
- Lógica do tracker.js
- Eventos de tracking (InitiateCheckout, AddToCart, etc.)

