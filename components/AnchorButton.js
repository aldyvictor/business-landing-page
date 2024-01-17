import Link from 'next/link'
import React from 'react'

const Anchor = ({ ...props }) => {
    const { href = '/', variant = '', full = '' } = props

  return (
    <Link
        href={href}
        className={`flexCenter gap-2 rounded-full px-6 py-2.5 medium-16 transition-all ` + variant + ' ' + full}
    >
        {props.children}
    </Link>
  )
}

export default Anchor