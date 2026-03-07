

## Alteracao do Topo da Pagina (HeroSection)

Reescrever o conteudo do `HeroSection.tsx` com a nova hierarquia de texto:

1. **Headline emocional (H1):** "CHEGA DE VIRAR A NOITE ESCREVENDO RELATÓRIO." — uppercase, bold, grande
2. **Nome do produto (H2):** "Método Relatório Evolutivo com IA" — destaque com cor primaria, tamanho medio-grande
3. **Subtitulo tecnico (H3):** "Sistema de Documentação Pedagógica Contínua para Educação Infantil" — texto mais discreto, tom de autoridade
4. **Explicacao curta (paragrafo):** texto descritivo sobre o metodo
5. **Botao CTA:** "Quero aplicar o método na minha rotina" — mantendo estilo coral atual

### Arquivo alterado
- `src/components/landing/HeroSection.tsx` — substituir o conteudo atual pela nova estrutura hierarquica

### Detalhes tecnicos
- H1 mantem `uppercase`, tamanhos responsivos `text-3xl md:text-4xl lg:text-5xl`
- H2 com `text-primary` para destaque, tamanho `text-2xl md:text-3xl`
- H3 com `text-muted-foreground`, tamanho `text-base md:text-lg`
- Paragrafo descritivo com `text-foreground/80`
- Botao CTA inalterado (classes coral, rounded-full, mobile-first)

