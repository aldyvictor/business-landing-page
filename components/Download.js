'use client';

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SectionWrapper from '@/hoc/SectionWrapper';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '@/utils/motion';

const Download = () => {
    
  return (
    <section className='relative flexCenter bg-primary-light-100 pt-24'>
        <div className='max-container-1280 padding-container flex flex-col xl:flex-row items-center xl:items-end justify-between w-full gap-[34px] xl:gap-[68px]'>
            <div className='flex items-end h-full pt-20 px-14 box-gradient-orange rounded-t-[32px] max-w-[472px] w-full'>
                <Image 
                    src={'/assets/phone.png'}
                    alt='phone'
                    width={366} 
                    height={416}
                    className='object-cover'
                />
            </div>

            <div className='flex items-start flex-col gap-[32px] h-full mb-12'>
                <motion.h3 
                    variants={textVariant()}
                    className='bold-42 lg:bold-56 mb-4 xl:mb-0'
                >
                    Download our mobile app
                </motion.h3>

                <motion.p 
                    variants={fadeIn('', '', 0.1, 1)}   
                    className='regular-20 lg:regular-24 text-black/60 mb-4 xl:mb-0'
                >
                    X equips you with the essential tools to craft a genuinely professional SaaS website.
                </motion.p>

                <ul className='flex items-start justify-start flex-col gap-[18px]  mb-4 xl:mb-1'>
                    <motion.li 
                        variants={fadeIn('left', 'spring', 0.2 * 1, 1)}
                        className='flex items-center justify-start gap-[14px]'
                    >
                        <div className='flex items-center justify-center w-[24] h-[24]'>
                            <Image 
                                src={'/assets/check-blue.svg'}
                                alt='check'
                                width={24}
                                height={24}
                                className='object-contain'
                            />

                        </div>
                        <p className='regular-18 sm:medium-20'>
                            Effortless Browsing
                        </p>
                    </motion.li>
                    <motion.li 
                        variants={fadeIn('left', 'spring', 0.2 * 2, 1)}
                        className='flex items-center flex items-center justify-start gap-[14px]'
                    >
                        <div className='flex items-center justify-center w-[24] h-[24]'>
                            <Image 
                                src={'/assets/check-blue.svg'}
                                alt='check'
                                width={24}
                                height={24}
                                className='object-contain'
                            />

                        </div>
                        <p className='regular-18 sm:medium-20'>
                            Secure Top 5% Industry Experts <span className='hidden sm:inline-block'>for Your Project</span>
                        </p>
                    </motion.li>
                    <motion.li 
                        variants={fadeIn('left', 'spring', 0.2 * 3, 1)}
                        className='flex items-center flex items-center justify-start gap-[14px]'
                    >
                        <div className='flex items-center justify-center w-[24] h-[24]'>
                            <Image 
                                src={'/assets/check-blue.svg'}
                                alt='check'
                                width={24}
                                height={24}
                                className='object-contain'
                            />

                        </div>
                        <p className='regular-18 sm:medium-20'>
                            WeChat & live chat
                        </p>
                    </motion.li>
                </ul>

                <div className='flexStart gap-5'>
                    <motion.div
                        variants={fadeIn('left', 'spring', 0.2 * 4, 1)}
                    >
                        <Link href={'#'}>
                            <Image 
                                src={'/assets/app-store.png'}
                                alt='app-store'
                                width={167}
                                height={54}
                                className='object-contain'
                            />
                        </Link>
                    </motion.div>

                    <motion.div
                        variants={fadeIn('left', 'spring', 0.2 * 5, 1)}
                    >
                        <Link href={'#'}>
                            <Image 
                                src={'/assets/play-store.png'}
                                alt='play-store'
                                width={179}
                                height={54}
                                className='object-contain'
                            />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SectionWrapper(Download, 'download')