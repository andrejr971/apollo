import { ReactNode } from 'react'

export type VideoContextData = {
  previewURL: string | null
  video: File | null
  audio: File | null
  onChangeVideo: (file: File | null) => void
  convertVideoToAudio: (file: File) => Promise<any>
  progress: number | null
  status: Status
}

export interface ComponentInterface {
  children: ReactNode
}

export type Status =
  | 'waiting'
  | 'converting'
  | 'uploading'
  | 'generating'
  | 'success'

export const statusMessages = {
  converting: 'Convertendo...',
  generating: 'Transcrevendo...',
  uploading: 'Carregando...',
  success: 'Sucesso!',
}
