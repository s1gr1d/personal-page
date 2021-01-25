import React from "react";
import { AppProps } from "next/app";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { darkTheme } from "../styles/utils";
import { Theme } from "../lib/types";
import { MDXProvider } from "@mdx-js/react";

import "../styles/fonts.css";
import { Checkpoint } from "../components";

const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
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
    font-family: ${({ theme }) => theme.typography.secondaryFont};
    line-height: 1.6;
    font-size: 18px;
    
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }
`;

const components = {
  li: Checkpoint,
};

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <MDXProvider components={components}>
          <GlobalStyle />
          <Component {...pageProps} />
        </MDXProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
