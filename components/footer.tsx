import React from 'react'

type Props = {}

export default function Footer({}: Props) {
  return (
    <footer className='bg-white border-t '>
        <div className="mx-auto py-10">
            <div className="text-center text-xs text-block ">
                &copy; { new Date().getFullYear() } Store-Commerce Inc. All rights reserved
            </div>
        </div>
    </footer>
  )
}