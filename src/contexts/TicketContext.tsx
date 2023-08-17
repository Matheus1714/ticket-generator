import html2canvas from 'html2canvas'
import { FormEvent, ReactNode, createContext, useState } from 'react'
import userImg from '../assets/user.svg'
import { UserData, getUserInfo } from '../services/github-api'

const defaultUserData = {
  login: '',
  name: 'Seu nome aqui',
  avatar_url: userImg,
  error: false,
}

interface TickerContextType {
  username: string
  loading: boolean
  findedUser: boolean
  success: boolean
  userData: UserData
  handleInputUsername: (username: string) => void
  handleForm: (event: FormEvent) => void
  handleDowloadTicket: () => void
}

export const TicketContext = createContext({} as TickerContextType)

interface TicketContextProviderProps {
  children: ReactNode
}

export function TicketContextProvider({
  children,
}: TicketContextProviderProps) {
  const [username, setUsername] = useState('')
  const [userData, setUserData] = useState<UserData>(defaultUserData)
  const [loading, setLoading] = useState<boolean>(false)
  const [findedUser, setFindedUser] = useState<boolean>(true)
  const [success, setSuccess] = useState<boolean>(false)

  function handleDowloadTicket() {
    const ticketHTML: HTMLElement | null = document.querySelector('#capture')
    if (ticketHTML) {
      html2canvas(ticketHTML).then((canvas) => {
        document.body.appendChild(canvas)
        const imgData = canvas.toDataURL('image/png')
        const a = document.createElement('a')
        a.href = imgData
        a.download = 'ticket-ia-para-devs.png'
        a.click()
      })
    }
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
    <TicketContext.Provider
      value={{
        username,
        loading,
        findedUser,
        success,
        userData,
        handleInputUsername,
        handleForm,
        handleDowloadTicket,
      }}
    >
      {children}
    </TicketContext.Provider>
  )
}
