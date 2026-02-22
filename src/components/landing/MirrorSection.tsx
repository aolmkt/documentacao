export const MirrorSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-muted/50">
      <div className="container max-w-3xl">
        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-sm border border-border/50">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            Você conhece essa cena.
          </h2>

          <div className="space-y-4 text-lg md:text-xl text-foreground/80 leading-relaxed">
            <p>Prazo se aproximando.</p>
            <p>Relatórios acumulados.</p>
            <p>Várias crianças para escrever.</p>

            <div className="pt-4">
              <p>Você lembra de muita coisa.</p>
              <p>Mas não de tudo.</p>
            </div>

            <p className="pt-4">
              E precisa transformar semanas inteiras de vivências em um único texto coerente.
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-border/50 space-y-2">
            <p className="text-foreground/80 leading-relaxed">
              O problema não é sua dedicação.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Não é sua competência.
            </p>
            <p className="text-foreground font-medium text-lg mt-4">
              É tentar fazer tudo de uma vez.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
