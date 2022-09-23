import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Pages
import Home from '@pages/Home';
import ProductItem from '@pages/ProductItem';
import ProductList from '@pages/ProductList';


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
                <Route exact path="/product" element={<ProductList />} /> 
                <Route exact path="/exampleItem" element={<ProductItem />} />
            </Routes>
            <Footer />
        </Layout>
    </BrowserRouter> 
  );
}

export default App;