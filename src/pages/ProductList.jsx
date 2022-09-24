import React, {useState} from 'react'

//Components
import ProductListItem from '@components/ProductListItem';

//Hooks
import useGetProductsList from '@hooks/useGetProductsList';

const ProductList = () => {

    const {products,loading} = useGetProductsList();
    
    return(
        <div className='w-full h-auto mt-12 flex-column'>
            <h1 className='h-auto text-3xl text-center font-bold'>Listado de productos</h1>
            {loading ? <h1>Cargando</h1> :
            <div className='grid grid-cols-auto-fill gap-6 place-content-center py-2.5 bg-gray-400'>
                {products.map(product => {
                    return <ProductListItem product ={product} key={product.id} />;
                })}    
            </div>
            }
        </div>
    );
}

export default ProductList;