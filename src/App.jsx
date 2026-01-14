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
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ProfilePage from './pages/ProfilePage'; 
import LocateStore from './pages/LocateStore';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import CategoryPage from './pages/CategoryPage';
import SupportPage from './pages/SupportPage';
import HowToOrder from './pages/HowToOrder'; 
import PrivacyPolicy from './pages/PrivacyPolicy';
import ReturnsPolicy from './pages/ReturnsPolicy';
import ShippingInfo from './pages/ShippingInfo';
import LegalNotice from './pages/LegalNotice';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="products" element={<ProductPage />} />
          <Route path="locate-store" element={<LocateStore />} />
          <Route path="product-details" element={<ProductDetailsFull />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="blogs" element={<BlogPage />} />
          <Route path="category" element={<CategoryPage />} />
          <Route path="blog-details" element={<BlogDetailPage />} />
          <Route path="campaigns" element={<CampaignPage />} />
          <Route path="contacts" element={<ContactPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="forget-password" element={<ForgotPasswordPage />} />

          <Route path="support" element={<SupportPage />} />
          <Route path="how-to-order" element={<HowToOrder />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="return-policy" element={<ReturnsPolicy />} />
          <Route path="shipping" element={<ShippingInfo />} />
          <Route path="legal-notice" element={<LegalNotice />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;