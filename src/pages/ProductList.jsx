import React from 'react'

//Components
import ListItemDesc from '@components/ListItemDesc';

//Hooks
import useGetProducts from '@hooks/useGetProducts';

const API1 = 'https://fakestoreapi.com/products';

const ProductList = () => {

    const products = useGetProducts(API1);
    
    return(
        <div className='w-full h-auto mt-12 flex-column'>
            <h1 className='h-auto text-xlg text-center'>Listado de productos</h1>
            <div className='grid grid-cols-6 gap-6 place-content-center my-2.5 mx-2'>
                {products.map(product => {
                    return <ListItemDesc product ={product} key={product.id} />;
                })}    
            </div>
        </div>
    );
}

export default ProductList;