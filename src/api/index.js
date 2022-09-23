const domain = 'https://fakestoreapi.com'

const conectionAPI = async (path) => {
    const response = await fetch (`${domain}/${path}`)
    return response.json()
}

export default conectionAPI;