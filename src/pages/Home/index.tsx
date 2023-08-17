import { FormEvent, useState } from 'react'
import userImg from '../../assets/user.svg'
import { Form } from '../../components/Form'
import { Ticket } from '../../components/Ticket'
import { UserData, getUserInfo } from '../../services/github-api'
import { Wrapper } from './styles'
import html2canvas from 'html2canvas'

const defaultUserData = {
  login: '',
  name: 'Seu nome aqui',
  avatar_url: userImg,
  error: false,
}

export function Home() {
  const [username, setUsername] = useState('')
  const [userData, setUserData] = useState<UserData>(defaultUserData)
  const [loading, setLoading] = useState<boolean>(false)
  const [findedUser, setFindedUser] = useState<boolean>(true)
  const [success, setSuccess] = useState<boolean>(false)

  function handleDowloadTicket() {
    const ticketHTML = document.querySelector('#capture')
    html2canvas(ticketHTML).then((canvas) => {
      document.body.appendChild(canvas)
      const imgData = canvas.toDataURL('image/png')
      const a = document.createElement('a')
      a.href = imgData
      a.download = 'ticket-ia-para-devs.png'
      a.click()
    })
  }

  function handleInputUsername(username: string) {
    setUsername(username)
  }

  async function handleForm(event: FormEvent) {
    event.preventDefault()
    setLoading(true)
    const user: UserData = await getUserInfo(username)
    setLoading(false)
    if (!user.error) {
      if (!user.name) {
        user.name = username
      }
      setUserData(user)
      setSuccess(true)
    }
    setFindedUser(!user.error)
  }

  return (
    <Wrapper>
      <Form
        username={username}
        loading={loading}
        findedUser={findedUser}
        success={success}
        handleInputUsername={handleInputUsername}
        handleForm={handleForm}
        handleDowloadTicket={handleDowloadTicket}
      />
      <Ticket userData={userData} />
    </Wrapper>
  )
}
