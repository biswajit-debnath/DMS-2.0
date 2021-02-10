import React from 'react';
import Navbar from '../components/Navbar';
import Catagories from '../components/Catagories';
import FooterComponent from '../components/Footer';
import ImageSlider from '../components/Hero';
import InfoComponent from '../components/Info';

const Info = () => {
    
    return(
        <>
            <div className="sticky">
            <Navbar />
            <Catagories />
            </div>
            <ImageSlider />
            <InfoComponent />
            <FooterComponent />
        </>
    )
}

export default Info;