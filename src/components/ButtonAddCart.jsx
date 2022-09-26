import React from 'react'

//Assets
import logoAddCar from '@assets/icons/shopping-cart.svg';

const ButtonAddCart = () => {

    return (
        <button className='bg-fifth rounded-full w-10 h-10 place-items-center flex justify-center'>
            <img src={logoAddCar} alt="" className='place-items-center' />
        </button>
    );
}

export default ButtonAddCart;