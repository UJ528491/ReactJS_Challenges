import { useState, useEffect } from "react";

export const useLocalStorage = (name, initialValue) => {
  const [currentLs, setLs] = useState(12345);
  useEffect(() => {
    localStorage.setItem(name, JSON.stringify(currentLs));
  }, [currentLs]);
  return [currentLs, setLs];
};
