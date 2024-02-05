
import getCategory from '@/actions/get-category';
import getColors from '@/actions/get-colors';
import getProducts from '@/actions/get-products';
import getSizes from '@/actions/get-sizes';
import Billboard from '@/components/Billboard';
import Container from '@/components/ui/container';
import React from 'react'
import Filter from './_components/filter';
import NoResults from '@/components/ui/no-results';
import ProductCard from '@/components/ui/product-card';
import MobileFilter from './_components/mobile-filter';

export const revalidate = 0;

type CategoryPageProps = {
    params: { categoryId: string; };
    searchParams: { colorId: string; sizeId: string; }
}

export default async function CategoryPage({params: { categoryId}, searchParams: { colorId, sizeId }}: CategoryPageProps) {

    const products = await getProducts({
        categoryId,
        colorId,
        sizeId,
    });

    const sizes = await getSizes();
    const colors = await getColors();
    const category = await getCategory(categoryId);

  return (
    <div className='bg-white'>
        <Container>
            <Billboard data={category.billboard} />
            <div className="px-4 sm:px-6 pb-24">
                <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
                    <MobileFilter sizes={sizes} colors={colors} />
                    <div className="hidden lg:block">
                        <Filter name='Sizes' valueKey="sizeId" data={sizes} />
                        <Filter name='Colors' valueKey="colorId" data={colors} />
                    </div>
                    <div className="mt-6 lg:col-span-4 lg:mt-0">
                        { products.length === 0 ? <NoResults /> : null }
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {
                                products.map((product) => <ProductCard key={product.id} item={product} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}