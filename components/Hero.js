import Image from 'next/image'
import React from 'react'
import AnchorButton from './AnchorButton'

const Hero = () => {
  return (
    <section
        className='max-container padding-container relative flex items-center justify-start py-4 md:py-8 mb-32 mt-24'
    >
        <div className='w-full 2xl:w-2/3 flex items-start justify-start flex-col z-10'>
            <div className='flex items-end justify-start'>
                <span className='text-black bold-36 md:bold-56 lg:bold-72 lg:bold-72 mt-8'>
                    Intelligent
                </span>
                <Image 
                    src={'/assets/person-hero-female.png'}
                    alt='person-hero-female'
                    width={169}
                    height={187}
                    className='mx-4 -mb-8 object-cover w-[125px] h-[139px] md:w-[169px] md:h-[187px]'
                />
                <span className='text-black bold-72 mt-8 hidden lg:inline-block'>
                    Tools for
                </span>
            </div>

            <div className='flexStart'>
                <Image 
                    src={'/assets/person-hero-male.png'}
                    alt='person-hero-male'
                    width={152}
                    height={187}
                    className='-ml-6 md:-ml-4 absolute object-cover w-[105px] h-[129px] md:w-[152px] md:h-[187px]'
                />
                <span className='text-black bold-36 md:bold-56 lg:bold-72 mt-0 md:mt-8 ml-14 md:ml-32'>
                    <span className='inline-block lg:hidden ml-6'>
                        Tools for
                    </span> <br className='lg:hidden' />
                    Savvy Businesses
                </span>
            </div>

            <h1 className='regular-20 lg:regular-24 text-black/60 mt-6 md:mt-12 w-full md:w-2/3'>
                FramerBite provides the essential elements for crafting a top-tier website for your SaaS platform.
            </h1>

            <div className='flexCenter md:flexStart  md:w-full flex-col md:flex-row flex-col-reverse gap-6 md:gap-10 mt-8 lg:mt-24'>
                <AnchorButton
                    href='/'
                    variant='btn-red-primary'
                >
                    Get Started Now
                </AnchorButton>

                <div className='flexStart flex-col md:flex-row gap-6'>
                    <div className='flexCenter gap-2'>
                        <Image 
                            src={'/assets/circle-img-1.png'}
                            alt='circle-img-1'
                            width={60}
                            height={60}
                            className='w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full object-cover'
                        />
                        <Image 
                            src={'/assets/circle-img-2.png'}
                            alt='circle-img-2'
                            width={60}
                            height={60}
                            className='w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full object-cover -ml-[1.5rem]'
                        />
                        <Image 
                            src={'/assets/circle-plus.svg'}
                            alt='circle-plus'
                            width={60}
                            height={60}
                            className='w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full object-cover -ml-[1.5rem]'
                        />
                    </div>

                    <div className='flex flex-row md:flex-col gap-2 md:gap-0'>
                        <span className='regular-18 sm:regular-22 md:bold-36 text-black'>
                            3.3m
                        </span>
                        <span className='regular-18 sm:regular-22 md:regular-18 text-black/60'>
                            Success clients
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <div className='absolute z-0 -right-[90%] sm:-right-2/3 md:-right-2/4 lg:-right-[45%] 2xl:-right-1/3 top-4 sm:-top-6 lg:-top-16 2xl:-top-12'>
            <Image 
                src={'/assets/hero-img.png'}
                alt='hero-bg'
                width={1342}
                height={767}
                className='object-cover w-[563px] h-[322px] sm:w-[734px] sm:h-[420px] md:w-[1000px] md:h-[572px] lg:w-[1342px] lg:h-[767px]'
            />
        </div>
    </section>
  )
}

export default Hero