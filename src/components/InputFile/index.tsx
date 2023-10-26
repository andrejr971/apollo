import { useDropzone } from 'react-dropzone'
import { Container, Icon, Input, Label, Preview } from './styles'
import { CaretDoubleDown, UploadSimple } from '@phosphor-icons/react'
import { InputFile } from './types'

export function InputFile({ onChange }: InputFile) {
  const onDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles.length === 0) return

    onChange(acceptedFiles[0])
  }

  const { getInputProps, getRootProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: {
      'video/*': [],
    },
  })

  return (
    <Container>
      <Input {...getRootProps()}>
        <input
          accept="video/mp4,video/mkv, video/x-m4v,video/*"
          {...getInputProps()}
        />
        {isDragActive ? (
          <Label>
            <CaretDoubleDown size={32} />
            <span>Arraste os arquivos aqui</span>
          </Label>
        ) : (
          <Label>
            <Icon>
              <UploadSimple size={32} />
            </Icon>
            <span>Clique ou arraste o arquivo</span>
          </Label>
        )}
      </Input>
    </Container>
  )
}
