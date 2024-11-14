import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body {
    overflow-x: hidden;
  }

  html, body, input {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
  }

  body {
    background-color: #EEEEEE;
    color: ${({ theme }) => theme.textColor || "#333"};

    @media screen and (max-width: 425px) {
      background-color: #fff;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
