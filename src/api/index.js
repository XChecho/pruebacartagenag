const API = 'https://fakestoreapi.com'

// const conectionAPI = () => {
//     fetch (`${API}/products`)
//         .then(response=>response.json())
//         .then(products =>{
//             console.log(products,"response.json api.index.conectionAPI")})
//         .catch(console.error)
//     return response.json()
// }

function fetchData(urlApi){
    return fetch(urlApi);
}

fetchData(`${API}/products`)
    .then(response => response.json())
    .then(products => {
        console.log(products);
    })

export default fetchData; 