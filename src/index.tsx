import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import PageWrapper from "./layout/PageWrapper";
import Router from "./layout/Router";
import { HelmetProvider } from "react-helmet-async";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <PageWrapper>
        <Router />
      </PageWrapper>
    </HelmetProvider>
  </React.StrictMode>
);
