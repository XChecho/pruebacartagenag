import React from 'react'

//components
import HomeListItem from '@components/HomeListItem';
import useFetch from '@hooks/useFetch';

const HomeList = () => {
    
    const {data:products,loading} = useFetch('/products?limit=4');

    return (
        <section>
            {loading ? 
                    <div className='w-full h-60 flex'>
                        <button type='button' className=' bg-third'>
                        <svg className='animate-spin h-5 w-5 mr-3' viewBox="0 0 24 24">
                        </svg>
                            Cargando . . .
                        </button> 
                    </div>
                :
                    <div className='flex justify-around gap-6 my-2.5'>
                        {products.map(product => {
                            return <HomeListItem product = {product} key={product.id} />;
                        })}
                    </div>
            }
        </section>
    );
}

export default HomeList;