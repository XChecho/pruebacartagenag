import React from 'react'

//components
import ItemDesc from '@components/ItemDesc';
import useGetProducts from '@hooks/useGetProducts';

const API = 'https://fakestoreapi.com/products?limit=4';

const HomeList = () => {
    
    const products = useGetProducts(API);

    return (
        <section>
            <div className='grid grid-cols-4 gap-6 place-content-center my-2.5'>
                {products.map(product => {
                    return <ItemDesc product ={product} key={product.id} />;
                })}
            </div> 
        </section>
    );
}

export default HomeList;