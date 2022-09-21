import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// //Pages
// import Home from '@pages/Home';
// import ProductItem from '@pages/ProductItem';
// import ProductList from '@pages/ProductList';

// //Containers
// import Layout from '@containers/Layout';

// //Components
// import Navbar from '@components/Navbar';
// import Footer from '@components/Footer';

//Styles
import '@styles/global.scss';

// const App = () => {
//   return (
//       <BrowserRouter>
//         <Layout>
//               <Navbar/>
//               <Routes className='relative'>
//                   <Route exact path="/" element={<Home />} />
//                   <Route exact path="/list" element={<ProductList />} />
//                   <Route exact path="/item" element={<ProductItem />} />			
//                   <Route path="*" element={<NotFound />} />
//               </Routes>
//               <Footer />
//           </Layout>
// </BrowserRouter> 
//   );
// }
const App = () => {
  return(
    <h1>Hola Mundo!</h1>
  );
}

export default App;