import React, {useContext} from 'react';
import AppContext from "@context/AppContext";
import close from "@icons/icon_close.png";


const MyOrderItem = ({ products }) => {
	
	const { removeFromCart } = useContext(AppContext);

	const handleRemove = products => {
		removeFromCart(products);
	}

	return (
		<div className="grid grid-cols-at1fatat gap-4 mb-6 items-center">
			<figure className='m-0'>
				<img src={products.image} alt={products.title} className='w-20 h-20 rounded-md object-cover' />
			</figure>
			<p className='text-primary' >{products.title}</p>
			<p className='text-med font-bold' >${products.price}</p>
			<img src={close} alt="close" onClick={() => handleRemove(products)} />
		</div>
	);
}

export default MyOrderItem;