import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import PageWrapper from "./layout/PageWrapper";
import Router from "./layout/Router";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <PageWrapper>
      <Router />
    </PageWrapper>
  </React.StrictMode>
);
