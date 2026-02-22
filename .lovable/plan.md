

## Reescrita Completa da Landing Page

O texto novo muda significativamente a estrutura, o tom e o conteudo. O preco mudou de R$27 para R$37. O metodo agora inclui IA. A estrutura de secoes precisa ser reorganizada.

### Mapeamento: Texto Novo para Componentes

| Secao do texto novo | Componente atual | Acao |
|---|---|---|
| Hero (CHEGA DE VIRAR A NOITE...) | HeroSection.tsx | Reescrever |
| "Voce conhece essa cena" | MirrorSection.tsx | Reescrever |
| "O ERRO NAO ESTA EM VOCE" | GuiltBreakSection.tsx | Reescrever |
| Metodo 4 etapas (com IA) | MethodSection.tsx | Reescrever |
| "O RESULTADO" (checklist) | WhatIsNotSection.tsx | Reescrever (vira ResultSection) |
| "O QUE VOCE RECEBE" | WhatYouGetSection.tsx | Reescrever |
| "SEGURANCA E RESPONSABILIDADE" | SecuritySection.tsx | Reescrever |
| "QUANTO TEMPO ISSO PODE REPRESENTAR?" | **Novo:** TimeSection.tsx | Criar |
| Investimento R$37 | PriceSection.tsx | Reescrever |
| "NAO E SOBRE IA" (CTA final) | FutureSaasSection.tsx | Reescrever (vira FinalCtaSection) |
| ProofSection | ProofSection.tsx | Remover da pagina |
| Footer | Footer.tsx | Manter ou ajustar levemente |

### Mudancas Principais

**1. HeroSection.tsx** — Reescrever completamente
- Headline: "CHEGA DE VIRAR A NOITE ESCREVENDO RELATORIO."
- Subheadline: texto sobre o Metodo de Documentacao Pedagogica Continua com IA
- CTA: "Quero aplicar o metodo na minha rotina"

**2. MirrorSection.tsx** — Reescrever
- "Voce conhece essa cena." com os blocos curtos e secos
- Finaliza com "E tentar fazer tudo de uma vez."

**3. GuiltBreakSection.tsx** — Reescrever
- "O ERRO NAO ESTA EM VOCE. Esta no modelo."
- Lista dos problemas do modelo tradicional
- Fecha com "E um sistema de organizacao continua."

**4. MethodSection.tsx** — Reescrever completamente
- Titulo: "O QUE E O METODO DE DOCUMENTACAO PEDAGOGICA CONTINUA COM IA?"
- 4 etapas novas: Organizacao Individual, Registro Continuo, Estruturacao Assistida, Sintese Evolutiva
- Cada etapa com descricao e frases curtas

**5. WhatIsNotSection.tsx → ResultSection** — Reescrever
- Titulo: "O RESULTADO"
- Checklist com 5 itens (menos sobrecarga, mais organizados, etc.)
- Frase de fechamento: "Voce organiza o que ja faz."

**6. WhatYouGetSection.tsx** — Reescrever
- Titulo: "O QUE VOCE RECEBE AO ADQUIRIR O METODO"
- 6 itens novos (manual, assistente, biblioteca de prompts, modelo semanal, checklist, guia pratico)
- "Aplicacao imediata."

**7. SecuritySection.tsx** — Reescrever
- Titulo: "SEGURANCA E RESPONSABILIDADE"
- 5 itens descritivos (linguagem descritiva, uso textual, imagens so no doc oficial, revisao obrigatoria, autoria sua)
- Nota: "O Assistente nao substitui avaliacao diagnostica..."

**8. TimeSection.tsx** — Criar novo
- "QUANTO TEMPO ISSO PODE REPRESENTAR?"
- Calculo: 30-40 min x 20 criancas = 10h concentradas
- "O relatorio deixa de ser peso. Passa a ser consequencia."

**9. PriceSection.tsx** — Reescrever
- Preco: R$37,00 (era R$27)
- "Pagamento unico. Sem mensalidade."
- "Menos do que voce gasta com cafe em uma semana."
- CTA: "Quero aplicar o metodo agora"

**10. FutureSaasSection.tsx → FinalCtaSection** — Reescrever
- Remove formulario de email/waitlist
- "NAO E SOBRE IA. E sobre organizacao profissional."
- Texto final de decisao
- CTA: "Quero comecar agora"

**11. Index.tsx** — Atualizar
- Remover ProofSection da pagina
- Adicionar TimeSection entre SecuritySection e PriceSection
- Atualizar imports

**12. Footer.tsx** — Ajuste leve
- Atualizar nome se necessario para refletir novo posicionamento

### Detalhes Tecnicos

- Todos os botoes CTA mantendo classes mobile-first: `w-full sm:w-auto whitespace-normal`
- Cores CTA (coral) mantidas: `bg-cta hover:bg-cta-hover text-cta-foreground`
- Design system (cores, fontes, espacamento) inalterado
- Scroll-to-price mantido nos CTAs do hero e final
- Tipografia Playfair Display para titulos, Inter para corpo

