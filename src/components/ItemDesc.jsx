import React , {useContext} from 'react'
// import AppContext from '@context/AppContext';

const ItemDesc = ({product}) => {

    return (
    	<div className="w-60 bg-second">
			<img src={product.image} alt={product.title} className='w-60 h-60 rounded-2xl object-cover'/>
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				{/* <figure onClick={() => handleClick(product)} >
					<img src={logoaddcart} alt="" />
				</figure> */}
			</div>
		</div>
    );
}

export default ItemDesc;