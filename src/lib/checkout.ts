export const HOTMART_URL = "https://pay.hotmart.com/L104708967T?checkoutMode=10";

export type CheckoutExtras = {
  br?: string;
  step?: string;
  /** token to append (pipe-separated) to the existing `src` param */
  srcAppend?: string;
};

export function buildHotmartUrl(extras: CheckoutExtras = {}): string {
  const current = new URLSearchParams(window.location.search);

  if (extras.srcAppend) {
    const prev = current.get("src") || "";
    const tokens = prev ? prev.split("|") : [];
    if (!tokens.includes(extras.srcAppend)) tokens.push(extras.srcAppend);
    current.set("src", tokens.join("|"));
  }
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

export function fireInitiateCheckout() {
  const w = window as unknown as { trackEvent?: (n: string, d?: Record<string, unknown>) => void };
  if (typeof w.trackEvent === "function") w.trackEvent("InitiateCheckout");
}

export function fireAddToWishlist() {
  const w = window as unknown as { trackEvent?: (n: string, d?: Record<string, unknown>) => void };
  if (typeof w.trackEvent === "function") w.trackEvent("AddToWishlist");
}
