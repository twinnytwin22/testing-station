import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { supabaseAuth } from './lib/constants'
import LoginCard from './ui/AuthComponent'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
 
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
