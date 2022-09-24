import React, {useContext} from 'react';
import MyOrderItem from '@components/MyOrderItem';
import AppContext from "@context/AppContext";
import flechita from "@assets/icons/flechita.svg";

const MyOrder = () => {
	const { state, toggleOrder } = useContext(AppContext);

	const sumTotalPrice = () => {
		const reducer = (accumalator, currentValue) => accumalator + currentValue.price;
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	}

	const sumTotalArticles = () => {
		const reducerArticles = (accumalator, currentObjects) => accumalator + currentObjects
		const sumArt = state.cart.reduce(reducerArticles, 0);
		return sumArt;
	}

	return (
		<aside className="w-140 block h-auto p-6 box-border absolute bg-white right-0 top-10  rounded-md border border-solid border-primary">
			<div className="flex">
				<img src={flechita} alt="arrow" onClick={()=> toggleOrder()} className='rotate-180 mr-4'/>
				<p className="text-lag font-bold mb-2">My order</p>
			</div>
			<div>
				{state.cart.map((products,index) => (
					<MyOrderItem 
						indexValue={index}
						key={index}
						products={products}
					/>
				))}
				<div className="grid grid-cols-auto1fr bg-second items-center gap-4 mb-6 rounded-md px-2 py-3">
					<p className='flex flex-col'>
						<span className='text-med font-bold'>Total</span>
					</p>
					<p className='font-bold'>10 Articles</p>
					<p className='text-end font-bold'>${sumTotalPrice()}</p>
				</div>
				<button className="button_transition font-bold rounded-md  w-full text-med h-10">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;