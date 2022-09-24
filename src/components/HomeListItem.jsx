import React from 'react'

const HomeListItem = ({product}) => {

    return (
		<div className="w-72 h-80 px-8 py-2 bg-white rounded border-4">
			<div className="flex justify-center">
				<img src={product.image} alt={product.title} className='w-60 h-60 rounded-2xl object-cover'/>
			</div>
				<div className="product-info">
					<div>
						<p>{product.title}</p>
					</div>
					{/* <figure onClick={() => handleClick(product)} >
						<img src={logoaddcart} alt="" />
					</figure> */}
				</div>
			
		</div>
    );
}

export default HomeListItem;