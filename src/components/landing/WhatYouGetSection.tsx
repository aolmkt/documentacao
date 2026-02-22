import { BookOpen, Bot, MessageSquare, ClipboardList, ShieldCheck, Zap } from "lucide-react";

const items = [
  { icon: BookOpen, label: "Manual completo do método estruturado" },
  { icon: Bot, label: "Acesso ao Assistente configurado para Educação Infantil" },
  { icon: MessageSquare, label: "Biblioteca de prompts profissionais prontos" },
  { icon: ClipboardList, label: "Modelo de registro semanal padronizado" },
  { icon: ShieldCheck, label: "Checklist de uso seguro e institucional" },
  { icon: Zap, label: 'Guia prático "Como começar hoje em 10 minutos"' },
];

export const WhatYouGetSection = () => {
  return (
    <section className="py-12 md:py-16 px-4">
      <div className="container max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-3 uppercase">
          Você recebe acesso ao Método completo
        </h2>
        <p className="text-center text-muted-foreground mb-8 text-sm md:text-base">
          Componentes estruturados para aplicação imediata na sua rotina pedagógica.
        </p>

        <div className="grid sm:grid-cols-2 gap-3">
          {items.map((item, index) => (
            <div key={index} className="flex items-start gap-3 bg-card rounded-xl p-4 border border-border/60 shadow-sm">
              <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <item.icon className="w-4.5 h-4.5 text-primary" />
              </div>
              <span className="text-foreground font-medium text-sm mt-1">{item.label}</span>
            </div>
          ))}
        </div>

        <p className="text-center mt-6 text-foreground font-medium text-sm">
          Aplicação imediata. Sem curva de aprendizado.
        </p>
      </div>
    </section>
  );
};
