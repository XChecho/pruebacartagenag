import axios from "axios";
const API_URL = 'https://fakestoreapi.com'

const fetchData = (path) => {
    return axios.get(process.env.API_URL+path)
};

export default fetchData;