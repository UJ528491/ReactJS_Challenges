import React from "react";
import ReactDOM from "react-dom";
import { useDeviceOrientation } from "./useDeviceOrientation";
import { useFavicon } from "./useFavicon";
import { useGeolocation } from "./useGeolocation";
import { useKeyPress } from "./useKeyPress";
import { useLocalStorage } from "./useLocalStorage";
import { useMousePosition } from "./useMousePosition";
import { useOnline } from "./useOnline";
import { useLockScroll } from "./useLockScroll";

function App() {
  const initialFaviconUrl = "favicon.ico";
  const newFaviconUrl = "/nomad-favicon.png";
  const { alpha, beta, gamma } = useDeviceOrientation();
  const setFavicon = useFavicon(initialFaviconUrl);
  const {
    coords: { lat, long },
    error,
  } = useGeolocation();
  const kPressed = useKeyPress("k");
  const iPressed = useKeyPress("i");
  const mPressed = useKeyPress("m");
  const [currentLs, setLs] = useLocalStorage("Nomad", "12345");
  const { x, y } = useMousePosition();
  const isOnline = useOnline();
  const { isLocked, lockScroll, unLockScroll } = useLockScroll();
  return (
    <main>
      <div>
        <h2>useDeviceOrientation</h2>
        <ul>
          <li>Alpha: {alpha}</li>
          <li>Beta: {beta}</li>
          <li>Gamma: {gamma}</li>
        </ul>
      </div>
      <div>
        <h2>useFavicon</h2>
        <button onClick={() => setFavicon(newFaviconUrl)}>
          Change Favicon
        </button>
      </div>
      <div>
        <h2>useGeolocation</h2>
        <ul>
          <li>Latitude: {lat}</li>
          <li>Longitude: {long}</li>
          <li>Geolocation Error: {error}</li>
        </ul>
      </div>
      <div>
        <h2>useKeyPress</h2>
        <ul>
          <li>Pressed 'k': {kPressed && "K"}</li>
          <li>Pressed 'i': {iPressed && "I"}</li>
          <li>Pressed 'm': {mPressed && "M"}</li>
        </ul>
      </div>
      <div>
        <h2>useLocalStorage</h2>
        <ul>
          <li>Current Value: {currentLs}</li>
        </ul>
        <div>
          <button onClick={() => setLs("12345")}>Set value : 12345</button>
          <button onClick={() => setLs(null)}>Clear</button>
        </div>
      </div>
      <div>
        <h2>useMousePosition</h2>
        <ul>
          <li>Mouse X: {x}</li>
          <li>Mouse Y: {y}</li>
        </ul>
      </div>
      <div>
        <h2>useOnline</h2>
        <p>Are we online? {isOnline ? "Yes" : "No"}</p>
      </div>
      <div>
        <h2>useLockScroll</h2>
        <h3>Is Locked? {isLocked ? "Yes" : "No"}</h3>
        <button onClick={lockScroll}>Lock scroll</button>
        <button onClick={unLockScroll}>Unlock scroll</button>
      </div>
    </main>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
