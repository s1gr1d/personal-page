import { AppProps } from "next/app";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { darkTheme } from "../styles/utils";
import React from "react";
import "../styles/fonts.css";

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  :root {
    box-sizing: border-box;
    font-size: 1em;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    line-height: 1.6;
    font-size: 18px;
  }
`;

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={darkTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default App;
