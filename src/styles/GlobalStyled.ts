import {createGlobalStyle} from "styled-components";
import {Theme} from "./Theme";


export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${Theme.colors.primaryBg};
    color:${Theme.colors.font};
  }

  section {
    padding: 100px 0;

    @media ${Theme.media.tablet} {
      padding: 50px 0;
    }

    @media ${Theme.media.mobile} {
      padding: 25px 0;
    }
    
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    background-color: unset;
    border: none;
    font-family: "Poppins", "sans-serif";
    font-weight: bold;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 3px;
  }

  h1 {
    font-weight: bold;
    font-family: "Poppins", "sans-serif";
    font-size: 58px;
    line-height: 70px;
    letter-spacing: -1px;
  }

  h2 {
    font-weight: bold;
    font-family: "Poppins", "sans-serif";
    font-size: 58px;
    line-height: 70px;
    letter-spacing: -1px;
  }

  h3 {
    font-family: "Poppins", "sans-serif";
    font-weight: 400;
    font-size: 28px;
    line-height: 26px;
  }

  h4 {
    font-size: 14px;
    line-height: 20px;
  }
  

  p {
    font-family: "Poppins", "sans-serif";
    font-weight: normal;
    font-size: 32px;
    line-height: 26px;
  }
`