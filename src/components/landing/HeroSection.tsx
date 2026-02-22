import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface HeroSectionProps {
  onCtaClick: () => void;
}

export const HeroSection = ({ onCtaClick }: HeroSectionProps) => {
  return (
    <>
      <section className="flex items-center justify-center px-4 pt-8 pb-10 md:pt-12 md:pb-14 bg-[hsl(260,40%,96%)]">
        <div className="container max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-foreground mb-4 text-balance uppercase tracking-tight">
            Chega de virar a noite escrevendo relatório.
          </h1>

          <p className="text-base md:text-lg text-foreground/75 max-w-2xl mx-auto mb-6 leading-relaxed font-light">
            Organize seus registros ao longo do período e transforme semanas de observação em um relatório evolutivo claro, seguro e estruturado.
          </p>

          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[hsl(168,45%,55%)]">
              Método Relatório Evolutivo com IA
            </h2>
            <h3 className="text-sm md:text-base text-muted-foreground mt-1">
              Sistema de Documentação Pedagógica Contínua para Educação Infantil
            </h3>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-5 md:p-6 max-w-md mx-auto mb-6">
            <ul className="text-left space-y-3 text-sm md:text-base text-foreground/90">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-primary" strokeWidth={3} />
                </span>
                <span>Reduza drasticamente a sobrecarga no final do bimestre</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-primary" strokeWidth={3} />
                </span>
                <span>Gere relatórios evolutivos em minutos</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-primary" strokeWidth={3} />
                </span>
                <span>Mantenha sua autoria pedagógica com segurança institucional</span>
              </li>
            </ul>
          </div>

          <Button
            onClick={onCtaClick}
            size="lg"
            className="w-full sm:w-auto bg-cta hover:bg-cta-hover text-cta-foreground text-lg md:text-xl font-bold px-8 sm:px-12 py-7 h-auto rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 whitespace-normal"
          >
            Quero aplicar o método agora
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