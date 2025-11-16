import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import HomePage from './landing page/home/HomePage';
import Signup from './landing page/signup/Signup';
import About from './landing page/about/AboutPage';
import Pricing from './landing page/pricing/Pricingpage';
import ProductPage from './landing page/products/ProductPage';
import Support from './landing page/support/Supportpage';
import NotFound from './landing page/NotFound';
import Navbar from './landing page/Navbar';
import Footer from './landing page/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/support" element={<Support />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);


