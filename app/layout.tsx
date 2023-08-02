import { relative } from 'path'
import './globals.css'
import type { Metadata } from 'next'
import { Footer, Navbar } from '@/components'

export const metadata: Metadata = {
  title: 'CarHUB',
  description: 'To discover, book, and rent a car -- quickly and easily!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
