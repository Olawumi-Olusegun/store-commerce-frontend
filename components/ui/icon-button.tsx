
import { cn } from '@/lib/utils'
import React from 'react'

type Props = {
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    icon: React.ReactElement;
    className?: string;
}

export default function IconButton({onClick, icon, className}: Props) {
  return (
    <button onClick={onClick} className={cn(
        "flex items-center justify-center h-full bg-white border shadow-md p-2 hover:scale-110 transition",
        className
    )}>
        {icon}
    </button>
  )
}