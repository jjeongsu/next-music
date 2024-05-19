'use client'

import { signIn, signOut, useSession } from 'next-auth/react'

export default function LoginButton() {
  const { data } = useSession()
  const handleLoginClick = async (e: React.MouseEvent) => {
    e.preventDefault()
    if (data) {
      await signOut()
    } else {
      await signIn('spotify')
    }
  }
  return <button onClick={handleLoginClick}>Login</button>
}
