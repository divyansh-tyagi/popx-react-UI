import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Rubik', sans-serif;
    line-height: 1.5;
  }
  
  ul {
    list-style: none;
  }
`;

export default GlobalStyle;