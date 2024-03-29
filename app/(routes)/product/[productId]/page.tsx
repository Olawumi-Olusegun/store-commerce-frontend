

import getProduct from '@/actions/get-product';
import getProducts from '@/actions/get-products';
import Info from '@/components/Info';
import ProductList from '@/components/ProductList';
import Gallery from '@/components/gallery';
import Container from '@/components/ui/container';
import React from 'react'

type ProductPageProps = {
    params: {
        productId: string;
    }
}

export default async function ProductPage({params: {productId }}: ProductPageProps) {
    
    const product = await getProduct(productId);

    const suggestedProducts = await getProducts({ categoryId: product.category.id});


    if(!product) {
        return null;
    }


  return (
    <div className='bg-white'>
        <Container>
            <div className="px-4 py-10 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                    <div className="">
                        <Gallery images={product.images} />
                    </div>
                    <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                        <Info data={product} />
                    </div>
                </div>
                <hr className='mt-10' />
                <ProductList title='Related Items' items={suggestedProducts} />
            </div>
        </Container>
    </div>
  )
}