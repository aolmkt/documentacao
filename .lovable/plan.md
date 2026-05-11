# Adicionar 2 páginas de Backredirect (Caderno)

## O que vai ser feito

Implementar as duas páginas de backredirect do handoff (`relatorio_1.zip` / `relatorio_2.zip`) como rotas React no projeto, mantendo o design exatamente como nos arquivos `direction-backredirect.jsx` e `direction-backredirect-2.jsx` (paleta creme/terracota/preto, fontes Caveat + Source Serif 4, max-width 480px, mobile-first, todos os estilos inline preservados).

Substituindo o `CHECKOUT_BASE = 'https://pay.hotmart.com/checkout'` placeholder dos arquivos originais pela mesma lógica já usada em `LandingV2.tsx`: link real do Hotmart + merge de UTMs + `sck` do tracker, tudo plugado no `tracker.js` global (que já carrega no `index.html`).

## Rotas

- `/br1` → primeira backredirect ("você já viu / aquilo que você viu não vai parar de acontecer…")
- `/br2` → segunda backredirect ("agora assume / última vez")

Ambas com `noindex,nofollow` (mesma técnica do `LegacyLanding` em `App.tsx`) e `<title>` / `<meta description>` próprios (já vêm no handoff).

## Tracking e checkout (igual ao `/`)

Em cada página:

1. **Pixel/PageView/ViewContent**: já são disparados pelo `tracker.js` em qualquer rota.
2. **InitiateCheckout** dispara no clique do CTA, antes do redirect (mesmo padrão do `openHotmart` da `LandingV2`).
3. **AddToWishlist** dispara no `useEffect` ao montar a página (a pessoa "voltou" — sinal forte de interesse). _Único desvio em relação ao handoff, que não tinha tracking._
4. **URL do checkout**: `https://pay.hotmart.com/L104708967T?checkoutMode=10` + merge de todos os params da URL atual (UTMs, fbclid, src) + `sck = trackingData.external_id`. Adiciona `br=1` / `br=2` e `step=backredirect` / `step=backredirect-2` para diferenciar a origem no relatório do Hotmart, sem sobrescrever o `src` original (concatena com `|br1` / `|br2` exatamente como o handoff propõe).

## Arquivos

**Criar:**
- `src/pages/Backredirect1.tsx` — porte fiel do `direction-backredirect.jsx` (componentes `BackTop`, `BackHeadline`, `BackBeforeAfter`, `BackMicroPunch`, `BackPrice`, `BackFooter`).
- `src/pages/Backredirect2.tsx` — porte fiel do `direction-backredirect-2.jsx` (componentes `Br2Top`, `Br2Body`, `Br2Verdict`, `Br2Door`, `Br2Footer`).
- `src/lib/checkout.ts` — extrair `buildHotmartUrl` (hoje inline em `LandingV2.tsx`) numa função única reusável, com parâmetro opcional `extra` para injetar `{ br, step, srcAppend }`. `LandingV2.tsx` passa a importar daqui (refactor pequeno, sem mudança de comportamento).

**Editar:**
- `src/App.tsx` — adicionar rotas `/br1` e `/br2`, cada uma envolvida num wrapper que injeta `<meta name="robots" content="noindex,nofollow">` (mesma técnica do `LegacyLanding`).
- `src/pages/LandingV2.tsx` — trocar a função `buildHotmartUrl` local pelo import de `src/lib/checkout.ts`. Nada mais muda.

**Não tocar:** `public/tracker.js`, `index.html`, `src/index.css`, `tailwind.config.ts`, `src/pages/Index.tsx`, `src/components/landing/*`.

## Detalhes técnicos

- **TypeScript**: portar os JSX como `.tsx`, tipar `CSSProperties` nos style objects (mesmo padrão de `LandingV2.tsx`).
- **Fontes**: Caveat e Source Serif 4 já estão pré-carregadas no `index.html` da Landing principal — reaproveitar. JetBrains Mono também já está; trocar `ui-monospace` do handoff por `JetBrains Mono` para casar visual com o resto do projeto, ou manter `ui-monospace` se o usuário preferir fidelidade absoluta (ver pergunta abaixo, se houver). Por padrão, manter `ui-monospace, "SF Mono", Menlo, monospace` igual ao handoff.
- **Title/description por rota**: setados via `useEffect` (mesma técnica do `LegacyLanding`), restaurados no unmount.
- **Backredirect 2**: preserva a lógica `src` concat (`br1|br2`) do handoff dentro da `buildHotmartUrl` via param `srcAppend: 'br2'`.

## Validação pós-implementação

1. Abrir `/br1?utm_source=fb&fbclid=xyz&src=ad01` em viewport 390px:
   - Console: `PageView`, `ViewContent`, `AddToWishlist` no load.
   - Clique no CTA: `InitiateCheckout` → redirect para `pay.hotmart.com/L104708967T?checkoutMode=10&utm_source=fb&fbclid=xyz&src=ad01%7Cbr1&sck=...&br=1&step=backredirect`.
2. Mesma checagem em `/br2` (com `src` virando `ad01|br1|br2`, `br=2`, `step=backredirect-2`).
3. `/` (LandingV2) continua funcionando igual após o refactor do `buildHotmartUrl`.
4. `/b` (legacy) intacta.
