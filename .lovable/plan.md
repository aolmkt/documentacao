## Objetivo

No `/br2`, quando o usuário clica em "voltar" no `FakeBrowserBar` e cai no checkout, marcar com um token próprio (`fuga`) para diferenciar de quem clicou no CTA da página (`voltar2`).

## Arquivo

### `src/pages/Backredirect2.tsx`

Adicionar um segundo URL memoizado só pro botão de voltar:

```ts
const escapeHref = useMemo(
  () => buildHotmartUrl({ br: "2", step: "escape", srcAppend: "fuga" }),
  [],
);
```

Trocar o `onBack` do `FakeBrowserBar` para usar `escapeHref` no lugar de `checkoutHref`:

```tsx
<FakeBrowserBar
  onBack={() => {
    fireInitiateCheckout();
    window.location.assign(escapeHref);
  }}
/>
```

O `checkoutHref` (com `voltar2`) continua sendo usado pelo CTA principal e pelo `useBackredirect` (gesto de voltar do navegador). O `onBack` do botão fake desktop passa a usar `escapeHref` (com `fuga`).

## Resultado no relatório Hotmart

- `src=...|pv|voltar2` → clicou no CTA da página `/br2`
- `src=...|pv|fuga` → clicou no botão de "voltar" desktop e foi empurrado pro checkout
- `step=escape` ajuda a filtrar esse fluxo separadamente

## Fora do escopo

Não tocar em `useBackredirect`, CTA principal, `tracker.js` ou `checkout.ts`.
