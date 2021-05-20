import { useState, useEffect } from "react";

export const useGeolocation = () => {
  const [coords, setCoords] = useState({
    latitude: null,
    longitude: null,
    error: null,
  });
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      handleGeoSuccess,
      handleGeoError,
      options
    );
  }, []);
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  const handleGeoSuccess = position => {
    setCoords({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
      error: "null",
    });
  };
  const handleGeoError = () => {
    setCoords({
      error: "error!",
      ...coords,
    });
  };
  return {
    coords: { lat: coords.latitude, long: coords.longitude },
    error: coords.error,
  };
};
