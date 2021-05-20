import { useState, useEffect } from "react";

export const useOnline = () => {
  const [status, setStatus] = useState(navigator.onLine);
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);
  const handleChange = () => {
    setStatus(navigator.onLine);
  };
  return status;
};
