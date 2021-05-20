import { useState, useEffect } from "react";

export const useDeviceOrientation = () => {
  const [orientation, setOrientation] = useState({
    alpha: null,
    beta: null,
    gamma: null,
  });
  useEffect(() => {
    window.addEventListener("deviceorientation", handleOrientation, true);
    return () =>
      window.removeEventListener("deviceorientation", handleOrientation, true);
  }, []);
  const handleOrientation = e => {
    setOrientation({
      alpha: e.alpha,
      beta: e.beta,
      gamma: e.gamma,
    });
  };
  return {
    alpha: orientation.alpha,
    beta: orientation.beta,
    gamma: orientation.gamma,
  };
};
