import styled from 'styled-components'

export const WrapperButton = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    width: 100%;
    height: 3.75rem;
    text-transform: uppercase;
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;

    border: none;
    cursor: pointer;
    outline: none;

    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme.purpleNormal};

    svg {
      background: transparent;
    }
  }

  :hover {
    background: ${(props) => props.theme.purpleDark};
  }
`
