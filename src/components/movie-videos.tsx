import { API_URL } from '@/app/page'

async function getVideos(id: string) {
  const response = await fetch(`${API_URL}/${id}/videos`)
  throw new Error('something broke')
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id)
  return <h6>{JSON.stringify(videos)}</h6>
}
