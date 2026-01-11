import React from 'react';
import { Route, Routes } from 'react-router';
import Layout from './pages/Layout';
import HomePage from './pages/HomePage';
import ProductDetailsFull from './pages/ProductDetails';
import ProductPage from "./pages/ProductPage";

const App = () => {
  return (
    < >
     <Routes>
      <Route path="/*" element={<Layout />}> 
        <Route index element={<HomePage />} />
        <Route path="products" element={<ProductPage />} />
        <Route path="product-details" element={<ProductDetailsFull />} />
      </Route>
     </Routes>
    </>
  );
};

export default App;