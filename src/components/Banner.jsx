import React from 'react';

//assets
import pictureBanner from '@assets/images/fashionPic.jpg';

const Banner = () => {
    return(
        <div className="w-full h-3/4 lg:pt-5">
            <div className="w-full h-full">
                <div className="w-full h-full flex flex-col absolute py-4 items-center lg:space-y-20 lg:items-start lg:pt-36 lg:justify-start">
                    <div className="hidden h-auto lg:w-3/4 lg:flex pb-6">
                        <p className="text-4xl ml-16 font-bold text-second">A un click, y sin moverte de casa</p>
                    </div>
                </div>
                <div 
                    style={{backgroundImage: `url(${pictureBanner})`}} 
                    className="w-full h-96 bg-cover"
                ></div>
            </div>
        </div>
    );
}

export default Banner;