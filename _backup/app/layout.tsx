import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fernando Fontes Hipólito - Portfólio',
  description: 'Portfólio profissional de Fernando Fontes Hipólito',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
