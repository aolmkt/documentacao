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
    <section className="py-16 md:py-24 px-4 bg-secondary/30">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 uppercase">
            O que é o Método de Documentação Pedagógica Contínua com IA?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            É um sistema simples e estruturado em 4 etapas que organiza seus registros ao longo do período e transforma o relatório final em consequência natural do acompanhamento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-card rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-colors duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                  {step.number}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-foreground/80 text-sm mb-2">
                    {step.highlight}
                  </p>
                  <div className="space-y-1">
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
      </div>
    </section>
  );
};
