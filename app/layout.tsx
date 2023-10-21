import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Travel',
  description: 'Travel UI/UX app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar />
          <main className='relative overflow-hidden'>
            {children}
          </main>
        <Footer />
      </body>
    </html>
  )
}

