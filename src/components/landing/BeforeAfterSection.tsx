import { X, Check, ChevronRight, ChevronDown } from "lucide-react";

const ArrowConnector = ({ label }: { label: string }) => (
  <>
    {/* Desktop: horizontal arrow */}
    <div className="hidden md:flex flex-col items-center justify-center gap-1.5 px-1">
      <p className="text-[10px] text-muted-foreground text-center leading-tight max-w-[100px]">
        {label}
      </p>
      <ChevronRight className="w-6 h-6 text-primary" strokeWidth={2} />
    </div>
    {/* Mobile: vertical arrow */}
    <div className="flex md:hidden flex-col items-center gap-1 py-2">
      <p className="text-[10px] text-muted-foreground text-center leading-tight max-w-[200px]">
        {label}
      </p>
      <ChevronDown className="w-6 h-6 text-primary" strokeWidth={2} />
    </div>
  </>
);

export const BeforeAfterSection = () => {
  return (
    <section className="py-12 md:py-16 px-4 bg-background">
      <div className="container max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground uppercase mb-3">
            Antes e depois do método
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Veja como registros simples da rotina se transformam em um relatório evolutivo estruturado.
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:items-stretch">
          {/* ANTES */}
          <div className="flex-1 rounded-xl border border-border/60 bg-card shadow-sm p-5 flex flex-col">
            <div className="mb-4">
              <h3 className="text-lg font-bold text-foreground uppercase">Antes</h3>
              <p className="text-xs text-muted-foreground mt-1">
                Relatório escrito no final do período, baseado apenas na memória.
              </p>
            </div>

            <div className="text-sm text-foreground/80 leading-relaxed space-y-2.5 mb-5 flex-1">
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
                {["Texto genérico", "Pouca evidência concreta", "Não demonstra evolução"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <X className="w-3.5 h-3.5 text-destructive flex-shrink-0" strokeWidth={2.5} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <ArrowConnector label="pequenos registros feitos ao longo das semanas" />

          {/* REGISTRO SEMANAL */}
          <div className="flex-1 rounded-xl border border-border/60 shadow-sm p-5 flex flex-col bg-muted/50">
            <div className="mb-4">
              <h3 className="text-lg font-bold text-foreground uppercase">Registro Semanal</h3>
              <p className="text-xs text-muted-foreground mt-1">
                Exemplo de anotação simples feita durante a semana.
              </p>
            </div>

            <div className="text-sm text-foreground/80 leading-relaxed space-y-3 flex-1">
              <p className="text-xs font-semibold text-muted-foreground">Registro da semana 12/03 a 16/03</p>

              <div>
                <p className="text-xs font-semibold text-foreground/70 mb-0.5">Participação na rotina:</p>
                <p className="text-xs">Maria participou das atividades coletivas com interesse, especialmente durante os momentos de contação de histórias.</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-foreground/70 mb-0.5">Interações:</p>
                <p className="text-xs">Demonstrou boa interação com as colegas, participando de brincadeiras de pega-pega e jogos com bola.</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-foreground/70 mb-0.5">Linguagem:</p>
                <p className="text-xs">Durante a história de Chapeuzinho Vermelho, fez perguntas sobre os personagens e comentou sobre o que poderia acontecer na narrativa.</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-foreground/70 mb-0.5">Exploração e atividades:</p>
                <p className="text-xs">Participou da atividade de recorte e colagem de formas geométricas, demonstrando maior segurança no uso da tesoura.</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-foreground/70 mb-0.5">Desenvolvimento motor:</p>
                <p className="text-xs">Nas brincadeiras de movimento mostrou boa coordenação ao correr e jogar bola.</p>
              </div>
            </div>
          </div>

          <ArrowConnector label="organização e estruturação do conteúdo" />

          {/* DEPOIS */}
          <div className="flex-1 rounded-xl border border-border/60 shadow-sm p-5 flex flex-col" style={{ backgroundColor: "#F3F1FA" }}>
            <div className="mb-4">
              <h3 className="text-lg font-bold text-foreground uppercase">Depois</h3>
              <p className="text-xs text-muted-foreground mt-1">
                Relatório evolutivo estruturado.
              </p>
            </div>

            <div className="text-sm text-foreground/80 leading-relaxed space-y-3 flex-1">
              <p>
                Durante o período observado, Maria ampliou sua participação nas atividades coletivas, especialmente nas propostas de contação de histórias. Na semana dedicada à narrativa de Chapeuzinho Vermelho demonstrou curiosidade ao formular perguntas sobre os personagens, evidenciando maior envolvimento na escuta.
              </p>
              <p>
                Nas atividades de recorte e colagem de formas geométricas apresentou progressiva autonomia no manuseio da tesoura. Nas interações com o grupo buscou novas parcerias nas brincadeiras de movimento como jogos com bola e pega-pega, demonstrando maior segurança corporal e integração ao grupo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
