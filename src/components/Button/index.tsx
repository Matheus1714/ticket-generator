import LoadingIcons from 'react-loading-icons'
import * as S from './styles'

import { useContext } from 'react'
import { TicketContext } from '../../contexts/TicketContext'

export function Button() {
  const { success, loading, handleDowloadTicket } = useContext(TicketContext)
  if (success) {
    return (
      <S.WrapperButton>
        <button onClick={handleDowloadTicket}>Fazer Download</button>
      </S.WrapperButton>
    )
  }
  return (
    <S.WrapperButton>
      {loading ? (
        <button disabled>
          <LoadingIcons.TailSpin fontSize={24} />
        </button>
      ) : (
        <button type="submit">GERAR MEU TICKET</button>
      )}
    </S.WrapperButton>
  )
}
