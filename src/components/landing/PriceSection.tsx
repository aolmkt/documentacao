import { Button } from "@/components/ui/button";

interface PriceSectionProps {
  onCtaClick: () => void;
}

export const PriceSection = ({ onCtaClick }: PriceSectionProps) => {
  return (
    <section className="py-16 md:py-24 px-4 bg-secondary/30">
      <div className="container max-w-2xl">
        <div className="bg-card rounded-2xl p-8 md:p-12 border-2 border-primary/20 shadow-lg text-center">
          <p className="text-muted-foreground mb-2">Investimento único</p>
          
          <div className="mb-2">
            <span className="text-5xl md:text-6xl font-bold text-foreground">R$ 27</span>
            <span className="text-muted-foreground">,00</span>
          </div>
          
          <p className="text-sm text-primary font-medium mb-6">
            Pagamento único. Sem mensalidade.
          </p>
          
          <p className="text-muted-foreground mb-8">
            Menos do que você gasta com café em uma semana.
            <br />
            <span className="text-foreground font-medium">
              E vai transformar todos os seus domingos.
            </span>
          </p>
          
          <Button 
            onClick={onCtaClick}
            size="lg"
            className="w-full md:w-auto bg-cta hover:bg-cta-hover text-cta-foreground text-lg px-10 py-6 h-auto rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
          >
            Quero aplicar isso na minha rotina
          </Button>
          
          <div className="mt-8 pt-6 border-t border-border/50">
            <p className="text-sm text-muted-foreground">
              ✓ Acesso imediato após a compra
              <br />
              ✓ Pagamento 100% seguro
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
