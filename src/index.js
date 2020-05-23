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

const defaultOption = { sm: 600, md: 960, lg: 1280, xl: 1920 };

export function ResponsiveProvider({ children, option = defaultOption }) {
  const [matches, setMatches] = useState({
    sm: window.matchMedia(`(min-width: ${option.sm}px)`).matches,
    md: window.matchMedia(`(min-width: ${option.md}px)`).matches,
    lg: window.matchMedia(`(min-width: ${option.lg}px)`).matches,
    xl: window.matchMedia(`(min-width: ${option.xl}px)`).matches,
  });

  const callback = useCallback((e) => {
    switch (e.media) {
      case `(min-width: ${option.sm}px)`:
        setMatches({ sm: e.matches });
        break;
      case `(min-width: ${option.md}px)`:
        setMatches({ md: e.matches });
        break;
      case `(min-width: ${option.lg}px)`:
        setMatches({ lg: e.matches });
        break;
      case `(min-width: ${option.xl}px)`:
        setMatches({ xl: e.matches });
        break;
    }
  }, []);

  const mqlSm = useRef(window.matchMedia(`(min-width: ${option.sm}px)`));
  const mqlMd = useRef(window.matchMedia(`(min-width: ${option.md}px)`));
  const mqlLg = useRef(window.matchMedia(`(min-width: ${option.lg}px)`));
  const mqlXl = useRef(window.matchMedia(`(min-width: ${option.xl}px)`));

  useEffect(() => {
    mqlSm.current.addListener(callback);
    mqlMd.current.addListener(callback);
    mqlLg.current.addListener(callback);
    mqlXl.current.addListener(callback);

    return () => {
      mqlSm.current.removeListener(callback);
      mqlMd.current.removeListener(callback);
      mqlLg.current.removeListener(callback);
      mqlXl.current.removeListener(callback);
    };
  }, []);

  return (
    <Responsive.Provider value={{ xs: true, ...matches }}>
      {children}
    </Responsive.Provider>
  );
}

export function useResponsive() {
  return useContext(Responsive);
}
