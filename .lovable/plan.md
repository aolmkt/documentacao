

## Plan: Remove the "O problema não é a sua escrita" block

Remove lines 70-81 from `src/pages/Index.tsx` — the divider before the block, the block itself, and the divider after it. This connects the MethodSection directly to the BeforeAfterSection with a single divider between them.

### Changes

**`src/pages/Index.tsx`** — Remove:
```tsx
<div className="h-px bg-border" />
<div className="py-10 md:py-14 px-4 text-center bg-lavanda">
  <div className="max-w-2xl mx-auto space-y-2">
    <p className="text-lg md:text-xl text-foreground/80">
      O problema não é a sua escrita.
    </p>
    <p className="text-xl md:text-2xl font-bold text-foreground">
      O problema é tentar escrever tudo no final.
    </p>
  </div>
</div>
```

The existing `<div className="h-px bg-border" />` on line 81 stays as the divider before `BeforeAfterSection`.

