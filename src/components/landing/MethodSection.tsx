import { User, PenLine, Wand2, FileText } from "lucide-react";

const steps = [
  {
    icon: User,
    number: "1",
    title: "Organização Individual",
    highlight: "Uma conversa exclusiva para cada criança.",
    details: ["Sem misturar informações.", "Sem improviso."],
  },
  {
    icon: PenLine,
    number: "2",
    title: "Registro Contínuo",
    highlight: "Pequenas observações semanais, simples e factuais.",
    details: ["Sem escrever relatório.", "Sem formalidade excessiva."],
  },
  {
    icon: Wand2,
    number: "3",
    title: "Estruturação Assistida",
    highlight: "Você solicita a organização do texto.",
    details: [
      "O Assistente estrutura suas observações em linguagem pedagógica adequada à Educação Infantil.",
      "Você continua sendo autora.",
    ],
  },
  {
    icon: FileText,
    number: "4",
    title: "Síntese Evolutiva",
    highlight:
      "No final do período, o sistema transforma todos os registros acumulados em um relatório final coerente e evolutivo.",
    details: ["Não é repetição.", "É desenvolvimento ao longo do tempo."],
  },
];

export const MethodSection = () => {
  return (
    <section className="py-10 md:py-14 px-4">
      <div className="container max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-[1.75rem] lg:text-[2rem] font-bold text-foreground mb-2 uppercase tracking-tight leading-tight">
            A Arquitetura do Método Relatório Evolutivo com IA
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-light">
            Um processo estruturado em 4 etapas que organiza seus registros e transforma o relatório em consequência natural do acompanhamento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-3">
          {steps.slice(0, 2).map((step) => (
            <div
              key={step.number}
              className="bg-card rounded-lg p-5 border border-border shadow-[0_2px_8px_-2px_hsl(var(--foreground)/0.08)] hover:border-primary/30 transition-colors duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-lavanda flex items-center justify-center font-bold text-lg text-primary border border-primary/15">
                  {step.number}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-foreground/80 text-sm mb-1.5">
                    {step.highlight}
                  </p>
                  <div className="space-y-0.5">
                    {step.details.map((d, i) => (
                      <p key={i} className="text-muted-foreground text-sm">
                        {d}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center my-2">
          <div className="w-px h-5 bg-border" />
        </div>

        <div className="grid md:grid-cols-2 gap-3">
          {steps.slice(2, 4).map((step) => (
            <div
              key={step.number}
              className="bg-card rounded-lg p-5 border border-border shadow-[0_2px_8px_-2px_hsl(var(--foreground)/0.08)] hover:border-primary/30 transition-colors duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-lavanda flex items-center justify-center font-bold text-lg text-primary border border-primary/15">
                  {step.number}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-foreground/80 text-sm mb-1.5">
                    {step.highlight}
                  </p>
                  <div className="space-y-0.5">
                    {step.details.map((d, i) => (
                      <p key={i} className="text-muted-foreground text-sm">
                        {d}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-6 italic">
          Esse é o mesmo método que será automatizado na futura plataforma dedicada.
        </p>
      </div>
    </section>
  );
};
