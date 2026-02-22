import { Check } from "lucide-react";

const items = [
  "Manual completo do método estruturado",
  "Acesso ao Assistente configurado para Educação Infantil",
  "Biblioteca de prompts profissionais prontos",
  "Modelo de registro semanal",
  "Checklist de uso seguro",
  'Guia prático "Como começar hoje em 10 minutos"',
];

export const WhatYouGetSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-secondary/30">
      <div className="container max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12 uppercase">
          O que você recebe ao adquirir o método
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

        <p className="text-center mt-8 text-foreground font-medium">
          Aplicação imediata.
        </p>
      </div>
    </section>
  );
};
