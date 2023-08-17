import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'
import { Home } from './pages/Home'
import { GlobalStyle } from './styles/GlobalStyle.ts'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  )
}
