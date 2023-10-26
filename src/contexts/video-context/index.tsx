'use client'

import { createContext, useContext, useMemo, useRef, useState } from 'react'
import { FFmpeg } from '@ffmpeg/ffmpeg'
import { fetchFile, toBlobURL } from '@ffmpeg/util'

import { ComponentInterface, Status, VideoContextData } from './types'

const VideoContext = createContext({} as VideoContextData)

export function VideoProvider({ children }: ComponentInterface) {
  const [video, setVideo] = useState<File | null>(null)
  const [audio, setAudio] = useState<File | null>(null)
  const [status, setStatus] = useState<Status>('waiting')

  const [progress, setProgress] = useState<number | null>(null)
  const ffmpegRef = useRef(new FFmpeg())

  const previewURL = useMemo(() => {
    setStatus('waiting')

    if (!video) {
      return null
    }

    return URL.createObjectURL(video)
  }, [video])

  const loadFFmpeg = async () => {
    const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.4/dist/umd'
    const ffmpeg = ffmpegRef.current

    await ffmpeg.load({
      coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
      wasmURL: await toBlobURL(
        `${baseURL}/ffmpeg-core.wasm`,
        'application/wasm'
      ),
    })
  }

  const convertVideoToAudio = async (video: File) => {
    setStatus('converting')

    await loadFFmpeg()

    const ffmpeg = ffmpegRef.current
    await ffmpeg.writeFile('input.mp4', await fetchFile(video))

    ffmpeg.on('progress', (progress) => {
      console.log('Convert progress: ' + Math.round(progress.progress * 100))
      setProgress(Math.round(progress.progress * 100))

      if (progress.progress * 100 === 100) {
        setProgress(null)
      }
    })

    await ffmpeg.exec([
      '-i',
      'input.mp4',
      '-b:a',
      '16M',
      '-acodec',
      'libmp3lame',
      'output.mp3',
    ])

    const data = await ffmpeg.readFile('output.mp3')

    const audioFileBlob = new Blob([data], { type: 'audio/mp3' })
    const audioFile = new File([audioFileBlob], 'output.mp3', {
      type: 'audio/mpeg',
    })

    setAudio(audioFile)
    setStatus('success')

    return URL.createObjectURL(audioFileBlob)
  }

  return (
    <VideoContext.Provider
      value={{
        onChangeVideo: setVideo,
        previewURL,
        video,
        convertVideoToAudio,
        progress,
        audio,
        status,
      }}
    >
      {children}
    </VideoContext.Provider>
  )
}

export function useVideo(): VideoContextData {
  return useContext(VideoContext)
}
