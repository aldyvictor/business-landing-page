'use client';

import React, {useState} from 'react'
import { NAV_LINKS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import AnchorButton from './AnchorButton';

const MobileNav = () => {
    const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle(!toggle)
  }

  return (
    <div className='lg:hidden flexEnd'>
        <Image 
        src={'/assets/menu.svg'} 
        width={28} 
        height={28} 
        alt='Menu' 
        className='object-contain cursor-pointer'
        onClick={() => handleToggle(!toggle)}
        />

        <div className={`nav-mobile-container flex justify-end ${toggle ? 'active' : ''} z-30`}>
            <div
            className={`nav-mobile p-4`}
            >
                <div className='flexBetween py-2'>
                    <div className='flexStart gap-3'>
                        <Image 
                            src={'/assets/wadde-logo.png'} 
                            width={34} 
                            height={34} 
                            alt='Wadde Logo' 
                            className='object-contain'
                        />
                        <span className='text-2xl font-bold'>Wadde</span>
                    </div>

                    <Image 
                        src={'/assets/close.svg'} 
                        width={28} 
                        height={28} 
                        alt='Close' 
                        className='object-contain cursor-pointer'
                        onClick={() => handleToggle(!toggle)}
                    />
                </div>
                <ul className='list-none flex flex-col justify-end items-start gap-4 mt-4 p-2'>
                    {NAV_LINKS.map((link) => (
                    <li
                        key={link.key}
                        className='cursor-pointer medium-18 border-b-2 border-transparent hover:border-primary-red-100 transition-all'
                    >
                        <Link href={'/'} className='flexStart'>
                        {link.label} {link.dropwon.length > 0 && <Image src={'/assets/arrow-down.svg'} width={20} height={20} alt='Arrow Down' className='p-1' /> }
                        </Link>
                    </li>
                    ))}
                </ul>
                <div 
                    className='flexCenter flex-col gap-4 mt-8'
                >
                    <AnchorButton
                        href='/'
                        variant='btn-outline-red-primary'
                        full='w-full'
                    >
                        Sign In
                    </AnchorButton>

                    <AnchorButton
                        href='/'
                        variant='btn-red-primary'
                        full='w-full'
                    >
                        Sign Up
                    </AnchorButton>
                </div>
            </div>
        </div>

    </div>
  )
}

export default MobileNav