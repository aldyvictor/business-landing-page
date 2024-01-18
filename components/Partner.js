import { PARTNER_LIST } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Partner = () => {
  return (
   <section className='max-container-1280 2xl:max-container padding-container relative pb-32 flexCenter gap-10 -mt-8 lg:mt-0'>
    <div className='flexCenter flex-col w-full'>
        <h2 className='medium-28 sm:medium-38 lg:bold-36 text-black/60 text-center'>
            Join over 55,000 businesses that have <br /> achieved their goals.
        </h2>

        <ul className='flex flex-wrap w-full items-center justify-center lg:flex-nowrap gap-5 lg:gap-12 lg:px-20 lg:py-12 mt-9 lg:mt-5 lg:shadow-dekstop lg:shadow-orange-dekstop rounded-[100px]'>
            {PARTNER_LIST.map((partner) => (
                <li 
                    key={partner.key}
                    className='box-shadow-mobile w-full max-w-[150px] lg:max-w-full rounded-[46px] lg:shadow-none lg:rounded-none'
                >
                    <Image 
                        src={partner.path}
                        alt={partner.key}
                        width={partner.width}
                        height={partner.height}
                        className='object-contain w-full h-full px-5 py-3 lg:px-0 lg:py-0'
                    />
                </li>
            ))}
        </ul>
    </div>
   </section>
  )
}

export default Partner