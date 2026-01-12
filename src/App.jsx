import React from 'react';
import { Route, Routes } from 'react-router';
import Layout from './pages/Layout';
import HomePage from './pages/HomePage';
import ProductDetailsFull from './pages/ProductDetails';
import ProductPage from "./pages/ProductPage";
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import BlogDetailPage from './pages/BlogDetailPage';
import CampaignPage from './pages/CampaignPage';

const App = () => {
  return (
    < >
     <Routes>
      <Route path="/*" element={<Layout />}> 
        <Route index element={<HomePage />} />
        <Route path="products" element={<ProductPage />} />
        <Route path="product-details" element={<ProductDetailsFull />} />
        <Route path="blogs" element={<BlogPage />} />
        <Route path="blog-details" element={<BlogDetailPage />} />
        <Route path="campaigns" element={<CampaignPage />} />
        <Route path="contacts" element={<ContactPage />} />
      </Route>
     </Routes>
    </>
  );
};

export default App;