import { useEffect, useState } from "react";

const useGetProducts = (getProductList,setLoading) => {
    const [products, setProducts] = useState([]);
	
	useEffect( () => {
		setLoading(false);

		const fetchProductList = async() => {
			const response = await getProductList();
			console.log(response,"Response Hooks fetch")
			return response;
		}
		
		const response = fetchProductList();
		setProducts(response);
	}, [])

	// useEffect(() => {
	// 	setLoading(true);
	// 	getData();
	// }, [])
	
	// const getData = async () => {
	// 	const response = await axios.get(API);
	// 	setProducts(response.data);
	// 	setLoading(false)
	// }
	
    return products;
};

export default useGetProducts;