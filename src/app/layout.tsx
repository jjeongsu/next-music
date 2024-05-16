import type { Metadata } from 'next'
import Navigation from '@/components/navigation'
import Providers from './Provider'
import './global.css'
import Header from '@/components/Header'
export const metadata: Metadata = {
  title: {
    template: '%s | 🎧 NextMusic',
    default: 'Loading',
  },
  description: 'generated by Jeongsu.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <Navigation />
          {children}
        </Providers>
      </body>
    </html>
  )
}
