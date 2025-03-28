import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *::before,
  *::after,
  * {
    box-sizing: border-box;
    font-family: inherit;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background-color: ${({ theme }) => theme.colours.lightCream};
    font-family: 'Barlow', sans-serif;
    font-family: 'Fraunces', serif;
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .body-no-scroll {
    max-height: 100vh;
    overflow: hidden;
  }
`

export default GlobalStyle