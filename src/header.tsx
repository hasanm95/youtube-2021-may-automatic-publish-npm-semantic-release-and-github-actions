import React from 'react'
import { ComponentPropsWithoutRef } from 'react'

type HeaderProps = ComponentPropsWithoutRef<'div'>

const Header = ({ className, ...rest }: HeaderProps) => {
  return (
    <div
      className='sticky left-50 bg-solid-slate-50 dfsdf'
      {...rest}
    />
  )
}

export default Header