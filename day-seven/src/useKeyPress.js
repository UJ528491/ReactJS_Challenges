import { useState, useEffect } from "react";

export const useKeyPress = keyCode => {
  const [key, setKey] = useState(false);
  useEffect(() => {
    window.addEventListener("keydown", showPressKey);
    return () => window.removeEventListener("keydown", showPressKey);
  }, [key]);
  useEffect(() => {
    window.addEventListener("keyup", clearPressKey);
    return () => window.removeEventListener("keyup", clearPressKey);
  }, [key]);
  const showPressKey = event => {
    if (event.key === keyCode) {
      setKey(true);
    }
  };
  const clearPressKey = () => {
    setKey(false);
  };
  return key;
};
