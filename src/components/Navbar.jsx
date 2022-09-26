import React, {useState,useContext} from 'react'
import { useNavigate } from 'react-router-dom'

//assets
import logoAddCar from '@assets/icons/shopping-cart.svg';

//containers
import MyOrder from '@containers/MyOrder';

//hooks
import AppContext from "@context/AppContext";


const Navbar = () => { 

    const { state, toggleOrder} = useContext(AppContext);

    const navigate = useNavigate()

    return (
        <nav className="w-full h-12 hidden bg-primary lg:flex p-4 justify-between items-center fixed z-50 dark:bg-gray-800 dark rounded-b-md">
            <div className="h-auto w-auto">
                <p className="text-xl text-white font-black pl-1">CARTAGENA GROUP SHOP</p>
            </div>
            <div className="flex space-x-8 list-none">
                    <a className="font-bold text-md text-second hover:text-black" onClick={()=>navigate('/')}>Inicio</a>
                    <a className="font-bold text-md text-second hover:text-black" onClick={()=>navigate('/product')}>Lista de productos</a>
            </div>
            <div className='rounded-full w-9 h-9 place-items-center flex justify-center bg-third' onClick={() => toggleOrder()}>
					<button>
                        <img src={logoAddCar} alt="" className='place-items-center' />
                        {state.cart.length > 0 
                            ? <div className='w-5 h-5 bg-fifth flex rounded-full text-med font-bold absolute justify-center content-center bottom-1 right-1'>{state.cart.length}</div> 
                            : null
                        }
                    </button>
			</div>
            {state.orderIsOpen && <MyOrder />}
        </nav>
    );
}

export default Navbar; 