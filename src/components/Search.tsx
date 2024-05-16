'use client'

import { useState } from 'react'
import Image from 'next/image'
export default function Search() {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  const [value, setValue] = useState<string>('')
  console.log('input값', value)
  return (
    <div
      className="w-full h-[75px] flex justify-center items-center gap-3
    dark:bg-shade rounded-full bg-slate-50 px-8 dark:border-primary  focus:outline-primary hover:bg-slate-100 focus:bg-slate-100 min-w-[550px]
    "
    >
      <div className="w-[30px] h-[30px] rounded-full border-solid border-4 border-primary "></div>
      <input
        className="w-[90%] text-slate-700 text-lg bg-transparent dark:text-primary dark:placeholder-primary
        focus:outline-none peer
      "
        type="text"
        onChange={handleInput}
        value={value}
        placeholder="#NightVibes #Studying #Jazz"
      />
      <button
        onClick={() => setValue('')}
        className="peer-placeholder-shown:!invisible"
      >
        <Image
          src="/icon-x.png"
          alt="delete search input text"
          width={30}
          height={30}
        />
      </button>
    </div>
  )
}
