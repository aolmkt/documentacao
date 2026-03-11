import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface HeroSectionProps {
  onCtaClick: () => void;
}

export const HeroSection = ({ onCtaClick }: HeroSectionProps) => {
  return (
    <>
      <section className="flex items-center justify-center px-4 pt-10 pb-12 md:pt-14 md:pb-16 bg-lavanda">
        <div className="container max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.08] text-foreground mb-4 text-balance uppercase tracking-tight">
            Transforme seus registros da rotina em relatórios pedagógicos claros em minutos.
          </h1>

          <p className="text-base md:text-lg text-foreground/70 max-w-2xl mx-auto mb-6 leading-relaxed font-light">
            Você já observa e registra o que acontece com as crianças na rotina da turma.
            <br /><br />
            O <strong>Método Relatório Evolutivo com IA</strong> organiza essas observações e transforma seus registros em relatórios pedagógicos bem estruturados.
            <br /><br />
            Sem reescrever tudo.<br />
            Sem perder horas procurando palavras.
          </p>

          <div className="bg-card rounded-xl shadow-md border border-border/60 p-5 md:p-6 max-w-md mx-auto mb-6">
            <ul className="text-left space-y-3 text-sm md:text-base text-foreground/90">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-primary" strokeWidth={3} />
                </span>
                <span>Transforme registros simples da rotina em relatórios organizados</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-primary" strokeWidth={3} />
                </span>
                <span>Mantenha linguagem pedagógica adequada com facilidade</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-primary" strokeWidth={3} />
                </span>
                <span>Gere relatórios semanais em poucos minutos</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-primary" strokeWidth={3} />
                </span>
                <span>Chegue ao final do período com tudo estruturado</span>
              </li>
            </ul>
          </div>

          <Button
            onClick={onCtaClick}
            size="lg"
            className="w-full sm:w-auto bg-cta hover:bg-cta-hover text-cta-foreground text-lg md:text-xl font-bold px-8 sm:px-12 py-7 h-auto rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 whitespace-normal"
          >
            Quero organizar meus relatórios
          </Button>

          <p className="mt-4 text-xs md:text-sm text-muted-foreground">
            Pagamento único • Sem mensalidade • Aplicação imediata
          </p>
        </div>
      </section>
      <div className="h-px bg-border" />
    </>
  );
};
