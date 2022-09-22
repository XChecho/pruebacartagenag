import React from 'react'

const Lauyout = ({children}) => {
    return(
        <div className='w-full h-screen absolute'>
            {children}
        </div>
    );
}

export default Lauyout;