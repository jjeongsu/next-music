import MovieInfo from '@/components/movie-info'
import MovieVideos from '@/components/movie-videos'
import { Suspense } from 'react'

export default function MovieDetail({
  params: { id },
}: {
  params: { id: string }
}) {
  return (
    <>
      <h2> movie Detail Page</h2>
      <Suspense fallback={<h1>loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </>
  )
}
