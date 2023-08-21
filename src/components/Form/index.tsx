import * as S from './styles'
import { Button } from '../Button'
import { Search } from '../Search'

import { useContext } from 'react'
import { TicketContext } from '../../contexts/TicketContext'

export function Form() {
  const { handleForm, findedUser } = useContext(TicketContext)
  return (
    <S.FormWrapper id="formTicket">
      <form onSubmit={handleForm}>
        <S.TitleWrapper>
          <h1>GERE SEU TICKET</h1>
          <h1>E COMPARTILHE</h1>
          <h1>COM O MUNDO</h1>
        </S.TitleWrapper>

        <S.LabelMessage>
          <label>DIGITE SEU USUÁRIO DO GITHUB</label>
        </S.LabelMessage>

        <Search />

        <S.ErrorMessage hidden={findedUser}>
          Usuário inválido. Verifique e tente novamente.
        </S.ErrorMessage>

        <Button />
      </form>
    </S.FormWrapper>
  )
}
