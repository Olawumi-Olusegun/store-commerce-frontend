"use client";

import { cn } from '@/lib/utils';
import React, { forwardRef } from 'react'

interface ButtonProps extends React.ComponentPropsWithRef<"button"> {}


const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    children, 
    disabled, 
    className,
    type = "button",
    ...props
}, ref) => {
    return (
        <>
        <button 
        type={type} 
        disabled={disabled} 
        className={cn(`
        w-auto 
        rounded-full 
        bg-black 
        border-transparent 
        px-5 py-3 
        disabled:cursor-not-allowed
        disabled:opacity-50
        text-white
        font-semibold
        hover::opacity-75
        transition 
        `,className)}
        {...props} 
        ref={ref}
        >
            {children}
        </button>
        </>
    )
});

Button.displayName = "Button";

export default Button;