import { Form } from '../../components/Form'
import { Ticket } from '../../components/Ticket'
import { Wrapper } from './styles'

export function Home() {
  return (
    <Wrapper id="container">
      <Form />
      <Ticket />
    </Wrapper>
  )
}
