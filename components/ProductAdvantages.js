'use client';

import Image from 'next/image'
import React from 'react'
import AnchorButton from './AnchorButton'
import { motion } from 'framer-motion';
import SectionWrapper from '@/hoc/SectionWrapper';
import { fadeIn, textVariant } from '@/utils/motion';

const ProductAdvantages = () => {
  return (
    <section className='relative max-container-1280 padding-container flexCenter py-12 mt-20'>
        <div className='w-full h-full flex items-center flex-col xl:flex-row  gap-[68px]'>
            <div className='flex flex-shrink-0 max-w-[472px] max-h-[494px] w-full h-full justify-start'>
                <div className='w-full flex items-center justify-center pr-0 xl:pr-20'>
                    <motion.div variants={fadeIn('right', 'spring', 0.1, 1)}>
                        <Image 
                            src={'/assets/product-advantages.png'}
                            alt='product-advantages'
                            width={383}
                            height={494}
                            className='object-cover'
                        />
                    </motion.div>

                    <div className='absolute flex flex-col items-start lg:h-full w-full max-w-[472px] gap-[18px] pt-0 xl:pt-14 top-0'>
                        <motion.div 
                            variants={fadeIn('right', 'spring', 0.5, 1)}
                            className='w-full flex items-center justify-end mt-9'
                        >
                            <div className='flex items-center justify-center shadow-lg px-3 py-2 rounded-[17px] gap-2 bg-white mr-10 sm:mr-8'>
                                <span className='flexCenter w-[18px] h-[18px] rounded-full bg-secondary-blue-100'>
                                    <Image 
                                        src={'/assets/check.svg'}
                                        alt='check'
                                        width={12}
                                        height={12}
                                        className='object-contain'
                                    />
                                </span>
                                <p className='regular-12'>
                                    Easily Manage and Access with Our Mobile App
                                </p>
                            </div>
                        </motion.div>

                        <motion.div 
                            variants={fadeIn('right', 'spring', 0.7, 1)}
                            className='w-full flex items-center justify-end'
                        >
                            <div className='flex items-center justify-center shadow-lg px-3 py-2 rounded-[17px] gap-2 bg-white -mr-0 sm:-mr-12'>
                                <span className='flexCenter w-[18px] h-[18px] rounded-full bg-secondary-blue-100'>
                                    <Image 
                                        src={'/assets/check.svg'}
                                        alt='check'
                                        width={12}
                                        height={12}
                                        className='object-contain'
                                    />
                                </span>
                                <p className='regular-12'>
                                    A suite of features for effortless card management.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div 
                            variants={fadeIn('right', 'spring', 0.9, 1)}
                            className='w-full flex items-center justify-start'
                        >
                            <div className='flex items-center justify-center shadow-lg px-3 py-2 rounded-[17px] gap-2 bg-white ml-4'>
                                <span className='flexCenter w-[18px] h-[18px] rounded-full bg-secondary-blue-100'>
                                    <Image 
                                        src={'/assets/check.svg'}
                                        alt='check'
                                        width={12}
                                        height={12}
                                        className='object-contain'
                                    />
                                </span>
                                <p className='regular-12'>
                                    Enhanced Security Infrastructure
                                </p>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>

            <div className='flex items-start flex-col gap-[32px] h-full'>
                <motion.h3 
                    variants={textVariant()}
                    className='bold-42 lg:bold-56 mt-3'
                >
                    Pave your path to triumph with XB innovation. 
                </motion.h3>

                <motion.p 
                    variants={fadeIn('', '', 0.1, 1)}   
                    className='regular-20 lg:regular-24 text-black/60 mb-4 xl:mb-8'
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
                        className='flex flex items-center justify-start gap-[14px]'
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
                        className='flex flex items-center justify-start gap-[14px]'
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

                <motion.div
                    variants={fadeIn('', '', 0.2, 1)}
                >
                    <AnchorButton
                        href='/'
                        variant='btn-red-primary'
                    >
                        More About Us
                    </AnchorButton>
                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default SectionWrapper(ProductAdvantages, 'product-advantages');