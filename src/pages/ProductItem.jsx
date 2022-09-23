import React from 'react'
import useGetProducts from '@hooks/useGetProducts';

const API = 'https://fakestoreapi.com/products/1';

const ProductItem = () => {
    
    const {products,loading} = useGetProducts(API);

    return(
        <div>
             
        </div>
    );
}

export default ProductItem;