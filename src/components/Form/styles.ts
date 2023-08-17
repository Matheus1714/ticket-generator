import styled from 'styled-components'

export const FormWrapper = styled.div`
  width: 32.625rem;
  height: 25.5rem;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  form {
    width: 24rem;
  }
`

export const LabelMessage = styled.div`
  margin-top: 2rem;
  label {
    font-size: 1.25rem;
    text-transform: uppercase;
    color: ${(props) => props.theme.white};
    font-family: 'Space Grotesk', sans-serif;
  }
`

export const TitleWrapper = styled.div`
  h1 {
    font-size: 2.5rem;
    background: linear-gradient(
      to right,
      ${(props) => props.theme.degreeLight},
      ${(props) => props.theme.purpleDark}
    );
    text-transform: uppercase;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 2.5rem;
    font-family: 'Space Grotesk', sans-serif;
  }
`

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

export const ErrorMessage = styled.span`
  color: ${(props) => props.theme.danger};
  font-size: 1rem;
  font-family: 'Space Grotesk', sans-serif;
`

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
