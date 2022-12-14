import React, {useContext} from 'react';
import AppContext from "@context/AppContext";
import close from "@assets/icons/icon_close.png";


const MyOrderItem = ({ products, addItem, removeItem }) => {
	
	const { removeFromCart } = useContext(AppContext);

	const handleRemove = products => {
		removeFromCart(products);
	}
	
	return (
		<div className="grid grid-cols-at1fatat gap-4 mb-6 items-center">
			<figure className='m-0'>
				<img src={products.image} alt={products.title} className='w-20 h-20 rounded-md object-contain' />
			</figure>
			<p className='text-primary'>{products.title}</p>
			<div className=' w-22 h-10 justify-between content-center left-1 px-2 static border-solid border-second border-2 rounded-md flex'>
				<button className='text-med font-semibold' onClick={removeItem}>-</button>
				<span className='flex items-center'>{products.quantity}</span>
				<button className='text-med font-semibold' onClick={addItem}>+</button>
			</div>
			<p className='text-med font-bold' >${products.price*products.quantity}</p>
			<button>
				<img src={close} alt="close" onClick={() => handleRemove(products)} />
			</button>
		</div>
	);
}

export default MyOrderItem;