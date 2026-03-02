import { X, Check } from "lucide-react";

export const BeforeAfterSection = () => {
  return (
    <section className="py-12 md:py-16 px-4 bg-background">
      <div className="container max-w-5xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground uppercase mb-3">
            Antes e depois do método
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Veja como a organização contínua transforma registros simples em um relatório evolutivo estruturado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* ANTES */}
          <div className="rounded-xl border border-border/60 bg-card shadow-sm p-6 flex flex-col">
            <div className="mb-4">
              <h3 className="text-lg font-bold text-foreground uppercase">Antes</h3>
              <p className="text-xs text-muted-foreground mt-1">
                Relatório escrito no final do período, baseado na memória
              </p>
            </div>

            <div className="text-sm text-foreground/80 leading-relaxed space-y-3 mb-6 flex-1">
              <p>Maria participou das atividades propostas ao longo do período.</p>
              <p>Interagiu com os colegas e demonstrou interesse nas brincadeiras.</p>
              <p>Realizou as propostas de recorte, colagem e contação de histórias.</p>
              <p>Apresentou bom desenvolvimento.</p>
            </div>

            <div className="border-t border-border/40 pt-4">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                Problemas comuns
              </p>
              <ul className="space-y-1.5 text-xs text-muted-foreground">
                <li className="flex items-center gap-2">
                  <X className="w-3.5 h-3.5 text-destructive flex-shrink-0" strokeWidth={2.5} />
                  Texto genérico
                </li>
                <li className="flex items-center gap-2">
                  <X className="w-3.5 h-3.5 text-destructive flex-shrink-0" strokeWidth={2.5} />
                  Pouca evidência concreta
                </li>
                <li className="flex items-center gap-2">
                  <X className="w-3.5 h-3.5 text-destructive flex-shrink-0" strokeWidth={2.5} />
                  Não demonstra evolução
                </li>
                <li className="flex items-center gap-2">
                  <X className="w-3.5 h-3.5 text-destructive flex-shrink-0" strokeWidth={2.5} />
                  Poderia servir para qualquer criança
                </li>
              </ul>
            </div>
          </div>

          {/* DEPOIS */}
          <div className="rounded-xl border border-border/60 shadow-sm p-6 flex flex-col" style={{ backgroundColor: "#F3F1FA" }}>
            <div className="mb-4">
              <h3 className="text-lg font-bold text-foreground uppercase">Depois</h3>
              <p className="text-xs text-muted-foreground mt-1">
                Relatório gerado a partir de registros semanais organizados
              </p>
            </div>

            <div className="text-sm text-foreground/80 leading-relaxed space-y-3 mb-6 flex-1">
              <p>
                Durante o período observado, Maria ampliou sua participação nas atividades coletivas, especialmente nas propostas de contação de histórias. Na semana dedicada à narrativa de "Chapeuzinho Vermelho", demonstrou curiosidade ao formular perguntas sobre os personagens e os desfechos da história, evidenciando maior envolvimento na escuta e na construção de sentido.
              </p>
              <p>
                Nas atividades de recorte e colagem de formas geométricas, apresentou progressiva autonomia no manuseio da tesoura e organização do espaço de trabalho. Nas interações com o grupo, buscou novas parcerias nas brincadeiras de movimento, como jogos com bola e pega-pega, demonstrando maior segurança corporal e integração social ao longo do período.
              </p>
            </div>

            <div className="border-t border-border/40 pt-4">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                O que muda com o método
              </p>
              <ul className="space-y-1.5 text-xs text-foreground/70">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" strokeWidth={2.5} />
                  Evidência concreta
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" strokeWidth={2.5} />
                  Situações reais da rotina
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" strokeWidth={2.5} />
                  Linguagem pedagógica adequada
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" strokeWidth={2.5} />
                  Desenvolvimento descrito ao longo do tempo
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" strokeWidth={2.5} />
                  Individualidade preservada
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
