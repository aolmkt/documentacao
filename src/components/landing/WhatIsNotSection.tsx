import { Check } from "lucide-react";

const items = [
  "Transformar o registro da semana em um relatório pedagógico claro",
  "Organizar melhor as informações observadas na rotina",
  "Produzir textos com linguagem adequada à Educação Infantil",
  "Ganhar tempo na escrita dos relatórios da turma",
  "Manter um histórico organizado para facilitar o relatório final",
];

export const WhatIsNotSection = () => {
  return (
    <section className="py-16 md:py-20 px-6 bg-lavanda">
      <div className="container max-w-3xl">
        <h2 className="text-2xl md:text-[2rem] font-bold text-foreground text-center mb-8 uppercase leading-[1.2]">
          O resultado de um registro bem estruturado
        </h2>

        <p className="text-center text-foreground/80 text-base md:text-lg mb-6 leading-[1.6]">
          Com o método você consegue:
        </p>

        <div className="bg-card rounded-xl p-6 md:p-8 border border-border/60 shadow-sm">
          <ul className="space-y-4">
            {items.map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-success/15 flex items-center justify-center">
                  <Check className="w-5 h-5 text-success" strokeWidth={2.5} />
                </div>
                <span className="text-foreground font-medium text-base leading-[1.7]">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center mt-6 space-y-2">
          <p className="text-foreground font-medium text-base md:text-lg">
            Você continua registrando o que observa na rotina.
          </p>
          <p className="text-foreground/70 text-base leading-[1.7]">
            O método apenas organiza e estrutura o texto,<br />
            transformando seu registro da semana em um relatório pedagógico pronto para revisar e utilizar.
          </p>
        </div>
      </div>
    </section>
  );
};