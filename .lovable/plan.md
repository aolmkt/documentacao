

## Plano: Adicionar script do UTMify

Adicionar o script do UTMify no `<head>` do `index.html`, antes do fechamento do `</head>`.

### Alteração

**`index.html`** — Adicionar após o script do tracker.js:

```html
<script
  src="https://cdn.utmify.com.br/scripts/utms/latest.js"
  data-utmify-prevent-subids
  async
  defer
></script>
```

