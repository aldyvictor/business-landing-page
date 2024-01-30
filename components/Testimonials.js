'use client';

import React from 'react'
import VerticalTab from './Tab/VerticalTab'
import { TESTIMONIALS } from '@/constants'
import { motion } from 'framer-motion';
import SectionWrapper from '@/hoc/SectionWrapper'
import { fadeIn } from '@/utils/motion';

const Testimonials = () => {
  return (
    <motion.div 
      variants={fadeIn('up', 'spring', 0.1, 1)}
      className='max-container-1280 padding-container relative flexCenter py-10 lg:py-16 mt-0 lg:mt-11'
    >
        <VerticalTab  
          data={
            TESTIMONIALS.length > 0 ? TESTIMONIALS : []
          }
        />
    </motion.div>
  )
}

export default SectionWrapper(Testimonials, 'testimonials');