import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    vertical-align: baseline;
    box-sizing: border-box;
  }

  body{
    position: relative;
    background: #f1e9e9;
    font-family: 'Roboto Condensed', sans-serif;
  }  
`;

export default GlobalStyles;
