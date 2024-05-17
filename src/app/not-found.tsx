import { Metadata } from 'next'
import { Red_Hat_Display } from 'next/font/google'
export const metadata: Metadata = {
  title: 'NOT fOUND 👀',
}
const redhat = Red_Hat_Display({ subsets: ['latin'] })
export default function NotFound() {
  return (
    <div className={redhat.className}>
      <div className="w-screen h-[90vh]  flex flex-col justify-center items-center cursor-auto dark:text-[#E3F7F7] text-pink-600">
        <p className="sm:text-7xl md:text-8xl lg:text-9xl">(O.O)</p>
        <h2 className="mt-3 text-3xl font-extrabold">
          ¡Oh, no! Out of Nothing. Something
        </h2>
        <span className="mt-5">
          죄송합니다. 원하시는 페이지를 찾을 수 없습니다.
        </span>
      </div>
    </div>
  )
}
