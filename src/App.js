import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Catagories from './components/Catagories';
import Products from './components/Products';
import Shopbycategories from './components/Shopbycategories';
import Ourservices from './components/Ourservices';
import Homepagemenu from './components/Homepagemenu';
import Homepagemenu2 from './components/Homepagemenu2';
import FooterComponent from './components/Footer';
import BestSellerComponent from './components/BestSellers';
import SubscribeComponent from './components/SubscribeComponent';
import ImageSlider from './components/Hero';
import Info from './components/Info';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

// import { commerce } from './lib/commerce';

const App = () => {
  return (
    <Router>
      <div className="sticky">

      <Navbar />
      <Catagories />
      </div>
      <ImageSlider />
      <Products />
      <Shopbycategories />
      <BestSellerComponent />
      <Ourservices />
      <Homepagemenu />
      <Homepagemenu2 />
      <Info />
      <SubscribeComponent />  
      <FooterComponent />
    </Router>
  );
};

export default App;
