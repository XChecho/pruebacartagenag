import React,{useContext} from 'react'
import { useParams } from 'react-router-dom';

//Assets
import logoAddCar from '@assets/icons/shopping-cart.svg';

//Hooks
import useFetch from '@hooks/useFetch';
import AppContext from '@context/AppContext';

const ProductItem = () => {

    const {id} = useParams()
    const {data:product,loading} = useFetch('/products/'+id)

    const { addToCart } = useContext(AppContext);
    const handleClick = item => {
		addToCart(item);
	} 
    
    return(
        <div className='w-screen h-auto'>
            {console.log(product)}
            <div className='grid pt-12 justify-center my-4'>
                <h1 className='text-3xl font-bold text-center'>Detalle del producto</h1>
                <div className='w-96 h-auto flex flex-col justify-center mt-10'>
                    <p className='text-xlg text-primary text-center'>{product.title}</p>
                    <div className='flex justify-center py-2'>
                        <img src={product.image} alt={product.title} className='w-auto h-80 rounded-2xl'/>
                    </div>
                    <div className='flex justify-around pb-2'>
                        <p className='text-xlg font-bold pt-1 text-center w-1/4 bg-third rounded-sm'>${product.price}</p>
                        <button className='bg-fifth rounded-full w-10 h-10 place-items-center flex justify-center' onClick={() => handleClick(product)} >
					        <img src={logoAddCar} alt="" className='place-items-center' />
				        </button>
                    </div>
                    <div className='bg-second rounded-lg'>
                        <p className='text-xlg font-bold bg-third rounded-t-lg'>Description:</p>
                        <p className='text-lag text-justify'>{product.description}</p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ProductItem;