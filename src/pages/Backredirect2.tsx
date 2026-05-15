import { useEffect, useMemo, type CSSProperties, type MouseEvent } from "react";
import { buildHotmartUrl, fireInitiateCheckout, fireAddToWishlist } from "@/lib/checkout";
import { useBackredirect } from "@/lib/backredirect";
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
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  position: "relative",
};

type Line = { text: string; weight: "normal" | "soft" | "hand" };
const lines: Line[] = [
  { text: "Você já sabe o que isso resolve.", weight: "normal" },
  { text: "Você viu funcionando.", weight: "normal" },
  { text: "E mesmo assim…", weight: "soft" },
  { text: "tá indo embora.", weight: "hand" },
];

const Backredirect2 = () => {
  const checkoutHref = useMemo(
    () => buildHotmartUrl({ br: "2", step: "backredirect-2", srcAppend: "voltar2" }),
    [],
  );
  const escapeHref = useMemo(
    () => buildHotmartUrl({ br: "2", step: "escape", srcAppend: "fuga" }),
    [],
  );

  useBackredirect(() => {
    fireInitiateCheckout();
    return checkoutHref;
  });

  useEffect(() => {
    const prevTitle = document.title;
    document.title = "agora assume — Método Rotina Pedagógica";

    const robots = document.createElement("meta");
    robots.name = "robots";
    robots.content = "noindex,nofollow";
    document.head.appendChild(robots);

    const desc = document.createElement("meta");
    desc.name = "description";
    desc.content = "Você já viu. Você já sabe. R$ 47 · acesso imediato.";
    document.head.appendChild(desc);

    fireAddToWishlist();

    return () => {
      document.title = prevTitle;
      document.head.removeChild(robots);
      document.head.removeChild(desc);
    };
  }, []);

  const onCheckout = (e: MouseEvent) => {
    e.preventDefault();
    fireInitiateCheckout();
    window.open(checkoutHref, "_self");
  };

  return (
    <div style={page}>
      <FakeBrowserBar
        onBack={() => {
          fireInitiateCheckout();
          window.location.assign(checkoutHref);
        }}
      />
      {/* Top */}
      <div
        style={{
          ...mono,
          fontSize: 10.5,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "#9c8e7a",
          padding: "28px 28px 0",
          fontWeight: 500,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
        }}
      >
        <span>última vez.</span>
        <span style={{ color: "#c45a3e", letterSpacing: "0.24em" }}>· · ·</span>
      </div>

      {/* Body */}
      <div
        style={{
          padding: "64px 28px 24px",
          flex: "0 0 auto",
          background:
            "repeating-linear-gradient(to bottom, transparent 0 47px, rgba(42,37,32,0.05) 47px 48px), #f5efe4",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 64,
            top: 0,
            bottom: 0,
            width: 1,
            background: "rgba(196,90,62,0.22)",
          }}
        />
        <div style={{ position: "relative" }}>
          {lines.map((l, i) => {
            const gapTop = i === 0 ? 0 : l.weight === "hand" ? 6 : 26;
            if (l.weight === "hand") {
              return (
                <p
                  key={i}
                  style={{
                    ...hand,
                    fontSize: 48,
                    lineHeight: 1.02,
                    margin: `${gapTop}px 0 0`,
                    color: "#c45a3e",
                    letterSpacing: "-0.01em",
                    fontWeight: 700,
                    transform: "rotate(-0.5deg)",
                  }}
                >
                  {l.text}
                </p>
              );
            }
            if (l.weight === "soft") {
              return (
                <p
                  key={i}
                  style={{
                    fontSize: 22,
                    lineHeight: 1.25,
                    margin: `${gapTop}px 0 0`,
                    color: "#7a6e5f",
                    fontStyle: "italic",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {l.text}
                </p>
              );
            }
            return (
              <p
                key={i}
                style={{
                  fontSize: 26,
                  lineHeight: 1.2,
                  margin: `${gapTop}px 0 0`,
                  color: "#2a2520",
                  fontWeight: 500,
                  letterSpacing: "-0.02em",
                }}
              >
                {l.text}
              </p>
            );
          })}
        </div>
      </div>

      {/* Verdict */}
      <div style={{ padding: "56px 28px 48px", position: "relative" }}>
        <div style={{ width: 32, height: 1, background: "#2a2520", opacity: 0.4, marginBottom: 32 }} />
        <p
          style={{
            fontSize: 24,
            lineHeight: 1.32,
            margin: "0 0 22px",
            color: "#2a2520",
            fontWeight: 500,
            letterSpacing: "-0.02em",
            maxWidth: 380,
          }}
        >
          Então talvez o problema nunca tenha sido{" "}
          <span style={{ fontStyle: "italic", color: "#5a5246" }}>escrever relatório.</span>
        </p>
        <p
          style={{
            fontSize: 24,
            lineHeight: 1.32,
            margin: 0,
            color: "#2a2520",
            fontWeight: 600,
            letterSpacing: "-0.02em",
            maxWidth: 400,
          }}
        >
          Talvez seja continuar fingindo que isso{" "}
          <span style={{ position: "relative", display: "inline-block" }}>
            <span style={{ position: "relative", zIndex: 1 }}>não pesa</span>
            <span
              style={{
                position: "absolute",
                left: -2,
                right: -2,
                bottom: 3,
                height: 11,
                background: "rgba(245,200,80,0.6)",
                zIndex: 0,
                transform: "rotate(-0.4deg)",
              }}
            />
          </span>{" "}
          em você.
        </p>
      </div>

      {/* Door: price + CTA */}
      <div style={{ padding: "40px 28px 36px", background: "#2a2520", color: "#f5efe4" }}>
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            marginBottom: 28,
          }}
        >
          <div
            style={{
              ...hand,
              fontSize: 72,
              lineHeight: 0.9,
              color: "#f5c850",
              letterSpacing: "-0.02em",
              fontWeight: 700,
            }}
          >
            R$47.
          </div>
          <div
            style={{
              ...mono,
              fontSize: 10,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#9c8e7a",
              textAlign: "right",
              lineHeight: 1.5,
            }}
          >
            uma vez.
            <br />
            acesso na hora.
          </div>
        </div>
        <a
          href={checkoutHref}
          onClick={onCheckout}
          style={{
            display: "block",
            textDecoration: "none",
            textAlign: "center",
            width: "100%",
            padding: "22px 18px",
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
            lineHeight: 1.2,
          }}
        >
          Ok. eu vou parar de deixar isso escapar →
        </a>
      </div>

      {/* Footer */}
      <div style={{ padding: "40px 28px 48px", textAlign: "left", marginTop: "auto" }}>
        <div
          style={{
            ...hand,
            fontSize: 28,
            lineHeight: 1,
            color: "#2a2520",
            letterSpacing: "-0.01em",
            opacity: 0.85,
          }}
        >
          agora assume.
        </div>
      </div>
    </div>
  );
};

export default Backredirect2;
