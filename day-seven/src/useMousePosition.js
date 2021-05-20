import { useState, useEffect } from "react";

export const useMousePosition = () => {
  const [mouseCoords, setMouseCoords] = useState({
    x: null,
    y: null,
  });
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseCoords);
    return () => window.removeEventListener("mousemove", handleMouseCoords);
  }, [mouseCoords]);
  const handleMouseCoords = e => {
    setMouseCoords({
      x: e.clientX,
      y: e.clientY,
    });
  };
  return { x: mouseCoords.x, y: mouseCoords.y };
};
