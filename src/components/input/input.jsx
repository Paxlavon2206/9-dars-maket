import React from 'react'

export const Input = ({className, children, ...rest }) => {
  return (
    <input className={className} {...rest}>{children && <div className="absolute inset-y-0 right-0 flex items-center pr-3">{children}</div>}</input>
  )
}
