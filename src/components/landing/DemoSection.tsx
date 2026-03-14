import step1 from "@/assets/step1-registro.jpeg";
import step2 from "@/assets/step2-envio.jpeg";
import step3 from "@/assets/step3-relatorio.jpeg";

const steps = [
  {
    step: "PASSO 1",
    title: "Registro da semana",
    description:
      "Cole o registro da semana no assistente utilizando o modelo do método.",
    image: step1,
  },
  {
    step: "PASSO 2",
    title: "Envio do registro",
    description:
      "Envie o registro para o assistente. Ele analisa o conteúdo e prepara a organização do relatório.",
    image: step2,
  },
  {
    step: "PASSO 3",
    title: "Relatório pedagógico gerado",
    description:
      "O assistente organiza o registro e gera um relatório pedagógico estruturado. Você revisa o texto e utiliza no documento da escola.",
    image: step3,
  },
];

export const DemoSection = () => {
  return (
    <section className="py-16 md:py-20 px-6 bg-background">
      <div className="container max-w-5xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-[2rem] font-bold text-foreground uppercase tracking-tight leading-[1.2] mb-2">
            Veja como o método funciona na prática
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-[1.6]">
            Você escreve o registro da semana e o assistente organiza
            automaticamente o relatório pedagógico.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div
              key={s.step}
              className="bg-card rounded-xl border border-border/60 shadow-sm p-5 flex flex-col"
            >
              <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">
                {s.step}
              </p>
              <h3 className="text-lg font-semibold text-foreground mb-1.5">
                {s.title}
              </h3>
              <p className="text-[15px] text-muted-foreground leading-[1.6] mb-4">
                {s.description}
              </p>
              <div className="mt-auto rounded-lg overflow-hidden border border-border/40">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
