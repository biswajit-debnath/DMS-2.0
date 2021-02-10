import React, { useState } from 'react';
import * as FiIcons from 'react-icons/fi';
import * as FcIcons from "react-icons/fc";
import { Link } from 'react-router-dom';
import './index.css';
import img from '../../assets/burnfitness.png';
import img1 from '../../assets/product1.png';
import img2 from '../../assets/product2.png';
import img3 from '../../assets/product3.png';
import img4 from '../../assets/product4.png';
import img5 from '../../assets/product5.png';
import { IconContext } from 'react-icons';


function Products() {
    const [heart, setHeart] = useState(false);

    const showHeart = () => setHeart(!heart);

    return (
        <>
           <div className='products'>
               <div className='product-wrapper'>
                   <div className='product-top'>
                       <div className='product-label'>
                            <p>New</p>
                       </div>
                       <div className='product-wishlist'>
                            <Link to='#' className='heart-btn'>
                                {heart ? <FcIcons.FcLike onClick={showHeart} /> 
                                        : <FiIcons.FiHeart onClick={showHeart} /> }
                            </Link> 
                       </div>
                   </div>
                   <div className='product-img-section'>
                       <div className='product-img'>
                            <img src={img1} width="206" height="206" /> 
                       </div>
                   </div>
                   <div className='product-info'>
                       <div className='product-name'>
                            <p>Product Name</p>
                       </div>
                       <div className='product-btn'>
                            <button className='btn'>View Now</button>
                       </div>
                   </div>
               </div>
               <div className='product-wrapper'>
                   <div className='product-top'>
                       <div className='product-label'>
                            <p>New</p>
                       </div>
                       <div className='product-wishlist'>
                            <Link to='#' className='heart-btn'>
                            {heart ? <FcIcons.FcLike onClick={showHeart} /> : <FiIcons.FiHeart onClick={showHeart} /> }
                            </Link> 
                       </div>
                   </div>
                   <div className='product-img-section'>
                       <div className='product-img'>
                            <img src={img2} width="206" height="206" /> 
                       </div>
                   </div>
                   <div className='product-info'>
                       <div className='product-name'>
                            <p>Product Name</p>
                       </div>
                       <div className='product-btn'>
                            <button className='btn'>View Now</button>
                       </div>
                   </div>
               </div>
               <div className='product-wrapper'>
                   <div className='product-top'>
                       <div className='product-label'>
                            <p>New</p>
                       </div>
                       <div className='product-wishlist'>
                            <Link to='#' className='heart-btn'>
                                <FiIcons.FiHeart />
                            </Link> 
                       </div>
                   </div>
                   <div className='product-img-section'>
                       <div className='product-img'>
                            <img src={img3} width="206" height="206" /> 
                       </div>
                   </div>
                   <div className='product-info'>
                       <div className='product-name'>
                            <p>Product Name</p>
                       </div>
                       <div className='product-btn'>
                            <Link to="/info"><button className='btn'>View Now</button></Link>
                       </div>
                   </div>
               </div>
               <div className='product-wrapper'>
                   <div className='product-top'>
                       <div className='product-label'>
                            <p>New</p>
                       </div>
                       <div className='product-wishlist'>
                            <Link to='#' className='heart-btn'>
                                <FiIcons.FiHeart />
                            </Link> 
                       </div>
                   </div>
                   <div className='product-img-section'>
                       <div className='product-img'>
                            <img src={img4} width="206" height="206" /> 
                       </div>
                   </div>
                   <div className='product-info'>
                       <div className='product-name'>
                            <p>Product Name</p>
                       </div>
                       <div className='product-btn'>
                            <button className='btn'>View Now</button>
                       </div>
                   </div>
               </div>
           </div> 
        </>
    )
}

export default Products
