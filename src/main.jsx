import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { SpacecraftProvider } from "./context/SpacecraftContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SpacecraftProvider>
      <App />
    </SpacecraftProvider>
  </React.StrictMode>
);
