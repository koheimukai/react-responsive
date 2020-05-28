import React, {
  createContext,
  useState,
  useRef,
  useContext,
  useEffect,
  useCallback,
} from "react";

const Responsive = createContext(null);
Responsive.displayName = "Responsive";

const defaultBreakpoints = { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920 };

export function ResponsiveProvider({ children, customBreakpoints }) {
  const breakpoints = Object.assign({}, defaultBreakpoints, customBreakpoints);

  const [matches, setMatches] = useState({
    xs: window.matchMedia(`(min-width: ${breakpoints.xs}px)`).matches,
    sm: window.matchMedia(`(min-width: ${breakpoints.sm}px)`).matches,
    md: window.matchMedia(`(min-width: ${breakpoints.md}px)`).matches,
    lg: window.matchMedia(`(min-width: ${breakpoints.lg}px)`).matches,
    xl: window.matchMedia(`(min-width: ${breakpoints.xl}px)`).matches,
  });

  const callback = useCallback((e) => {
    switch (e.media) {
      case `(min-width: ${breakpoints.xs}px)`:
        setMatches((prev) => ({ ...prev, xs: e.matches }));
        break;
      case `(min-width: ${breakpoints.sm}px)`:
        setMatches((prev) => ({ ...prev, sm: e.matches }));
        break;
      case `(min-width: ${breakpoints.md}px)`:
        setMatches((prev) => ({ ...prev, md: e.matches }));
        break;
      case `(min-width: ${breakpoints.lg}px)`:
        setMatches((prev) => ({ ...prev, lg: e.matches }));
        break;
      case `(min-width: ${breakpoints.xl}px)`:
        setMatches((prev) => ({ ...prev, xl: e.matches }));

        break;
    }
  }, []);

  const mqlXs = useRef(window.matchMedia(`(min-width: ${breakpoints.xs}px)`));
  const mqlSm = useRef(window.matchMedia(`(min-width: ${breakpoints.sm}px)`));
  const mqlMd = useRef(window.matchMedia(`(min-width: ${breakpoints.md}px)`));
  const mqlLg = useRef(window.matchMedia(`(min-width: ${breakpoints.lg}px)`));
  const mqlXl = useRef(window.matchMedia(`(min-width: ${breakpoints.xl}px)`));

  useEffect(() => {
    mqlXs.current.addListener(callback);
    mqlSm.current.addListener(callback);
    mqlMd.current.addListener(callback);
    mqlLg.current.addListener(callback);
    mqlXl.current.addListener(callback);

    return () => {
      mqlXs.current.removeListener(callback);
      mqlSm.current.removeListener(callback);
      mqlMd.current.removeListener(callback);
      mqlLg.current.removeListener(callback);
      mqlXl.current.removeListener(callback);
    };
  }, []);

  return (
    <Responsive.Provider value={{ ...matches }}>{children}</Responsive.Provider>
  );
}

export function useResponsive() {
  return useContext(Responsive);
}
