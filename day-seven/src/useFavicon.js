import { useState, useEffect } from "react";

export const useFavicon = url => {
  const [favicon, setFavicon] = useState(url);
  useEffect(() => {
    toggleFavicon(favicon);
  }, [favicon]);
  const toggleFavicon = favicon => {
    const htmlLink = document.querySelector("link[rel='icon']");
    htmlLink.href = favicon;
  };
  return setFavicon;
};
