import { useEffect, useMemo, useRef, useState, type CSSProperties, type MouseEvent } from "react";
import { buildHotmartUrl, fireInitiateCheckout } from "@/lib/checkout";
import { useBackredirect, withCurrentParams } from "@/lib/backredirect";
import { useEngagementTracking } from "@/hooks/useEngagementTracking";
import FakeBrowserBar from "@/components/FakeBrowserBar";

const fontHand: CSSProperties = { fontFamily: '"Caveat", "Bradley Hand", cursive' };
const fontMono: CSSProperties = { fontFamily: '"JetBrains Mono", ui-monospace, "SF Mono", Menlo, monospace' };

const pageStyle: CSSProperties = {
  width: "100%",
  maxWidth: 480,
  margin: "0 auto",
  background: "#f5efe4",
  fontFamily: '"Source Serif 4", Georgia, serif',
  color: "#2a2520",
  overflow: "hidden",
};

const ctaPrimary: CSSProperties = {
  display: "block",
  textDecoration: "none",
  textAlign: "center",
  width: "100%",
  padding: "18px 20px",
  border: "none",
  background: "#c45a3e",
  color: "#fff",
  borderRadius: 10,
  fontSize: 18,
  fontWeight: 700,
  fontFamily: "inherit",
  boxShadow: "0 2px 0 #8d3d28, 0 12px 28px rgba(196,90,62,0.4)",
  letterSpacing: "-0.01em",
  boxSizing: "border-box",
  cursor: "pointer",
};

const LandingV2 = () => {
  const offerRef = useRef<HTMLDivElement>(null);
  const heroCtaRef = useRef<HTMLAnchorElement>(null);
  const [showSticky, setShowSticky] = useState(false);
  useBackredirect(() => withCurrentParams("/br1"));
  useEngagementTracking("landing");

  const checkoutHref = useMemo(() => buildHotmartUrl({ srcAppend: "pv" }), []);

  const openHotmart = (position: string) => (e?: MouseEvent) => {
    if (e) e.preventDefault();
    fireInitiateCheckout({ position, page: "landing" });
    window.open(checkoutHref, "_self");
  };

  // Sticky CTA: appears after hero CTA leaves viewport
  useEffect(() => {
    const el = heroCtaRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setShowSticky(!entry.isIntersecting),
      { threshold: 0 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const el = offerRef.current;
    if (!el) return;
    let fired = false;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !fired) {
          fired = true;
          if (typeof (window as any).trackEvent === "function") {
            (window as any).trackEvent("AddToCart");
          }
          obs.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const thoughts = [
    "Você olha o relógio. 22h47.",
    "Faltam 19. Amanhã entrega.",
    "Você apaga a frase. Escreve de novo. Apaga.",
    "A coordenação já mandou três voltarem.",
    'Você pensa: "vou escrever qualquer coisa, só pra entregar."',
    "E sente culpa. Porque você sabe o que aconteceu com cada uma.",
  ];

  const whatItems = [
    { t: "Estrutura pronta de relatórios", d: "Você abre. Escolhe a faixa. E o esqueleto que travava na primeira frase já tá montado." },
    { t: "Caminho passo a passo", d: "Você solta o que já tá na sua cabeça. O método devolve em relatório aprovado. Você não escreve." },
    { t: "Exemplos reais de relatórios", d: "Você lê o antes e o depois. E entende, em 30 segundos, o que vai acontecer com os seus." },
    { t: "Guia simples (celular ou pc)", d: "Você não instala nada. Não aprende nada novo. Abre, solta, entrega." },
  ];

  const translationLines = [
    { wrong: "agitada", right: "comportamento ativo e exploratório no espaço de sala" },
    { wrong: "briguenta", right: "em processo de construção de habilidades de convivência" },
    { wrong: "morde os colegas", right: "expressa frustração por meio de reações corporais quando contrariada" },
    { wrong: "não presta atenção", right: "demonstra dificuldade de manter foco em atividades dirigidas, prefere exploração livre" },
    { wrong: "chora por tudo", right: "em processo de regulação emocional, busca acolhimento como forma de organização" },
  ];

  const steps = [
    { n: "01", t: "Você abre a estrutura", d: "Em 10 segundos, aquele branco da tela some. O esqueleto já tá ali." },
    { n: "02", t: "Você solta o que viu", d: "Aquilo que tava espalhado no caderno, no celular, na cabeça, sai de uma vez. Antes que você deixe passar." },
    { n: "03", t: "O método devolve aprovado", d: "O que você soltou volta no formato que coordenação aprova. Você não escreveu uma linha." },
    { n: "04", t: "Confere e entrega", d: "Você lê, ajusta uma palavra se quiser. E aquilo que ia tomar 2 horas, acabou." },
  ];

  const testimonials = [
    { n: "Letícia M.", r: "Berçário II", t: "Tava acumulando 23 relatórios. Comprei numa quarta, na sexta tinha entregado tudo. Sem exagero." },
    { n: "Andreia S.", r: "Pré I", t: "O texto sai com a minha cara. Cada criança ficou única. Não é texto pronto, é o meu olhar organizado." },
    { n: "Patrícia R.", r: "Maternal", t: "Eu travava muito na escrita. Agora colo minhas anotações e o relatório vem estruturado. Mudou meu domingo." },
  ];

  const faq = [
    { q: "Funciona se eu não sou boa com tecnologia?", a: "Funciona. O método tira o que já tá na sua cabeça e devolve em relatório aprovado. Você não escreve uma linha. Zero conhecimento técnico necessário." },
    { q: "Vou ter que escrever do zero?", a: "Não. Você já tentou escrever do jeito certo sozinha. E travou. O método tira o que já tá na sua cabeça e devolve em relatório aprovado. Você não escreve uma linha." },
    { q: "O texto não vai sair genérico?", a: "Não. O método só funciona com o que VOCÊ viu. Sem suas observações, ele não tem matéria-prima. Cada criança sai única porque o que você soltou era único." },
    { q: "A coordenação aceita?", a: "Sim. Você é quem observou e quem assina. O método só organiza em linguagem pedagógica adequada. O olhar e a autoria continuam seus." },
    { q: "Funciona no celular?", a: "Sim. O guia é pensado pra rodar no celular, no tablet ou no computador. Onde você já trabalha." },
    { q: "É curso? Tem aula?", a: "Não é curso longo. É ferramenta de execução: você abre, aplica, entrega. Sem turma, sem cronograma, sem prazo." },
    { q: "Como recebo?", a: "Após o pagamento, acesso liberado na hora por e-mail. Sem espera." },
  ];

  return (
    <main style={pageStyle}>
      <FakeBrowserBar onBack={() => window.location.assign(withCurrentParams("/br1"))} />
      {/* 1. Notice */}
      <div style={{
        background: "#2a2520", color: "#f5c850",
        padding: "8px 20px", textAlign: "center",
        ...fontMono, fontSize: 10.5, fontWeight: 600,
        letterSpacing: "0.06em", textTransform: "uppercase",
      }}>
        acesso imediato · pagamento único · R$ 47
      </div>

      {/* 2. Nav */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "14px 20px", borderBottom: "1px solid rgba(42,37,32,0.1)",
        background: "#f5efe4",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{
            width: 26, height: 26, borderRadius: "50%",
            background: "#c45a3e", display: "flex", alignItems: "center",
            justifyContent: "center", color: "#fff", fontSize: 16,
            fontFamily: '"Caveat", cursive', fontWeight: 700,
          }}>r</div>
          <span style={{ fontSize: 13, fontWeight: 600, letterSpacing: "-0.01em" }}>
            Rotina Pedagógica
          </span>
        </div>
        <a href={checkoutHref} onClick={openHotmart("nav")} style={{
          ...fontMono, fontSize: 11, color: "#c45a3e",
          textDecoration: "none", fontWeight: 600,
          textTransform: "uppercase", letterSpacing: "0.06em",
          border: "1px solid #c45a3e", padding: "6px 10px", borderRadius: 999,
        }}>
          Quero por R$ 47
        </a>
      </div>

      {/* 3. Hero */}
      <div style={{
        position: "relative",
        padding: "32px 24px 36px",
        background: `repeating-linear-gradient(to bottom, transparent 0 31px, rgba(42,37,32,0.08) 31px 32px), #f5efe4`,
      }}>
        <div style={{
          position: "absolute", left: 56, top: 0, bottom: 0, width: 1,
          background: "rgba(196,90,62,0.35)",
        }} />
        <div style={{ ...fontHand, fontSize: 18, color: "#c45a3e", marginBottom: 8, transform: "rotate(-1.5deg)" }}>
          professora,
        </div>
        <h1 style={{ fontSize: 48, lineHeight: 1.02, margin: "0 0 18px", fontWeight: 600, letterSpacing: "-0.035em" }}>
          Você viu.<br />
          <span style={{ position: "relative", display: "inline-block" }}>
            <span style={{ position: "relative", zIndex: 1 }}>E deixou passar.</span>
            <span style={{
              position: "absolute", left: -2, right: -2, bottom: 4, height: 14,
              background: "rgba(245,200,80,0.55)", zIndex: 0, transform: "rotate(-0.5deg)",
            }} />
          </span>
        </h1>
        <p style={{ fontSize: 17, lineHeight: 1.45, color: "#2a2520", margin: "20px 0 22px", maxWidth: 380, fontWeight: 500 }}>
          Tem coisa acontecendo na sua sala…<br />
          <span style={{ color: "#c45a3e", fontStyle: "italic", fontWeight: 600 }}>
            que você ainda não conseguiu colocar no papel.
          </span>
        </p>
        <p style={{ fontSize: 16, lineHeight: 1.45, color: "#2a2520", margin: "0 0 24px", maxWidth: 380, fontWeight: 600, padding: "12px 14px", background: "rgba(245,200,80,0.35)", borderLeft: "3px solid #c45a3e" }}>
          O método tira o que já tá na sua cabeça, antes que você deixe passar, e devolve em relatório aprovado.
          <br />
          <span style={{ color: "#c45a3e", fontStyle: "italic" }}>Sem você escrever uma linha.</span>
        </p>
        <div style={{ position: "relative", marginBottom: 10 }}>
          <a href={checkoutHref} ref={heroCtaRef} onClick={openHotmart("hero")} style={ctaPrimary}>
            Ok. eu não vou perder isso de novo →
          </a>
          <div style={{
            ...fontHand, position: "absolute", right: -4, top: -28,
            fontSize: 18, color: "#c45a3e", transform: "rotate(8deg)",
          }}>
            acesso imediato ↓
          </div>
        </div>
        <div style={{ ...fontMono, fontSize: 11, color: "#7a6e5f", textAlign: "center", marginBottom: 18, letterSpacing: "0.06em" }}>
          (R$47 · acesso imediato)
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 12, color: "#7a6e5f", flexWrap: "wrap" }}>
          {["pagamento único", "sem mensalidade", "aplicação imediata"].map((t) => (
            <span key={t} style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#7aa05c" }} />
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* 4. Translation */}
      <div style={{ padding: "52px 24px 48px", background: "#f0e6d2" }}>
        <div style={{ ...fontMono, fontSize: 10, letterSpacing: "0.12em", color: "#7a6e5f", textTransform: "uppercase", marginBottom: 14 }}>
          o problema que ninguém fala
        </div>
        <h2 style={{ fontSize: 30, margin: "0 0 16px", fontWeight: 600, letterSpacing: "-0.025em", lineHeight: 1.05 }}>
          Você sabe o que viu.<br />
          <span style={{ ...fontHand, fontSize: 38, color: "#c45a3e" }}>Só não pode escrever assim.</span>
        </h2>
        <p style={{ fontSize: 15.5, lineHeight: 1.55, color: "#4a4238", margin: "0 0 22px", maxWidth: 380 }}>
          Toda sala tem aquela criança que não para. Já é de lei. Mas você não pode escrever que ela é "agitada". Tem que escrever… outra coisa.
        </p>
        <div style={{ background: "#f5efe4", borderRadius: 8, padding: "4px 0", border: "1px solid rgba(42,37,32,0.08)", marginBottom: 22 }}>
          {translationLines.map((l, i) => (
            <div key={i} style={{ padding: "14px 16px", borderBottom: i < translationLines.length - 1 ? "1px dashed rgba(42,37,32,0.12)" : "none" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6, fontSize: 11, ...fontMono, color: "#7a6e5f", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                <span>o que você pensa</span>
              </div>
              <div style={{ ...fontHand, fontSize: 22, color: "#2a2520", textDecoration: "line-through", textDecorationColor: "rgba(196,90,62,0.6)", textDecorationThickness: 2, marginBottom: 12, lineHeight: 1.1 }}>
                "{l.wrong}"
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6, fontSize: 11, ...fontMono, color: "#7a6e5f", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                <span style={{ color: "#7aa05c" }}>→ o que você tem que escrever</span>
              </div>
              <div style={{ fontSize: 14.5, lineHeight: 1.45, color: "#2a2520", fontStyle: "italic" }}>"{l.right}"</div>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 15.5, lineHeight: 1.55, color: "#4a4238", margin: "0 0 14px", maxWidth: 380, fontWeight: 500 }}>
          E você ainda tem que explicar:
          <strong style={{ fontWeight: 600 }}> quando aconteceu, por quê, em que contexto.</strong>
        </p>
        <p style={{ fontSize: 15.5, lineHeight: 1.55, color: "#4a4238", margin: "0 0 18px", maxWidth: 380 }}>
          Não é falta de conteúdo. É excesso de responsabilidade na forma de escrever.
        </p>
        <div style={{ padding: "18px", background: "#2a2520", color: "#f5efe4", borderRadius: 8, marginBottom: 4 }}>
          <p style={{ fontSize: 15.5, lineHeight: 1.5, margin: 0, fontWeight: 500 }}>Pra uma criança, fica lindo.</p>
          <p style={{ ...fontHand, fontSize: 26, color: "#f5c850", margin: "6px 0 0", lineHeight: 1.05 }}>Pra 20, você enlouquece.</p>
        </div>
      </div>

      {/* 5. Sinking */}
      <div style={{ padding: "44px 24px 48px", background: "#1a1612", color: "#e8dfd0" }}>
        <p style={{ fontSize: 19, lineHeight: 1.45, margin: "0 0 14px", color: "#f5efe4", fontWeight: 500 }}>E o pior nem é o tempo.</p>
        <p style={{ fontSize: 17, lineHeight: 1.55, margin: "0 0 14px", color: "#d4c8b3" }}>É que você sabe que deveria ser simples.</p>
        <p style={{ fontSize: 17, lineHeight: 1.55, margin: "0 0 14px", color: "#d4c8b3" }}>Mas não é.</p>
        <p style={{ fontSize: 17, lineHeight: 1.55, margin: "0 0 22px", color: "#d4c8b3" }}>E isso começa a pesar.</p>
        <p style={{ fontSize: 17, lineHeight: 1.55, margin: "0 0 14px", color: "#d4c8b3" }}>Porque enquanto você trava…</p>
        <p style={{ fontSize: 17, lineHeight: 1.55, margin: "0 0 14px", color: "#d4c8b3" }}>os relatórios acumulam.</p>
        <p style={{ ...fontHand, fontSize: 28, color: "#c45a3e", margin: "8px 0 0", lineHeight: 1.1 }}>
          E você já entra no próximo dia<br />
          <span style={{ color: "#f5c850" }}>devendo.</span>
        </p>
      </div>

      {/* 6. Relief */}
      <div style={{ padding: "52px 24px 56px", background: "linear-gradient(180deg, #f5efe4 0%, #ebe2d2 100%)", position: "relative" }}>
        <div style={{ padding: "24px 22px 26px", background: "#2a2520", color: "#f5efe4", marginBottom: 28, borderLeft: "3px solid #c45a3e" }}>
          <div style={{ ...fontMono, fontSize: 9, letterSpacing: "0.14em", color: "#f5c850", textTransform: "uppercase", marginBottom: 12 }}>
            espera. lê isso devagar.
          </div>
          <p style={{ fontSize: 18, lineHeight: 1.4, margin: "0 0 10px", fontWeight: 600, color: "#f5efe4" }}>Não é falta de esforço.</p>
          <p style={{ fontSize: 16.5, lineHeight: 1.5, margin: 0, color: "#d4c8b3" }}>
            Você está tentando escrever do jeito que te ensinaram.<br />
            <span style={{ ...fontHand, fontSize: 26, color: "#c45a3e" }}>e esse jeito não funciona na vida real.</span>
          </p>
        </div>
        <p style={{ fontSize: 17, lineHeight: 1.4, margin: "0 0 28px", color: "#2a2520", fontWeight: 600, letterSpacing: "-0.01em" }}>
          E enquanto você continuar insistindo nesse jeito,<br />
          <span style={{ color: "#c45a3e" }}>nada muda.</span>
        </p>

        <div style={{ margin: "64px -24px", padding: "72px 24px", background: "#f5efe4", textAlign: "center", borderTop: "1px solid rgba(42,37,32,0.08)", borderBottom: "1px solid rgba(42,37,32,0.08)" }}>
          <p style={{ ...fontHand, fontSize: 38, lineHeight: 1, margin: 0, color: "#2a2520", letterSpacing: "-0.005em" }}>Para.</p>
        </div>

        <div style={{ ...fontMono, fontSize: 10, letterSpacing: "0.12em", color: "#7a6e5f", textTransform: "uppercase", marginBottom: 8 }}>…agora você percebeu.</div>
        <div style={{ ...fontMono, fontSize: 10, letterSpacing: "0.12em", color: "#7a6e5f", textTransform: "uppercase", marginBottom: 22 }}>não foi algo que você pensou.</div>

        <p style={{ fontSize: 19, lineHeight: 1.35, margin: "0 0 8px", color: "#2a2520", fontWeight: 600 }}>Você não explicou isso.</p>
        <p style={{ ...fontHand, fontSize: 32, lineHeight: 1.05, margin: "0 0 32px", color: "#c45a3e" }}>só bateu.</p>

        <div style={{ margin: "0 0 32px" }}>
          <p style={{ ...fontMono, fontSize: 10, letterSpacing: "0.04em", color: "#9c8e7a", margin: "0 0 22px", lineHeight: 1.4, fontStyle: "italic", fontWeight: 300 }}>
            isso não aconteceu por acaso.
          </p>
          <p style={{ ...fontHand, fontSize: 48, lineHeight: 0.95, margin: 0, color: "#2a2520", fontWeight: 700, letterSpacing: "-0.01em" }}>
            tem estrutura.
          </p>
        </div>

        <p style={{ fontSize: 17, lineHeight: 1.4, margin: "0 0 22px", color: "#2a2520", fontWeight: 600 }}>E é aqui que quase todo mundo erra.</p>
        <p style={{ fontSize: 16, lineHeight: 1.5, margin: "0 0 6px", color: "#2a2520" }}>O erro não está no que você faz.</p>
        <p style={{ fontSize: 16, lineHeight: 1.5, margin: "0 0 6px", color: "#2a2520" }}>Está no que você não vê…</p>
        <p style={{ ...fontHand, fontSize: 26, lineHeight: 1.1, margin: "0 0 28px", color: "#c45a3e" }}>enquanto faz.</p>

        <p style={{ fontSize: 17, lineHeight: 1.45, margin: "0 0 32px", color: "#2a2520", fontWeight: 500 }}>
          E quando você começa a ver…<br />
          <span style={{ ...fontHand, fontSize: 28, color: "#c45a3e" }}>não dá mais pra desver.</span>
        </p>

        <p style={{ fontSize: 17, lineHeight: 1.45, margin: "0 0 28px", color: "#2a2520", fontWeight: 500 }}>
          E é aqui que tudo começa<br />
          <span style={{ ...fontHand, fontSize: 28, color: "#c45a3e" }}>a ficar desconfortável…</span>
        </p>

        <p style={{ fontSize: 15.5, lineHeight: 1.4, margin: "0 0 28px", color: "#7a6e5f", fontStyle: "italic" }}>
          Não do jeito que você imagina.
        </p>

        <p style={{ fontSize: 16, lineHeight: 1.55, margin: "0 0 18px", color: "#5a5246" }}>
          Porque você não vai mais conseguir encarar aquilo de novo…<br />e fingir que ainda não viu.
        </p>

        <p style={{ ...fontHand, fontSize: 36, lineHeight: 1, margin: "0 0 24px", color: "#2a2520" }}>É.</p>

        <p style={{ fontSize: 17, lineHeight: 1.45, margin: "0 0 36px", color: "#2a2520", fontWeight: 500 }}>
          E é exatamente por isso<br />
          <span style={{ ...fontHand, fontSize: 28, color: "#c45a3e" }}>que isso funciona.</span>
        </p>

        <p style={{ fontSize: 19, lineHeight: 1.35, margin: "0 0 8px", color: "#2a2520", fontWeight: 600 }}>Você já viu isso.</p>
        <p style={{ ...fontHand, fontSize: 32, lineHeight: 1.05, margin: "0 0 32px", color: "#c45a3e" }}>só nunca separou.</p>

        <p style={{ fontSize: 16, lineHeight: 1.5, margin: "0 0 4px", color: "#2a2520" }}>Isso começa a aparecer.</p>
        <p style={{ fontSize: 16, lineHeight: 1.5, margin: "0 0 16px", color: "#2a2520" }}>E quando aparece…</p>
        <p style={{ ...fontHand, fontSize: 26, lineHeight: 1.1, margin: "0 0 24px", color: "#c45a3e" }}>
          você não consegue mais operar do mesmo jeito.
        </p>
        <p style={{ ...fontMono, fontSize: 11, letterSpacing: "0.06em", color: "#7a6e5f", margin: "0 0 36px" }}>(quando você separa.)</p>

        <div style={{ display: "grid", gap: 14, marginBottom: 26 }}>
          {["Você não começa do zero.", "Você não fica escolhendo palavra.", 'Você não tenta "escrever bonito".'].map((t, i) => (
            <div key={i} style={{
              display: "flex", gap: 12, alignItems: "center",
              padding: "14px 16px", background: "#f5efe4",
              borderLeft: "3px solid #7aa05c", borderRadius: 4,
              fontSize: 16, lineHeight: 1.35, fontWeight: 500, color: "#2a2520",
              boxShadow: "0 1px 0 rgba(42,37,32,0.04)",
            }}>
              <span style={{ color: "#7aa05c", fontFamily: '"Caveat", cursive', fontSize: 26, lineHeight: 1, flexShrink: 0 }}>✓</span>
              <span>{t}</span>
            </div>
          ))}
        </div>

        <p style={{ fontSize: 16.5, lineHeight: 1.5, color: "#2a2520", margin: "0 0 14px", maxWidth: 380, fontWeight: 500 }}>
          Você pega o que já observou.
        </p>
        <p style={{ fontSize: 16.5, lineHeight: 1.5, color: "#4a4238", margin: "0 0 6px", maxWidth: 380 }}>E aquilo que antes virava:</p>
        <ul style={{ margin: "0 0 16px", padding: "0 0 0 4px", listStyle: "none" }}>
          {["tela parada por 20 minutos", "frase reescrita 5 vezes seguidas", 'dúvida se "tá certo ou não"'].map((t, i) => (
            <li key={i} style={{ fontSize: 15.5, lineHeight: 1.5, color: "#5a5246", display: "flex", alignItems: "center", gap: 10, padding: "4px 0" }}>
              <span style={{ color: "#c45a3e", fontFamily: '"Caveat", cursive', fontSize: 22, lineHeight: 1 }}>✕</span>
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <p style={{ fontSize: 17, lineHeight: 1.4, color: "#2a2520", margin: "0 0 14px", maxWidth: 380, fontWeight: 700 }}>Agora vira texto pronto.</p>
        <p style={{ fontSize: 16.5, lineHeight: 1.5, color: "#4a4238", margin: "0 0 22px", maxWidth: 380, fontStyle: "italic" }}>
          Sem travar. Sem apagar. Sem recomeçar.
        </p>

        <div style={{ padding: "20px", background: "#2a2520", color: "#f5efe4", borderRadius: 10, marginBottom: 22 }}>
          <p style={{ fontSize: 16, lineHeight: 1.5, margin: "0 0 8px", color: "#e8dfd0" }}>
            É como se alguém pegasse tudo que está na sua cabeça
          </p>
          <p style={{ ...fontHand, fontSize: 30, color: "#f5c850", margin: 0, lineHeight: 1.05 }}>
            e colocasse no formato certo.
          </p>
        </div>

        <p style={{ fontSize: 18, lineHeight: 1.4, color: "#2a2520", margin: "0 0 22px", maxWidth: 380, fontWeight: 600 }}>
          E aquilo que levava horas…<br />
          <span style={{ color: "#c45a3e" }}>começa a levar minutos.</span>
        </p>

        <p style={{ fontSize: 14.5, lineHeight: 1.45, color: "#7a6e5f", margin: "0 0 10px", maxWidth: 380, fontStyle: "italic", textAlign: "center" }}>
          Ou continuar gastando horas nisso amanhã.
        </p>

        <a href={checkoutHref} onClick={openHotmart("middle")} style={{ ...ctaPrimary, fontSize: 17, boxShadow: "0 2px 0 #8d3d28, 0 12px 28px rgba(196,90,62,0.35)" }}>
          Ok. mostra isso. →
        </a>
        <div style={{ ...fontMono, fontSize: 11, color: "#7a6e5f", textAlign: "center", marginTop: 10, letterSpacing: "0.06em" }}>
          (R$47 · acesso na hora)
        </div>
      </div>

      {/* 7. Proof (Lara antes/depois) */}
      <div style={{ padding: "40px 24px 48px", background: "#2a2520", color: "#f5efe4" }}>
        <div style={{ display: "grid", gap: 14 }}>
          <div style={{ padding: "14px 16px", background: "rgba(245,239,228,0.06)", borderRadius: 6, borderLeft: "3px solid rgba(245,239,228,0.3)" }}>
            <div style={{ ...fontMono, fontSize: 9, color: "#c8a878", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>antes</div>
            <p style={{ ...fontHand, fontSize: 19, lineHeight: 1.25, margin: 0, color: "#e8dfd0" }}>
              "Lara empilhou bloco. Caiu. Tentou de novo. Falou 'olha eu fiz'."
            </p>
          </div>
          <div style={{ padding: "16px", background: "#f5efe4", color: "#2a2520", borderRadius: 6 }}>
            <div style={{ ...fontMono, fontSize: 9, color: "#7a6e5f", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>depois</div>
            <p style={{ fontSize: 13.5, lineHeight: 1.6, margin: "0 0 10px", color: "#2a2520" }}>
              "Lara demonstrou avanços na coordenação motora fina e na persistência diante do desafio. Ao empilhar blocos, manteve a tentativa mesmo após a queda, evidenciando regulação emocional. O movimento de compartilhar a conquista com a colega indica desenvolvimento da interação social…"
            </p>
            <div style={{ ...fontMono, fontSize: 10, color: "#7a6e5f", letterSpacing: "0.06em", borderTop: "1px dashed rgba(42,37,32,0.18)", paddingTop: 8, marginTop: 4 }}>
              → escrito a partir da anotação simples acima.
            </div>
          </div>
        </div>
      </div>

      {/* 8. Voice */}
      <div style={{ padding: "48px 24px", background: "#2a2520", color: "#f5efe4", textAlign: "left" }}>
        <div style={{ ...fontMono, fontSize: 10, letterSpacing: "0.12em", color: "#c8a878", textTransform: "uppercase", marginBottom: 14 }}>
          e não, não é só com você
        </div>
        <h2 style={{ fontSize: 28, margin: "0 0 16px", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
          Toda semana,<br />
          <span style={{ ...fontHand, fontSize: 36, color: "#f5c850" }}>milhares tão nessa cena.</span>
        </h2>
        <p style={{ fontSize: 14.5, lineHeight: 1.5, color: "#d4c8b3", margin: "0 0 22px", maxWidth: 380 }}>
          Isso virou rotina pra quem escreve relatório. Você não é a única que trava. Só que ninguém fala sobre.
        </p>
        <div style={{ display: "grid", gap: 10, marginBottom: 22 }}>
          {thoughts.map((t, i) => (
            <div key={i} style={{
              display: "flex", gap: 12, alignItems: "flex-start",
              padding: "14px 16px", background: "rgba(245,239,228,0.05)",
              borderLeft: "3px solid #c45a3e", borderRadius: 4,
              fontSize: 15, lineHeight: 1.4, color: "#f5efe4",
            }}>
              <span style={{ color: "#c45a3e", flexShrink: 0, fontFamily: '"Caveat", cursive', fontSize: 22, lineHeight: 1, marginTop: -2 }}>✓</span>
              <span>{t}</span>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 15, lineHeight: 1.55, color: "#e8dfd0", margin: 0, fontWeight: 500 }}>
          Não é falta de competência. É falta de uma estrutura<br />
          <span style={{ color: "#f5c850", fontStyle: "italic" }}>que tire você do branco e te entregue o texto pronto.</span>
        </p>
      </div>

      {/* 9. WhatYouGet */}
      <div style={{ padding: "48px 24px", borderTop: "1px dashed rgba(42,37,32,0.2)" }}>
        <div style={{ ...fontMono, fontSize: 10, letterSpacing: "0.12em", color: "#7a6e5f", textTransform: "uppercase", marginBottom: 14 }}>
          o que você recebe
        </div>
        <h2 style={{ fontSize: 26, margin: "0 0 6px", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.15 }}>
          Não é curso longo.<br />
          <span style={{ ...fontHand, fontSize: 32, color: "#c45a3e" }}>é ferramenta de execução.</span>
        </h2>
        <p style={{ fontSize: 14, color: "#5a5246", margin: "12px 0 28px", lineHeight: 1.5 }}>
          Você abre. Copia. E o relatório que antes travava… sai.
        </p>
        <div style={{ display: "grid", gap: 0 }}>
          {whatItems.map((s, i) => (
            <div key={i} style={{
              display: "grid", gridTemplateColumns: "32px 1fr", gap: 14,
              padding: "18px 0", borderTop: "1px solid rgba(42,37,32,0.12)",
              borderBottom: i === whatItems.length - 1 ? "1px solid rgba(42,37,32,0.12)" : "none",
            }}>
              <div style={{ ...fontHand, fontSize: 22, color: "#c45a3e", lineHeight: 1.3, fontWeight: 700 }}>✓</div>
              <div>
                <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 4, letterSpacing: "-0.01em" }}>{s.t}</div>
                <div style={{ fontSize: 13.5, color: "#5a5246", lineHeight: 1.5 }}>{s.d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 10. Accumulation */}
      <div style={{ padding: "40px 24px", background: "#1a1612", color: "#d4c8b3" }}>
        <p style={{ ...fontMono, fontSize: 11, letterSpacing: "0.18em", color: "#c45a3e", textTransform: "uppercase", margin: "0 0 18px", fontWeight: 700 }}>
          para. não pula isso.
        </p>
        <p style={{ fontSize: 18, lineHeight: 1.45, margin: "0 0 14px", color: "#f5efe4", fontWeight: 500 }}>A Lara não foi exceção.</p>
        <p style={{ fontSize: 18, lineHeight: 1.45, margin: "0 0 22px", color: "#f5efe4" }}>Foi só a primeira que você conseguiu ver.</p>
        <p style={{ ...fontHand, fontSize: 26, color: "#f5c850", margin: "0 0 14px", lineHeight: 1.15 }}>
          e aquilo que você viu…<br />
          <span style={{ color: "#c45a3e" }}>nunca mais volta.</span>
        </p>
        <p style={{ fontSize: 14.5, lineHeight: 1.5, margin: "0 0 14px", color: "#b8a890" }}>
          Foi aquela aluna… na terça… segurando o lápis vermelho pela primeira vez. E você só lembrou quando já era tarde.
        </p>
        <p style={{ fontSize: 14.5, lineHeight: 1.5, margin: "0 0 14px", color: "#b8a890" }}>
          Não é "mais um relatório" que você perdeu. É a evolução daquela criança. O argumento que você não teve na reunião. A segurança que você precisava no fechamento do bimestre.
        </p>
        <p style={{ fontSize: 17, lineHeight: 1.4, margin: 0, color: "#c45a3e", fontWeight: 700, fontStyle: "italic" }}>
          e você deixou passar.
        </p>
      </div>

      {/* 11. BeforeAfter (Miguel) */}
      <div style={{ padding: "48px 24px", background: "#ebe2d2" }}>
        <div style={{ ...fontMono, fontSize: 10, letterSpacing: "0.12em", color: "#7a6e5f", textTransform: "uppercase", marginBottom: 14 }}>
          até que fica impossível ignorar.
        </div>
        <h2 style={{ fontSize: 30, margin: "0 0 8px", fontWeight: 600, letterSpacing: "-0.025em", lineHeight: 1.05 }}>
          Outra criança, outra anotação.<br />
          <span style={{ ...fontHand, fontSize: 38, color: "#c45a3e" }}>mesmo resultado.</span>
        </h2>
        <p style={{ fontSize: 14, color: "#5a5246", margin: "8px 0 24px", lineHeight: 1.5, fontStyle: "italic" }}>
          Funciona com qualquer faixa, qualquer cena, qualquer criança.
        </p>
        <div style={{ display: "grid", gap: 14 }}>
          <div style={{ padding: 18, background: "#fff", borderRadius: 8, border: "1px solid rgba(42,37,32,0.1)" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
              <div style={{ ...fontHand, fontSize: 22, color: "#c45a3e" }}>Sua anotação</div>
              <span style={{ ...fontMono, fontSize: 9, color: "#7a6e5f", letterSpacing: "0.08em", textTransform: "uppercase" }}>8s no celular</span>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.55, margin: 0, color: "#4a4238", fontStyle: "italic" }}>
              "Miguel pegou o livro sozinho. Sentou. Apontou pro cão e falou 'au au, tá ali'. Ficou 4 minutos folheando.
              <span style={{ background: "#fff3a8", padding: "0 3px", fontStyle: "normal", fontWeight: 600, color: "#2a2520" }}>  (a primeira vez que ele senta sem chamar ninguém.)  </span>"
            </p>
          </div>
          <div style={{ ...fontHand, fontSize: 32, color: "#c45a3e", textAlign: "center", lineHeight: 1, transform: "rotate(-2deg)", fontWeight: 700 }}>
            relatório pronto ↓
          </div>
          <div style={{ padding: 18, background: "#2a2520", color: "#f5efe4", borderRadius: 8, boxShadow: "0 8px 24px rgba(42,37,32,0.18)" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
              <div style={{ ...fontHand, fontSize: 22, color: "#f5c850" }}>Relatório pronto</div>
              <span style={{ ...fontMono, fontSize: 9, color: "#c8a878", letterSpacing: "0.08em", textTransform: "uppercase" }}>em 90 segundos</span>
            </div>
            <p style={{ fontSize: 13.5, lineHeight: 1.6, margin: 0, color: "#e8dfd0" }}>
              "Miguel demonstrou autonomia ao escolher o livro de forma espontânea e iniciativa no contato com a leitura.
              <span style={{ background: "rgba(245,200,80,0.22)", padding: "0 4px", color: "#f5efe4", fontWeight: 600 }}> Trata-se de um marco no desenvolvimento de sua autorregulação, dado que, neste momento, sustentou a ação sem demandar a mediação do adulto. </span>
              A permanência de quatro minutos de folhear a obra evidencia capacidade de atenção concentrada para a faixa etária, e a verbalização ao reconhecer elementos da imagem indica avanços no campo da Escuta, Fala, Pensamento e Imaginação…"
            </p>
          </div>
        </div>
        <p style={{ fontSize: 14, color: "#2a2520", margin: "20px 0 0", textAlign: "center", fontWeight: 600 }}>
          Você já viu acontecer com a Lara.<br />
          Você já viu acontecer com o Miguel.<br />
          <span style={{ ...fontHand, fontSize: 24, color: "#c45a3e", fontWeight: 700, lineHeight: 1.15, display: "inline-block", marginTop: 8 }}>
            a diferença agora é que você não pode mais<br />dizer que não viu.
          </span>
        </p>
      </div>

      {/* 12. Method */}
      <div style={{ padding: "48px 24px" }}>
        <div style={{ ...fontMono, fontSize: 10, letterSpacing: "0.12em", color: "#7a6e5f", textTransform: "uppercase", marginBottom: 14 }}>
          como funciona
        </div>
        <h2 style={{ fontSize: 26, margin: "0 0 6px", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.15 }}>
          Quatro passos.<br />
          <span style={{ ...fontHand, fontSize: 32, color: "#c45a3e" }}>zero do zero.</span>
        </h2>
        <p style={{ fontSize: 14, color: "#5a5246", margin: "12px 0 28px", lineHeight: 1.5 }}>
          O método tira o que já tá na sua cabeça, antes que você deixe passar, e devolve em relatório aprovado. Sem você escrever uma linha.
        </p>
        <div style={{ display: "grid", gap: 14 }}>
          {steps.map((s, i) => (
            <div key={i} style={{
              display: "grid", gridTemplateColumns: "44px 1fr", gap: 14,
              padding: "14px 0", borderTop: i ? "1px solid rgba(42,37,32,0.12)" : "none",
            }}>
              <div style={{ ...fontHand, fontSize: 32, color: "#c45a3e", lineHeight: 1, fontWeight: 700 }}>{s.n}</div>
              <div>
                <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 4, letterSpacing: "-0.01em" }}>{s.t}</div>
                <div style={{ fontSize: 13.5, color: "#5a5246", lineHeight: 1.5 }}>{s.d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 13. Differential */}
      <div style={{ padding: "48px 24px", background: "#ebe2d2" }}>
        <div style={{ ...fontMono, fontSize: 10, letterSpacing: "0.12em", color: "#7a6e5f", textTransform: "uppercase", marginBottom: 14 }}>
          e você sabe disso há anos.
        </div>
        <h2 style={{ fontSize: 26, margin: "0 0 14px", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.15 }}>
          Você não trava por preguiça.<br />
          <span style={{ ...fontHand, fontSize: 32, color: "#c45a3e" }}>você trava porque começa do branco.</span>
        </h2>
        <p style={{ fontSize: 15, lineHeight: 1.5, margin: "0 0 22px", color: "#5a5246", fontStyle: "italic" }}>
          E mesmo assim… você abriu o mesmo documento. Tentou de novo. Do mesmo jeito.<br />
          <span style={{ color: "#c45a3e" }}>Domingo passado. E o anterior. E o de antes.</span>
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "rgba(42,37,32,0.15)", borderRadius: 8, overflow: "hidden" }}>
          <div style={{ padding: 16, background: "#f5efe4" }}>
            <div style={{ ...fontMono, fontSize: 10, color: "#7a6e5f", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>
              do jeito antigo
            </div>
            <ul style={{ margin: 0, padding: 0, listStyle: "none", fontSize: 13, lineHeight: 1.6, color: "#5a5246" }}>
              <li style={{ marginBottom: 6 }}>✗ você trava na primeira frase</li>
              <li style={{ marginBottom: 6 }}>✗ texto sai igual pra todo mundo</li>
              <li style={{ marginBottom: 6 }}>✗ duas horas por relatório</li>
              <li>✗ coordenação pede pra refazer</li>
            </ul>
          </div>
          <div style={{ padding: 16, background: "#2a2520", color: "#f5efe4" }}>
            <div style={{ ...fontMono, fontSize: 10, color: "#c8a878", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>
              Método Rotina
            </div>
            <ul style={{ margin: 0, padding: 0, listStyle: "none", fontSize: 13, lineHeight: 1.6, color: "#e8dfd0" }}>
              <li style={{ marginBottom: 6 }}>✓ estrutura pedagógica pronta</li>
              <li style={{ marginBottom: 6 }}>✓ cada criança fica única</li>
              <li style={{ marginBottom: 6 }}>✓ minutos por relatório</li>
              <li>✓ linguagem que coordenação aprova</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 14. Testimonials */}
      <div style={{ padding: "48px 24px" }}>
        <div style={{ ...fontMono, fontSize: 10, letterSpacing: "0.12em", color: "#7a6e5f", textTransform: "uppercase", marginBottom: 14 }}>
          e quando isso começa a acontecer…
        </div>
        <h2 style={{ fontSize: 24, margin: "0 0 22px", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.2 }}>
          Professora pra<br />professora.
        </h2>
        <div style={{ display: "grid", gap: 14 }}>
          {testimonials.map((t, i) => (
            <div key={i} style={{
              padding: 18, background: "#fff", borderRadius: 10,
              border: "1px solid rgba(42,37,32,0.1)",
              transform: i % 2 ? "rotate(0.4deg)" : "rotate(-0.3deg)",
              boxShadow: "0 2px 0 rgba(42,37,32,0.04)",
            }}>
              <div style={{ color: "#f5a524", fontSize: 12, marginBottom: 8 }}>★ ★ ★ ★ ★</div>
              <p style={{ fontSize: 14, lineHeight: 1.55, margin: "0 0 12px", color: "#2a2520" }}>"{t.t}"</p>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 32, height: 32, borderRadius: "50%", background: ["#c8a878", "#8b7355", "#a78a6f"][i] }} />
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600 }}>{t.n}</div>
                  <div style={{ ...fontMono, fontSize: 10, color: "#7a6e5f", textTransform: "uppercase", letterSpacing: "0.04em" }}>{t.r}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 15. Inevitability */}
      <div style={{ padding: "40px 24px", background: "#1a1612", color: "#f5efe4", borderTop: "1px solid rgba(245,200,80,0.15)", borderBottom: "1px solid rgba(245,200,80,0.15)" }}>
        <div style={{ ...fontMono, fontSize: 10, letterSpacing: "0.14em", color: "#c8a878", textTransform: "uppercase", marginBottom: 18 }}>
          e não é só você.
        </div>
        <p style={{ fontSize: 17, lineHeight: 1.45, margin: "0 0 28px", color: "#f5efe4", fontWeight: 500 }}>
          Se você já percebeu isso acontecendo…<br />
          <span style={{ color: "#c45a3e", fontStyle: "italic" }}>então isso aqui vai te incomodar.</span>
        </p>
        <p style={{ ...fontHand, fontSize: 26, lineHeight: 1.2, margin: "0 0 6px", color: "#f5c850" }}>
          "Eu achei que era coisa<br />da minha cabeça…
        </p>
        <p style={{ ...fontHand, fontSize: 26, lineHeight: 1.2, margin: "0 0 26px", color: "#f5c850" }}>
          até começar a ver<br />isso em tudo."
        </p>
        <p style={{ ...fontHand, fontSize: 26, lineHeight: 1.2, margin: "0 0 6px", color: "#f5c850" }}>
          "Depois que você vê uma vez…
        </p>
        <p style={{ ...fontHand, fontSize: 26, lineHeight: 1.2, margin: 0, color: "#f5c850" }}>
          não dá mais pra fingir<br />que não viu."
        </p>
      </div>

      {/* 16. Offer */}
      <div ref={offerRef} id="comprar" style={{ padding: "52px 24px", background: "#2a2520", color: "#f5efe4", scrollMarginTop: 60 }}>
        <p style={{ fontSize: 22, lineHeight: 1.3, margin: "0 0 22px", color: "#f5efe4", fontWeight: 600, letterSpacing: "-0.02em" }}>
          Você não está comprando<br />uma ferramenta.
        </p>
        <p style={{ fontSize: 17, lineHeight: 1.45, margin: "0 0 22px", color: "#d4c8b3" }}>
          Você está parando de perder<br />
          <span style={{ ...fontHand, fontSize: 28, color: "#f5c850" }}>coisa que já aconteceu.</span>
        </p>
        <p style={{ fontSize: 16, lineHeight: 1.5, margin: "0 0 6px", color: "#d4c8b3" }}>
          Cada observação que você deixa passar…
        </p>
        <p style={{ ...fontHand, fontSize: 28, lineHeight: 1.1, margin: "0 0 30px", color: "#c45a3e" }}>não volta.</p>
        <p style={{ fontSize: 16, lineHeight: 1.5, margin: "0 0 4px", color: "#d4c8b3" }}>Isso aqui não é sobre escrever melhor.</p>
        <p style={{ fontSize: 18, lineHeight: 1.4, margin: "0 0 36px", color: "#f5efe4", fontWeight: 600 }}>
          É sobre não deixar escapar de novo.
        </p>
        <div style={{ background: "#3a332b", borderRadius: 12, padding: "20px 22px", marginBottom: 22, border: "1px solid rgba(245,200,80,0.18)" }}>
          {[
            "Estrutura pronta de relatórios (BNCC)",
            "Caminho passo a passo do método",
            "Exemplos reais de relatórios completos",
            "Guia simples (celular ou computador)",
          ].map((b, i) => (
            <div key={i} style={{
              display: "flex", gap: 10, padding: "9px 0",
              borderTop: i ? "1px solid rgba(245,239,228,0.08)" : "none",
              fontSize: 14, color: "#e8dfd0",
            }}>
              <span style={{ color: "#f5c850" }}>✓</span>
              <span>{b}</span>
            </div>
          ))}
        </div>
        <div style={{ ...fontHand, fontSize: 56, color: "#f5c850", lineHeight: 1, marginBottom: 22, letterSpacing: "-0.02em" }}>
          R$47.
        </div>
        <a href={checkoutHref} onClick={openHotmart("offer")} style={{ ...ctaPrimary, boxShadow: "0 2px 0 #8d3d28, 0 8px 24px rgba(196,90,62,0.4)" }}>
          Ok. mostra isso. →
        </a>
        <div style={{ ...fontMono, fontSize: 11, color: "#b8a890", textAlign: "center", marginTop: 10, letterSpacing: "0.06em" }}>
          (Pix ou cartão · acesso imediato)
        </div>
      </div>

      {/* 17. FAQ */}
      <div style={{ padding: "48px 24px" }}>
        <div style={{ ...fontMono, fontSize: 10, letterSpacing: "0.12em", color: "#7a6e5f", textTransform: "uppercase", marginBottom: 14 }}>
          antes de comprar
        </div>
        <h2 style={{ fontSize: 26, margin: "0 0 22px", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.15 }}>
          Perguntas<br />
          <span style={{ ...fontHand, fontSize: 32, color: "#c45a3e" }}>que toda professora faz.</span>
        </h2>
        <div>
          {faq.map((it, i) => (
            <details key={i} style={{
              padding: "16px 0", borderBottom: "1px solid rgba(42,37,32,0.12)",
              borderTop: i === 0 ? "1px solid rgba(42,37,32,0.12)" : "none",
            }}>
              <summary style={{
                fontSize: 15, fontWeight: 600, cursor: "pointer", listStyle: "none",
                display: "flex", justifyContent: "space-between", gap: 12, letterSpacing: "-0.01em",
              }}>
                <span>{it.q}</span>
                <span style={{ color: "#c45a3e", flexShrink: 0 }}>+</span>
              </summary>
              <p style={{ fontSize: 14, color: "#5a5246", margin: "10px 0 0", lineHeight: 1.55 }}>{it.a}</p>
            </details>
          ))}
        </div>
      </div>

      {/* 18. ForcedChoice */}
      <div style={{ padding: "52px 24px", background: "#c45a3e", color: "#fff" }}>
        <div style={{ ...fontMono, fontSize: 10, letterSpacing: "0.14em", color: "rgba(255,255,255,0.7)", textTransform: "uppercase", marginBottom: 18 }}>
          é aqui que vira.
        </div>
        <h2 style={{ fontSize: 30, margin: "0 0 26px", fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.05 }}>
          Você fecha essa página e
          <span style={{ ...fontHand, color: "#f5c850", fontSize: 38, fontWeight: 700 }}> escolhe uma:</span>
        </h2>
        <div style={{ background: "rgba(0,0,0,0.18)", borderRadius: 10, padding: 20, marginBottom: 14, border: "1px solid rgba(255,255,255,0.1)" }}>
          <div style={{ ...fontMono, fontSize: 10, color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>
            opção 1
          </div>
          <div style={{ fontSize: 18, fontWeight: 600, lineHeight: 1.3, marginBottom: 8 }}>Continuar igual.</div>
          <p style={{ fontSize: 13.5, lineHeight: 1.55, margin: 0, color: "rgba(255,255,255,0.85)" }}>
            Domingo escrevendo. Travar na primeira frase. Apagar e começar de novo. Entregar texto que sai igual pra todo mundo. Coordenação pedindo pra refazer.
          </p>
        </div>
        <div style={{ background: "#2a2520", color: "#f5efe4", borderRadius: 10, padding: 20, marginBottom: 24, border: "2px solid #f5c850" }}>
          <div style={{ ...fontMono, fontSize: 10, color: "#f5c850", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>
            opção 2 · R$ 47
          </div>
          <div style={{ fontSize: 18, fontWeight: 600, lineHeight: 1.3, marginBottom: 8 }}>Acabar com isso hoje.</div>
          <p style={{ fontSize: 13.5, lineHeight: 1.55, margin: 0, color: "#e8dfd0" }}>
            Você descreve a criança em linguagem simples. O relatório sai estruturado, na linguagem certa. Domingo livre. Coordenação elogiando. R$ 47 uma única vez.
          </p>
        </div>
        <a href={checkoutHref} onClick={openHotmart("urgency")} style={{
          display: "block", textDecoration: "none", textAlign: "center",
          width: "100%", padding: "20px", border: "none",
          background: "#f5c850", color: "#2a2520", borderRadius: 10,
          fontSize: 17, fontWeight: 700, fontFamily: "inherit",
          boxShadow: "0 2px 0 #c4a23f, 0 12px 28px rgba(0,0,0,0.25)",
          letterSpacing: "-0.01em", boxSizing: "border-box", cursor: "pointer",
        }}>
          Escolho a opção 2 →
        </a>
        <div style={{ ...fontMono, fontSize: 10, color: "rgba(255,255,255,0.7)", textAlign: "center", marginTop: 12, letterSpacing: "0.06em", textTransform: "uppercase" }}>
          acesso imediato · pagamento único
        </div>
      </div>

      {/* 19. FinalCTA */}
      <div style={{ padding: "52px 24px", background: "#ebe2d2", textAlign: "left" }}>
        <p style={{ fontSize: 22, lineHeight: 1.3, margin: "0 0 22px", color: "#2a2520", fontWeight: 700, letterSpacing: "-0.02em" }}>
          Você já viu.
        </p>
        <p style={{ fontSize: 17, lineHeight: 1.5, margin: "0 0 8px", color: "#2a2520" }}>E a diferença agora…</p>
        <p style={{ ...fontHand, fontSize: 30, lineHeight: 1.05, margin: "0 0 28px", color: "#c45a3e" }}>
          é que você não pode mais dizer<br />que não sabia.
        </p>
        <p style={{ fontSize: 17, lineHeight: 1.5, margin: "0 0 6px", color: "#2a2520" }}>Se continuar fazendo do mesmo jeito…</p>
        <p style={{ fontSize: 17, lineHeight: 1.5, margin: "0 0 6px", color: "#2a2520" }}>não é falta de tempo.</p>
        <p style={{ ...fontHand, fontSize: 32, lineHeight: 1.05, margin: "0 0 12px", color: "#c45a3e" }}>é escolha.</p>
        <p style={{ fontSize: 15, lineHeight: 1.4, margin: "0 0 36px", color: "#5a5246", fontStyle: "italic" }}>
          e você sabe disso.
        </p>
        <a href={checkoutHref} onClick={openHotmart("final")} style={{ ...ctaPrimary, fontSize: 17, boxShadow: "0 2px 0 #8d3d28, 0 8px 20px rgba(196,90,62,0.3)" }}>
          Eu preciso ver isso. →
        </a>
        <div style={{ ...fontMono, fontSize: 11, color: "#7a6e5f", textAlign: "center", marginTop: 10, letterSpacing: "0.06em" }}>
          (R$47 · acesso imediato)
        </div>
      </div>

      {/* 20. Trap */}
      <div style={{ padding: "40px 24px 44px", background: "#1a1612", color: "#d4c8b3" }}>
        <p style={{ fontSize: 17, lineHeight: 1.55, margin: "0 0 14px", color: "#f5efe4", fontWeight: 500 }}>
          Se você fechar essa página agora…
        </p>
        <p style={{ fontSize: 16, lineHeight: 1.55, margin: "0 0 14px" }}>nada muda.</p>
        <p style={{ fontSize: 16, lineHeight: 1.55, margin: "0 0 14px" }}>Amanhã você senta de novo.</p>
        <p style={{ fontSize: 16, lineHeight: 1.55, margin: "0 0 14px" }}>Abre o relatório.</p>
        <p style={{ fontSize: 16, lineHeight: 1.55, margin: "0 0 14px" }}>Olha pra tela.</p>
        <p style={{ fontSize: 16, lineHeight: 1.55, margin: "0 0 8px" }}>E fica alguns segundos sem saber por onde começar.</p>
        <p style={{ ...fontHand, fontSize: 22, color: "#c45a3e", margin: "0 0 6px", lineHeight: 1.1, fontStyle: "italic" }}>
          e o tempo passando.
        </p>
        <p style={{ fontSize: 16, lineHeight: 1.55, margin: "0 0 22px", color: "#d4c8b3", fontStyle: "italic" }}>
          E você percebendo que tá travada de novo.
        </p>
        <p style={{ ...fontHand, fontSize: 26, color: "#c45a3e", margin: "0 0 6px", lineHeight: 1.1 }}>
          Só que com mais coisa acumulada.
        </p>
        <p style={{ fontSize: 16, lineHeight: 1.55, margin: "6px 0 4px", color: "#f5efe4", fontWeight: 500 }}>Mais pressão.</p>
        <p style={{ fontSize: 16, lineHeight: 1.55, margin: 0, color: "#f5c850" }}>E menos paciência.</p>
      </div>

      {/* 21. Footer */}
      <div style={{ padding: "28px 24px 40px", background: "#f5efe4", textAlign: "center", borderTop: "1px solid rgba(42,37,32,0.1)" }}>
        <div style={{ fontSize: 13, color: "#5a5246", lineHeight: 1.6 }}>
          <strong style={{ fontWeight: 600 }}>Rotina Pedagógica</strong><br />
          <span style={{ ...fontMono, fontSize: 10, color: "#7a6e5f" }}>metodo.rotinapedagogica.com</span>
        </div>
      </div>
    </main>
  );
};

export default LandingV2;
