import React from 'react'
import getProductList from '../services/getProductList';

//components
import ItemDesc from '@components/ItemDesc';
import useGetProducts from '@hooks/useGetProducts';

const HomeList = () => {
    
    const products = useGetProducts(getProductList);

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