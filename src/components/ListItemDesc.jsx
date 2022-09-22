import React , {useContext} from 'react'

//assets
import logoAddCar from '@assets/icons/shopping-cart.svg';
// import AppContext from '@context/AppContext';

const ListItemDesc = ({product}) => {

    return (
    	<div className="w-63e h-auto px-8 py-2 border-solid border-third rounded border-4 ">
			<p className='text-center text-lag'>{product.title}</p>
			<div className='flex justify-center'>
				<img src={product.image} alt={product.title} className='w-auto h-60 rounded-2xl'/>
			</div>
			<div className="flex justify-between mt-2">
				<div>
					<p className='text-lag'>${product.price}</p>
					<div>
					</div>
				</div>
				<figure className='bg-fifth rounded-full w-9 h-9 place-items-center flex justify-center' onClick={() => handleClick(product)} >
					<img src={logoAddCar} alt="" className='place-items-center' />
				</figure>
			</div>
		</div>
    );
}

export default ListItemDesc;