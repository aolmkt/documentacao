import { Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TimeSectionProps {
  onCtaClick: () => void;
}

export const TimeSection = ({ onCtaClick }: TimeSectionProps) => {
  return (
    <section className="py-12 md:py-16 px-4">
      <div className="container max-w-3xl text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-5">
          <Clock className="w-6 h-6 text-primary" />
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5 uppercase">
          Quanto tempo isso pode representar?
        </h2>

        <p className="text-foreground/80 leading-relaxed mb-3 text-sm md:text-base">
          Se você leva em média <strong className="text-foreground">30 a 40 minutos</strong> para escrever um relatório e acompanha <strong className="text-foreground">20 crianças</strong>, isso pode representar mais de <strong className="text-foreground">10 horas concentradas</strong> apenas no final do período.
        </p>

        <p className="text-foreground/80 leading-relaxed mb-6 text-sm md:text-base">
          Distribuindo o registro ao longo das semanas, o esforço deixa de ser concentrado e passa a ser organizado.
        </p>

        <div className="space-y-1.5 mb-6">
          <p className="text-foreground font-medium text-base md:text-lg">
            O relatório deixa de ser peso.
          </p>
          <p className="text-primary font-bold text-lg md:text-xl">
            Passa a ser consequência.
          </p>
        </div>

        <Button
          onClick={onCtaClick}
          size="lg"
          className="w-full sm:w-auto bg-cta hover:bg-cta-hover text-cta-foreground text-base px-6 sm:px-8 py-5 h-auto rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 whitespace-normal"
        >
          Quero organizar meus relatórios
        </Button>
      </div>
    </section>
  );
};
