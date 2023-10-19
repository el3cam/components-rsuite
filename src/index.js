import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { CustomProvider } from "rsuite";
import es_ES from "rsuite/locales/es_ES";

const root = document.getElementById("root");
const element = (
  <CustomProvider locale={es_ES}>
    <App />
  </CustomProvider>
);

createRoot(root).render(element);
