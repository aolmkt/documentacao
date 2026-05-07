import { useEffect, useRef } from "react";

const HOTMART_URL = "https://pay.hotmart.com/L104708967T?checkoutMode=10";

function track(name: string, data?: Record<string, unknown>) {
  if (typeof window !== "undefined" && typeof window.trackEvent === "function") {
    window.trackEvent(name, data);
  }
}

function buildHotmartUrl() {
  try {
    const current = new URLSearchParams(window.location.search);
    const link = new URL(HOTMART_URL);
    current.forEach((v, k) => link.searchParams.set(k, v));
    if (!link.searchParams.get("sck")) {
      const extId = window.trackingData?.external_id;
      if (extId) link.searchParams.set("sck", extId);
    }
    return link.toString();
  } catch {
    return HOTMART_URL;
  }
}

function openHotmart() {
  track("InitiateCheckout");
  window.open(buildHotmartUrl(), "_self");
}

function scrollToOffer() {
  track("AddToWishlist");
  document.getElementById("comprar")?.scrollIntoView({ behavior: "smooth" });
}

/* ---------- Tiny building blocks ---------- */

const Hand = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <span className={`font-hand text-terracotta ${className}`}>{children}</span>
);

const Mono = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <span className={`font-mono-paper text-ink-muted ${className}`}>{children}</span>
);

const HL = ({ children }: { children: React.ReactNode }) => (
  <span className="highlight-yellow">{children}</span>
);

const CtaButton = ({
  children,
  onClick,
  size = "lg",
  className = "",
}: {
  children: React.ReactNode;
  onClick: () => void;
  size?: "lg" | "md";
  className?: string;
}) => (
  <button
    onClick={onClick}
    className={`group relative w-full bg-terracotta hover:bg-terracotta-dark text-white font-display font-semibold rounded-md shadow-[0_6px_0_hsl(var(--terracotta-dark))] hover:shadow-[0_3px_0_hsl(var(--terracotta-dark))] active:translate-y-1 active:shadow-[0_1px_0_hsl(var(--terracotta-dark))] transition-all ${
      size === "lg" ? "px-8 py-5 text-lg md:text-xl" : "px-6 py-3 text-base"
    } ${className}`}
  >
    {children}
  </button>
);

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <p className="font-mono-paper text-xs uppercase tracking-[0.2em] text-ink-muted mb-3">{children}</p>
);

/* ---------- Sections ---------- */

const TopBar = () => (
  <div className="bg-[hsl(var(--topbar-bg))] text-[hsl(var(--topbar-fg))] py-2.5 text-center">
    <p className="font-mono-paper text-[11px] md:text-xs uppercase tracking-[0.2em]">
      acesso imediato · pagamento único · R$ 47
    </p>
  </div>
);

const Header = () => (
  <header className="paper-bg">
    <div className="max-w-3xl mx-auto px-6 py-5 flex items-center justify-between">
      <div className="flex items-center gap-2.5">
        <div className="w-9 h-9 rounded-full bg-terracotta text-white font-display italic font-bold flex items-center justify-center text-lg shadow-md">
          r
        </div>
        <span className="font-display font-semibold text-ink">Rotina Pedagógica</span>
      </div>
      <button
        onClick={scrollToOffer}
        className="font-mono-paper text-[11px] md:text-xs uppercase tracking-[0.18em] border border-terracotta text-terracotta px-4 py-2 rounded-full hover:bg-terracotta hover:text-white transition-colors"
      >
        quero por R$ 47
      </button>
    </div>
  </header>
);

const Hero = () => (
  <section className="paper-bg paper-margin relative">
    <div className="max-w-3xl mx-auto px-6 md:px-12 py-12 md:py-16">
      <Hand className="text-base md:text-lg italic">professora,</Hand>
      <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05] text-ink mt-3 mb-8">
        Você viu.
        <br />
        E deixou <HL>passar.</HL>
      </h1>

      <p className="font-display text-xl md:text-2xl text-ink leading-snug">
        Tem coisa acontecendo na sua sala…
      </p>
      <p className="font-hand text-2xl md:text-3xl text-terracotta italic mt-2 mb-6">
        que você ainda não conseguiu colocar no papel.
      </p>

      <div className="bg-post-it border-l-4 border-post-it-border px-5 py-5 my-8 max-w-xl shadow-sm">
        <p className="font-display text-lg md:text-xl text-ink leading-snug">
          O método tira o que já tá na sua cabeça — antes que você deixe passar — e devolve em
          relatório aprovado.
        </p>
        <p className="font-hand text-2xl text-terracotta italic mt-3">
          Sem você escrever uma linha.
        </p>
      </div>

      <div className="relative mt-10">
        <Hand className="absolute -top-7 right-2 text-lg italic transform -rotate-6">
          acesso imediato ↓
        </Hand>
        <CtaButton onClick={openHotmart}>
          Ok. eu não vou perder isso de novo →
        </CtaButton>
      </div>

      <p className="text-center mt-3">
        <Mono>(R$47 · acesso imediato)</Mono>
      </p>

      <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-6 text-sm text-ink-soft font-mono-paper">
        <span className="flex items-center gap-2"><Dot /> pagamento único</span>
        <span className="flex items-center gap-2"><Dot /> sem mensalidade</span>
        <span className="flex items-center gap-2"><Dot /> aplicação imediata</span>
      </div>
    </div>
  </section>
);

const Dot = () => <span className="w-1.5 h-1.5 rounded-full bg-rule-green inline-block" />;

const MIND_PAIRS = [
  ["agitada", "comportamento ativo e exploratório no espaço de sala"],
  ["briguenta", "em processo de construção de habilidades de convivência"],
  ["morde os colegas", "expressa frustração por meio de reações corporais quando contrariada"],
  ["não presta atenção", "demonstra dificuldade de manter foco em atividades dirigidas, prefere exploração livre"],
  ["chora por tudo", "em processo de regulação emocional, busca acolhimento como forma de organização"],
];

const MindToReport = () => (
  <section className="bg-paper-cream">
    <div className="max-w-3xl mx-auto px-6 md:px-12 py-14 md:py-20">
      <SectionLabel>o problema que ninguém fala</SectionLabel>
      <h2 className="font-display text-3xl md:text-5xl text-ink leading-tight mb-2">
        Você sabe o que viu.
      </h2>
      <p className="font-hand text-3xl md:text-4xl text-terracotta italic mb-8">
        Só não pode escrever assim.
      </p>

      <p className="text-ink-soft text-base md:text-lg leading-relaxed mb-10 max-w-2xl">
        Toda sala tem aquela criança que não para. Já é de lei. Mas você não pode escrever que ela é
        "agitada". Tem que escrever… outra coisa.
      </p>

      <div className="space-y-4">
        {MIND_PAIRS.map(([think, write]) => (
          <div key={think} className="bg-paper border border-paper-line/60 rounded-md p-5 shadow-sm">
            <Mono className="text-[10px] uppercase tracking-[0.18em] block mb-1">
              o que você pensa
            </Mono>
            <p className="font-hand text-2xl text-ink-soft italic line-through decoration-terracotta/60 mb-3">
              "{think}"
            </p>
            <Mono className="text-[10px] uppercase tracking-[0.18em] block mb-1 text-rule-green">
              → o que você tem que escrever
            </Mono>
            <p className="font-display text-base md:text-lg text-ink italic">"{write}"</p>
          </div>
        ))}
      </div>

      <div className="mt-12 space-y-4 text-ink leading-relaxed text-lg max-w-2xl">
        <p>
          E você ainda tem que explicar:{" "}
          <strong className="font-display">quando aconteceu, por quê, em que contexto.</strong>
        </p>
        <p>Não é falta de conteúdo. É excesso de responsabilidade na forma de escrever.</p>
        <p>Pra uma criança, fica lindo.</p>
        <p className="font-display text-2xl">Pra 20, você enlouquece.</p>
      </div>
    </div>
  </section>
);

const EmotionalBreak = () => (
  <section className="paper-bg paper-margin relative">
    <div className="max-w-2xl mx-auto px-6 md:px-12 py-14 md:py-20 space-y-6 text-ink leading-relaxed">
      <p className="text-lg">E o pior nem é o tempo.</p>
      <p className="text-lg">É que você sabe que deveria ser simples.</p>
      <p className="font-display text-2xl">Mas não é.</p>
      <p className="text-lg">E isso começa a pesar.</p>
      <p className="text-lg">Porque enquanto você trava…</p>
      <p className="font-display text-2xl text-terracotta">os relatórios acumulam.</p>
      <p className="text-lg">E você já entra no próximo dia</p>
      <p className="font-hand text-4xl text-terracotta italic">devendo.</p>

      <div className="pt-10">
        <Hand className="block text-2xl italic mb-4">espera. lê isso devagar.</Hand>
        <p className="text-lg">Não é falta de esforço.</p>
        <p className="text-lg">Você está tentando escrever do jeito que te ensinaram.</p>
        <p className="font-display text-xl italic">e esse jeito não funciona na vida real.</p>
        <p className="text-lg mt-4">E enquanto você continuar insistindo nesse jeito,</p>
        <p className="text-lg">nada muda.</p>
        <p className="font-display text-5xl mt-6 text-ink">Para.</p>
      </div>

      <div className="pt-10 space-y-4">
        <Hand className="block text-xl italic">…agora você percebeu.</Hand>
        <p className="text-lg">não foi algo que você pensou.</p>
        <p className="text-lg">Você não explicou isso.</p>
        <p className="font-display text-2xl">só bateu.</p>
        <p className="text-lg mt-4">isso não aconteceu por acaso.</p>
        <p className="font-display text-2xl text-terracotta">tem estrutura.</p>
      </div>
    </div>
  </section>
);

const BeforeAfterLara = () => (
  <section className="bg-paper-cream">
    <div className="max-w-3xl mx-auto px-6 md:px-12 py-14 md:py-20">
      <p className="text-ink leading-relaxed text-lg mb-3">E é aqui que quase todo mundo erra.</p>
      <p className="text-ink leading-relaxed text-lg mb-3">O erro não está no que você faz.</p>
      <p className="font-display text-2xl text-ink mb-8">
        Está no que você não vê… <em className="font-hand text-terracotta not-italic">enquanto faz.</em>
      </p>

      <div className="space-y-2.5 max-w-xl mb-12">
        {[
          "Você não começa do zero.",
          "Você não fica escolhendo palavra.",
          "Você não tenta \"escrever bonito\".",
        ].map((t) => (
          <p key={t} className="flex gap-3 text-ink">
            <span className="text-rule-green font-bold">✓</span>
            <span>{t}</span>
          </p>
        ))}
      </div>

      <p className="text-ink mb-3">Você pega o que já observou.</p>
      <p className="text-ink mb-4">E aquilo que antes virava:</p>
      <ul className="space-y-2 mb-8 text-ink-soft">
        {[
          "tela parada por 20 minutos",
          "frase reescrita 5 vezes seguidas",
          "dúvida se \"tá certo ou não\"",
        ].map((t) => (
          <li key={t} className="flex gap-3">
            <span className="text-terracotta font-bold">✕</span>
            <span>{t}</span>
          </li>
        ))}
      </ul>

      <p className="font-display text-2xl text-ink italic mb-2">Agora vira texto pronto.</p>
      <p className="text-ink-soft mb-10">Sem travar. Sem apagar. Sem recomeçar.</p>

      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="bg-paper border border-paper-line p-5 rounded-md shadow-sm">
          <Mono className="text-[10px] uppercase tracking-[0.18em] block mb-2">antes</Mono>
          <p className="font-hand text-xl text-ink-soft italic leading-snug">
            "Lara empilhou bloco. Caiu. Tentou de novo. Falou 'olha eu fiz'."
          </p>
        </div>
        <div className="bg-post-it border border-post-it-border p-5 rounded-md shadow-sm">
          <Mono className="text-[10px] uppercase tracking-[0.18em] block mb-2 text-terracotta">depois</Mono>
          <p className="font-display text-sm md:text-base text-ink leading-relaxed italic">
            "Lara demonstrou avanços na coordenação motora fina e na persistência diante do desafio.
            Ao empilhar blocos, manteve a tentativa mesmo após a queda, evidenciando regulação
            emocional. O movimento de compartilhar a conquista com a colega indica desenvolvimento
            da interação social…"
          </p>
        </div>
      </div>

      <p className="text-center text-ink-muted text-sm mb-8">
        → escrito a partir da anotação simples acima.
      </p>

      <div className="max-w-md mx-auto">
        <CtaButton onClick={openHotmart}>Ok. mostra isso. →</CtaButton>
        <p className="text-center mt-3"><Mono>(R$47 · acesso na hora)</Mono></p>
      </div>
    </div>
  </section>
);

const MidnightScene = () => (
  <section className="paper-bg paper-margin relative">
    <div className="max-w-3xl mx-auto px-6 md:px-12 py-14 md:py-20">
      <SectionLabel>e não, não é só com você</SectionLabel>
      <h2 className="font-display text-3xl md:text-5xl text-ink leading-tight mb-2">
        Toda semana,
      </h2>
      <p className="font-hand text-3xl md:text-4xl text-terracotta italic mb-8">
        milhares tão nessa cena.
      </p>
      <p className="text-ink-soft text-base md:text-lg mb-8 max-w-2xl">
        Isso virou rotina pra quem escreve relatório. Você não é a única que trava. Só que ninguém
        fala sobre.
      </p>

      <div className="bg-paper border border-paper-line/60 rounded-md p-6 space-y-3 max-w-xl shadow-sm">
        {[
          "Você olha o relógio. 22h47.",
          "Faltam 19. Amanhã entrega.",
          "Você apaga a frase. Escreve de novo. Apaga.",
          "A coordenação já mandou três voltarem.",
          "Você pensa: \"vou escrever qualquer coisa, só pra entregar.\"",
          "E sente culpa. Porque você sabe o que aconteceu com cada uma.",
        ].map((t) => (
          <p key={t} className="flex gap-3 text-ink">
            <span className="text-rule-green font-bold">✓</span>
            <span>{t}</span>
          </p>
        ))}
      </div>

      <p className="font-display text-xl text-ink mt-8 max-w-2xl">
        Não é falta de competência. É falta de uma estrutura que tire você do branco e te entregue o
        texto pronto.
      </p>
    </div>
  </section>
);

const WHAT_YOU_GET = [
  ["Estrutura pronta de relatórios", "Você abre. Escolhe a faixa. E o esqueleto que travava na primeira frase já tá montado."],
  ["Caminho passo a passo", "Você solta o que já tá na sua cabeça. O método devolve em relatório aprovado. Você não escreve."],
  ["Exemplos reais de relatórios", "Você lê o antes e o depois. E entende, em 30 segundos, o que vai acontecer com os seus."],
  ["Guia simples (celular ou pc)", "Você não instala nada. Não aprende nada novo. Abre, solta, entrega."],
];

const WhatYouGet = () => (
  <section className="bg-paper-cream">
    <div className="max-w-3xl mx-auto px-6 md:px-12 py-14 md:py-20">
      <SectionLabel>o que você recebe</SectionLabel>
      <h2 className="font-display text-3xl md:text-5xl text-ink leading-tight mb-2">
        Não é curso longo.
      </h2>
      <p className="font-hand text-3xl md:text-4xl text-terracotta italic mb-8">
        é ferramenta de execução.
      </p>
      <p className="text-ink-soft text-base md:text-lg mb-10 max-w-2xl">
        Você abre. Copia. E o relatório que antes travava… sai.
      </p>

      <div className="grid md:grid-cols-2 gap-4">
        {WHAT_YOU_GET.map(([title, desc]) => (
          <div key={title} className="bg-paper border border-paper-line p-5 rounded-md shadow-sm">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-terracotta text-white font-bold mb-3">✓</span>
            <h3 className="font-display text-lg font-semibold text-ink mb-1.5">{title}</h3>
            <p className="text-ink-soft text-sm leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const BeforeAfterMiguel = () => (
  <section className="paper-bg paper-margin relative">
    <div className="max-w-3xl mx-auto px-6 md:px-12 py-14 md:py-20">
      <Hand className="block text-xl italic mb-3">para. não pula isso.</Hand>
      <p className="font-display text-2xl text-ink mb-2">A Lara não foi exceção.</p>
      <p className="font-hand text-3xl text-terracotta italic mb-8">
        Foi só a primeira que você conseguiu ver.
      </p>

      <p className="text-ink-soft mb-3">e aquilo que você viu…</p>
      <p className="font-display text-xl text-ink italic mb-8">nunca mais volta.</p>

      <p className="text-ink mb-6 max-w-2xl leading-relaxed">
        Foi aquela aluna… na terça… segurando o lápis vermelho pela primeira vez. E você só lembrou
        quando já era tarde.
      </p>

      <p className="text-ink mb-3 max-w-2xl leading-relaxed">
        Não é "mais um relatório" que você perdeu. É a evolução daquela criança. O argumento que
        você não teve na reunião. A segurança que você precisava no fechamento do bimestre.
      </p>

      <p className="font-hand text-3xl text-terracotta italic my-8">e você deixou passar.</p>

      <div className="border-t border-paper-line/60 pt-12">
        <SectionLabel>até que fica impossível ignorar</SectionLabel>
        <h2 className="font-display text-3xl md:text-5xl text-ink leading-tight mb-2">
          Outra criança, outra anotação.
        </h2>
        <p className="font-hand text-3xl md:text-4xl text-terracotta italic mb-8">
          mesmo resultado.
        </p>
        <p className="text-ink-soft mb-8 max-w-2xl">
          Funciona com qualquer faixa, qualquer cena, qualquer criança.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-paper border border-paper-line p-5 rounded-md shadow-sm">
            <div className="flex items-baseline justify-between mb-2">
              <Mono className="text-[10px] uppercase tracking-[0.18em]">sua anotação</Mono>
              <Mono className="text-[10px] text-terracotta">8s no celular</Mono>
            </div>
            <p className="font-hand text-xl text-ink-soft italic leading-snug">
              "Miguel pegou o livro sozinho. Sentou. Apontou pro cão e falou 'au au, tá ali'. Ficou
              4 minutos folheando. (a primeira vez que ele senta sem chamar ninguém.)"
            </p>
          </div>
          <div className="bg-post-it border border-post-it-border p-5 rounded-md shadow-sm">
            <div className="flex items-baseline justify-between mb-2">
              <Mono className="text-[10px] uppercase tracking-[0.18em] text-terracotta">relatório pronto</Mono>
              <Mono className="text-[10px] text-terracotta">em 90 segundos</Mono>
            </div>
            <p className="font-display text-sm text-ink leading-relaxed italic">
              "Miguel demonstrou autonomia ao escolher o livro de forma espontânea e iniciativa no
              contato com a leitura. Trata-se de um marco no desenvolvimento de sua autorregulação,
              dado que, neste momento, sustentou a ação sem demandar a mediação do adulto. A
              permanência de quatro minutos de folhear a obra evidencia capacidade de atenção
              concentrada para a faixa etária, e a verbalização ao reconhecer elementos da imagem
              indica avanços no campo da Escuta, Fala, Pensamento e Imaginação…"
            </p>
          </div>
        </div>

        <div className="mt-10 space-y-2 text-ink">
          <p>Você já viu acontecer com a Lara.</p>
          <p>Você já viu acontecer com o Miguel.</p>
          <p className="font-display text-xl italic mt-4">
            a diferença agora é que você não pode mais
          </p>
          <p className="font-hand text-3xl text-terracotta italic">dizer que não viu.</p>
        </div>
      </div>
    </div>
  </section>
);

const STEPS = [
  ["01", "Você abre a estrutura", "Em 10 segundos, aquele branco da tela some. O esqueleto já tá ali."],
  ["02", "Você solta o que viu", "Aquilo que tava espalhado no caderno, no celular, na cabeça, sai de uma vez. Antes que você deixe passar."],
  ["03", "O método devolve aprovado", "O que você soltou volta no formato que coordenação aprova. Você não escreveu uma linha."],
  ["04", "Confere e entrega", "Você lê, ajusta uma palavra se quiser. E aquilo que ia tomar 2 horas, acabou."],
];

const FourSteps = () => (
  <section className="bg-paper-cream">
    <div className="max-w-3xl mx-auto px-6 md:px-12 py-14 md:py-20">
      <SectionLabel>como funciona</SectionLabel>
      <h2 className="font-display text-3xl md:text-5xl text-ink leading-tight mb-2">
        Quatro passos.
      </h2>
      <p className="font-hand text-3xl md:text-4xl text-terracotta italic mb-8">zero do zero.</p>
      <p className="text-ink-soft mb-10 max-w-2xl">
        O método tira o que já tá na sua cabeça, antes que você deixe passar, e devolve em relatório
        aprovado. Sem você escrever uma linha.
      </p>

      <div className="space-y-5">
        {STEPS.map(([num, title, desc]) => (
          <div key={num} className="bg-paper border border-paper-line p-5 rounded-md shadow-sm flex gap-5">
            <div className="font-display text-4xl md:text-5xl text-terracotta font-bold leading-none">
              {num}
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-ink mb-1">{title}</h3>
              <p className="text-ink-soft text-sm leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const OldVsNew = () => (
  <section className="paper-bg paper-margin relative">
    <div className="max-w-3xl mx-auto px-6 md:px-12 py-14 md:py-20">
      <Hand className="block text-xl italic mb-3">e você sabe disso há anos.</Hand>
      <h2 className="font-display text-3xl md:text-5xl text-ink leading-tight mb-2">
        Você não trava por preguiça.
      </h2>
      <p className="font-hand text-3xl md:text-4xl text-terracotta italic mb-8">
        você trava porque começa do branco.
      </p>
      <p className="text-ink-soft mb-10 max-w-2xl">
        E mesmo assim… você abriu o mesmo documento. Tentou de novo. Do mesmo jeito. Domingo
        passado. E o anterior. E o de antes.
      </p>

      <div className="grid md:grid-cols-2 gap-5">
        <div className="bg-paper border border-paper-line p-5 rounded-md">
          <Mono className="text-[10px] uppercase tracking-[0.18em] block mb-3">do jeito antigo</Mono>
          <ul className="space-y-2.5 text-ink-soft">
            {[
              "você trava na primeira frase",
              "texto sai igual pra todo mundo",
              "duas horas por relatório",
              "coordenação pede pra refazer",
            ].map((t) => (
              <li key={t} className="flex gap-3">
                <span className="text-terracotta font-bold">✗</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-post-it border border-post-it-border p-5 rounded-md">
          <Mono className="text-[10px] uppercase tracking-[0.18em] block mb-3 text-terracotta">
            Método Rotina
          </Mono>
          <ul className="space-y-2.5 text-ink">
            {[
              "estrutura pedagógica pronta",
              "cada criança fica única",
              "minutos por relatório",
              "linguagem que coordenação aprova",
            ].map((t) => (
              <li key={t} className="flex gap-3">
                <span className="text-rule-green font-bold">✓</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const TESTIMONIALS = [
  ["Tava acumulando 23 relatórios. Comprei numa quarta, na sexta tinha entregado tudo. Sem exagero.", "Letícia M.", "Berçário II"],
  ["O texto sai com a minha cara. Cada criança ficou única. Não é texto pronto, é o meu olhar organizado.", "Andreia S.", "Pré I"],
  ["Eu travava muito na escrita. Agora colo minhas anotações e o relatório vem estruturado. Mudou meu domingo.", "Patrícia R.", "Maternal"],
];

const Testimonials = () => (
  <section className="bg-paper-cream">
    <div className="max-w-3xl mx-auto px-6 md:px-12 py-14 md:py-20">
      <Hand className="block text-xl italic mb-3">e quando isso começa a acontecer…</Hand>
      <h2 className="font-display text-3xl md:text-5xl text-ink leading-tight mb-2">
        Professora pra
      </h2>
      <p className="font-hand text-3xl md:text-4xl text-terracotta italic mb-10">professora.</p>

      <div className="grid md:grid-cols-3 gap-5">
        {TESTIMONIALS.map(([quote, name, role]) => (
          <div key={name} className="bg-paper border border-paper-line p-5 rounded-md shadow-sm">
            <p className="text-terracotta tracking-wider mb-3">★ ★ ★ ★ ★</p>
            <p className="font-display italic text-ink leading-snug mb-4">"{quote}"</p>
            <p className="font-display font-semibold text-ink">{name}</p>
            <Mono className="text-xs">{role}</Mono>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const EmotionalClose = () => (
  <section className="paper-bg paper-margin relative">
    <div className="max-w-2xl mx-auto px-6 md:px-12 py-14 md:py-20 space-y-5 text-ink">
      <p>e não é só você.</p>
      <p>Se você já percebeu isso acontecendo…</p>
      <p className="font-display text-xl italic">então isso aqui vai te incomodar.</p>

      <blockquote className="font-hand text-2xl md:text-3xl text-terracotta italic border-l-4 border-terracotta pl-5 my-8">
        "Eu achei que era coisa da minha cabeça… até começar a ver isso em tudo."
      </blockquote>

      <blockquote className="font-hand text-2xl md:text-3xl text-terracotta italic border-l-4 border-terracotta pl-5 my-8">
        "Depois que você vê uma vez… não dá mais pra fingir que não viu."
      </blockquote>

      <p className="font-display text-2xl mt-10">Você não está comprando uma ferramenta.</p>
      <p className="font-display text-2xl text-terracotta italic">
        Você está parando de perder coisa que já aconteceu.
      </p>

      <p className="mt-6">Cada observação que você deixa passar…</p>
      <p className="font-hand text-3xl text-terracotta italic">não volta.</p>

      <p className="mt-6">Isso aqui não é sobre escrever melhor.</p>
      <p className="font-display text-xl italic">É sobre não deixar escapar de novo.</p>
    </div>
  </section>
);

const OfferCard = () => (
  <section id="comprar" className="bg-paper-cream scroll-mt-8">
    <div className="max-w-xl mx-auto px-6 md:px-12 py-14 md:py-20">
      <div className="bg-paper border-2 border-terracotta rounded-lg p-7 md:p-9 shadow-lg">
        <Mono className="text-[10px] uppercase tracking-[0.2em] text-terracotta block mb-4">
          oferta
        </Mono>
        <ul className="space-y-3 mb-6 text-ink">
          {[
            "Estrutura pronta de relatórios (BNCC)",
            "Caminho passo a passo do método",
            "Exemplos reais de relatórios completos",
            "Guia simples (celular ou computador)",
          ].map((t) => (
            <li key={t} className="flex gap-3">
              <span className="text-rule-green font-bold">✓</span>
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <p className="font-display text-5xl md:text-6xl font-bold text-ink text-center mb-6">
          R$47.
        </p>

        <CtaButton onClick={openHotmart}>Ok. mostra isso. →</CtaButton>
        <p className="text-center mt-3"><Mono>(Pix ou cartão · acesso imediato)</Mono></p>
      </div>
    </div>
  </section>
);

const FAQ_ITEMS = [
  ["Funciona se eu não sou boa com tecnologia?", "Funciona. O método tira o que já tá na sua cabeça e devolve em relatório aprovado. Você não escreve uma linha. Zero conhecimento técnico necessário."],
  ["Vou ter que escrever do zero?", "Não. Você já tentou escrever do jeito certo sozinha. E travou. O método tira o que já tá na sua cabeça e devolve em relatório aprovado. Você não escreve uma linha."],
  ["O texto não vai sair genérico?", "Não. O método só funciona com o que VOCÊ viu. Sem suas observações, ele não tem matéria-prima. Cada criança sai única porque o que você soltou era único."],
  ["A coordenação aceita?", "Sim. Você é quem observou e quem assina. O método só organiza em linguagem pedagógica adequada. O olhar e a autoria continuam seus."],
  ["Funciona no celular?", "Sim. O guia é pensado pra rodar no celular, no tablet ou no computador. Onde você já trabalha."],
  ["É curso? Tem aula?", "Não é curso longo. É ferramenta de execução: você abre, aplica, entrega. Sem turma, sem cronograma, sem prazo."],
  ["Como recebo?", "Após o pagamento, acesso liberado na hora por e-mail. Sem espera."],
];

const FaqV2 = () => (
  <section className="paper-bg paper-margin relative">
    <div className="max-w-3xl mx-auto px-6 md:px-12 py-14 md:py-20">
      <SectionLabel>antes de comprar</SectionLabel>
      <h2 className="font-display text-3xl md:text-5xl text-ink leading-tight mb-2">
        Perguntas
      </h2>
      <p className="font-hand text-3xl md:text-4xl text-terracotta italic mb-10">
        que toda professora faz.
      </p>

      <div className="space-y-3">
        {FAQ_ITEMS.map(([q, a]) => (
          <details key={q} className="group bg-paper border border-paper-line rounded-md p-5 shadow-sm">
            <summary className="cursor-pointer font-display text-base md:text-lg text-ink flex items-center justify-between gap-4 list-none">
              <span>{q}</span>
              <span className="text-terracotta text-xl group-open:rotate-45 transition-transform">+</span>
            </summary>
            <p className="text-ink-soft mt-3 leading-relaxed">{a}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);

const TwoOptions = () => (
  <section className="bg-paper-cream">
    <div className="max-w-3xl mx-auto px-6 md:px-12 py-14 md:py-20">
      <Hand className="block text-xl italic mb-3">é aqui que vira.</Hand>
      <h2 className="font-display text-3xl md:text-5xl text-ink leading-tight mb-10">
        Você fecha essa página e escolhe uma:
      </h2>

      <div className="grid md:grid-cols-2 gap-5 mb-10">
        <div className="bg-paper border border-paper-line p-6 rounded-md opacity-80">
          <Mono className="text-[10px] uppercase tracking-[0.18em] block mb-3">opção 1</Mono>
          <h3 className="font-display text-2xl text-ink mb-3">Continuar igual.</h3>
          <p className="text-ink-soft text-sm leading-relaxed">
            Domingo escrevendo. Travar na primeira frase. Apagar e começar de novo. Entregar texto
            que sai igual pra todo mundo. Coordenação pedindo pra refazer.
          </p>
        </div>
        <div className="bg-post-it border-2 border-terracotta p-6 rounded-md shadow-md">
          <Mono className="text-[10px] uppercase tracking-[0.18em] block mb-3 text-terracotta">
            opção 2 · R$ 47
          </Mono>
          <h3 className="font-display text-2xl text-ink mb-3">Acabar com isso hoje.</h3>
          <p className="text-ink-soft text-sm leading-relaxed">
            Você descreve a criança em linguagem simples. O relatório sai estruturado, na linguagem
            certa. Domingo livre. Coordenação elogiando. R$ 47 uma única vez.
          </p>
        </div>
      </div>

      <div className="max-w-md mx-auto">
        <CtaButton onClick={openHotmart}>Escolho a opção 2 →</CtaButton>
        <p className="text-center mt-3"><Mono>acesso imediato · pagamento único</Mono></p>
      </div>
    </div>
  </section>
);

const FinalClose = () => (
  <section className="paper-bg paper-margin relative">
    <div className="max-w-2xl mx-auto px-6 md:px-12 py-14 md:py-20 space-y-5 text-ink">
      <p className="font-display text-2xl">Você já viu.</p>
      <p className="font-display text-2xl">E a diferença agora…</p>
      <p className="font-display text-2xl">é que você não pode mais dizer</p>
      <p className="font-hand text-4xl text-terracotta italic">que não sabia.</p>

      <p className="mt-8">Se continuar fazendo do mesmo jeito…</p>
      <p>não é falta de tempo.</p>
      <p className="font-display text-2xl text-terracotta">é escolha.</p>
      <p className="font-hand text-2xl italic">e você sabe disso.</p>

      <div className="max-w-md mt-10">
        <CtaButton onClick={openHotmart}>Eu preciso ver isso. →</CtaButton>
        <p className="text-center mt-3"><Mono>(R$47 · acesso imediato)</Mono></p>
      </div>

      <div className="pt-12 space-y-4 text-ink-soft">
        <p>Se você fechar essa página agora…</p>
        <p className="font-display text-xl text-ink">nada muda.</p>
        <p>Amanhã você senta de novo.</p>
        <p>Abre o relatório.</p>
        <p>Olha pra tela.</p>
        <p>E fica alguns segundos sem saber por onde começar.</p>
        <p className="font-hand text-2xl text-terracotta italic">e o tempo passando.</p>
        <p>E você percebendo que tá travada de novo.</p>
        <p>Só que com mais coisa acumulada.</p>
        <p>Mais pressão.</p>
        <p>E menos paciência.</p>
      </div>
    </div>
  </section>
);

const FooterV2 = () => (
  <footer className="bg-[hsl(var(--topbar-bg))] text-[hsl(var(--topbar-fg))] py-10 text-center">
    <p className="font-display text-2xl font-bold">Rotina Pedagógica</p>
    <p className="font-mono-paper text-xs mt-2 text-white/50">
      © {new Date().getFullYear()} · Método Rotina Pedagógica
    </p>
  </footer>
);

/* ---------- Page ---------- */

const LandingV2 = () => {
  const offerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = document.getElementById("comprar");
    if (!el) return;
    let fired = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !fired) {
          fired = true;
          track("AddToCart");
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <main ref={offerRef} className="bg-paper text-ink min-h-screen">
      <TopBar />
      <Header />
      <Hero />
      <MindToReport />
      <EmotionalBreak />
      <BeforeAfterLara />
      <MidnightScene />
      <WhatYouGet />
      <BeforeAfterMiguel />
      <FourSteps />
      <OldVsNew />
      <Testimonials />
      <EmotionalClose />
      <OfferCard />
      <FaqV2 />
      <TwoOptions />
      <FinalClose />
      <FooterV2 />
    </main>
  );
};

export default LandingV2;
