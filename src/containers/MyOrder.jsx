import React, { useContext } from 'react';

//components
import MyOrderItem from '@components/MyOrderItem';

//Hooks
import AppContext from "@context/AppContext";

//Assets
import flechita from "@assets/icons/flechita.svg";

import swal from 'sweetalert';

const MyOrder = () => {
	const { state, toggleOrder, addItem, removeItem, removeAllCart } = useContext(AppContext);

	const sumTotal = () => {
		const reducer = (accumalator, currentValue) => accumalator + (currentValue.price * currentValue.quantity);
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	}

	const handleRemoveAll = state => {
		removeAllCart(state);
		swal({
			title: 'Proceso de compra finalizado',
			text: `El proceso de compra finalizó el total de la compra fue $${sumTotal()}`,
			icon: 'success',
			button: 'Aceptar',
			timer: "5000"
		});
	}

	return (
		<aside className="w-140 block h-auto p-6 box-border absolute bg-white right-0 top-10  rounded-md border border-solid border-primary">
			<div className="flex ">
				<button>
					<img src={flechita} alt="arrow" onClick={()=> toggleOrder()} className='rotate-180 mr-4'/>
				</button>
				<p className="text-lag font-bold mb-2">My order</p>
			</div>
			<div className='overflow-y-scroll max-h-160 scrollbar-hide relative pb-2 border-b-2'>
				{state.cart.map((products,index) => (
					<MyOrderItem 
						indexValue={index}
						key={index}
						products={products}
						addItem={ () =>addItem(products.id)}
						removeItem={ () => removeItem(products.id)}
					/>
				))}	
			</div>
			<div className='relative mt-3'>
				<div className="grid grid-cols-auto1fr bg-second items-center gap-4 mb-6 rounded-md px-2 py-3">
					<p className='flex flex-col'>
						<span className='text-med font-bold'>Total</span>
					</p>
					<p className='font-bold'>Articulos</p>
					{console.log(state.cart)}
					<p className='text-end font-bold'>${sumTotal()}</p>
				</div>
				<button className="button_transition font-bold rounded-md  w-full text-med h-10" onClick={() => handleRemoveAll(state.cart)}>
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;