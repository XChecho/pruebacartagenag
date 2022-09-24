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

//Hooks
import useInitialState from '@hooks/useInitialState';
import AppContext from "@context/AppContext";

const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
              <Navbar/>
              <Routes className='absolute'>
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/product" element={<ProductList />} /> 
                  <Route exact path="/product/:id" element={<ProductItem />} />
              </Routes>
              <Footer />
          </Layout>
      </BrowserRouter>
    </AppContext.Provider>  
  );
}

export default App;