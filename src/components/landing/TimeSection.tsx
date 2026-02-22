import { Clock } from "lucide-react";

export const TimeSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-primary/5">
      <div className="container max-w-3xl text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-6">
          <Clock className="w-7 h-7 text-primary" />
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 uppercase">
          Quanto tempo isso pode representar?
        </h2>

        <p className="text-foreground/80 leading-relaxed mb-4">
          Se você leva em média <strong className="text-foreground">30 a 40 minutos</strong> para escrever um relatório e acompanha <strong className="text-foreground">20 crianças</strong>, isso pode representar mais de <strong className="text-foreground">10 horas concentradas</strong> apenas no final do período.
        </p>

        <p className="text-foreground/80 leading-relaxed mb-8">
          Distribuindo o registro ao longo das semanas, o esforço deixa de ser concentrado e passa a ser organizado.
        </p>

        <div className="space-y-2">
          <p className="text-foreground font-medium text-lg">
            O relatório deixa de ser peso.
          </p>
          <p className="text-primary font-bold text-xl">
            Passa a ser consequência.
          </p>
        </div>
      </div>
    </section>
  );
};
