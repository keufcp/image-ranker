import { Header } from '@/components/layout/header'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'image-ranker',
  description: '画像順位付けアンケートフォーム',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ja'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-white antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  )
}
