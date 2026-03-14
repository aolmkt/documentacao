import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PriceSectionProps {
  onCtaClick: () => void;
}

export const PriceSection = ({ onCtaClick }: PriceSectionProps) => {
  return (
    <section className="py-[72px] md:py-20 px-6">
      <div className="container max-w-2xl">
        <div className="bg-card rounded-2xl p-8 md:p-10 border-2 border-primary/20 shadow-[0_8px_30px_-8px_hsl(var(--foreground)/0.12)] text-center">
          <p className="text-muted-foreground mb-6 uppercase tracking-widest text-xs font-medium">Investimento</p>

          <div className="grid grid-cols-2 gap-4 mb-8 text-left max-w-md mx-auto">
            <div>
              <p className="font-semibold text-muted-foreground mb-2 uppercase text-xs tracking-wide">De:</p>
              <ul className="space-y-1.5 text-muted-foreground text-base leading-[1.7]">
                <li>Textos desorganizados a partir das observações da semana</li>
                <li>Dificuldade para transformar registros em relatório</li>
                <li>Horas tentando estruturar o texto pedagógico</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-primary mb-2 uppercase text-xs tracking-wide">Para:</p>
              <ul className="space-y-1.5 text-foreground/90 text-base leading-[1.7]">
                <li>Registro da semana claro e organizado</li>
                <li>Relatório pedagógico estruturado em minutos</li>
                <li>Escrita mais fácil e segura para toda a turma</li>
              </ul>
            </div>
          </div>

          <div className="mb-4">
            <span className="text-6xl md:text-7xl font-bold text-foreground">R$ 67</span>
            <span className="text-lg text-muted-foreground">,00</span>
          </div>

          <p className="text-base md:text-lg font-medium text-foreground/80 mb-3 leading-[1.7]">
            Menos de R$70 para transformar seus registros da semana em relatórios pedagógicos estruturados durante todo o próximo período letivo.
          </p>
          
          <p className="text-base text-primary font-medium mb-8">
            Pagamento único. Sem mensalidade.
          </p>

          <ul className="text-left space-y-2.5 max-w-sm mx-auto mb-8">
            {[
              "Manual completo do Método Relatório Evolutivo com IA",
              "Biblioteca de prompts pedagógicos prontos",
              "Modelo de registro semanal padronizado",
              "Exemplo completo: do registro da semana ao relatório final",
              "Passo a passo real de uso pelo navegador e celular",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" strokeWidth={3} />
                <span className="text-foreground/90 text-base leading-[1.7]">{item}</span>
              </li>
            ))}
          </ul>
          
          <Button 
            onClick={onCtaClick}
            size="lg"
            className="w-full sm:w-auto bg-cta hover:bg-cta-hover text-cta-foreground text-lg px-6 sm:px-10 py-6 h-auto rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 whitespace-normal"
          >
            Quero organizar meus relatórios
          </Button>
          
          <div className="mt-6 pt-5 border-t border-border/50">
            <p className="text-xs text-muted-foreground">
              ✓ Acesso imediato após a compra &nbsp;•&nbsp; ✓ Pagamento 100% seguro
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Valor de lançamento válido por tempo limitado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};