import { Shield, Eye, Lock } from "lucide-react";

const items = [
  { 
    icon: Shield, 
    text: "Nenhum dado de criança é coletado" 
  },
  { 
    icon: Eye, 
    text: "Nenhuma imagem é armazenada" 
  },
  { 
    icon: Lock, 
    text: "Tudo é aplicado no seu próprio ambiente" 
  },
];

export const SecuritySection = () => {
  return (
    <section className="py-16 md:py-20 px-4">
      <div className="container max-w-3xl">
        <h2 className="text-xl md:text-2xl font-bold text-foreground text-center mb-8">
          Sua segurança e privacidade
        </h2>
        
        <div className="flex flex-wrap justify-center gap-6">
          {items.map((item, index) => (
            <div 
              key={index}
              className="flex items-center gap-3 px-5 py-3 rounded-full bg-muted/50 border border-border/50"
            >
              <item.icon className="w-5 h-5 text-primary" />
              <span className="text-sm text-foreground">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
