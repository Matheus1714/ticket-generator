import styled from 'styled-components'

const BaseWrapperStatus = styled.div`
  width: 100%;
  height: 3.375rem;

  margin-top: 1rem;
  margin-bottom: 0.25rem;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.875rem;
`

export const WrapperSuccessMessage = styled(BaseWrapperStatus)`
  background: transparent;

  svg {
    color: ${(props) => props.theme.sucess};
  }
  p {
    font-family: 'Space Grotesk', sans-serif;
    color: ${(props) => props.theme.grayLight};
    font-size: 1.25rem;
    text-transform: uppercase;
  }
`

export const InputWrapper = styled(BaseWrapperStatus)`
  background: ${(props) => props.theme.white};

  img {
    margin-left: 0.875rem;
  }

  input {
    width: 100%;
    font-size: 0.875rem;
    font-family: 'Roboto', sans-serif;
    color: ${(props) => props.theme.grayDark};
    border-color: transparent;
    outline: none;
  }
`
