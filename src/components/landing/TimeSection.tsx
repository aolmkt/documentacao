export const TimeSection = () => {
  return (
    <section className="py-16 md:py-20 px-6">
      <div className="container max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8 uppercase">
          Quanto tempo isso pode representar?
        </h2>

        <div className="space-y-4 text-foreground/80 leading-[1.6] text-sm md:text-base">
          <p>
            Na rotina da Educação Infantil, registrar observações faz parte do trabalho pedagógico.
          </p>

          <p>
            Mas transformar essas observações em relatórios bem escritos e organizados costuma exigir tempo.
          </p>

          <div>
            <p>Organizar ideias.</p>
            <p>Estruturar o texto.</p>
            <p>Escolher a linguagem pedagógica adequada.</p>
          </div>

          <p>
            Quando isso precisa ser feito para toda a turma, o processo pode consumir horas de escrita.
          </p>
        </div>

        <div className="text-center mt-6 space-y-2">
          <p className="text-foreground font-medium">
            O método não substitui suas observações.
          </p>
          <p className="text-foreground/70 text-sm leading-[1.6]">
            Ele apenas organiza o texto e facilita a escrita do relatório,<br />
            transformando o registro da semana em um relatório pedagógico estruturado.
          </p>
        </div>
      </div>
    </section>
  );
};
