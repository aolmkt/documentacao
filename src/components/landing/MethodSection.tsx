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
    <section className="py-12 md:py-16 px-4">
      <div className="container max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 uppercase">
            Como funciona o Sistema de Documentação Contínua
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Um processo estruturado em 4 etapas que organiza seus registros e transforma o relatório em consequência natural do acompanhamento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-card rounded-xl p-5 border border-border/60 hover:border-primary/30 transition-colors duration-300 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-base">
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
