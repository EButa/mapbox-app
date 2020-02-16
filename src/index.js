import React from "react";
import ReactDOM from "react-dom";
import { Map } from "./Map";
import { MapProvider } from "./hooks/mapHook";

ReactDOM.render(
  <MapProvider>
    <Map />
  </MapProvider>,
  document.getElementById("root")
);
