import React , {useState , useEffect} from 'react'

//Assets
import logoAddCar from '@assets/icons/shopping-cart.svg';

//Hooks
// import useGetProducts from '@hooks/useGetProducts';

const ProductItem = () => {

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        getData();
    },[])

    const getData = async () => {
        const response = await axios.get(API);
        setProducts(response.data);
    }
    
    return(
        <div className='w-screen h-auto'>
            {console.log(products)}
            <div className='grid pt-12 justify-center my-4'>
                <h1 className='text-3xl font-bold text-center'>Detalle del producto</h1>
                <div className='w-96 h-auto flex flex-col justify-center mt-10'>
                    <p className='text-xlg text-primary text-center'>{products.title}</p>
                    <div className='flex justify-center py-2'>
                        <img src={products.image} alt={products.title} className='w-auto h-80 rounded-2xl'/>
                    </div>
                    <div className='flex justify-around pb-2'>
                        <p className='text-xlg font-bold pt-1 text-center w-1/4 bg-third rounded-sm'>${products.price}</p>
                        <figure className='bg-fifth rounded-full w-10 h-10 place-items-center flex justify-center' onClick={() => handleClick(product)} >
					        <img src={logoAddCar} alt="" className='place-items-center' />
				        </figure>
                    </div>
                    <div className='bg-second rounded-lg'>
                        <p className='text-xlg font-bold bg-third rounded-t-lg'>Description:</p>
                        <p className='text-lag text-justify'>{products.description}</p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ProductItem;