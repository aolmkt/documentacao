import { Shield } from "lucide-react";

const items = [
  "Linguagem descritiva da Educação Infantil",
  "Uso exclusivamente textual (sem envio de fotos ou vídeos)",
  "Inserção de imagens apenas no documento oficial da escola",
  "Revisão obrigatória antes de arquivar",
  "Autoria pedagógica integralmente sua",
];

export const SecuritySection = () => {
  return (
    <section className="py-16 md:py-20 px-6 bg-lavanda-light">
      <div className="container max-w-3xl">
        <div className="bg-card rounded-xl p-6 md:p-8 border border-border/60 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Shield className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-foreground uppercase">
              Segurança e responsabilidade
            </h2>
          </div>

          <p className="text-muted-foreground mb-5 text-sm">
            Este método foi estruturado respeitando:
          </p>

          <ul className="space-y-2.5 mb-6">
            {items.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-foreground/80 text-sm leading-[1.6]"
              >
                <span className="text-muted-foreground mt-0.5">–</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="bg-lavanda rounded-lg p-4">
            <p className="text-sm text-muted-foreground leading-[1.6]">
              O Assistente não substitui avaliação diagnóstica ou parecer técnico.
            </p>
            <p className="text-sm text-foreground font-medium mt-1.5">
              Ele organiza o que você registra.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
