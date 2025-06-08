import { useRef } from 'react'
import Link from 'next/link'

export default function Aula() {
  const videoRef = useRef(null)
  const handlePlay = () => {
    videoRef.current && videoRef.current.play()
  }

  return (
    <div>
      <h1>Aula</h1>
      <video ref={videoRef} width="640" controls>
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
      </video>
      <div>
        <button onClick={handlePlay}>Play</button>
      </div>
      <div>
        <Link href="/">Voltar</Link>
      </div>
    </div>
  )
}
