import axios from "axios";

const fetchData = async(path) => {
    const response = await axios.get(process.env.API_URL+path)
    return response
};

export default fetchData;