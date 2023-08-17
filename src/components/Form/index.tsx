import * as S from './styles'
import githubImg from '../../assets/github.svg'

export function Form() {
  return (
    <S.FormWrapper>
      <form action="">
        <S.TitleWrapper>
          <h1>GERE SEU TICKET</h1>
          <h1>E COMPARTILHE</h1>
          <h1>COM O MUNDO</h1>
        </S.TitleWrapper>

        <S.LabelMessage>
          <label>DIGITE SEU USUÁRIO DO GITHUB</label>
        </S.LabelMessage>

        <S.InputWrapper>
          <img
            src={githubImg}
            alt="Logo do github ao lado do campo de inserção do nome do usuário"
          />
          <input
            placeholder="Nome do usuário"
            type="Campo para inserção do nome do usuário do github"
          />
        </S.InputWrapper>

        <S.WrapperButton>
          <button type="submit">GERAR MEU TICKET</button>
        </S.WrapperButton>
      </form>
    </S.FormWrapper>
  )
}
