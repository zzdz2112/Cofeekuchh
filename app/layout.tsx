import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Cofeekuchh - Premium CBD Shop',
  description: 'Premium CBD Products - Jaune Lemon Haze',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
