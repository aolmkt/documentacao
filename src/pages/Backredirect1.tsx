import { useEffect, useMemo, type CSSProperties, type MouseEvent } from "react";
import { buildHotmartUrl, fireInitiateCheckout, fireAddToWishlist } from "@/lib/checkout";
import { useBackredirect, withCurrentParams } from "@/lib/backredirect";
import FakeBrowserBar from "@/components/FakeBrowserBar";

const hand: CSSProperties = { fontFamily: '"Caveat", "Bradley Hand", cursive' };
const mono: CSSProperties = { fontFamily: 'ui-monospace, "SF Mono", Menlo, monospace' };

const page: CSSProperties = {
  width: "100%",
  maxWidth: 480,
  margin: "0 auto",
  background: "#f5efe4",
  fontFamily: '"Source Serif 4", Georgia, serif',
  color: "#2a2520",
  overflow: "hidden",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
};

const Backredirect1 = () => {
  useBackredirect(() => withCurrentParams("/br2"));

  useEffect(() => {
    // SEO: noindex + title/desc per route, restored on unmount
    const prevTitle = document.title;
    document.title = "você já viu — Método Rotina Pedagógica";

    const robots = document.createElement("meta");
    robots.name = "robots";
    robots.content = "noindex,nofollow";
    document.head.appendChild(robots);

    const desc = document.createElement("meta");
    desc.name = "description";
    desc.content =
      "Aquilo que você viu não vai parar de acontecer só porque você fechou a página. R$ 47 · acesso imediato.";
    document.head.appendChild(desc);

    fireAddToWishlist();

    return () => {
      document.title = prevTitle;
      document.head.removeChild(robots);
      document.head.removeChild(desc);
    };
  }, []);

  const checkoutHref = useMemo(
    () => buildHotmartUrl({ br: "1", step: "backredirect", srcAppend: "voltar1" }),
    [],
  );

  const onCheckout = (e: MouseEvent) => {
    e.preventDefault();
    fireInitiateCheckout();
    window.open(checkoutHref, "_self");
  };

  return (
    <div style={page}>
      <FakeBrowserBar onBack={() => window.location.assign(withCurrentParams("/br2"))} />
      {/* Top */}
      <div
        style={{
          ...mono,
          fontSize: 10.5,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "#7a6e5f",
          padding: "20px 24px 0",
          fontWeight: 500,
        }}
      >
        você já viu isso acontecer.
      </div>

      {/* Headline */}
      <div
        style={{
          padding: "20px 24px 2px",
          background:
            "repeating-linear-gradient(to bottom, transparent 0 31px, rgba(42,37,32,0.06) 31px 32px), #f5efe4",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 56,
            top: 0,
            bottom: 0,
            width: 1,
            background: "rgba(196,90,62,0.25)",
          }}
        />
        <h1
          style={{
            fontSize: 38,
            lineHeight: 1.03,
            margin: "12px 0 22px",
            fontWeight: 600,
            letterSpacing: "-0.03em",
            position: "relative",
          }}
        >
          Aquilo que você viu…
          <br />
          <span style={{ position: "relative", display: "inline-block" }}>
            <span style={{ position: "relative", zIndex: 1 }}>não vai parar</span>
            <span
              style={{
                position: "absolute",
                left: -2,
                right: -2,
                bottom: 4,
                height: 11,
                background: "rgba(245,200,80,0.55)",
                zIndex: 0,
                transform: "rotate(-0.6deg)",
              }}
            />
          </span>{" "}
          de acontecer só porque você fechou a página.
        </h1>
        <p style={{ fontSize: 17, lineHeight: 1.4, margin: 0, color: "#5a5246", maxWidth: 380 }}>
          E na próxima vez…
          <br />
          <span style={{ ...hand, fontSize: 28, color: "#c45a3e", lineHeight: 1 }}>
            vai embora de novo.
          </span>
        </p>
      </div>

      {/* Before/After */}
      <div style={{ padding: "14px 24px 4px" }}>
        <div
          style={{
            ...mono,
            fontSize: 10,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#7a6e5f",
            marginBottom: 12,
          }}
        >
          a mesma cena. de novo.
        </div>
        <div style={{ display: "grid", gap: 10 }}>
          <div
            style={{
              padding: "13px 14px",
              background: "#fff",
              borderRadius: 8,
              border: "1px solid rgba(42,37,32,0.1)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 8,
              }}
            >
              <div style={{ ...hand, fontSize: 19, color: "#c45a3e" }}>Sua anotação</div>
              <span
                style={{
                  ...mono,
                  fontSize: 9,
                  color: "#7a6e5f",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                8s no celular
              </span>
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.5, margin: 0, color: "#4a4238", fontStyle: "italic" }}>
              "Miguel pegou o livro sozinho. Sentou. Apontou pro cão e falou 'au au, tá ali'. Ficou 4 minutos folheando.
              <span
                style={{
                  background: "#fff3a8",
                  padding: "0 3px",
                  fontStyle: "normal",
                  fontWeight: 600,
                  color: "#2a2520",
                }}
              >
                {"  "}(a primeira vez que ele senta sem chamar ninguém.){"  "}
              </span>
              "
            </p>
          </div>

          <div
            style={{
              ...hand,
              fontSize: 22,
              color: "#c45a3e",
              textAlign: "center",
              lineHeight: 1,
              transform: "rotate(-2deg)",
              fontWeight: 700,
              margin: 0,
            }}
          >
            relatório pronto ↓
          </div>

          <div
            style={{
              padding: "13px 14px",
              background: "#2a2520",
              color: "#f5efe4",
              borderRadius: 8,
              boxShadow: "0 8px 24px rgba(42,37,32,0.18)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 8,
              }}
            >
              <div style={{ ...hand, fontSize: 19, color: "#f5c850" }}>Relatório pronto</div>
              <span
                style={{
                  ...mono,
                  fontSize: 9,
                  color: "#c8a878",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                em 90 segundos
              </span>
            </div>
            <p style={{ fontSize: 12.5, lineHeight: 1.55, margin: 0, color: "#e8dfd0" }}>
              "Miguel demonstrou autonomia ao escolher o livro de forma espontânea e iniciativa no contato com a leitura.
              <span
                style={{
                  background: "rgba(245,200,80,0.22)",
                  padding: "0 4px",
                  color: "#f5efe4",
                  fontWeight: 600,
                }}
              >
                {" "}
                Trata-se de um marco no desenvolvimento de sua autorregulação.{" "}
              </span>
              A permanência de quatro minutos folheando a obra evidencia capacidade de atenção concentrada para a faixa etária…"
            </p>
          </div>
        </div>
      </div>

      {/* Micro punch */}
      <div style={{ padding: "40px 24px 36px", textAlign: "left" }}>
        <p
          style={{
            fontSize: 22,
            lineHeight: 1.25,
            margin: "0 0 8px",
            color: "#2a2520",
            fontWeight: 600,
            letterSpacing: "-0.02em",
          }}
        >
          Você não precisa escrever melhor.
        </p>
        <p style={{ ...hand, fontSize: 36, lineHeight: 1.05, margin: 0, color: "#c45a3e" }}>
          só parar de deixar isso escapar.
        </p>
      </div>

      {/* Price + CTA */}
      <div style={{ padding: "36px 24px 32px", background: "#2a2520", color: "#f5efe4" }}>
        <div
          style={{
            ...mono,
            fontSize: 10,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#c8a878",
            marginBottom: 10,
          }}
        >
          pagamento único · acesso imediato
        </div>
        <div
          style={{
            ...hand,
            fontSize: 72,
            lineHeight: 0.9,
            margin: "0 0 10px",
            color: "#f5c850",
            letterSpacing: "-0.02em",
            fontWeight: 700,
          }}
        >
          R$47.
        </div>
        <p style={{ fontSize: 14, lineHeight: 1.5, margin: "0 0 24px", color: "#d4c8b3" }}>
          7 dias pra ver isso funcionando
          <br />
          na sua rotina.
        </p>
        <div
          style={{
            ...mono,
            fontSize: 10.5,
            letterSpacing: "0.08em",
            color: "#9c8e7a",
            margin: "0 0 14px",
            lineHeight: 1.4,
            fontStyle: "italic",
          }}
        >
          você já sabe o que acontece
          <br />
          quando deixa pra depois.
        </div>
        <a
          href={checkoutHref}
          onClick={onCheckout}
          style={{
            display: "block",
            textDecoration: "none",
            textAlign: "center",
            width: "100%",
            padding: "20px 20px",
            border: "none",
            background: "#c45a3e",
            color: "#fff",
            borderRadius: 10,
            fontSize: 17,
            fontWeight: 700,
            fontFamily: "inherit",
            boxShadow: "0 2px 0 #8d3d28, 0 12px 28px rgba(196,90,62,0.4)",
            letterSpacing: "-0.01em",
            boxSizing: "border-box",
          }}
        >
          Ok. eu quero ver isso funcionando →
        </a>
        <div
          style={{
            ...mono,
            fontSize: 11,
            color: "#b8a890",
            textAlign: "center",
            marginTop: 12,
            letterSpacing: "0.06em",
          }}
        >
          (Pix ou cartão · acesso na hora)
        </div>
      </div>

      {/* Footer */}
      <div style={{ padding: "32px 24px 40px", textAlign: "left", marginTop: "auto" }}>
        <div style={{ ...hand, fontSize: 30, lineHeight: 1, color: "#2a2520", letterSpacing: "-0.01em" }}>
          você já viu.
        </div>
      </div>
    </div>
  );
};

export default Backredirect1;
