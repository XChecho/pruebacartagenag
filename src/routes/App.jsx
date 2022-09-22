import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Pages
import Home from '@pages/Home';
// import ProductItem from '@pages/ProductItem';
import ProductList from '@pages/ProductList';
// // import NotFound from '@pages/NotFound';

//Containers
import Layout from '@containers/Layout';

//Components
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
            <Navbar/>
            <Routes className='absolute'>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/list" element={<ProductList />} />
                {/* <Route exact path="/item" element={<ProductItem />} /> */}
                {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
            <Footer />
        </Layout>
    </BrowserRouter> 
  );
}

export default App;