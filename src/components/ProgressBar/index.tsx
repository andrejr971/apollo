'use client'

import { useVideo } from '@/contexts'
import {
  Progress,
  Content,
  ProgressContainer,
  Status,
  Percentage,
} from './styles'

export function ProgressBar() {
  const { progress, status } = useVideo()

  return (
    <Content>
      <Status>{status === 'success' ? 'Sucesso' : 'Convertendo...'}</Status>
      <ProgressContainer>
        <Progress
          css={{
            width: status === 'success' ? '100%' : `${progress}%`,
          }}
        />
      </ProgressContainer>
      <Percentage>
        {status === 'success' ? '100%' : `${progress || 0}%`}
      </Percentage>
    </Content>
  )
}
