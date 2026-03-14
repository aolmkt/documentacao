import { Button } from "@/components/ui/button";

interface FinalCtaSectionProps {
  onCtaClick: () => void;
}

export const FutureSaasSection = ({ onCtaClick }: FinalCtaSectionProps) => {
  return (
    <section className="py-16 md:py-20 px-6 bg-lavanda">
      <div className="container max-w-2xl text-center">
        <h2 className="text-2xl md:text-[2rem] font-bold text-foreground mb-3 uppercase leading-[1.2]">
          Você não precisa mudar sua prática pedagógica.
        </h2>

        <div className="text-foreground/80 leading-[1.7] space-y-3 mb-10 text-base md:text-lg">
          <p>Você já observa.<br />Você já registra a rotina da turma.</p>
          <p>O método apenas organiza essas observações<br />e transforma o registro da semana em um relatório pedagógico estruturado.</p>
          <p>Você continua sendo autora do relatório.</p>
          <p>A tecnologia apenas ajuda a organizar o texto<br />de forma clara, pedagógica e segura.</p>
        </div>

        <div className="mb-12 space-y-3">
          <p className="text-lg md:text-xl font-bold text-foreground">
            Menos esforço na escrita.<br />
            Mais clareza na documentação pedagógica.
          </p>
        </div>

        <Button
          onClick={onCtaClick}
          size="lg"
          className="w-full sm:w-auto bg-cta hover:bg-cta-hover text-cta-foreground text-lg px-6 sm:px-8 py-6 h-auto rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 whitespace-normal"
        >
          Acessar o método agora
        </Button>

        <p className="mt-6 text-xs text-muted-foreground italic">
          Acesso imediato após a compra.
        </p>
      </div>
    </section>
  );
};