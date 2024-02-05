"use client";

import { currencyFormatter } from '@/lib/utils';
import React, { useEffect, useState } from 'react'

type Props = {
    value?: string | number;
}

export default function Currency({value}: Props) {

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if(!isMounted) return null;

  return (
    <div className='font-semibold'>
        {currencyFormatter(Number(value))}
    </div>
  )
}