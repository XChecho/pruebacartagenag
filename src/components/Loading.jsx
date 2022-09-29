import React from 'react'

const Loading = () => {
    return (
        <div className='text-white w-screen h-96 flex justify-center'>
            <div className='text-center justify-center items-center flex '>
                <div className='absolute w-52 h-52 rounded-full before:absolute before:left-0 before:top-0 before:h-full before:w-full before:shadow-load before:rounded-full animate-ring-load'></div> 
                <span className='uppercase text-primary tracking-wider text-lg '>Cargando . . .</span>                    
            </div>
        </div>
    );
}

export default Loading;