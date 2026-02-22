import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onCtaClick: () => void;
}

export const HeroSection = ({ onCtaClick }: HeroSectionProps) => {
  return (
    <section className="min-h-[85vh] flex items-center justify-center px-4 py-16 md:py-24">
      <div className="container max-w-4xl text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-foreground mb-6 text-balance uppercase">
          Chega de virar a noite escrevendo relatório.
        </h1>

        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">
          Método Relatório Evolutivo com IA
        </h2>

        <h3 className="text-base md:text-lg text-muted-foreground mb-6">
          Sistema de Documentação Pedagógica Contínua para Educação Infantil
        </h3>

        <p className="text-base md:text-lg text-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Um método estruturado para organizar seus registros ao longo do período e transformar semanas de observação em relatórios evolutivos claros e seguros.
        </p>
        
        <Button 
          onClick={onCtaClick}
          size="lg"
          className="w-full sm:w-auto bg-cta hover:bg-cta-hover text-cta-foreground text-lg px-6 sm:px-8 py-6 h-auto rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 whitespace-normal"
        >
          Quero aplicar o método na minha rotina
        </Button>
      </div>
    </section>
  );
};
