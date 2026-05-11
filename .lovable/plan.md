# Reverter CTAs do topo para checkout direto

Hoje em `src/pages/LandingV2.tsx` os 3 primeiros botões (linhas 155, 200 e 405) chamam `scrollToOffer`, que rola a página até o bloco de preço (`#comprar`) em vez de ir pra Hotmart. Isso obriga o usuário a clicar 2 vezes e está prejudicando conversão.

## Mudança

Trocar nesses 3 botões:
- `href="#comprar"` → `href={HOTMART_URL}`
- `onClick={scrollToOffer}` → `onClick={openHotmart}`

`openHotmart` já existe no arquivo, já dispara `fireInitiateCheckout()` e abre o checkout (mesma função usada nos outros 3 botões da página). Comportamento fica idêntico aos CTAs de baixo.

## O que NÃO muda

- Copy dos botões: igual.
- Estilo visual dos botões: igual.
- Tracking (Pixel, UTMs, `sck`, AddToWishlist, AddToCart): igual.
- Os 3 botões de baixo (já em Hotmart): não tocados.
- `/b`, `/br1`, `/br2`, FakeBrowserBar: não tocados.
- A função `scrollToOffer` pode ficar no arquivo (sem uso) ou ser removida — vou remover pra deixar limpo.

## Arquivos

- editar: `src/pages/LandingV2.tsx` (3 trocas de handler + remover função `scrollToOffer`)
