import { useEffect, useState } from "react";
import fetchData from "../api/fetchData";

const useGetProductsList = () => {
    const allProducts = "/products" 
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

	useEffect(() => {
		getData();
	}, [])
	
	const getData = async () => {
        setLoading(true);
		const response = await fetchData(allProducts);
		setProducts(response.data);
		setLoading(false)
	}
	
    return {products,loading};
};

export default useGetProductsList;