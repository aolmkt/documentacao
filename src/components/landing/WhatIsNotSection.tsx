import { Check } from "lucide-react";

const items = [
  "Reduzir o esforço concentrado no final do bimestre ou semestre",
  "Organizar observações ao longo do período",
  "Produzir relatórios com evidências reais da rotina da criança",
  "Manter linguagem pedagógica adequada à Educação Infantil",
  "Visualizar com mais clareza a evolução de cada criança",
];

export const WhatIsNotSection = () => {
  return (
    <section className="py-12 md:py-16 px-4 bg-lavanda">
      <div className="container max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8 uppercase">
          O resultado de um processo organizado
        </h2>

        <p className="text-center text-foreground/80 text-base md:text-lg mb-6">
          Com o método você consegue:
        </p>

        <div className="bg-card rounded-xl p-6 border border-border/60 shadow-sm">
          <ul className="space-y-3">
            {items.map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-success/10 flex items-center justify-center">
                  <Check className="w-4 h-4 text-success" />
                </div>
                <span className="text-foreground font-medium text-sm md:text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center mt-6 space-y-2">
          <p className="text-foreground font-medium">
            Você não precisa escrever tudo de uma vez.
          </p>
          <p className="text-foreground/70 text-sm">
            O relatório final passa a ser consequência natural dos registros realizados ao longo do período.
          </p>
        </div>
      </div>
    </section>
  );
};
