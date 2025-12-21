import { Check, FileText, ListChecks, Layout, Lightbulb, RefreshCw } from "lucide-react";

const items = [
  { icon: FileText, text: "Ebook completo em PDF" },
  { icon: ListChecks, text: "Checklist de registro pedagógico" },
  { icon: Layout, text: "Estrutura de relatório pronta para usar" },
  { icon: Lightbulb, text: "Exemplos práticos e aplicáveis" },
  { icon: RefreshCw, text: "Acesso a todas as atualizações futuras" },
];

export const WhatYouGetSection = () => {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
          O que você recebe
        </h2>
        
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <ul className="space-y-4">
            {items.map((item, index) => (
              <li key={index} className="flex items-center gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-success/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-success" />
                </div>
                <span className="text-foreground font-medium">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
