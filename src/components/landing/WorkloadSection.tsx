

export const WorkloadSection = () => {
  return (
    <section className="py-12 md:py-16 px-4 bg-lavanda">
      <div className="container max-w-3xl">
        <div className="bg-card rounded-xl p-6 md:p-10 shadow-sm border border-border/60">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 uppercase">
            O problema não é observar.<br />
            É organizar e escrever.
          </h2>

          <div className="space-y-4 text-base md:text-lg text-foreground/80 leading-relaxed">
            <p>
              A maioria das professoras já faz registros ao longo do período.
            </p>

            <p>
              Observações da rotina.<br />
              Situações das atividades.<br />
              Interações entre as crianças.
            </p>

            <p>
              Mas quando chega a hora de transformar essas observações em relatório, é preciso:
            </p>

            <div>
              <p>• organizar as informações</p>
              <p>• estruturar o texto</p>
              <p>• usar linguagem pedagógica adequada</p>
              <p>• sintetizar semanas de observação</p>
            </div>

            <p>
              E isso exige tempo.
            </p>

            <p className="font-medium text-foreground">
              Muito tempo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
