"use client";

import { cn } from '@/lib/utils';
import React, { useEffect, useState } from 'react'


interface ContainerProps extends React.ComponentPropsWithRef<"div"> {}


export default function Container({children, className, ...props}: ContainerProps) {
    
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if(!isMounted){
        return null;
    }

  return (
    <div className={cn("w-full p-2 lg:max-w-screen-xl", className)} {...props}>
        {children}
    </div>
  )
}