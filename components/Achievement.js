'use client';

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';
import SectionWrapper from '@/hoc/SectionWrapper';
import { fadeIn } from '@/utils/motion';

const Achievement = () => {
  return (
    <section className='relative max-container-1280 padding-container flexCenter py-12 mt-5'>
        <div className='flex flex-col md:flex-row items-center md:items-start justify-between gap-8 xl:gap-16 w-full'>
            <motion.div 
                variants={fadeIn("right", "spring", 0.3 * 1, 0.75)}
                className='flexCenter flex-col'
            >
                <h2 className='bold-72 md:bold-40 xl:bold-72 text-secondary-blue-100'>
                    300+
                </h2>
                <div className='flexBetween gap-[6px] mt-2'>
                    <Image 
                        src={'/assets/partner-with-us.svg'}
                        width={32}
                        height={32}
                        alt='partner-with-us'
                        className='object-contain w-8 h-8 md:w-6 md:h-6 xl:w-8 xl:h-8'
                    />

                    <p className='regular-18 md:regular-14 xl:regular-18 text-black/60'>
                        partner with us
                    </p>
                </div>
            </motion.div>
            <motion.div 
                variants={fadeIn("right", "spring", 0.3 * 2, 0.75)}
                className='flexCenter flex-col'
            >
                <h2 className='bold-72 md:bold-40 xl:bold-72 text-secondary-blue-100'>
                    $3.2b+
                </h2>
                <div className='flexBetween gap-[6px] mt-2'>
                    <Image 
                        src={'/assets/money.svg'}
                        width={32}
                        height={32}
                        alt='money'
                        className='object-contain w-8 h-8 md:w-6 md:h-6 xl:w-8 xl:h-8'
                    />

                    <p className='regular-18 md:regular-14 xl:regular-18 text-black/60'>
                        Cumulative trending
                    </p>
                </div>
            </motion.div>
            <motion.div
                variants={fadeIn("right", "spring", 0.3 * 3, 0.75)}
                className='flexCenter flex-col'
            >
                <h2 className='bold-72 md:bold-40 xl:bold-72 text-secondary-blue-100'>
                    860k
                </h2>
                <div className='flexBetween gap-[6px] mt-2'>
                    <Image 
                        src={'/assets/projector.svg'}
                        width={32}
                        height={32}
                        alt='projector'
                        className='object-contain w-8 h-8 md:w-6 md:h-6 xl:w-8 xl:h-8'
                    />

                    <p className='regular-18 md:regular-14 xl:regular-18 text-black/60'>
                        Successful projects
                    </p>
                </div>
            </motion.div>
            <motion.div 
                variants={fadeIn("right", "spring", 0.3 * 4, 0.75)}
                className='flexCenter flex-col'
            >
                <h2 className='bold-72 md:bold-40 xl:bold-72 text-secondary-blue-100'>
                    1.6%
                </h2>
                <div className='flexBetween gap-[6px] mt-2'>
                    <Image 
                        src={'/assets/kamban.svg'}
                        width={32}
                        height={32}
                        alt='kamban'
                        className='object-contain w-8 h-8 md:w-6 md:h-6 xl:w-8 xl:h-8'
                    />

                    <p className='regular-18 md:regular-14 xl:regular-18 text-black/60'>
                        Low interest rate
                    </p>
                </div>
            </motion.div>
        </div>
    </section>
  )
}

export default SectionWrapper(Achievement, 'achievement');