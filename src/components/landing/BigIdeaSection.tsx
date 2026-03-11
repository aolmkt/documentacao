export const BigIdeaSection = () => {
  return (
    <section className="py-12 md:py-16 px-4">
      <div className="container max-w-3xl">
        <div className="bg-card rounded-xl p-6 md:p-10 shadow-sm border border-border/60">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 uppercase">
            O método muda apenas uma coisa:<br />
            <span className="text-primary">quem organiza o texto.</span>
          </h2>

          <div className="space-y-4 text-base md:text-lg text-foreground/80 leading-relaxed">
            <p>Você continua fazendo o que já faz na rotina:</p>

            <div>
              <p>• observar</p>
              <p>• registrar</p>
              <p>• acompanhar as crianças</p>
            </div>

            <p>O método entra apenas para organizar esses registros.</p>

            <p>Você envia suas observações.</p>

            <p>O assistente transforma em:</p>

            <div>
              <p>• relatório semanal estruturado</p>
              <p>• texto pedagógico adequado</p>
              <p>• síntese clara do desenvolvimento</p>
            </div>

            <div className="pt-3 space-y-1">
              <p className="font-medium text-foreground text-lg md:text-xl">
                Você continua autora.
              </p>
              <p className="font-bold text-foreground text-lg md:text-xl">
                Mas não precisa escrever tudo sozinha.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
