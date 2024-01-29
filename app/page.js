import AboutUs from '@/components/AboutUs'
import Achievement from '@/components/Achievement'
import Download from '@/components/Download'
import Hero from '@/components/Hero'
import Partner from '@/components/Partner'
import Product from '@/components/Product'
import ProductAdvantages from '@/components/ProductAdvantages'
import Subscribe from '@/components/Subscribe'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <Partner />
      <Product />
      <AboutUs />
      <Testimonials />
      <Achievement />
      <ProductAdvantages />
      <Download />
      <Subscribe />
    </>
  )
}
