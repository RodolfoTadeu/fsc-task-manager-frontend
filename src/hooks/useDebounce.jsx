import { useEffect, useState } from "react";

export const useDebounce = (value, delay = 1000) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const time = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(time);
    };
  }, [value, delay]);

  return debouncedValue;
};
