
import { Product } from '@/types'
import React from 'react'
import NoResults from './ui/no-results';
import ProductCard from './ui/product-card';

type Props = {
    items: Product[];
    title: string;
}

export default function ProductList({title, items}: Props) {
  return (
    <div className='space-y-4'>
        <h3 className='font-bold text-3xl'>{title}</h3>
        {items.length === 0 ? <NoResults /> : null}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {items.map((item) => <ProductCard key={item.id} item={item} />) }
        </div>
    </div>
  )
}