import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { DefaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { MarvelContextProvider } from './contexts/MarvelContexts'
import { Router } from './Router'

export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <BrowserRouter>
        <MarvelContextProvider>
          <Router />
        </MarvelContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
