import React from 'react'

//components
import HomeListItem from '@components/HomeListItem';
import useGetProductsHomeList from '@hooks/useGetProductsHomeList';

const HomeList = () => {
    
    const {products,loading} = useGetProductsHomeList();

    return (
        <section>
            {loading ? <h1>Cargando</h1> :
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