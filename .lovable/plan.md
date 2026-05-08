## Contexto

Você mandou o handoff oficial (`relatorio.zip`) com **fonte da verdade visual e de copy** — `direction-caderno.jsx` (1359 linhas, 21 blocos, copy iterada 38x) + `README.md` com tokens, fontes e regras. A `LandingV2.tsx` que existe hoje foi reconstruída por screenshot e ficou aproximada — copy parafraseada, ordem diferente, tokens fora do spec, fontes erradas (Playfair em vez de Source Serif 4; Courier Prime em vez de JetBrains Mono).

Vou refazer do zero seguindo o handoff **literalmente**, e reaproveitar a infra de tracking que já está certa.

## O que vou fazer

### 1. Substituir `src/pages/LandingV2.tsx` (rota `/`)

Reconstruir os **21 blocos na ordem exata** do README:

1. Notice (faixa preta amarela)
2. Nav (logo + CTA mini "Quero por R$ 47")
3. Hero ("Você viu. / E deixou passar.")
4. Translation (5 pares pensa/escreve)
5. Sinking (preto, "E o pior nem é o tempo")
6. Relief (longo bloco com "Para.", "tem estrutura", CTA "Ok. mostra isso. →")
7. Proof (preto, antes/depois Lara)
8. Voice (preto, 6 pensamentos 22h47)
9. WhatYouGet (4 itens com check)
10. Accumulation (preto, "Lara não foi exceção")
11. BeforeAfter (Miguel, antes/depois)
12. Method (4 passos 01-04)
13. Differential ("Você não trava por preguiça" + grid antigo×novo)
14. Testimonials (Letícia, Andreia, Patrícia)
15. Inevitability (preto, 2 citações contaminadas)
16. Offer (`#comprar`, preto, R$47 manuscrito amarelo)
17. FAQ (7 perguntas)
18. ForcedChoice (laranja, opção 1 vs opção 2)
19. FinalCTA ("Você já viu. é escolha.")
20. Trap (preto, "Se você fechar essa página agora")
21. Footer

Markup, copy e estilos inline literais do `direction-caderno.jsx`. Sem parafrasear.

### 2. Tracking & Hotmart (reaproveitar — está correto)

Mantenho a infra atual de `LandingV2.tsx`:
- `buildHotmartUrl()` com merge de UTMs + fallback `sck` via `window.trackingData.external_id`
- **Todos os 5 CTAs** (Nav, Hero, Relief, Offer, ForcedChoice, FinalCTA) substituem `href="#"` / `href="#comprar"` por `onClick={openHotmart}` (com `trackEvent('InitiateCheckout')` antes do redirect)
- Exceção: o CTA mini do Nav é "scrollToOffer" → rola pra `#comprar` e dispara `AddToWishlist` (manter padrão da `/b`)
- `IntersectionObserver` no bloco Offer (`#comprar`) → `AddToCart` fire-once, threshold 0.3
- `tracker.js` continua carregado pelo `index.html` (já está)

### 3. Fontes (corrigir no `index.html`)

Trocar o link do Google Fonts atual por:
```
Caveat:wght@400;600;700
Source Serif 4:ital,opsz,wght@0,8..60,400..700;1,8..60,400..500
JetBrains Mono:wght@400;500
```

Remover Playfair Display, Courier Prime, Inter (não usados pelo handoff). Ajustar `tailwind.config.ts` (`font-serif` → Source Serif 4, `font-hand` → Caveat, `font-mono` → JetBrains Mono).

### 4. Tokens CSS (`src/index.css`)

Substituir tokens caderno atuais pelos do README:
```
--paper #f5efe4   --paper-2 #ebe2d2
--ink #2a2520     --ink-deep #1a1612   --ink-soft #3a332b
--text-muted #5a5246  --text-faded #7a6e5f  --text-dim #b8a890
--text-cream #d4c8b3  --text-light #e8dfd0
--brick #c45a3e   --brick-deep #8d3d28
--mustard #f5c850 --mustard-wash rgba(245,200,80,0.55)
--olive #7aa05c   --margin-red #d96b6b
```

Adoto a abordagem do handoff: **estilos inline pixel-a-pixel** dentro do `LandingV2.tsx` (mais fiel ao spec, menos risco de Tailwind atrapalhar). Tokens ficam disponíveis pra futuras edições.

### 5. SEO

- `<title>`: "Você viu. E deixou passar. — Método Rotina Pedagógica · R$ 47" (já está)
- `<meta description>`: "O método tira o que já está na sua cabeça e devolve em relatório aprovado. Sem você escrever uma linha. R$ 47, acesso imediato." (já está)
- H1 único: "Você viu. E deixou passar."
- `lang="pt-BR"` (já está), max-width 480px mobile-first

### 6. Não tocar

- `public/tracker.js` — segue intacto
- `src/pages/Index.tsx` e `src/components/landing/*` — continuam servindo `/b` com `noindex`
- `src/App.tsx` — rota `/` já aponta pra `LandingV2`

## Ponto de atenção: memória do projeto

A memória atual diz que o produto deve aparecer como **"Método Relatório Evolutivo com IA"** em primary+bold. **O handoff proíbe isso explicitamente** ("IA é invisível. Nunca mencionar IA, inteligência artificial, GPT, prompt"). Vou seguir o handoff (que é mais novo e oficial) e atualizar a memória depois pra refletir a nova diretriz: na `/` a marca é "Método Rotina Pedagógica" (ou só "o método") e IA não aparece. Na `/b` a regra antiga continua valendo.

## Validação pós-build

- `/?utm_source=teste&fbclid=xyz` → todos CTAs abrem Hotmart com `checkoutMode=10` + UTMs + `sck`
- Console: `PageView`, `ViewContent`, `AddToWishlist` (CTA do Nav), `AddToCart` (scroll até Offer), `InitiateCheckout` (CTAs principais)
- Visual: comparar lado a lado com `preview.html` do handoff em viewport 390px
- `/b` continua intacta com tracking próprio
