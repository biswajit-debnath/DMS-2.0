import React, { useState, useEffect } from 'react';
import './App.css';

import Home from './pages/home';
import Listing from './pages/Listing';
import Info from './pages/Info';

import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';

// import { commerce } from './lib/commerce';

// const App = () => {
//   return (
//     <Router>
//       <div className="sticky">

//       <Navbar />
//       <Catagories />
//       </div>
//       <ImageSlider />
//       <Products />
//       <Shopbycategories />
//       <BestSellerComponent />
//       <Ourservices />
//       <Homepagemenu />
//       <Homepagemenu2 />
//       <Info />
//       <SubscribeComponent /> 
//       <FooterComponent />
//     </Router>
//   );
// };

const App = () => {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/listing" component={Listing} />
      <Route exact path="/Info" component={Info} />
      </Switch>
    </Router>
  );
};

export default App;
