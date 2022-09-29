import React from 'react'

const Lauyout = ({children}) => {
    return(
        <div className='h-screen absolute bg-layout'>
            {children}
        </div>
    );
}

export default Lauyout;