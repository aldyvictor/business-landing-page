import Footer from '@/components/Footer'
import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'Wadde',
  description: 'FramerBite provides the essential elements for crafting a top-tier website for your SaaS platform.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className='relative overflow-hidden'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
