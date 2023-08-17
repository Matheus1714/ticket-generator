import { Form } from '../../components/Form'
import { Ticket } from '../../components/Ticket'
import { Wrapper } from './styles'
import { useState, FormEvent, useEffect } from 'react'
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
  const [findedUser, setFindedUser] = useState<boolean>(true)
  const [success, setSuccess] = useState<boolean>(false)

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
        handleInputUsername={handleInputUsername}
        handleForm={handleForm}
        loading={loading}
        findedUser={findedUser}
        success={success}
      />
      <Ticket userData={userData} />
    </Wrapper>
  )
}
