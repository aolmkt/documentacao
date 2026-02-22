import { Check } from "lucide-react";

const items = [
  "Menos sobrecarga no final do período",
  "Relatórios mais organizados",
  "Maior clareza no acompanhamento",
  "Processo mais leve",
  "Segurança institucional",
];

export const WhatIsNotSection = () => {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12 uppercase">
          O resultado
        </h2>

        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <ul className="space-y-4">
            {items.map((item, index) => (
              <li key={index} className="flex items-center gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-success/10 flex items-center justify-center">
                  <Check className="w-5 h-5 text-success" />
                </div>
                <span className="text-foreground font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center mt-8 space-y-2">
          <p className="text-foreground/80">
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
