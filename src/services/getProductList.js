import conectionAPI from "../api"

const path = 'products/'

const getProductList = () => {
    
    return conectionAPI(path).catch(console.error)
}

export default getProductList;
