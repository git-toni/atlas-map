// @flow strict

import React from "react";
import ReactDOM from "react-dom";
import { injectGlobal } from "styled-components";

import App from "./App";

(() => {
  const root = document.createElement("div");
  root.setAttribute("id", "root");

  const slickCss = document.createElement("link");
  slickCss.setAttribute("rel", "stylesheet");
  slickCss.setAttribute("type", "text/css");
  slickCss.setAttribute("charset", "UTF-8");
  slickCss.setAttribute("href", "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css");

  const slickTheme = document.createElement("link");
  slickTheme.setAttribute("rel", "stylesheet");
  slickTheme.setAttribute("type", "text/css");
  slickTheme.setAttribute("href", "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css");

  if (!document.body) {
    throw new Error("No browser?"); //eslint-disable-line
  }

  injectGlobal`
    * {
      margin: 0px;
      padding: 0px;
      box-sizing: border-box;
      font-family: "Arial", sans-serif;
      color: #152935;
      font-size: 16px;
    }

    html, body, #root {
      height: 100%;
    }
  `;

  document.head.appendChild(slickCss);
  document.head.appendChild(slickTheme);
  document.body.appendChild(root);

  const id = document.getElementById("root");

  if (!id) {
    throw new Error("Missing Root"); //eslint-disable-line
  }

  ReactDOM.render(<App />, id);
})();
