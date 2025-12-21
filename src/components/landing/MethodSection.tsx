import { ClipboardList, FolderOpen, BookOpen, FileText } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Registre durante a rotina",
    description: "Pequenas anotações rápidas, no momento em que acontecem. Sem precisar de tempo extra."
  },
  {
    icon: FolderOpen,
    title: "Organize as observações",
    description: "Um sistema simples para categorizar o que você registrou, sem burocracia."
  },
  {
    icon: BookOpen,
    title: "Conecte com a BNCC",
    description: "Saiba exatamente como relacionar suas observações com os campos de experiência."
  },
  {
    icon: FileText,
    title: "Gere relatórios sem começar do zero",
    description: "Com tudo organizado, o relatório praticamente se escreve sozinho."
  }
];

export const MethodSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-secondary/30">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-3">
            Eu chamo isso de Documentação Pedagógica Contínua.
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            O método que vai mudar sua relação com relatórios
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Quatro passos simples que transformam a documentação pedagógica de um peso em um processo natural.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-colors duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
