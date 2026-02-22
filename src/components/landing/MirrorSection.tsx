export const MirrorSection = () => {
  return (
    <section className="py-12 md:py-16 px-4">
      <div className="container max-w-3xl">
        <div className="bg-card rounded-xl p-6 md:p-10 shadow-sm border border-border/60">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Você conhece essa cena.
          </h2>

          <div className="space-y-3 text-base md:text-lg text-foreground/80 leading-relaxed">
            <p>Prazo se aproximando.</p>
            <p>Relatórios acumulados.</p>
            <p>Várias crianças para escrever.</p>

            <div className="pt-3">
              <p>Você lembra de muita coisa.</p>
              <p>Mas não de tudo.</p>
            </div>

            <p className="pt-3">
              E precisa transformar semanas inteiras de vivências em um único texto coerente.
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-border/50 space-y-2">
            <p className="text-foreground/80 leading-relaxed">
              O problema não é sua dedicação.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Não é sua competência.
            </p>
            <p className="text-foreground font-medium text-lg mt-3">
              É tentar fazer tudo de uma vez.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
