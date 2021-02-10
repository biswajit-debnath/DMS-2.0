import React from 'react';
import Navbar from '../components/Navbar';
import Catagories from '../components/Catagories';
import FooterComponent from '../components/Footer';
import ImageSlider from '../components/Hero';
import Products from '../components/Products';

const Listing = () => {
    
    return(
        <>
            <div className="sticky">
            <Navbar />
            <Catagories />
            </div>
            <ImageSlider />
            <Products />
            <FooterComponent />
        </>
    )
}

export default Listing;