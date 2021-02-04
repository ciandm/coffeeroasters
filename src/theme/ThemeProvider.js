import React from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';
import {
  colours,
  mediaQueries
} from './constants';

function ThemeProvider({ children }) {
  return (
    <StyledThemeProvider theme={{
      colours,
      mediaQueries
    }}>
      <GlobalStyle />
      {children}
    </StyledThemeProvider>
  )
}

export default ThemeProvider
