import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Bem-vindo ao Plataforma Cursos</h1>
      <p>
        <Link href="/aula">Ir para a aula</Link>
      </p>
    </div>
  )
}
