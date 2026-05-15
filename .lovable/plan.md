# Análise geral — Método Rotina Pedagógica

Fiz um raio-X de `/` (LandingV2), `/b` (legacy), `/br1`, `/br2`, `index.html`, `tracker.js` e da estrutura React/Vite. Abaixo, sugestões agrupadas por impacto. Cada item indica **o quê**, **por quê** e **como** — você escolhe quais aprovar.

---

## 1) Performance de carregamento

### 1.1 Code-split por rota (impacto alto, custo baixo)
Hoje `App.tsx` importa `LandingV2`, `Index` (legacy pesado, 16+ seções), `Backredirect1`, `Backredirect2` e `NotFound` de forma síncrona. Quem entra em `/` baixa o bundle inteiro do `/b` e dos backredirects.
- **Como:** trocar para `React.lazy` + `Suspense` em cada `Route`. Ganho típico em landings: 30-50% menos JS no first load.

### 1.2 Fontes Google estão bloqueando o render
`index.html` carrega Caveat + Source Serif 4 (com axes 8..60 em 4 weights itálico/normal) + JetBrains Mono num único `<link rel="stylesheet">`. É muito CSS, e bloqueia o paint.
- **Como:**
  - Reduzir weights pedidos (manter só os usados: Source Serif 400/600, Caveat 700, JetBrains Mono 500).
  - Adicionar `media="print" onload="this.media='all'"` ou usar `<link rel="preload" as="style">` + swap.
  - Considerar self-host via `@fontsource/*` para eliminar 2 hops DNS (fonts.googleapis + fonts.gstatic).

### 1.3 Imagens do legacy não otimizadas
`src/assets/step3-relatorio.jpeg` tem 665 KB; os 3 somam ~1,1 MB. São JPEG. A `/` (V2) não usa imagens, mas se quem entra cair no `/b` (ou se você reaproveitar), isso pesa.
- **Como:** converter pra WebP/AVIF (`vite-imagetools` ou pré-processar com squoosh), adicionar `loading="lazy"` e `width/height` explícitos para evitar CLS.

### 1.4 `tracker.js` — pequenos ajustes
- Já está com `defer` ✓.
- O `autoLink` roda em `setTimeout(1200)`. Em SPAs, links que aparecem por scroll/lazy podem não ter `sck`. Sugiro: trocar por `MutationObserver` em `document.body` filtrando `a[href*="pay.hotmart.com"]` (ou centralizar tudo via `buildHotmartUrl` e remover o autoLink). **Já existe `buildHotmartUrl` com fallback de `sck`** — o autoLink hoje é redundante para os CTAs internos.
- `fetch('https://api64.ipify.org')` adiciona latência antes do PageView. Considerar disparar PageView **sem** IP (o backend pode resolver via headers) e enviar IP em segundo evento — assim o pixel sobe antes.

### 1.5 Dependências instaladas mas não usadas
`package.json` traz **40+ Radix UI**, `recharts`, `embla-carousel`, `react-day-picker`, `vaul`, `cmdk`, `input-otp`, `react-resizable-panels`, `react-hook-form`, `zod`. Nenhum deles aparece nas landings/backredirects.
- **Como:** rodar `bunx depcheck` e remover o que não é usado. Ganho de install/build, e elimina superfície de manutenção/CVEs.

---

## 2) Conversão

### 2.1 Hotmart abrindo no mesmo tab via `_self` (risco)
Todas as CTAs fazem `window.open(checkoutHref, "_self")`. Se o usuário voltar do Hotmart sem comprar, o `useBackredirect` já cuida — ok. Mas hoje o link `<a href={checkoutHref}>` recebe `e.preventDefault()` e abre via JS. Se o JS falhar, o link ainda funciona ✓ (bom). Sugestão: deixar o `<a>` com `target="_self"` explícito e remover o `window.open` (deixar o navegador navegar) — isso mantém a barra de endereço durante o load do Hotmart, melhora UX e não perde o evento `InitiateCheckout` se ele for `keepalive` (já é, no `tracker.js`).

### 2.2 Eventos de conversão mais ricos
Hoje só `InitiateCheckout` / `AddToCart` / `AddToWishlist`. Sugestões:
- **Scroll depth** (50%, 75%, 90%) como `CustomEvent` — ajuda o pixel/Meta a otimizar audiências.
- **Time on page** > 60s como sinal de engajamento.
- **CTA click breakdown:** passar `{ position: 'hero' | 'middle' | 'price' | 'br1' | 'br2' }` no `data` do `trackEvent('InitiateCheckout', {...})`. Isso já tem suporte no `tracker.js` (`fbq(method, n, data, ...)`). Hoje você não consegue saber qual CTA converteu mais.

### 2.3 Sticky CTA mobile na `/`
A LandingV2 tem 850 linhas — o usuário rola muito até a próxima CTA. Um botão fixo no rodapé mobile ("R$47 · acesso imediato →") tipicamente sobe conversão em landings longas. Pode aparecer só após o usuário passar do hero (ex.: `IntersectionObserver` no hero).

### 2.4 Prova social mais visível
Os depoimentos existem no array `testimonials`, mas estão enterrados no meio. Sugestões:
- Strip de "X professoras já organizaram seus relatórios" abaixo do hero.
- Ancorar 1 depoimento curto perto da CTA de preço.

### 2.5 Garantia / risk reversal
`/br1` cita "7 dias pra ver isso funcionando". Mas a `/` principal não tem essa garantia visível perto da CTA. Adicionar uma linha tipo "garantia de 7 dias · Hotmart" colado ao botão reduz fricção.

### 2.6 Backredirect2 — botão `voltar` envia pra checkout
Já implementado ✓ (token `fuga`). Sugestão extra: registrar evento custom `EscapeAttempt` antes do redirect, separado do `InitiateCheckout`, pra você medir taxa de fuga em painel próprio.

### 2.7 Meta tags OG sem imagem
`og:image` não está definido. Ao compartilhar no WhatsApp/IG, sai sem preview visual — perda de CTR enorme. Adicionar `og:image` (1200x630) e `twitter:image`.

### 2.8 `og:locale` e schema.org
- Adicionar `<meta property="og:locale" content="pt_BR">`.
- Adicionar JSON-LD `Product` com `offers.price=47`, `priceCurrency=BRL`, `availability` — ajuda em rich snippets do Google se um dia indexar.

---

## 3) Detalhes técnicos / código

### 3.1 Estilos inline gigantes em `LandingV2.tsx` (850 linhas)
Tudo está como `style={{...}}` inline. Isso:
- Polui o React tree (re-render recria objetos a cada render).
- Impede reuso e dificulta dark mode/responsividade.
- **Como:** quebrar em subcomponentes (`<HeroV2/>`, `<TranslationSection/>`, etc.) e/ou usar Tailwind com tokens semânticos do `index.css` (que já existem). Não muda visual, só estrutura.

### 3.2 `(window as any).trackEvent` espalhado
Tipar uma vez em `src/vite-env.d.ts`:
```ts
declare global {
  interface Window {
    trackEvent?: (name: string, data?: Record<string, unknown>) => void;
    trackingData?: { external_id?: string };
  }
}
```
Remove os `as any` e dá autocomplete.

### 3.3 `useBackredirect` empilha histórico em toda navegação SPA
Como hoje só roda em pages dedicadas (LandingV2, Br1, Br2), tudo bem. Mas se um dia adicionar links internos, o `pushState` no mount pode confundir. Considerar guardar um flag pra rodar só uma vez por sessão.

### 3.4 SEO — duplicação entre `/` e `/b`
`/b` tem `noindex` ✓. Mas `/` é nova, com copy totalmente diferente. Garantir que o canonical aponta sempre pra `/` (já está). Adicionar `<link rel="alternate" hreflang="pt-BR">` explícito.

### 3.5 `robots.txt`
Vale conferir se está liberando tudo exceto `/b`, `/br1`, `/br2`. Hoje os backredirects têm `noindex` via meta runtime, mas o crawler ainda gasta crawl budget batendo neles. Adicionar `Disallow: /br1` e `/br2` no `robots.txt`.

### 3.6 Acessibilidade
- O hero V2 usa `<h1>` ✓. Mas várias seções abaixo usam `<div>` no lugar de `<h2>` — ruim pra leitor de tela e SEO.
- Botões CTA são `<a>` estilizados. Adicionar `role="button"` quando o `<a>` não navega via href real.
- Cores: laranja `#c45a3e` sobre bege `#f5efe4` está em ~4.5:1, no limite. Texto pequeno laranja em parágrafos pode falhar WCAG AA.

---

## Como propõo seguir

Dado que são muitas frentes, sugiro priorizar em **3 ondas** e implementar uma de cada vez (cada onda em plano próprio):

1. **Onda 1 — quick wins de performance** (1.1 code-split, 1.2 fontes, 1.5 dependências, 3.5 robots).
2. **Onda 2 — conversão** (2.1 link nativo, 2.2 eventos ricos, 2.3 sticky CTA, 2.5 garantia, 2.7 og:image).
3. **Onda 3 — qualidade técnica** (3.1 refactor estilos, 3.2 tipos globais, 3.6 acessibilidade).

Me diz qual onda você quer atacar primeiro (ou itens específicos) que eu monto o plano de implementação detalhado.
