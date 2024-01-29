import React from 'react'
import AnchorButton from './AnchorButton'
import Image from 'next/image'

const AboutUs = () => {
  return (
    <section className='relative flexBetween flex-col lg:flex-row max-container-1280 padding-container py-12 gap-16 lg:flex-row-reverse'>
        <div className='flex flex-shrink-0 max-w-[472px] max-h-[494px] w-full h-full'>
            <div className='w-full flex items-center justify-center'>
                <Image 
                    src={'/assets/about-us.png'}
                    alt='about-us'
                    width={377}
                    height={494}
                    className='object-cover'
                />

                <div className='absolute flex flex-col items-start lg:h-full w-full max-w-[472px] gap-[18px] pt-14 top-0'>
                    <div className='w-full flex items-center justify-end mt-0 mt-9'>
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
                    </div>

                    <div className='w-full flex items-center justify-end'>
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
                    </div>

                    <div className='w-full flex items-center justify-start'>
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
                    </div>
                </div>

            </div>
        </div>
        
        <div className='flex items-start justify-between h-full flex-col'>
            <h2 className='medium-18 uppercase text-primary-red-100'>
                About Us
            </h2>

            <h3 className='bold-42 lg:bold-56 mt-3'>
                Embark on Your Digital 
            </h3>

            <p className='mt-8 regular-20 lg:regular-24 text-black/60 mb-14'>
                FramerBite offers the key components to build a professional-grade website for your SaaS, a fact well-known to readers familiar with the industry.
            </p>

            <AnchorButton
                href='/'
                variant='btn-outline-red-primary'
            >
                More About Us
            </AnchorButton>
        </div>
    </section>
  )
}

export default AboutUs