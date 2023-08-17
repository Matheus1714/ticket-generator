import { CheckCircle } from '@phosphor-icons/react'
import githubImg from '../../assets/github.svg'
import * as S from './styles'

import { useContext } from 'react'
import { TicketContext } from '../../contexts/TicketContext'

export function Search() {
  const { success, username, handleInputUsername } = useContext(TicketContext)
  if (success) {
    return (
      <S.WrapperSuccessMessage>
        <CheckCircle size={32} />
        <p>Ticket gerado com sucesso</p>
      </S.WrapperSuccessMessage>
    )
  }
  return (
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
  )
}
