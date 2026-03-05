import { ArrowRight } from "lucide-react";

export const WorkloadSection = () => {
  return (
    <section className="py-12 md:py-16 px-4 bg-lavanda">
      <div className="container max-w-3xl">
        <div className="bg-card rounded-xl p-6 md:p-10 shadow-sm border border-border/60">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 uppercase">
            Quanto tempo os relatórios realmente exigem?
          </h2>

          <div className="space-y-4 text-base md:text-lg text-foreground/80 leading-relaxed">
            <p>
              Uma turma com <strong className="text-foreground">20 crianças</strong> pode exigir mais de{" "}
              <strong className="text-foreground">10 horas de escrita de relatórios</strong> no final do período.
            </p>

            <p>
              Isso acontece porque, na maioria das vezes, o relatório é escrito de uma única vez, tentando reconstruir semanas de observação apenas pela memória.
            </p>

            <p>
              Você tenta lembrar o que aconteceu em cada atividade, em cada interação, em cada momento de desenvolvimento.
            </p>

            <p>
              E quanto mais tempo passa, mais difícil fica transformar tudo isso em um texto claro e coerente.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-border/50">
            <p className="text-foreground font-medium text-base md:text-lg mb-4">
              O Método Relatório Evolutivo resolve esse problema de outra forma:
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center bg-primary/5 rounded-lg p-4 md:p-6">
              <span className="text-sm md:text-base font-medium text-foreground text-center">
                Pequenos registros semanais
              </span>
              <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 rotate-90 sm:rotate-0" />
              <span className="text-sm md:text-base font-bold text-primary text-center">
                Relatório evolutivo estruturado no final do período
              </span>
            </div>

            <div className="mt-5 space-y-1.5 text-center">
              <p className="text-foreground/80 text-sm md:text-base">
                Em vez de reconstruir tudo no final,
              </p>
              <p className="text-foreground font-medium text-base md:text-lg">
                o processo acontece ao longo das semanas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
