import React from 'react'
import getProductList from '../services/getProductList';
import fetchData from '../api';

//components
import ItemDesc from '@components/ItemDesc';
import useGetProducts from '@hooks/useGetProducts';

const API = 'https://fakestoreapi.com/products'

const HomeList = () => {
    
    const products = useGetProducts(fetchData);

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