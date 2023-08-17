import * as S from './styles'
import githubImg from '../../assets/github.svg'
import { FormEvent } from 'react'
import LoadingIcons from 'react-loading-icons'
import { CheckCircle } from '@phosphor-icons/react'

interface FormProps {
  username: string
  loading: boolean
  findedUser: boolean
  success: boolean
  handleInputUsername: (username: string) => void
  handleForm: (event: FormEvent) => void
  handleDowloadTicket: () => void
}

export function Form({
  username,
  loading,
  findedUser,
  success,
  handleInputUsername,
  handleForm,
  handleDowloadTicket,
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

        {!success ? (
          <S.InputWrapper>
            <a href="http://github.com" target="_blank" rel="noreferrer">
              <img
                src={githubImg}
                alt="Logo do github ao lado do campo de inserção do nome do usuário"
              />
            </a>
            <input
              value={username}
              onChange={(e) => handleInputUsername(e.target.value)}
              placeholder="Nome do usuário"
              type="Campo para inserção do nome do usuário do github"
            />
          </S.InputWrapper>
        ) : (
          <S.WrapperSuccessMessage>
            <CheckCircle size={32} />
            <p>Ticket gerado com sucesso</p>
          </S.WrapperSuccessMessage>
        )}

        <S.ErrorMessage hidden={findedUser}>
          Usuário inválido. Verifique e tente novamente.
        </S.ErrorMessage>

        {!success ? (
          <S.WrapperButton>
            {loading ? (
              <button disabled>
                <LoadingIcons.TailSpin fontSize={24} />
              </button>
            ) : (
              <button type="submit">GERAR MEU TICKET</button>
            )}
          </S.WrapperButton>
        ) : (
          <S.WrapperButton>
            <button onClick={handleDowloadTicket}>Fazer Download</button>
          </S.WrapperButton>
        )}
      </form>
    </S.FormWrapper>
  )
}
