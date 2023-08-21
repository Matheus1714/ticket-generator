import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  @media (max-width: 1400px) and (min-width: 700px) {
    #container{
      #formTicket {
        justify-content: center;
        width: 100%;
        max-width: 32.625rem;
        form{
          width: 100%;
          max-width: 24rem;
        }
      }
    }
  }

  @media (max-width: 700px){
    #container{
      padding: 1rem;
      #formTicket {
        justify-content: center;
        width: 100%;
        max-width: 32.625rem;
        form{
          width: 100%;
          max-width: 24rem;
        }
      }
      #capture{
        max-width: 24rem;
        width: 100%;
      }
      #banner-ticket{
        display: none;
      }
    }
    
  }
`
