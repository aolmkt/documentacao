export const MirrorSection = () => {
  return (
    <section className="py-16 md:py-20 px-6">
      <div className="container max-w-3xl">
        <div className="rounded-xl p-8 md:p-10 shadow-sm border border-border/60" style={{ backgroundColor: "#F7F8F9" }}>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Você já registra o que acontece na rotina da turma.
          </h2>

          <div className="space-y-3 text-base md:text-lg text-foreground/80 leading-[1.6]">
            <p>Ao longo da semana você observa muitas situações importantes:</p>

            <div className="pt-3">
              <p>• interações nas brincadeiras</p>
              <p>• participação nas atividades</p>
              <p>• avanços na linguagem</p>
              <p>• descobertas nas propostas pedagógicas</p>
            </div>

            <p className="pt-3">Essas observações normalmente viram:</p>

            <div className="pt-1">
              <p>anotações</p>
              <p>registros da rotina</p>
              <p>ou pequenos relatos sobre cada criança.</p>
            </div>

            <p className="pt-3 font-medium text-foreground">O desafio aparece depois.</p>

            <p className="pt-1">
              Quando é preciso transformar esses registros em um relatório pedagógico claro, organizado e bem escrito.
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-border/50 space-y-3 text-base md:text-lg text-foreground/80 leading-[1.6]">
            <p>
              O <span className="text-primary font-bold">Método Relatório Evolutivo com IA</span> foi criado exatamente para isso.
            </p>
            <p>
              Transformar seus registros da rotina em relatórios pedagógicos estruturados, prontos para revisar e usar.
            </p>
            <p className="pt-2 font-medium text-foreground">Você continua registrando o que acontece.</p>
            <p>O método apenas organiza e estrutura o texto.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
