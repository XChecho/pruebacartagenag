import React , {useState , useEffect} from 'react'
// import useGetProducts from '@hooks/useGetProducts';
import axios from 'axios';

const API = 'https://fakestoreapi.com/products/1';

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
        <div className='w-screen h-48 bg-red-400'>
            <div className='pt-12'>
                Hola aquí estoy
            </div>
        </div>
    );
}

export default ProductItem;