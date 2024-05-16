import Search from './Search'

export default function Header() {
  return (
    <div className="flex flex-row  justify-items-center h-[73px] mt-[55px] px-[2%]">
      <div className="h-full w-[16%] bg-red-300 r">Spotify 🎧</div>
      <Search />
      <div className="flex flex-row h-full w-[23%] bg-yellow-50">
        <button> 토글</button>
        <button>알림</button>
        <div>프로필이미지</div>
      </div>
    </div>
  )
}
