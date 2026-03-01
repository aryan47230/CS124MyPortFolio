import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Engineer's Workbench — Portfolio",
  description: 'Robotics · Embedded Systems · Software & AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=IBM+Plex+Mono:wght@300;400;500;600&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-bench-bg font-body antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
