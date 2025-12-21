import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onCtaClick: () => void;
}

export const HeroSection = ({ onCtaClick }: HeroSectionProps) => {
  return (
    <section className="min-h-[85vh] flex items-center justify-center px-4 py-16 md:py-24">
      <div className="container max-w-4xl text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-foreground mb-6 text-balance">
          Chega de Domingo Escrevendo Relatório:
          <span className="block mt-2 text-primary">
            o método que professoras usam para gerar relatórios pedagógicos em minutos, sem começar do zero
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Um sistema simples de documentação pedagógica contínua, pensado para a rotina real da sala de aula e alinhado à BNCC.
        </p>
        
        <Button 
          onClick={onCtaClick}
          size="lg"
          className="bg-cta hover:bg-cta-hover text-cta-foreground text-lg px-8 py-6 h-auto rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
        >
          Quero parar de sofrer com relatório
        </Button>
        
        <p className="mt-6 text-sm text-muted-foreground">
          Acesso imediato após a compra
        </p>
      </div>
    </section>
  );
};
