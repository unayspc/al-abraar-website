import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PremiumEffects from '@/components/PremiumEffects'

export const metadata: Metadata = {
  title: 'Moskee Al-Abraar Eindhoven | Uw Thuismoskee in het Hart van Eindhoven',
  description:
    'Moskee Al-Abraar is een gastvrije en moderne moskee in Eindhoven. Bezoek ons voor dagelijkse gebedstijden, islamitisch onderwijs, lezingen en gemeenschapsactiviteiten.',
  keywords: [
    'moskee Eindhoven',
    'Al-Abraar',
    'islamitisch centrum Eindhoven',
    'gebedstijden Eindhoven',
    'mawaqit',
    'vrijdaggebed Eindhoven',
    'islamitische school',
  ],
  authors: [{ name: 'Moskee Al-Abraar' }],
  openGraph: {
    title: 'Moskee Al-Abraar Eindhoven',
    description:
      'Een gastvrij ontmoetingspunt voor de moslimgemeenschap in Eindhoven.',
    url: 'https://www.alabraar.nl',
    siteName: 'Moskee Al-Abraar',
    locale: 'nl_NL',
    type: 'website',
    images: ['/images/moskee-alabraar.png']
  },
  icons: {
    icon: '/favicon.png',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Outfit:wght@400;500;600;700;800&family=Amiri:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased bg-black text-white selection:bg-gold/30 selection:text-gold">
        <PremiumEffects />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
