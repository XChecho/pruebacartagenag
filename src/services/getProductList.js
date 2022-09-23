import conectionAPI from "../api/index";

const path = 'products'

const getProductList = () => {
    
    return conectionAPI(path)
}

export default getProductList;  
