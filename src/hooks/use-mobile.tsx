import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    // Set initial value
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);

    // Cross-browser support for MediaQueryList listeners
    if (typeof mql.addEventListener === "function") {
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    } else if (typeof (mql as any).addListener === "function") {
      (mql as any).addListener(onChange);
      return () => (mql as any).removeListener(onChange);
    } else {
      window.addEventListener("resize", onChange);
      return () => window.removeEventListener("resize", onChange);
    }
  }, []);

  return !!isMobile;
}
