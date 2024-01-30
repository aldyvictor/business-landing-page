'use client';

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, textVariant } from '@/utils/motion';
import SectionWrapper from '@/hoc/SectionWrapper';

const Product = () => {
  return (
    <div className='max-container-1280 padding-container relative flexCenter py-20'>
        <div className='flex items-start justify-center flex-col w-full'>
            <motion.div
                variants={textVariant()}
            >
                <h2 className='bold-56'>
                    We're here to assist you in creating, <br /> managing
                </h2>
            </motion.div>

            <div className='mt-16 grid grid-cols-1 lg:grid-cols-[40%_60%] w-full'>
                <motion.div 
                    variants={fadeIn('right', 'spring', 0.1, 1)}
                    className='w-full pb-4 lg:pb-0 lg:pr-4'
                >
                    <div className='h-full lg:min-h-[493px] px-9 pt-[52px] pb-0 flex items-center justify-between flex-col bg-secondary-linearBlue-100 border-2 border-secondary-blueA-100 rounded-[12px]'>
                        <div className='flex flex-col'>
                            <div className='flexBetween pb-[38px] border-b-2 border-black/10'>
                                <h3 className='bold-26 sm:bold-30'>
                                    Investment Fund
                                </h3>
                                <span className='flexCenter rounded-full h-12 w-12 bg-primary-yellow-100'>
                                    <Image 
                                        src={'/assets/investment.svg'}
                                        alt='investment'
                                        width={24}
                                        height={24}
                                        className='object-contain'
                                    />
                                </span>
                            </div>

                            <p className='regular-18 sm:regular-20 mt-3 text-black/60'>
                                FramerBite delivers the essential components to build a polished and professional website for your SaaS business.
                            </p>
                        </div>

                        <div className='h-full mt-16 lg:mt-0 max-h-[176px] flex items-start justify-center flex-col gap-2 bg-white rounded-t-xl mx-[14px] p-6 w-full'>
                            <h4 className='medium-16'>
                                Entertainment
                            </h4>
                            <div className='flexCenter gap-4'>
                                <span className='bold-26 sm:bold-30'> 
                                    R2500.00
                                </span>
                                <span className='bold-18 text-primary-red-100 mt-2'>
                                    + 9.2%
                                </span>
                            </div>
                            <p className='regular-16 text-black/60'>
                                You have spent more this month in comparison to march 2021.
                            </p>
                        </div>
                    </div>
                </motion.div>

                <motion.div 
                    variants={fadeIn('left', 'spring', 0.3, 1)}
                    className='w-full pt-4 lg:pt-0 lg:pl-4'
                >
                    <div className='h-full lg:min-h-[493px] px-9 pt-[52px] pb-0 flex items-center justify-between flex-col bg-secondary-linearBlue-100 border-2 border-secondary-blueA-100 rounded-[12px]'>
                        <div className='flex flex-col'>
                            <div className='flexBetween pb-[38px] border-b-2 border-black/10'>
                                <h3 className='bold-26 sm:bold-30'>
                                    Retirement Plan
                                </h3>
                                <span className='flexCenter rounded-full h-12 w-12 bg-primary-yellow-100'>
                                    <Image 
                                        src={'/assets/retirement.svg'}
                                        alt='investment'
                                        width={24}
                                        height={24}
                                        className='object-contain'
                                    />
                                </span>
                            </div>

                            <p className='regular-18 sm:regular-20 mt-3 text-black/60'>
                                FramerBite offers the essential building blocks for developing a sophisticated website for your SaaS, a well-established fact recognized by numerous desktop publishing packages and web page editors.
                            </p>
                        </div>
                        
                        <div className='flex items-center justify-center gap-8 w-full mt-16 lg:mt-0'>
                            <Image 
                                src={'/assets/grafik-1.png'}
                                alt='grafik'
                                width={313}
                                height={154}
                                className='object-contain md:min-w-[360px] h-full lg:mt-0 max-h-[176px]'
                            />
                            <Image 
                                src={'/assets/grafik-2.png'}
                                alt='grafik 2'
                                width={163}
                                height={154}
                                className='object-contain w-full 2xl:max-w-[180px] h-full lg:mt-0 max-h-[176px] hidden xl:block'
                            />
                        </div>
                    </div>
                </motion.div>
            </div>

            <motion.div 
                variants={fadeIn('up', 'spring', 0.5, 1)}
                className='flex items-center xl:items-end justify-center flex-col xl:flex-row gap-[59px] w-full mt-8 px-8 pb-8 pt-[52px] bg-secondary-linearBlue-100 border-2 border-secondary-blueA-100 rounded-[12px]'
            >
                <div className='flex flex-col items-start gap-[26px] pr-0 xl:pr-6'>
                    <span className='flexCenter rounded-full h-12 w-12 bg-primary-yellow-100 mb-4'>
                        <Image 
                            src={'/assets/global-visa.svg'}
                            alt='global-visa'
                            width={24}
                            height={24}
                            className='object-contain'
                        />
                    </span>

                    <h3 className='bold-26 sm:bold-30'>
                        Global Visa and Mastercard with Multi-Currency Support
                    </h3>

                    <p className='regular-18 sm:regular-20 text-black/60'>
                        FramerBite provides the necessary elements for crafting a professional-grade website for your SaaS, acknowledged by various desktop publishing tools
                    </p>
                </div>

                <Image 
                    src={'/assets/visa-card.png'}
                    width={463}
                    height={278}
                    alt='visa-card'
                    className='object-contain h-full w-full'
                />
            </motion.div>
        </div>
    </div>
  )
}

export default SectionWrapper(Product, 'product');