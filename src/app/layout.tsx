import './globals.css'
import React from 'react'

export const metadata = {
  title: 'Point Coffee - Clone',
  description: 'Starter clone using Next.js + Tailwind'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}
