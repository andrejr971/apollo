'use client'

import { Button, Header, InputFile, ProgressBar } from '@/components'
import {
  Container,
  Content,
  ContentPreview,
  Footer,
  Info,
  Preview,
  Wrapper,
} from './styles'
import { useVideo } from '@/contexts'
import { useRouter } from 'next/navigation'

export default function Home() {
  const { onChangeVideo, previewURL, video, convertVideoToAudio, status } =
    useVideo()

  const router = useRouter()

  const handleStartConvetion = async () => {
    if (!video) return

    await convertVideoToAudio(video)

    handleCancelProcess()
    router.push('/studio')
  }

  const handleCancelProcess = () => {
    onChangeVideo(null)
  }

  return (
    <Wrapper>
      <Header />

      <Container>
        {status === 'converting' || status === 'success' ? (
          <ProgressBar />
        ) : (
          <Content>
            <Info>
              <h1>Extrator de áudio de arquivo de vídeo</h1>

              <p>
                Carregue o arquivo de vídeo para extrair áudio, suporte AVI,
                FLV, MKV, MOV, MP4, WEBM, formato de vídeo WMV.
              </p>
            </Info>
            {previewURL ? (
              <ContentPreview>
                <Preview>
                  {previewURL && <video src={previewURL} controls />}
                </Preview>

                <Footer>
                  <Button
                    variant={'secondary'}
                    size="full"
                    onClick={handleCancelProcess}
                  >
                    Cancelar
                  </Button>
                  <Button size="full" onClick={handleStartConvetion}>
                    Extrair
                  </Button>
                </Footer>
              </ContentPreview>
            ) : (
              <InputFile onChange={onChangeVideo} />
            )}
          </Content>
        )}
      </Container>
    </Wrapper>
  )
}
