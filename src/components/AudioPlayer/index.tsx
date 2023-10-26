import { useRef, useState } from 'react'
import { Container } from './styles'
import { AudioPlayerProps } from './types'
import { Pause, Play } from '@phosphor-icons/react'

export function AudioPlayer({ audioURL }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const [duration, setDuration] = useState(0)
  const [isReady, setIsReady] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current?.pause()
      setIsPlaying(false)
    } else {
      audioRef.current?.play()
      setIsPlaying(true)
    }
  }

  return (
    <Container>
      <audio
        ref={audioRef}
        preload="metadata"
        onDurationChange={({ currentTarget }) =>
          setDuration(currentTarget.duration)
        }
        onCanPlay={(e) => {
          setIsReady(true)
        }}
        onPlaying={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src={audioURL} />
      </audio>

      <div>
        <button onClick={togglePlayPause}>
          {isPlaying ? <Pause /> : <Play />}
        </button>
      </div>
    </Container>
  )
}
