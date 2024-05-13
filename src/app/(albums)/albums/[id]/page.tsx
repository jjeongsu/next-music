export default function SongDetail({ params }: { params: { id: string } }) {
  console.log(params)
  return <>song {params.id}</>
}

//혹은 이렇게 id만 받을 수도 있다.
// {params: {id}}: {params: {id:string}}
