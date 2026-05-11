/** Detect if the page is loaded inside Instagram / Facebook / Messenger in-app browser. */
export function isInAppBrowser(): boolean {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent || "";
  // Instagram in-app: "Instagram"
  // Facebook / Messenger in-app: "FBAN", "FBAV", "FB_IAB", "FBIOS", "Messenger"
  return /Instagram|FBAN|FBAV|FB_IAB|FBIOS|Messenger/i.test(ua);
}

export type MobileOS = "ios" | "android" | "other";

export function getMobileOS(): MobileOS {
  if (typeof navigator === "undefined") return "other";
  const ua = navigator.userAgent || "";
  if (/iPhone|iPad|iPod/i.test(ua)) return "ios";
  if (/Android/i.test(ua)) return "android";
  return "other";
}
