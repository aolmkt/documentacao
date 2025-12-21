import { Heart } from "lucide-react";

export const ProofSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-primary/5">
      <div className="container max-w-3xl">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Heart className="w-8 h-8 text-primary" />
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Como esse método nasceu
          </h2>
          
          <div className="text-left space-y-4 text-foreground/80 leading-relaxed">
            <p>
              Este método surgiu de uma necessidade real: ajudar uma pedagoga que tinha turmas cheias e relatórios quinzenais para entregar. Sem tempo, sem energia, mas com muita vontade de fazer um trabalho de qualidade.
            </p>
            <p>
              Juntas, desenvolvemos um sistema que funcionasse na correria do dia a dia. Algo que pudesse ser feito em pequenos momentos, sem precisar de horas extras no fim de semana.
            </p>
            <p className="font-medium text-foreground">
              O resultado foi transformador. E agora, esse mesmo método está disponível para você.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
