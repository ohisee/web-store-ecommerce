/**
 * @fileoverview global styles 
 */
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Open Sans Condensed', sans-serif;
    padding: 20px 60px;

    /* as long as window width does not exceed 800px */
    @media screen and (max-width: 800px) {
      padding: 10px
    }
  }
`;
