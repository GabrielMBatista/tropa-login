import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  /* Reset básico */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font-family: ${({ theme }) => theme.font.family};
    font-size: ${({ theme }) => theme.font.size.base};
    line-height: ${({ theme }) => theme.font.lineHeight.base};
    color: ${({ theme }) => theme.colors.gray900};
    background-color: ${({ theme }) => theme.colors.white};
    height: 100%;
  }

  button {
    cursor: pointer;
    font-family: inherit;
    border: none;
    background: none;
  }

  input, textarea {
    font-family: inherit;
    outline: none;
    border: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  #__next {
    height: 100%;
  }
`;
