import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Preciso saber usar Inteligência Artificial?",
    answer:
      "Não.\n\nO material ensina o passo a passo completo para utilizar o Assistente de forma simples, tanto pelo navegador quanto pelo celular.\n\nVocê não precisa ter conhecimento técnico.",
  },
  {
    question: "O método substitui meu olhar pedagógico?",
    answer:
      "Não.\n\nA autoria e a responsabilidade pedagógica continuam sendo suas.\n\nO Assistente apenas organiza e estrutura o que você já observa no cotidiano.",
  },
  {
    question: "Posso usar em qualquer escola?",
    answer:
      "Sim.\n\nO método organiza o conteúdo descritivo.\n\nApós gerar o relatório, você adapta ao modelo oficial da sua instituição.",
  },
  {
    question: "Funciona para relatório semanal, bimestral ou semestral?",
    answer:
      "Sim.\n\nO sistema é baseado em registro contínuo e pode ser adaptado para diferentes formatos exigidos pela escola.",
  },
  {
    question: "O relatório final é gerado automaticamente?",
    answer:
      "O relatório é estruturado com base nos registros que você envia.\n\nO resultado depende da qualidade das observações registradas por você.",
  },
  {
    question: "Preciso pagar mensalidade?",
    answer:
      "Não.\n\nEste é um material digital com pagamento único.\n\nVocê recebe acesso imediato após a confirmação.",
  },
  {
    question: "Este material serve para Ensino Fundamental?",
    answer:
      "O método foi estruturado especificamente para Educação Infantil, respeitando seus princípios pedagógicos.",
  },
  {
    question: "O que eu recebo ao comprar e por quanto tempo tenho acesso?",
    answer:
      "Ao confirmar a compra, você recebe acesso imediato ao ebook completo em formato digital (PDF), com 116 páginas estruturadas, incluindo:\n\n• Explicação completa do método\n• Passo a passo de configuração e uso do Assistente\n• Modelo de registro semanal\n• Biblioteca de prompts prontos\n• Exemplo completo do início ao relatório final\n\nO acesso é vitalício.\n\nVocê poderá baixar o material e utilizá-lo sempre que precisar.",
  },
];

export const FaqSection = () => {
  return (
    <section className="py-16 md:py-20 px-6" style={{ backgroundColor: "#F3F1FA" }}>
      <div className="container max-w-2xl">
        <h2 className="text-2xl md:text-[2rem] font-bold text-foreground text-center mb-2 uppercase leading-[1.2]">
          Perguntas Frequentes
        </h2>
        <p className="text-center text-muted-foreground mb-10 text-base md:text-lg leading-[1.6]">
          Esclareça suas dúvidas antes de começar.
        </p>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className="bg-background/80 border border-border/60 rounded-xl px-5 md:px-6 data-[state=open]:shadow-sm transition-shadow"
            >
              <AccordionTrigger className="text-left text-base md:text-lg font-medium hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/75 text-base leading-[1.7] whitespace-pre-line pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};