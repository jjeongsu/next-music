import ToggleButton from '@/components/toggle'
import { Roboto } from 'next/font/google'
import Link from 'next/link'

export const API_URL = 'https://nomad-movies.nomadcoders.workers.dev/movies'
const roboto = Roboto({ weight: ['400', '700'], subsets: ['latin'] })

export const metadtata = {}
async function getMovies() {
  await new Promise(resolve => setTimeout(resolve, 1000))
  return fetch(API_URL).then(res => res.json())
}
export default async function HomePage() {
  const movies = await getMovies()
  return (
    <h1 className="roboto-thin dark:bg-gray">
      {movies.map((movie: any) => (
        <li key={movie.id}>
          <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
      <ToggleButton />
    </h1>
  )
}
