import * as S from './styles'
import IADevsImg from '../../assets/logo-ia-devs.svg'
import barCodeImg from '../../assets/bar-code.svg'

import { UserData } from '../../services/github-api'

interface TicketProps {
  userData: UserData
}

export function Ticket({ userData }: TicketProps) {
  return (
    <S.TicketWrapper>
      <img src={IADevsImg} alt="banner de IA para Devs dentro do ticket" />
      <S.UserCart>
        <S.UserInfo>
          <img src={userData.avatar_url} alt="" />
          <label>TRIPULANTE</label>
          <p>{userData.name}</p>
        </S.UserInfo>

        <S.EventInfo>
          <S.EventCol>
            <label>EVENTO</label>
            <label>DATA</label>
            <label>HORA</label>
          </S.EventCol>
          <S.EventColInfo>
            <label>IA PARA DEVS</label>
            <label>14 - 16 AGO. 2023</label>
            <label>AO VIVO - 19H</label>
          </S.EventColInfo>
        </S.EventInfo>
        <S.BarcodeWrapper>
          <img src={barCodeImg} alt="" />
        </S.BarcodeWrapper>
      </S.UserCart>
    </S.TicketWrapper>
  )
}
