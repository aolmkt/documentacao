const items = [
  "Linguagem descritiva da Educação Infantil",
  "Uso exclusivamente textual (sem envio de fotos ou vídeos)",
  "Inserção de imagens apenas no documento oficial da escola",
  "Revisão obrigatória antes de arquivar",
  "Autoria pedagógica integralmente sua",
];

export const SecuritySection = () => {
  return (
    <section className="py-16 md:py-20 px-4">
      <div className="container max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-4 uppercase">
          Segurança e responsabilidade
        </h2>

        <p className="text-center text-muted-foreground mb-8">
          Este método foi estruturado respeitando:
        </p>

        <ul className="space-y-3 mb-8">
          {items.map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-foreground/80"
            >
              <span className="text-muted-foreground mt-0.5">–</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="bg-muted/50 rounded-xl p-6 border border-border/50">
          <p className="text-sm text-muted-foreground leading-relaxed">
            O Assistente não substitui avaliação diagnóstica ou parecer técnico.
          </p>
          <p className="text-sm text-foreground font-medium mt-2">
            Ele organiza o que você registra.
          </p>
        </div>
      </div>
    </section>
  );
};
