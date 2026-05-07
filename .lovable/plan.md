## Resposta curta
Sim, consigo. Já acessei a página do Claude, li toda a copy (529 linhas) e capturei a renderização visual — tenho material suficiente pra reconstruir como componentes React no projeto, promover pra `/` e mover a atual pra `/b` mantendo o tracking 100%.

## O que vou fazer

### 1. Reconstruir a nova landing como React
Estética muito diferente da atual — papel pautado de caderno, terracota, serif clássica + handwritten:
- Fundo creme com **linhas horizontais de caderno** + **margem vertical vermelha**
- Tipografia: **Playfair Display** (títulos), **Caveat** (anotações handwritten tipo "professora,", "acesso imediato ↓"), **Courier Prime** (microcopy mono), **Inter** (corpo)
- Acento principal: terracota `#c45a3e` (botões, logo, links)
- Marca-texto amarelo em frases-chave ("E deixou passar.")
- Faixa preta no topo com texto amarelo

### 2. Estrutura (18 seções, na ordem da página do Claude)
TopBar preta · Header · Hero ("Você viu. E deixou passar.") · Tradução pensamento→relatório (5 pares) · Bloco emocional ("espera. lê isso devagar.") · Antes/depois Lara · Cena 22h47 · O que você recebe (4 entregas) · Antes/depois Miguel · Quatro passos (01-04) · Comparativo "jeito antigo vs Método" · 3 depoimentos · Fechamento emocional · **Card de oferta** (id `#comprar`) · FAQ (7 perguntas) · "Opção 1 vs Opção 2" · Fechamento final · Footer

### 3. Roteamento
- `/` → **nova landing** (`LandingV2`)
- `/b` → landing atual (`Index` intacto, com `<meta robots noindex>` injetado)
- Compartilhamentos antigos pra `/` continuam funcionando

### 4. Tracking (paridade total com a atual)
A nova landing usa exatamente a mesma lógica do `Index.tsx` atual:
- `openHotmart()`: merge de UTMs + fallback de `sck` via `window.trackingData.external_id` + `trackEvent('InitiateCheckout')` antes do redirect
- `scrollToOffer()`: dispara `AddToWishlist` e rola até `#comprar`
- `IntersectionObserver` no card de oferta dispara `AddToCart` (fire-once, threshold 0.3)
- `tracker.js` continua igual (já carregado pelo `index.html`, vale pras duas rotas)
- URL Hotmart segue `https://pay.hotmart.com/L104708967T?checkoutMode=10`

### 5. Arquivos
**Criar:** `src/pages/LandingV2.tsx` + `src/components/landing-v2/` (~17 componentes pequenos: TopBar, Header, HeroV2, MindToReportSection, EmotionalBreakSection, BeforeAfterLaraSection, MidnightSceneSection, WhatYouGetV2, BeforeAfterMiguelSection, FourStepsSection, OldVsNewSection, TestimonialsSection, EmotionalCloseSection, OfferCardSection, FaqV2, TwoOptionsSection, FinalCloseSection, FooterV2 + helpers PaperBackground/Highlight/Handwritten/MonoLine/CtaButton).

**Editar:** `src/App.tsx` (rotas), `src/index.css` (tokens novos: `--paper-bg`, `--paper-line`, `--paper-margin`, `--terracotta`, `--ink`, `--highlight-yellow`, `--paper-cream`), `tailwind.config.ts` (fontes `display`/`hand`/`mono` + cores), `index.html` (Google Fonts: Playfair Display, Caveat, Courier Prime).

**Não tocar:** `public/tracker.js`, `src/components/landing/*` (ficam pra `/b`).

### 6. SEO
- `<title>` e `<meta description>` novos focados na copy nova
- H1 único: "Você viu. E deixou passar."
- `/b` com `noindex`

## Dois pontos que preciso confirmar antes de implementar

1. **Memória do projeto vs nova copy**: a memória atual diz que o produto é "tech educacional moderna, linguagem profissional estruturada" e que o nome "Método Relatório Evolutivo com IA" deve sempre aparecer em primary+bold. **A nova landing quebra as duas coisas** — tom super coloquial/confessional, e o nome do produto não aparece em momento nenhum. Sigo a copy nova como veio (e atualizo a memória depois) ou quer manter alguma dessas regras?

2. **Fidelidade visual**: vou reproduzir o visual fielmente usando a screenshot que já capturei como referência. Detalhes finos (peso exato da serif, espaçamento das linhas do caderno) podem precisar de uma rodada de polimento depois — tranquilo seguir nessa lógica?

## Validação pós-build
- `/?utm_source=teste&fbclid=xyz` → CTAs abrem Hotmart com `checkoutMode=10` + UTMs + `sck` preservados
- Console: `PageView`, `ViewContent`, `AddToCart`, `AddToWishlist`, `InitiateCheckout` disparando nos momentos certos
- `/b` abre a landing antiga normalmente, tracking dela intacto