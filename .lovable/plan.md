## Parte B — Limpeza do package.json

Remover dependências e componentes shadcn não utilizados. Zero impacto visual nas landings.

### O que será removido

**Dependências npm (~38):**
- Radix UI não usados: `@radix-ui/react-alert-dialog`, `aspect-ratio`, `avatar`, `checkbox`, `collapsible`, `context-menu`, `dialog`, `dropdown-menu`, `hover-card`, `label`, `menubar`, `navigation-menu`, `popover`, `progress`, `radio-group`, `scroll-area`, `select`, `separator`, `switch`, `tabs`, `toast`, `toggle`, `toggle-group`, `tooltip`
- Forms: `@hookform/resolvers`, `react-hook-form`, `zod`
- Outros: `cmdk`, `date-fns`, `react-day-picker`, `embla-carousel-react`, `input-otp`, `react-resizable-panels`, `recharts`, `vaul`, `sonner`, `next-themes`, `@tanstack/react-query`

**Arquivos de componentes shadcn não usados (~45):**
Todos em `src/components/ui/` exceto `button.tsx` e `accordion.tsx`. Também remover `src/hooks/use-toast.ts`.

**Limpeza em `src/App.tsx`:**
Remover `QueryClientProvider`, `TooltipProvider`, `Toaster`, `Sonner` (boilerplate não usado pelas páginas).

### O que será mantido

- `react`, `react-dom`, `react-router-dom`
- `lucide-react`, `framer-motion` (se em uso)
- `class-variance-authority`, `clsx`, `tailwind-merge`, `tailwindcss-animate`
- `@radix-ui/react-slot` (usado pelo Button), `@radix-ui/react-accordion` (usado no FAQ)
- `src/components/ui/button.tsx`, `src/components/ui/accordion.tsx`

### Ordem de execução

1. `rg` final em cada componente UI para confirmar zero imports fora do próprio `ui/`
2. Simplificar `src/App.tsx` (remover providers não usados)
3. Deletar arquivos de `src/components/ui/` não usados + `src/hooks/use-toast.ts`
4. `bun remove` das dependências listadas
5. `bunx tsc --noEmit` para validar
6. Smoke test rotas: `/`, `/b`, `/br1`, `/br2`

### Critério de rollback

Se qualquer rota quebrar visualmente ou TS falhar → revert da mensagem (histórico do Lovable).

### Ganho

~38 deps a menos, `node_modules` menor, build mais rápido, `package.json` reflete o que o app realmente usa.
