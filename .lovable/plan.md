
# Barra de navegação fake para in-app do Instagram / Meta

## Objetivo

Resolver o caso em que o usuário abre a landing dentro do navegador interno do Instagram ou Facebook/Messenger e o backredirect via `pushState` não funciona (porque o "voltar" daquele app é nativo, não passa pelo JavaScript da página).

A solução: **renderizar uma barra fixa no topo, visualmente idêntica ao chrome do navegador do celular, com uma setinha "‹" do lado esquerdo**. Quando o usuário clica nessa setinha achando que é o voltar do sistema, a gente dispara o backredirect manualmente.

## Quando aparece

- **Aparece em**: qualquer celular (iPhone ou Android) **somente** quando a página está carregada dentro do app do Instagram, Facebook ou Messenger.
- **Não aparece em**: Safari, Chrome, Firefox, desktop, tablet em modo navegador, ou qualquer browser "real".

A detecção é feita pelo User-Agent do navegador, procurando os marcadores oficiais desses apps:
- `Instagram` → app do Instagram
- `FBAN`, `FBAV`, `FB_IAB` → apps da Meta (Facebook, Messenger)

## Visual

A barra mimetiza o chrome do navegador do sistema operacional detectado:

- **No iPhone**: estilo Safari iOS — fundo cinza claro translúcido, altura 44px, setinha "‹" azul iOS (#007AFF) à esquerda, no centro um cadeado pequeno + o texto `metodo.rotinapedagogica.com` em fonte system, ícone "AA" à direita (decorativo, sem ação).
- **No Android**: estilo Chrome Android — fundo cinza um pouco mais escuro, altura 56px, setinha "←" preta à esquerda, no centro o cadeado + URL, três pontinhos à direita (decorativos).

A barra fica `position: fixed` no topo, e o conteúdo da página recebe um `padding-top` equivalente pra não ficar coberto.

## Comportamento por rota

Apenas a setinha "‹" / "←" é clicável. O resto é decorativo.

- Em **`/`** (LandingV2): clique → vai pra `/br1` preservando todos os parâmetros da URL.
- Em **`/br1`** (Backredirect1): clique → vai pra `/br2` preservando parâmetros.
- Em **`/br2`** (Backredirect2): clique → dispara `fireInitiateCheckout()` e abre o checkout da Hotmart (mesma lógica que o backredirect atual já faz).

Ou seja: **o destino do voltar fake é exatamente o mesmo do backredirect via pushState**. Reaproveita a função `getDestination` que já existe no hook `useBackredirect`.

## Arquivos

### Novo: `src/lib/inAppBrowser.ts`
Pequeno utilitário com:
- `isInAppBrowser()` — retorna `true` se o User-Agent for IG, FB ou Messenger.
- `getMobileOS()` — retorna `'ios' | 'android' | 'other'`.

### Novo: `src/components/FakeBrowserBar.tsx`
Componente que:
- Roda só no client (verifica `typeof window`).
- Se não for in-app, retorna `null` (não renderiza nada, não adiciona padding).
- Se for in-app, renderiza a barra estilo iOS ou Android conforme o OS detectado.
- Recebe uma prop `onBack: () => void` que é chamada quando o usuário toca na setinha.
- Também adiciona o `padding-top` correto no `<body>` via `useEffect` (e remove no cleanup) pra empurrar o conteúdo da página.

### Edição: `src/pages/LandingV2.tsx`
Importa `FakeBrowserBar` e renderiza no topo do JSX, com `onBack` chamando `withCurrentParams("/br1")` e fazendo `window.location.assign(...)`.

### Edição: `src/pages/Backredirect1.tsx`
Mesma coisa, `onBack` aponta pra `/br2`.

### Edição: `src/pages/Backredirect2.tsx`
`onBack` reaproveita exatamente a mesma lógica do `useBackredirect` atual (dispara `fireInitiateCheckout` e abre Hotmart com `br=2`, `step=backredirect-2`, `srcAppend=br2`).

## O que NÃO muda

- `useBackredirect` (pushState) continua exatamente como está, ativo nas três páginas. Quem estiver no Safari/Chrome real continua coberto pelo voltar de verdade.
- `tracker.js`, `checkout.ts`, eventos do Pixel, UTMs, `sck`: nada muda.
- Layout, copy e design das páginas: nada muda. A barra só aparece dentro do IG/FB/Messenger.
- A rota `/b` (legacy) não recebe a barra (não é onde o tráfego pago está rodando).

## Resultado final

| Onde o usuário está | O que acontece ao tentar voltar |
|---|---|
| Safari iPhone (real) | pushState pega o gesto/botão → vai pro /br1 (já funciona) |
| Chrome Android (real) | pushState pega → vai pro /br1 (já funciona) |
| **Instagram iPhone** | barra fake no topo, setinha "‹" estilo Safari → /br1 |
| **Instagram Android** | barra fake no topo, setinha "←" estilo Chrome → /br1 |
| **Facebook iPhone** | barra fake estilo Safari → /br1 |
| **Facebook Android** | barra fake estilo Chrome → /br1 |
| **Messenger** | igual ao Facebook |
| Desktop | nada muda, sem barra |

Cobertura total do funil de tráfego pago do IG/FB.

## Validação após implementar

Vou pedir pra você testar nesses 3 cenários:
1. Abrir a URL pelo Stories do Instagram no iPhone → deve aparecer a barra cinza estilo Safari, clicar na setinha vai pro /br1.
2. Mesmo teste no Android → barra estilo Chrome, mesma navegação.
3. Abrir a URL no Safari normal do iPhone → **nenhuma barra aparece**, layout intocado, e o voltar do sistema continua funcionando via pushState.
