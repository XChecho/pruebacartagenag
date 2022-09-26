import React from 'react'

//components
import HomeListItem from '@components/HomeListItem';
import useFetch from '@hooks/useFetch';
import Loading from '@components/Loading';

const HomeList = () => {
    
    const {data:products,loading} = useFetch('/products?limit=4');

    return (
        <section className='mt-4'>
            <h1 className='text-center text-3xl font-bold mb-4'>Promociones del mes </h1>
                {loading 
                ?<Loading/>
                :<div className='flex justify-around gap-2 bg-gray-400 py-4 my-2.5'>
                    {products.map(product => {
                        return <HomeListItem product = {product} key={product.id} />;
                    })}
                </div>
            }
        </section>
    );
}

export default HomeList;