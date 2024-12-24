import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RecoilRoot } from "recoil";
import CursorBubble from "./components/fragments/CursorBubble";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RecoilRoot>
    <CursorBubble />
    <App />
  </RecoilRoot>
);
