import React, { PropsWithChildren } from 'react'


export default function Container({children}: PropsWithChildren) {
  return (
    <div className='mx-auto max-w-7xl '>
        {children}
    </div>
  )
}