"use client";

import React, { MouseEventHandler } from 'react';
import { Product } from '@/types';
import Image from 'next/image';
import IconButton from './icon-button';
import {  Expand, ShoppingCart } from 'lucide-react';
import Currency from './currency';
import { useRouter } from 'next/navigation';
import usePreviewModal from '@/hooks/use-preview-modal';

type ProductCardProps = {
    item: Product;
}

export default function ProductCard({item}: ProductCardProps) {
  const proviewModal = usePreviewModal();
  const router = useRouter();


  const handleProductClick = () => router.push(`/product/${item?.id}`);

  const handleProductPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
   
      proviewModal.onOpen(item);

    }
    
  return (
    <div onClick={handleProductClick} className='bg-white group cursor-pointer rounded-xl border p-3 space-y-4 '>
        <div className="aspect-square rounded-xl bg-gray-100 relative">
            <Image 
            src={item.images[0].url} 
            fill 
            alt='Product-image'
            className='aspect-square object-cover rounded-md'
            />
            <div className="opacity-0 group-hover:opacity-100 transition duration-300 absolute w-full px-6 bottom-5 ">
              <div className="flex gap-x-6 justify-center">
                <IconButton 
                onClick={handleProductPreview}
                icon={<Expand size={20}
                className='text-gray-600' />} 
                />
                <IconButton 
                onClick={() => {}}
                icon={<ShoppingCart size={20}
                className='text-gray-600' />} 
                />
              </div>
            </div>
        </div>

 

        <div className="">
          <p className='font-semibold text-lg'>
            {item.name}
          </p>
          <p className='text-sm text-gray-500'>
            {item.category.name}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <Currency value={item.price} />
        </div>

    </div>
  )
}