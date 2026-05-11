import { useEffect, useState, type CSSProperties, type MouseEvent } from "react";
import { isInAppBrowser, getMobileOS, type MobileOS } from "@/lib/inAppBrowser";

interface Props {
  onBack: () => void;
}

const HOST = "metodo.rotinapedagogica.com";

const systemFont =
  '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif';

const FakeBrowserBar = ({ onBack }: Props) => {
  const [enabled, setEnabled] = useState(false);
  const [os, setOs] = useState<MobileOS>("other");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const inApp = isInAppBrowser();
    if (!inApp) return;
    const detectedOs = getMobileOS();
    setOs(detectedOs);
    setEnabled(true);

    const height = detectedOs === "android" ? 56 : 44;
    const prevPad = document.body.style.paddingTop;
    document.body.style.paddingTop = `${height}px`;
    return () => {
      document.body.style.paddingTop = prevPad;
    };
  }, []);

  if (!enabled) return null;

  const handleBack = (e: MouseEvent) => {
    e.preventDefault();
    onBack();
  };

  if (os === "android") {
    // Chrome Android style
    const bar: CSSProperties = {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      height: 56,
      background: "#f1f3f4",
      borderBottom: "1px solid #dadce0",
      display: "flex",
      alignItems: "center",
      padding: "0 4px 0 4px",
      zIndex: 2147483647,
      fontFamily: systemFont,
      color: "#202124",
      boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
    };
    const backBtn: CSSProperties = {
      width: 48,
      height: 48,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "transparent",
      border: "none",
      cursor: "pointer",
      fontSize: 24,
      color: "#202124",
      padding: 0,
      WebkitTapHighlightColor: "rgba(0,0,0,0.1)",
    };
    const urlPill: CSSProperties = {
      flex: 1,
      height: 36,
      background: "#fff",
      border: "1px solid #dadce0",
      borderRadius: 18,
      display: "flex",
      alignItems: "center",
      padding: "0 14px",
      margin: "0 4px",
      fontSize: 13.5,
      color: "#3c4043",
      overflow: "hidden",
      whiteSpace: "nowrap",
    };
    const dots: CSSProperties = {
      width: 40,
      height: 48,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 22,
      color: "#5f6368",
      letterSpacing: 1,
    };
    return (
      <div style={bar} role="navigation" aria-label="navegação">
        <button
          type="button"
          onClick={handleBack}
          aria-label="voltar"
          style={backBtn}
        >
          <span style={{ fontSize: 22, lineHeight: 1, fontWeight: 400 }}>←</span>
        </button>
        <div style={urlPill}>
          <span style={{ marginRight: 8, fontSize: 12, opacity: 0.7 }}>🔒</span>
          <span style={{ overflow: "hidden", textOverflow: "ellipsis" }}>{HOST}</span>
        </div>
        <div style={dots} aria-hidden="true">⋮</div>
      </div>
    );
  }

  // iOS Safari style (default for ios + other-mobile fallback)
  const bar: CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    height: 44,
    background: "rgba(247,247,247,0.94)",
    backdropFilter: "saturate(180%) blur(20px)",
    WebkitBackdropFilter: "saturate(180%) blur(20px)",
    borderBottom: "1px solid rgba(0,0,0,0.12)",
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    zIndex: 2147483647,
    fontFamily: systemFont,
    color: "#000",
  };
  const backBtn: CSSProperties = {
    width: 44,
    height: 44,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    color: "#007AFF",
    padding: 0,
    WebkitTapHighlightColor: "rgba(0,122,255,0.15)",
  };
  const urlBox: CSSProperties = {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 32,
    background: "rgba(0,0,0,0.06)",
    borderRadius: 8,
    margin: "0 6px",
    padding: "0 10px",
    fontSize: 13,
    color: "#000",
    overflow: "hidden",
    whiteSpace: "nowrap",
    minWidth: 0,
  };
  const aaBtn: CSSProperties = {
    width: 36,
    height: 44,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 13,
    color: "#007AFF",
    fontWeight: 600,
    letterSpacing: -0.5,
  };

  return (
    <div style={bar} role="navigation" aria-label="navegação">
      <button
        type="button"
        onClick={handleBack}
        aria-label="voltar"
        style={backBtn}
      >
        <span style={{ fontSize: 26, lineHeight: 1, fontWeight: 300 }}>‹</span>
      </button>
      <div style={urlBox}>
        <span style={{ marginRight: 6, fontSize: 11, opacity: 0.55 }}>🔒</span>
        <span style={{ overflow: "hidden", textOverflow: "ellipsis" }}>{HOST}</span>
      </div>
      <div style={aaBtn} aria-hidden="true">
        <span style={{ fontSize: 11 }}>A</span>
        <span style={{ fontSize: 15 }}>A</span>
      </div>
    </div>
  );
};

export default FakeBrowserBar;
