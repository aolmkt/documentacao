import { useEffect } from "react";

/**
 * Tracks scroll depth (50/75/90%) and time on page (>60s) once each.
 * Fires custom events via window.trackEvent.
 */
export function useEngagementTracking(pageId: string) {
  useEffect(() => {
    const w = window as unknown as {
      trackEvent?: (n: string, d?: Record<string, unknown>) => void;
    };
    const fired = new Set<string>();

    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      if (total <= 0) return;
      const pct = (h.scrollTop / total) * 100;
      const marks = [50, 75, 90];
      for (const m of marks) {
        const key = `s${m}`;
        if (pct >= m && !fired.has(key)) {
          fired.add(key);
          w.trackEvent?.("ScrollDepth", { depth: m, page: pageId });
        }
      }
    };

    const timer = window.setTimeout(() => {
      if (!fired.has("t60")) {
        fired.add("t60");
        w.trackEvent?.("TimeOnPage", { seconds: 60, page: pageId });
      }
    }, 60000);

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.clearTimeout(timer);
    };
  }, [pageId]);
}
