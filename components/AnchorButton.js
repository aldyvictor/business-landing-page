import Link from 'next/link'
import React from 'react'

const AnchorButton = ({ ...props }) => {
    const { href = '/', variant = '', full = '' } = props

  return (
    <Link
        href={href}
        className={`flexCenter gap-2 rounded-full px-6 py-4 medium-16 transition-all ` + variant + ' ' + full}
    >
        {props.children}
    </Link>
  )
}

export default AnchorButton