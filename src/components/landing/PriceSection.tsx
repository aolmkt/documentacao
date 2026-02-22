import { Button } from "@/components/ui/button";

interface PriceSectionProps {
  onCtaClick: () => void;
}

export const PriceSection = ({ onCtaClick }: PriceSectionProps) => {
  return (
    <section className="py-12 md:py-16 px-4">
      <div className="container max-w-2xl">
        <div className="bg-card rounded-xl p-6 md:p-10 border-2 border-primary/20 shadow-md text-center">
          <p className="text-muted-foreground mb-2 uppercase tracking-widest text-xs font-medium">Investimento</p>
          
          <div className="mb-2">
            <span className="text-5xl md:text-6xl font-bold text-foreground">R$ 37</span>
            <span className="text-muted-foreground">,00</span>
          </div>
          
          <p className="text-sm text-primary font-medium mb-2">
            Pagamento único. Sem mensalidade.
          </p>

          <p className="text-muted-foreground text-sm mb-6">
            Menos do que você gasta com café em uma semana.
            <br />
            <span className="text-foreground font-medium">
              E pode transformar todos os seus próximos bimestres.
            </span>
          </p>
          
          <Button 
            onClick={onCtaClick}
            size="lg"
            className="w-full sm:w-auto bg-cta hover:bg-cta-hover text-cta-foreground text-lg px-6 sm:px-10 py-6 h-auto rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 whitespace-normal"
          >
            Quero aplicar o método agora
          </Button>
          
          <div className="mt-6 pt-5 border-t border-border/50">
            <p className="text-xs text-muted-foreground">
              ✓ Acesso imediato após a compra &nbsp;•&nbsp; ✓ Pagamento 100% seguro
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
