// @flow strict

import React from "react";
import ReactDOM from "react-dom";
import { injectGlobal } from "styled-components";

import App from "./App";

(() => {
  const root = document.createElement("div");
  root.setAttribute("id", "root");

  if (!document.body) {
    throw new Error("No browser?"); //eslint-disable-line
  }

  injectGlobal`
    * {
      margin: 0px;
      padding: 0px;
      box-sizing: border-box;
      font-family: "Roboto", sans-serif;
    }

    html, body, #root {
      height: 100%;
    }
  `;

  document.body.appendChild(root);

  const id = document.getElementById("root");

  if (!id) {
    throw new Error("Missing Root"); //eslint-disable-line
  }

  ReactDOM.render(<App />, id);
})();
