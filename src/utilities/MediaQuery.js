import { useState, useEffect } from "react";

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(query);
    if (mql.matches !== matches) {
      setMatches(mql.matches);
    }

    const listener = () => {
      setMatches(mql.matches);
    };

    window.addEventListener("resize", listener);

    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);


  return matches;
}
