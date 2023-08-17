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

export const ErrorMessage = styled.span`
  color: ${(props) => props.theme.danger};
  font-size: 1rem;
  font-family: 'Space Grotesk', sans-serif;
`
