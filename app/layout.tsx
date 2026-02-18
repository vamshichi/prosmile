import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { WhatsAppFab } from '@/components/whatsapp-fab'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  title: {
    default: 'Prosmiles Dental | Best Dental Clinic in Indiranagar, Bengaluru',
    template: '%s | Pro Smiles Dental Clinic',
  },
description:'Prosmiles Dental is a trusted dental clinic in Indiranagar, Bengaluru offering root canal treatment, dental implants, braces and teeth cleaning. Call 08123557113 to book your appointment.',  
keywords: [
  'Dental clinic in Indiranagar',
  'Dentist in Indiranagar Bengaluru',
  'Root canal treatment Indiranagar',
  'Dental implants Bengaluru',
  'Braces treatment Indiranagar',
  'Teeth cleaning Indiranagar',
  'Prosmiles Dental'
],  
icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0c1b33',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFab />
        <Analytics />
      </body>
    </html>
  )
}
