import { ThemeProvider } from 'styled-components'
import { TicketContextProvider } from './contexts/TicketContext.tsx'
import { Home } from './pages/Home'
import { GlobalStyle } from './styles/GlobalStyle.ts'
import { defaultTheme } from './styles/theme/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TicketContextProvider>
        <Home />
      </TicketContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
