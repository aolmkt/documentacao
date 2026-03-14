import { X, Check, ChevronDown } from "lucide-react";

export const BeforeAfterSection = () => {
  return (
    <section className="py-16 md:py-20 px-6 bg-background">
      <div className="container max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-[2rem] font-bold text-foreground uppercase mb-3 leading-[1.2]">
            Antes e depois do método
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-[1.6]">
            Veja como um registro simples da semana se transforma em um relatório evolutivo pedagógico estruturado.
          </p>
        </div>

        {/* Linha 1: dois cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* ANTES */}
          <div className="bg-card rounded-xl border border-border/60 shadow-sm p-7 flex flex-col">
            <div className="mb-4">
              <p className="text-[14px] font-semibold text-foreground/60 uppercase tracking-wide mb-1">
                Antes
              </p>
              <p className="text-[15px] text-muted-foreground leading-[1.6]">
                Como muitas professoras acabam escrevendo
              </p>
            </div>

            <div className="text-[15px] text-foreground/80 leading-[1.6] space-y-2.5 mb-5 flex-1">
              <p>Maria participou das atividades propostas ao longo do período.</p>
              <p>Interagiu com os colegas e demonstrou interesse nas brincadeiras.</p>
              <p>Realizou as propostas de recorte, colagem e contação de histórias.</p>
              <p>Apresentou bom desenvolvimento.</p>
            </div>

            <div className="border-t border-border/40 pt-4">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                Problemas comuns
              </p>
              <ul className="space-y-1.5 text-[14px] text-muted-foreground">
                {["Texto genérico", "Pouca evidência concreta", "Não demonstra evolução"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <X className="w-3.5 h-3.5 text-destructive flex-shrink-0" strokeWidth={2.5} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* REGISTRO SEMANAL */}
          <div className="bg-card rounded-xl border border-border/60 shadow-sm p-7 flex flex-col">
            <div className="mb-4">
              <p className="text-[14px] font-semibold text-foreground/60 uppercase tracking-wide mb-1">
                Registro da semana
              </p>
              <p className="text-[15px] text-muted-foreground leading-[1.6]">
                Exemplo de registro simples da rotina
              </p>
            </div>

            <div className="text-[15px] text-foreground/80 leading-[1.6] space-y-3 flex-1">
              <p className="text-[13px] font-semibold text-muted-foreground">Registro da semana 12/03 a 16/03</p>

              <div>
                <p className="text-[13px] font-semibold text-foreground/70 mb-0.5">Participação na rotina:</p>
                <p className="text-[15px] leading-[1.6]">Maria participou das atividades coletivas com interesse, especialmente durante os momentos de contação de histórias.</p>
              </div>
              <div>
                <p className="text-[13px] font-semibold text-foreground/70 mb-0.5">Interações:</p>
                <p className="text-[15px] leading-[1.6]">Demonstrou boa interação com as colegas, participando de brincadeiras de pega-pega e jogos com bola.</p>
              </div>
              <div>
                <p className="text-[13px] font-semibold text-foreground/70 mb-0.5">Linguagem:</p>
                <p className="text-[15px] leading-[1.6]">Durante a história de Chapeuzinho Vermelho, fez perguntas sobre os personagens e comentou sobre o que poderia acontecer na narrativa.</p>
              </div>
              <div>
                <p className="text-[13px] font-semibold text-foreground/70 mb-0.5">Exploração e atividades:</p>
                <p className="text-[15px] leading-[1.6]">Participou da atividade de recorte e colagem de formas geométricas, demonstrando maior segurança no uso da tesoura.</p>
              </div>
              <div>
                <p className="text-[13px] font-semibold text-foreground/70 mb-0.5">Desenvolvimento motor:</p>
                <p className="text-[15px] leading-[1.6]">Nas brincadeiras de movimento mostrou boa coordenação ao correr e jogar bola.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Seta de conexão */}
        <div className="flex flex-col items-center gap-1 py-4">
          <p className="text-xs text-muted-foreground text-center leading-tight">
            organização e estruturação do conteúdo
          </p>
          <ChevronDown className="w-6 h-6 text-primary" strokeWidth={2} />
        </div>

        {/* Linha 2: card único centralizado */}
        <div className="flex justify-center">
          <div className="w-full max-w-[700px] rounded-xl border border-border/60 shadow-sm p-7 flex flex-col" style={{ backgroundColor: "#F3F1FA" }}>
            <div className="mb-4">
              <p className="text-[14px] font-semibold text-foreground/60 uppercase tracking-wide mb-1">
                Relatório pedagógico gerado
              </p>
              <p className="text-[15px] text-muted-foreground leading-[1.6]">
                Como o método organiza o texto
              </p>
            </div>

            <div className="text-[15px] text-foreground/80 leading-[1.6] space-y-3 mb-5">
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
              <ul className="space-y-1.5 text-[14px] text-foreground/70">
                {["Evidência concreta", "Situações reais da rotina", "Linguagem pedagógica adequada", "Desenvolvimento descrito ao longo do tempo", "Individualidade preservada"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" strokeWidth={2.5} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};