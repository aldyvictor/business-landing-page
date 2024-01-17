import { NAV_LINKS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileNav from './MobileNav'
import AnchorButton from './AnchorButton'

const Navbar = () => {

  return (
    <nav className='flexBetween padding-container 3xl:px-20 relative py-7 z-30'>
      <Link href='/' className='flexStart gap-3'>
        <Image 
          src={'/assets/wadde-logo.png'}
          width={34}
          height={34}
          alt='Wadde Logo'
        />
        <span className='text-2xl font-bold'>Wadde</span>
      </Link>

      <ul className='h-full hidden lg:flex gap-12'>
        {NAV_LINKS.map((link) => (
          <Link
            key={link.key}
            href={link.href}
            className='flexCenter gap-2 medium-18 cursor-pointer border-b-2 border-transparent hover:border-primary-red-100 transition-all'
          >
            {link.label} {link.dropwon.length > 0 && <Image src={'/assets/arrow-down.svg'} width={20} height={20} alt='Arrow Down' className='p-1' />}
          </Link>
        ))}
      </ul>

      <div className='lg:flexCenter hidden gap-8 '>
          <Link
            href='/'
            className='medium-18 cursor-pointer border-b-2 border-transparent hover:border-primary-red-100 transition-all'
          >
            Sign In
          </Link>

          <AnchorButton
            href='/'
            variant='btn-red-primary'
          >
            Sign Up
          </AnchorButton>
      </div>

      <MobileNav />
    </nav>
  )
}

export default Navbar