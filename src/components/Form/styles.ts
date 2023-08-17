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

export const InputWrapper = styled.div`
  width: 100%;
  height: 3.375rem;
  background: ${(props) => props.theme.white};
  margin-top: 1rem;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  gap: 0.875rem;

  img {
    margin-left: 0.875rem;
  }

  input {
    font-size: 0.875rem;
    font-family: 'Roboto', sans-serif;
    color: ${(props) => props.theme.grayDark};
    border-color: transparent;
    outline: none;
  }
`

export const WrapperButton = styled.div`
  margin-top: 1rem;

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

    :hover {
      background: ${(props) => props.theme.purpleDark};
    }
  }
`
