import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Boise Dumpster Rental | Coming Soon',
  description: 'Affordable dumpster rental services in Boise, Idaho. Residential and commercial roll-off dumpsters for construction, cleanouts, and renovation projects.',
  keywords: 'dumpster rental, Boise, Idaho, roll-off dumpster, construction dumpster, waste removal',
  openGraph: {
    title: 'Boise Dumpster Rental | Coming Soon',
    description: 'Affordable dumpster rental services in Boise, Idaho.',
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
