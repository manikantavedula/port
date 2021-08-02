import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript
        initialColorMode={theme.config.initialColorMode}
      ></ColorModeScript>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
