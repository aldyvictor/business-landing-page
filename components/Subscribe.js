'use client';

import React from 'react'
import Button from './Button'
import { motion } from 'framer-motion';
import SectionWrapper from '@/hoc/SectionWrapper';
import { fadeIn, textVariant } from '@/utils/motion';

const Subscribe = () => {
  return (
    <section className='relative max-container-1280 padding-container flexCenter pt-10 pb-[120px] mt-14'>
        <div className='flex flex-col items-center justify-center gap-6'>
            <motion.h2 
                variants={textVariant()}
                className='bold-42 sm:bold-56 text-center'
            >
                Accelerate Your Business Growth
            </motion.h2>

            <motion.p 
                variants={fadeIn('', '', 0.1, 1)}
                className='regular-20 text-black/60 max-w-2xl text-center'
            >
                FramerBite supplies the key components for assembling a top-tier website tailored to your SaaS needs.
            </motion.p>

            <motion.form 
                variants={fadeIn('up', 'spring', 0.3, 1)}
                className='flexBetween gap-1 p-1 bg-primary-light-100 max-w-[478px] w-full rounded-[64px]'
            >
                <input 
                    type='email'
                    placeholder='Enter your email'
                    className='regular-16 sm:regular-18 text-black/60 placeholder-black/60 bg-transparent border-none focus:outline-none w-full max-w-56 sm:max-w-xs px-7'
                />
                <Button
                    variant='btn-red-primary'
                    type='submit'
                >
                    Email me
                </Button>
            </motion.form>
        </div>
    </section>
  )
}

export default SectionWrapper(Subscribe, 'subscribe');