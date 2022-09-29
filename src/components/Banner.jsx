import React from 'react';

//assets
import pictureBanner1 from '@assets/images/panoramic1.jpg';
import pictureBanner2 from '@assets/images/fashionPic.jpg';
import pictureBanner3 from '@assets/images/shopCart.jpg';
import pictureBanner4 from '@assets/images/seleccion.jpg';

const Banner = () => {
    return(
        <div className="w-screen lg:pt-12">
            <div className="m-auto h-96 overflow-hidden w-19/20">
                <ul className="flex p-0 w-400 animate-slider">  
                    <li className='w-full'><img src={pictureBanner2} alt="" className='w-full'/></li>
                    <li className='w-full'><img src={pictureBanner1} alt="" className='w-full'/></li>
                    <li className='w-full'><img src={pictureBanner3} alt="" className='w-full'/></li>
                    <li className='w-full'><img src={pictureBanner4} alt="" className='w-full'/></li>
                </ul>
            </div>
        </div>
    );
}

export default Banner;