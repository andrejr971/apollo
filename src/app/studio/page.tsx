'use client'

import { AudioPlayer, Header } from '@/components'
import { Container, Wrapper } from '../styles'
import { useVideo } from '@/contexts'
import { Content, Status } from './styles'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Page() {
  const { audio } = useVideo()
  const router = useRouter()

  useEffect(() => {
    if (!audio) {
      router.push('/')
    }
  }, [audio, router])

  if (!audio) return <></>

  return (
    <Wrapper>
      <Header />

      <Container>
        <Content>
          <AudioPlayer audioURL={URL.createObjectURL(audio)} />
        </Content>
      </Container>
    </Wrapper>
  )
}
