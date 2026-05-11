import { useEffect } from "react";

/** Append current URL search params to a path. */
export function withCurrentParams(path: string): string {
  const search = window.location.search;
  return search ? `${path}${search}` : path;
}

/**
 * Backredirect via pushState trick.
 * On mount: pushes a duplicate history entry; on browser back, redirects to `getDestination()`.
 */
export function useBackredirect(getDestination: () => string) {
  useEffect(() => {
    // Push a sentinel entry so the next "back" lands on a popstate we can intercept.
    window.history.pushState(null, "", window.location.href);

    const onPop = () => {
      const dest = getDestination();
      window.location.replace(dest);
    };

    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
