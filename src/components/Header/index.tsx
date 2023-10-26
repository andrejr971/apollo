import { Logo } from '@/components'
import { ApolloLogo, Container, Content } from './syles'

export function Header() {
  return (
    <Container>
      <Content>
        <ApolloLogo>
          <Logo />
          <span>Apollo</span>
        </ApolloLogo>
      </Content>
    </Container>
  )
}
