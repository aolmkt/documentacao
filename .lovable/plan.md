# Ajustar comportamento dos CTAs da Landing V2

## Por quê

A página foi construída por acúmulo emocional, não por hype. Os primeiros CTAs (Hero, Relief) aparecem antes da pessoa atravessar cognitivamente — mandar pro checkout cedo demais quebra o corredor (emocional → racional precoce). Os CTAs do meio/fim aparecem depois da prova, mecanismo e oferta — aí já pode ir direto.

Captura por popup fica fora do escopo (decidido).

## Mudanças

Apenas em `src/pages/LandingV2.tsx`. Nenhum outro arquivo é tocado.

### Comportamento por CTA

| CTA | Local | Ação | Evento |
|---|---|---|---|
| Nav mini ("Quero por R$ 47") | topo fixo | scroll suave → `#comprar` | `AddToWishlist` |
| Hero ("Quero ver isso") | bloco 3 | **mudar:** scroll suave → `#comprar` | **mudar:** `AddToWishlist` |
| Relief ("Ok. mostra isso. →") | bloco 6 | **mudar:** scroll suave → `#comprar` | **mudar:** `AddToWishlist` |
| Offer ("Quero por R$ 47") | bloco 16 | checkout Hotmart | `InitiateCheckout` |
| ForcedChoice (laranja) | bloco 18 | checkout Hotmart | `InitiateCheckout` |
| FinalCTA | bloco 19 | checkout Hotmart | `InitiateCheckout` |

### Implementação técnica

- Reutilizar o handler já existente do Nav (scroll-to-offer + `AddToWishlist`) — extrair pra uma função nomeada (ex: `scrollToOffer`) se ainda não estiver, e plugar nos botões do Hero e do Relief.
- Manter `openHotmart` (com `buildHotmartUrl` + `InitiateCheckout`) nos CTAs do Offer, ForcedChoice e FinalCTA — sem alteração.
- `IntersectionObserver` do `#comprar` continua disparando `AddToCart` (fire-once, threshold 0.3) — sem alteração.
- Markup, copy e estilos inline dos botões permanecem idênticos. Só o `onClick` muda.

## Validação pós-build

1. `/?utm_source=teste&fbclid=xyz` em viewport 390px.
2. Console deve mostrar:
   - Clique no Hero ou Relief → `AddToWishlist`, sem redirect, página rola até o card de preço.
   - Scroll natural até o Offer → `AddToCart` (uma vez).
   - Clique em Offer/ForcedChoice/FinalCTA → `InitiateCheckout`, redirect pro Hotmart com `checkoutMode=10` + UTMs + `sck`.
3. `/b` continua intacta.

## Não tocar

- `public/tracker.js`
- `src/pages/Index.tsx` e `src/components/landing/*`
- `src/App.tsx`, `index.html`, `tailwind.config.ts`, `src/index.css`
