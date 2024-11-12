import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { RecoilRoot } from "recoil";
import CursorBubble from "./components/fragments/CursorBubble";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RecoilRoot>
    <ChakraProvider>
      <CursorBubble />
      <App />
    </ChakraProvider>
  </RecoilRoot>
);
