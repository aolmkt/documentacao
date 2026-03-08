

## Plano: Remover UTMify e criar forwarding de parâmetros da URL

Faz total sentido. O UTMify provavelmente está mexendo nos parâmetros da URL e quebrando o `sck` que o seu tracker.js usa para atribuição. A solução é simples: remover o script do UTMify e garantir que todos os parâmetros da URL atual sejam repassados para o link do checkout da Hotmart.

### Alterações

**1. `index.html`** — Remover o bloco do script UTMify:
```html
<!-- REMOVER -->
<script src="https://cdn.utmify.com.br/scripts/utms/latest.js" ...></script>
```

**2. `src/pages/Index.tsx`** — Atualizar a função `openHotmart` para capturar todos os parâmetros da URL atual e anexá-los ao link do checkout:

```ts
const openHotmart = () => {
  if (typeof (window as any).trackEvent === 'function') {
    (window as any).trackEvent('InitiateCheckout');
  }
  const currentParams = new URLSearchParams(window.location.search);
  const hotmartLink = new URL(hotmartUrl);
  currentParams.forEach((value, key) => {
    hotmartLink.searchParams.set(key, value);
  });
  window.open(hotmartLink.toString(), "_self");
};
```

Isso repassa **todos** os parâmetros (utm_source, utm_medium, utm_campaign, sck, fbclid, etc.) diretamente para o checkout da Hotmart sem depender de scripts terceiros. O `sck` já é tratado pelo auto-linker do `tracker.js` nos links estáticos, e agora o `openHotmart` do JS também vai repassar tudo corretamente.

