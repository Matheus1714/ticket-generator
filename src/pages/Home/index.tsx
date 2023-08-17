import { Form } from '../../components/Form'
import { Ticket } from '../../components/Ticket'
import { Wrapper } from './styles'
import { useState, FormEvent } from 'react'
import { getUserInfo, UserData } from '../../services/github-api'
import userImg from '../../assets/user.svg'

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
    }
  }

  return (
    <Wrapper>
      <Form
        username={username}
        handleInputUsername={handleInputUsername}
        handleForm={handleForm}
        loading={loading}
      />
      <Ticket userData={userData} />
    </Wrapper>
  )
}
