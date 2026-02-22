import { Check } from "lucide-react";

const items = [
  "Menos sobrecarga no final do período",
  "Relatórios mais organizados e coerentes",
  "Maior clareza no acompanhamento pedagógico",
  "Processo contínuo e estruturado",
  "Segurança institucional garantida",
];

export const WhatIsNotSection = () => {
  return (
    <section className="py-12 md:py-16 px-4 bg-lavanda">
      <div className="container max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8 uppercase">
          O resultado de um processo organizado
        </h2>

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

        <div className="text-center mt-6 space-y-1.5">
          <p className="text-foreground/80 text-sm">
            Você não muda sua prática pedagógica.
          </p>
          <p className="text-foreground font-medium">
            Você organiza o que já faz.
          </p>
        </div>
      </div>
    </section>
  );
};
