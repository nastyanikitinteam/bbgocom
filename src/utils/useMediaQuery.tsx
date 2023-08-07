import React, { useCallback, useEffect, useState, useMemo } from "react";

function useMediaQuery(width) {
  const [targetReached, setTargetReached] = useState(null);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addEventListener("change", updateTarget);

    if (media.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }

    return () => media.removeEventListener("change", updateTarget);
  }, []);

  return targetReached;
}

export default useMediaQuery;
