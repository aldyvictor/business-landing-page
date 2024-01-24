import React from 'react'
import VerticalTab from './Tab/VerticalTab'
import { TESTIMONIALS } from '@/constants'

const Testimonials = () => {
  return (
    <section className='max-container-1280 padding-container relative flexCenter py-10 lg:py-16 mt-0 lg:mt-11'>
        <VerticalTab  
          data={
            TESTIMONIALS.length > 0 ? TESTIMONIALS : []
          }
        />
    </section>
  )
}

export default Testimonials