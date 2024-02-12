"use client";
import React from 'react'
import Image from "next/image"
import { toast } from "react-hot-toast"
import { X } from "lucide-react"
import IconButton from './ui/icon-button';

import { Product } from '@/types'
import { currencyFormatter } from '@/lib/utils';
import useCart from '@/hooks/use-cart';

interface CartProps {
    data: Product;
}

export default function CartItem({data}: CartProps) {
  return (
    <li className='flex py-6 border-b '>
        <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
            <Image fill src={data.images[0]?.url} alt='product-image' className='object-cover object-center' />
        </div>
    </li>
  )
}