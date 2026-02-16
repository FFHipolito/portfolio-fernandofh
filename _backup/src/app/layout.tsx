import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fernando Fontes Hipólito - Portfólio',
  description: 'Portfólio profissional de Fernando Fontes Hipólito, desenvolvedor avançado em São Paulo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}