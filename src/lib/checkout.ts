export const HOTMART_URL = "https://pay.hotmart.com/L104708967T?checkoutMode=10";

export type CheckoutExtras = {
  br?: string;
  step?: string;
  /** token to append (pipe-separated) to the existing `src` param */
  srcAppend?: string;
};

function readCookie(name: string): string | null {
  const m = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  if (!m) return null;
  try {
    return decodeURIComponent(m[2]);
  } catch {
    return m[2];
  }
}

function buildSrc(srcAppend?: string): string {
  const original = readCookie("original_src") || "";
  const current = new URLSearchParams(window.location.search).get("src") || "";

  const tokens: string[] = [];
  const push = (raw: string) => {
    raw.split("|").forEach((t) => {
      const trimmed = t.trim();
      if (trimmed && !tokens.includes(trimmed)) tokens.push(trimmed);
    });
  };
  push(original);
  push(current);
  if (srcAppend) push(srcAppend);

  return tokens.join("|");
}

export function buildHotmartUrl(extras: CheckoutExtras = {}): string {
  const current = new URLSearchParams(window.location.search);

  const finalSrc = buildSrc(extras.srcAppend);
  if (finalSrc) current.set("src", finalSrc);

  if (extras.br) current.set("br", extras.br);
  if (extras.step) current.set("step", extras.step);

  const link = new URL(HOTMART_URL);
  current.forEach((v, k) => link.searchParams.set(k, v));

  if (!link.searchParams.get("sck")) {
    const extId = (window as unknown as { trackingData?: { external_id?: string } })
      .trackingData?.external_id;
    if (extId) link.searchParams.set("sck", extId);
  }
  return link.toString();
}

export function fireInitiateCheckout(data?: Record<string, unknown>) {
  const w = window as unknown as { trackEvent?: (n: string, d?: Record<string, unknown>) => void };
  if (typeof w.trackEvent === "function") w.trackEvent("InitiateCheckout", data);
}

export function fireAddToWishlist(data?: Record<string, unknown>) {
  const w = window as unknown as { trackEvent?: (n: string, d?: Record<string, unknown>) => void };
  if (typeof w.trackEvent === "function") w.trackEvent("AddToWishlist", data);
}
