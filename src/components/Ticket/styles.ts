import styled from 'styled-components'

export const TicketWrapper = styled.div`
  background: ${(props) => props.theme.purpleNormal};
  width: 43.375rem;
  height: 25.5rem;
  padding: 3rem 2.625rem;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 100%;
  }
`

export const UserCart = styled.div`
  width: 100%;
  height: 100%;

  padding: 0 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${(props) => props.theme.grayLight};
`

export const UserInfo = styled.div`
  margin: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    border-radius: 50%;
    height: 8rem;
  }
  label {
    margin: 0.5rem 0;
    text-transform: uppercase;
    color: ${(props) => props.theme.purpleNormal};
    font-family: 'Space Grotesk', sans-serif;
    font-size: 0.75rem;
  }
  p {
    font-family: 'Roboto', sans-serif;
    color: ${(props) => props.theme.grayDark};
    font-size: 1rem;
    font-weight: bold;
  }
`

export const EventInfo = styled.div`
  width: 100%;
  margin-top: 1rem;

  display: flex;
  justify-content: space-between;

  label {
    text-transform: uppercase;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 0.625rem;
  }
`

export const EventCol = styled.div`
  display: flex;
  flex-direction: column;
`

export const EventColInfo = styled(EventCol)`
  font-weight: bold;
`

export const BarcodeWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.625rem;
`
