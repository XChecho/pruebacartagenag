import React, {useState} from 'react'
import getProductList from '../services/getProductList';

//Components
import ListItemDesc from '@components/ListItemDesc';

//Hooks
import useGetProducts from '@hooks/useGetProducts';

const ProductList = () => {
    // console.log(getProductList,"ProductList.jsx")
    const [loading,setLoading] = useState(true);
    const products = useGetProducts(getProductList,setLoading);
    
    return(
        <div className='w-full h-auto mt-12 flex-column'>
            {console.log(products,"Products ProductList")}
            <h1 className='h-auto text-xlg text-center'>Listado de productos</h1>
            <div className='grid grid-cols-5 gap-6 place-content-center my-2.5 mx-2'>
                {products.map(product => {
                    return <ListItemDesc product ={product} key={product.id} />;
                })}    
            </div>
        </div>
    );
}

export default ProductList;