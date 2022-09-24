import { useEffect, useState } from "react";
import fetchData from "../api/fetchData";

const useGetProductsHomeList = () => {
	const productsWithLimitEndpoint = "/products?limit=4";
    const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getData();	
	}, [])
	
	const getData = async () => {
		setLoading(true);
		const response = await fetchData(productsWithLimitEndpoint);
		setProducts(response.data);
		setLoading(false)
	}
	
    return {products,loading};
};

export default useGetProductsHomeList;