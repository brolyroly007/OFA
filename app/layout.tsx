import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'LUXOR - Elite Creator Management',
  description: 'Where legends are made. Elite creator management agency for ambitious content creators.',
  keywords: 'creator management, content creator, influencer agency, social media management',
  openGraph: {
    title: 'LUXOR - Elite Creator Management',
    description: 'Where legends are made. Elite creator management agency for ambitious content creators.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
