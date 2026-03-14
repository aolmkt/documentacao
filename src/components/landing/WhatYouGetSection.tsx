import { BookOpen, Bot, MessageSquare, ClipboardList, Zap } from "lucide-react";

const items = [
  { icon: BookOpen, label: "Manual completo do Método Relatório Evolutivo com IA", description: "Explicação passo a passo de como aplicar o método na sua rotina pedagógica." },
  { icon: Bot, label: "Acesso ao assistente configurado para Educação Infantil", description: "Ferramenta pronta para transformar seus registros em relatórios estruturados." },
  { icon: MessageSquare, label: "Biblioteca de prompts pedagógicos prontos", description: "Comandos que orientam o assistente a gerar relatórios adequados à Educação Infantil." },
  { icon: ClipboardList, label: "Modelo de registro semanal padronizado", description: "Estrutura simples para registrar observações da rotina da criança." },
  { icon: Zap, label: "Guia prático: como começar hoje em 10 minutos", description: "Passo a passo rápido para aplicar o método imediatamente." },
];

export const WhatYouGetSection = () => {
  return (
    <section className="py-16 md:py-20 px-6">
      <div className="container max-w-3xl">
        <h2 className="text-2xl md:text-[2rem] font-bold text-foreground text-center mb-3 uppercase leading-[1.2]">
          Você recebe acesso ao método completo
        </h2>
        <p className="text-center text-muted-foreground mb-10 text-base md:text-lg leading-[1.6]">
          Tudo o que você precisa para transformar registros da semana em relatórios pedagógicos estruturados.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {items.map((item, index) => (
            <div key={index} className="flex items-start gap-3 bg-card rounded-xl p-5 md:p-6 border border-border/60 shadow-sm">
              <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <item.icon className="w-4.5 h-4.5 text-primary" />
              </div>
              <div>
                <span className="text-foreground font-medium text-base leading-[1.7]">{item.label}</span>
                <p className="text-muted-foreground text-sm mt-1 leading-[1.7]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-6 text-foreground font-medium text-base">
          Aplicação imediata. Sem curva de aprendizado.
        </p>
      </div>
    </section>
  );
};