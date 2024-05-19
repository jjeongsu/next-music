import Link from 'next/link'
import Image from 'next/image'
import Search from './Search'
import ToggleButton from './toggle'
import { IconNofify } from '../../public/icon-notify'
import { Notifier } from './Notifier'
import LoginButton from './login-button'

export default function Header() {
  return (
    <div className="flex flex-row  items-center h-[73px] mt-[50px] px-[2%]">
      <Link href="/" className="h-full w-[16%] mr-3">
        <div className="min-w-32 max-w-40">
          <Image
            src="/cottify_smile_blue.png"
            alt="logo-image"
            width={192}
            height={73}
          />
        </div>
      </Link>
      <Search />
      <div className="flex flex-row h-full w-[23%] items-center">
        <ToggleButton />
        <Notifier />
        <LoginButton />
      </div>
    </div>
  )
}
