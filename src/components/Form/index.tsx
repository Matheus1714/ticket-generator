import { FormWrapper, TitleWrapper, InputWrapper } from './styles'

export function Form() {
  return (
    <FormWrapper>
      <form action="">
        <TitleWrapper>
          <h1>GERE SEU TICKET</h1>
          <h1>E COMPARTILHE</h1>
          <h1>COM O MUNDO</h1>
        </TitleWrapper>

        <label>DIGITE SEU USUÁRIO DO GITHUB</label>

        <InputWrapper>
          Github
          <input placeholder="Nome do usuário" type="text" />
        </InputWrapper>

        <button type="submit">GERAR MEU TICKET</button>
      </form>
    </FormWrapper>
  )
}
