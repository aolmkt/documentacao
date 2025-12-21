import { X } from "lucide-react";

const items = [
  {
    title: "Não é material acadêmico",
    description: "Nada de teorias complicadas ou linguagem rebuscada. É prático e direto ao ponto."
  },
  {
    title: "Não é modelo genérico de relatório",
    description: "Você vai aprender um método, não copiar frases prontas que não têm a sua cara."
  },
  {
    title: "Não aumenta sua carga de trabalho",
    description: "O objetivo é justamente o contrário: diminuir o tempo que você gasta com relatórios."
  }
];

export const WhatIsNotSection = () => {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
          O que este ebook <span className="text-primary">não</span> é
        </h2>
        
        <div className="space-y-4">
          {items.map((item, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 p-5 rounded-xl bg-muted/50 border border-border/30"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center">
                <X className="w-4 h-4 text-destructive" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-center mt-8 text-foreground font-medium">
          Este ebook é prático, aplicável e feito para a sua rotina real.
        </p>
      </div>
    </section>
  );
};
