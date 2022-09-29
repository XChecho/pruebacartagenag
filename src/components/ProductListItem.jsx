import React , {useContext} from 'react'
import { useNavigate } from 'react-router-dom'

//Components
import ButtonAddCart from '@components/ButtonAddCart';


//Context
import AppContext from '@context/AppContext';

const ProductListItem = ({product}) => {

	const navigate = useNavigate()
	const { addToCart } = useContext(AppContext);

	const handleClick = item => {
		addToCart(item);
	} 
	
    return (
    	<div className="w-80 h-128 px-8 py-2 bg-white rounded border-4 hover:shadow-2xl">
			<div className='flex justify-center'>
				<img src={product.image} alt={product.title} className='w-auto h-60 rounded-2xl object-contain '/>
			</div>
			<div className="flex justify-between mt-5">
				<div>
					<p className='text-lag'>${product.price}</p>
					<div>
					</div>
				</div>
				<div onClick={() => handleClick(product)}>
					<ButtonAddCart />
				</div>
			</div>
			<div className=' flex justify-center ' >
				<button className='bg-second font-bold py-2 px-4 rounded-full transition-all duration-500 ease-in-out transform hover:scale-125 hover:bg-primary hover:text-white' onClick={()=>navigate(`/product/${product.id}`)} >Detalle</button>
			</div>
			<p className='text-center text-lag pt-4'>{product.title}</p>
		</div>
    );
}

export default ProductListItem;