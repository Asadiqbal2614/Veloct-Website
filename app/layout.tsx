import type { Metadata } from 'next'
import { IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import './globals.css'

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex-sans',
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-ibm-plex-mono',
})

export const metadata: Metadata = {
  title: 'VELOCT | Accelerating Innovation Through AI, Cloud & Digital Transformation',
  description:
    'VELOCT accelerates innovation through AI, cloud, and digital transformation solutions for modern enterprises.',
  icons: {
    icon: '/assets/logo.png',
    shortcut: '/assets/logo.png',
    apple: '/assets/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} font-body antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <div
            id="scroll-progress"
            className="fixed top-0 left-0 w-0 h-0.5 bg-primary z-50 transition-all duration-150"
          />
          <div className="planner-bg min-h-screen">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}
