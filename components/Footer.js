import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='relative py-24 bg-primary-light-100'>
      <div className='max-container-1280 padding-container flexCenter flex-col gap-14'>
        <div className='flex items-start justify-between flex-col xl:flex-row gap-[74px] xl:gap-[52px] w-full'>
          <div className='flex flex-col max-w-sm xl:max-w-xs w-full gap-[26px]'>
            <div className='flexStart gap-3'>
              <Image 
                src={'/assets/wadde-logo.png'}
                alt='wadde-logo'
                width={34}
                height={34}
                className='object-contain'
              />

              <span className='text-2xl font-bold'>Wadde</span>
            </div>

            <p className='regular-18 text-black/60'>
              XB gives you the blocks needed to create a truly professional website for your SaaS.
            </p>
          </div>

          <div className='flex items-start md:items-center justify-between flex-col md:flex-row w-full gap-[46px]'>
            <ul className='flex flex-col items-start justify-center gap-5'>
              <li className='medium-18 text-black/80'>
                Solutions
              </li>
              <Link href='/' className='medium-18 text-black/60 cursor-pointer border-b-2 border-transparent hover:border-primary-red-100 transition-all'>
                Freelancer
              </Link>
              <Link href='/' className='medium-18 text-black/60 cursor-pointer border-b-2 border-transparent hover:border-primary-red-100 transition-all'>
                Data Analytics
              </Link>
              <Link href='/' className='medium-18 text-black/60 cursor-pointer border-b-2 border-transparent hover:border-primary-red-100 transition-all'>
                Small Business
              </Link>
            </ul>

            <ul className='flex flex-col items-start justify-center gap-5'>
              <li className='medium-18 text-black/80'>
                Company
              </li>
              <Link href='/' className='medium-18 text-black/60 cursor-pointer border-b-2 border-transparent hover:border-primary-red-100 transition-all'>
                About
              </Link>
              <Link href='/' className='medium-18 text-black/60 cursor-pointer border-b-2 border-transparent hover:border-primary-red-100 transition-all'>
                Carrer
              </Link>
              <Link href='/' className='medium-18 text-black/60 cursor-pointer border-b-2 border-transparent hover:border-primary-red-100 transition-all'>
                Contact
              </Link>
            </ul>

            <ul className='flex flex-col items-start justify-center gap-5'>
              <li className='medium-18 text-black/80'>
                Resource
              </li>
              <Link href='/' className='medium-18 text-black/60 cursor-pointer border-b-2 border-transparent hover:border-primary-red-100 transition-all'>
                Customers
              </Link>
              <Link href='/' className='medium-18 text-black/60 cursor-pointer border-b-2 border-transparent hover:border-primary-red-100 transition-all'>
                Strategic Finance
              </Link>
              <Link href='/' className='medium-18 text-black/60 cursor-pointer border-b-2 border-transparent hover:border-primary-red-100 transition-all'>
                Ebooks & Guides
              </Link>
            </ul>

            <ul className='flex flex-col items-start justify-center gap-5'>
              <li className='medium-18 text-black/80'>
                Features
              </li>
              <Link href='/' className='medium-18 text-black/60 cursor-pointer border-b-2 border-transparent hover:border-primary-red-100 transition-all'>
                Freelancer
              </Link>
              <Link href='/' className='medium-18 text-black/60 cursor-pointer border-b-2 border-transparent hover:border-primary-red-100 transition-all'>
                Data Analytics
              </Link>
              <Link href='/' className='medium-18 text-black/60 cursor-pointer border-b-2 border-transparent hover:border-primary-red-100 transition-all'>
                Small Business
              </Link>
            </ul>
          </div>
        </div>

        <div className='w-full flexStart'>
          <p className='regular-14 sm:regular-18 text-black/60'>
            Copyright © 2023 All Rights Reserved by XB
          </p>
        </div>
      </div>

    </footer>
  )
}

export default Footer