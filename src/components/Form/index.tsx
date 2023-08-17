import * as S from './styles'
import githubImg from '../../assets/github.svg'
import { FormEvent } from 'react'
import LoadingIcons from 'react-loading-icons'

interface FormProps {
  username: string
  loading: boolean
  handleInputUsername: (username: string) => void
  handleForm: (event: FormEvent) => void
}

export function Form({
  username,
  loading,
  handleInputUsername,
  handleForm,
}: FormProps) {
  return (
    <S.FormWrapper>
      <form onSubmit={handleForm}>
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
            value={username}
            onChange={(e) => handleInputUsername(e.target.value)}
            placeholder="Nome do usuário"
            type="Campo para inserção do nome do usuário do github"
          />
        </S.InputWrapper>

        <S.WrapperButton>
          {loading ? (
            <button disabled>
              <LoadingIcons.TailSpin fontSize={24} />
            </button>
          ) : (
            <button type="submit">GERAR MEU TICKET</button>
          )}
        </S.WrapperButton>
      </form>
    </S.FormWrapper>
  )
}
