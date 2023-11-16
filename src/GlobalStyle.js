import { createGlobalStyle } from "styled-components";
import BG from "./BG.png"

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  };

  *,
    ::after,
    ::before {
    box-sizing: inherit;
  };

  body {
    font-family: "Montserrat", sans-serif;
    max-width: 1000px;
    display: flex;
    margin: auto;
    padding: 20px;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-position: top;
    background-size: cover;
    background-image: url("${BG}");
  };
`;

