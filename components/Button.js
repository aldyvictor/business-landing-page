import React from 'react'

const Button = ({...props}) => {
    const { type = 'button', variant = '', full = '' } = props;

  return (
    <button
        type={type}
        className={`flexCenter gap-2 rounded-full px-6 py-4 medium-16 transition-all ` + variant + ' ' + full}
    >
        {props.children}
    </button>
  )
}

export default Button