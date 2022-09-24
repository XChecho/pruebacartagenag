import React, {useState,useContext} from 'react'

//assets
import logoAddCar from '@assets/icons/shopping-cart.svg';

//containers
import MyOrder from '@containers/MyOrder';

//hooks
import AppContext from "@context/AppContext";


const Navbar = () => { 

    const { state, toggleOrder} = useContext(AppContext);

    return (
        <nav className="w-full h-12 hidden bg-primary lg:flex p-4 justify-between items-center fixed z-50 dark:bg-gray-800 dark rounded-b-md">
            <div className="h-auto w-auto">
                <p className="text-xl text-white font-black pl-1">CARTAGENA GROUP SHOP</p>
            </div>
            <div className="flex space-x-8">
                <a className="font-bold text-md text-second hover:text-black" href="/">Home</a>
                <a className="font-bold text-md text-second hover:text-black" href="/product">Lista de productos</a>
                <a className="font-bold text-md text-second hover:text-black" href="#aboutus">Nosotros</a>
            </div>
            <div className='rounded-full w-9 h-9 place-items-center flex justify-center'  onClick={() => toggleOrder()}>
					<img src={logoAddCar} alt="" className='place-items-center' />
                    {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
			</div>
            {/* {state.orderIsOpen && <MyOrder />} */}
            <MyOrder/>
        </nav>
    );
}

export default Navbar; 