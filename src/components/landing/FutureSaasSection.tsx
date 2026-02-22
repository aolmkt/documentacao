import { Button } from "@/components/ui/button";

interface FinalCtaSectionProps {
  onCtaClick: () => void;
}

export const FutureSaasSection = ({ onCtaClick }: FinalCtaSectionProps) => {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container max-w-2xl text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 uppercase">
          Não é sobre IA.
        </h2>
        <p className="text-xl md:text-2xl text-primary font-medium mb-8">
          É sobre organização profissional.
        </p>

        <div className="text-foreground/80 leading-relaxed space-y-4 mb-10">
          <p>
            Se você quer continuar concentrando tudo no final do período, nada muda.
          </p>
          <p>
            Mas se você quer um sistema simples para reduzir sobrecarga e manter sua autoria pedagógica, o método está pronto.
          </p>
        </div>

        <Button
          onClick={onCtaClick}
          size="lg"
          className="w-full sm:w-auto bg-cta hover:bg-cta-hover text-cta-foreground text-lg px-6 sm:px-8 py-6 h-auto rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 whitespace-normal"
        >
          Quero começar agora
        </Button>
      </div>
    </section>
  );
};
