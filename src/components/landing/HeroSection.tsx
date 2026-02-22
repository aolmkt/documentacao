import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onCtaClick: () => void;
}

export const HeroSection = ({ onCtaClick }: HeroSectionProps) => {
  return (
    <section className="flex items-center justify-center px-4 pt-10 pb-6 md:pt-16 md:pb-10">
      <div className="container max-w-3xl text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-foreground mb-4 text-balance uppercase">
          Chega de virar a noite escrevendo relatório.
        </h1>

        <p className="text-base md:text-lg text-foreground/80 max-w-2xl mx-auto mb-5 leading-relaxed">
          Organize seus registros ao longo do período e transforme semanas de observação em um relatório evolutivo claro, seguro e estruturado.
        </p>

        <div className="mb-5">
          <h2 className="text-xl md:text-2xl font-bold text-primary">
            Método Relatório Evolutivo com IA
          </h2>
          <h3 className="text-sm md:text-base text-muted-foreground mt-1">
            Sistema de Documentação Pedagógica Contínua para Educação Infantil
          </h3>
        </div>

        <ul className="text-left max-w-md mx-auto space-y-2 mb-8 text-sm md:text-base text-foreground/90">
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold mt-0.5">✔</span>
            <span>Reduza drasticamente a sobrecarga no final do bimestre</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold mt-0.5">✔</span>
            <span>Gere relatórios evolutivos em minutos</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold mt-0.5">✔</span>
            <span>Mantenha sua autoria pedagógica com segurança institucional</span>
          </li>
        </ul>
        
        <Button 
          onClick={onCtaClick}
          size="lg"
          className="w-full sm:w-auto bg-cta hover:bg-cta-hover text-cta-foreground text-lg px-6 sm:px-10 py-6 h-auto rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 whitespace-normal"
        >
          Quero aplicar o método agora
        </Button>

        <p className="mt-4 text-xs md:text-sm text-muted-foreground">
          Pagamento único • Sem mensalidade • Aplicação imediata
        </p>
      </div>
    </section>
  );
};
