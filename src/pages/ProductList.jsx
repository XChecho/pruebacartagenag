import React, {useState} from 'react'

//Components
import ProductListItem from '@components/ProductListItem';
import Loading from '@components/Loading';

//Hooks
import useFetch from '@hooks/useFetch';

const ProductList = () => {

    const {data:products,loading} = useFetch("/products" );
    
    return(
        <div className='w-screen h-auto mt-12 flex-column'>
            <h1 className='h-auto text-3xl text-center font-bold py-4'>Listado de productos</h1>
            {loading 
            ? <Loading />
            :<div className='grid grid-cols-auto-fill gap-6 place-content-center py-2.5 bg-gray-400'>
                {products.map(product => { 
                    return <ProductListItem product ={product} key={product.id} />;
                })}    
            </div>
            }
        </div>
    );
}

export default ProductList;