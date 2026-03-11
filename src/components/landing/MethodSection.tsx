import { User, PenLine, Wand2, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: User,
    number: "1",
    title: "Organização Individual",
    highlight: "Cada criança possui sua própria conversa dentro do assistente.",
    details: [
      "Assim você mantém os registros organizados",
      "sem misturar observações entre alunos.",
    ],
  },
  {
    icon: PenLine,
    number: "2",
    title: "Registro Contínuo",
    highlight: "Você escreve observações simples da rotina:",
    details: [
      "participação nas atividades",
      "interações com colegas",
      "descobertas nas propostas pedagógicas",
      "Sem precisar montar o relatório naquele momento.",
    ],
  },
  {
    icon: Wand2,
    number: "3",
    title: "Estruturação Assistida",
    highlight:
      "O assistente organiza suas observações em linguagem pedagógica adequada à Educação Infantil.",
    details: [
      "Transformando registros simples",
      "em texto estruturado de relatório.",
    ],
  },
  {
    icon: FileText,
    number: "4",
    title: "Síntese Evolutiva",
    highlight:
      "Ao final do período, o histórico acumulado facilita a geração do relatório final.",
    details: [
      "O assistente analisa os registros já feitos",
      "e organiza a evolução da criança ao longo do tempo.",
    ],
  },
];

interface MethodSectionProps {
  onCtaClick?: () => void;
}

export const MethodSection = ({ onCtaClick }: MethodSectionProps) => {
  return (
    <section className="py-10 md:py-14 px-4">
      <div className="container max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-[1.75rem] lg:text-[2rem] font-bold text-foreground mb-2 uppercase tracking-tight leading-tight">
            Arquitetura do Método Relatório Evolutivo com IA
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-light">
            Um processo simples que transforma registros da rotina em relatórios pedagógicos estruturados.
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

        {onCtaClick && (
          <div className="text-center mt-8">
            <Button
              onClick={onCtaClick}
              size="lg"
              className="w-full sm:w-auto bg-cta hover:bg-cta-hover text-cta-foreground text-base px-6 sm:px-8 py-5 h-auto rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 whitespace-normal"
            >
              Quero organizar meus relatórios
            </Button>
          </div>
        )}

        <p className="text-center text-xs text-muted-foreground mt-6 italic">
          Esse é o mesmo método que será automatizado na futura plataforma dedicada.
        </p>
      </div>
    </section>
  );
};
