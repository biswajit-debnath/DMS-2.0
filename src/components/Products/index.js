import React, { useState } from 'react';
import * as FiIcons from 'react-icons/fi';
import * as FcIcons from "react-icons/fc";
import { Link } from 'react-router-dom';
import './index.css';
import img from '../../assets/burnfitness.png';
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
                                {heart ? <FcIcons.FcLike onClick={showHeart} /> : <FiIcons.FiHeart onClick={showHeart} /> }
                            </Link> 
                       </div>
                   </div>
                   <div className='product-img-section'>
                       <div className='product-img'>
                            <img src={img} width="276" height="276" /> 
                       </div>
                   </div>
                   <div className='product-info'>
                       <div className='product-name'>
                            <p>Product Name</p>
                       </div>
                       <div className='product-btn'>
                            <button className='btn'>View</button>
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
                            <img src={img} width="276" height="276" /> 
                       </div>
                   </div>
                   <div className='product-info'>
                       <div className='product-name'>
                            <p>Product Name</p>
                       </div>
                       <div className='product-btn'>
                            <button className='btn'>View</button>
                       </div>
                   </div>
               </div>
               <div className='product-wrapper'>
                   <div className='product-top'>
                       <div className='product-label'>
                            <p>New</p>
                       </div>
                       <div className='product-wishlist'>
                            <Link to='#' className='menu-bars'>
                                <FiIcons.FiHeart />
                            </Link> 
                       </div>
                   </div>
                   <div className='product-img-section'>
                       <div className='product-img'>
                            <img src={img} width="276" height="276" /> 
                       </div>
                   </div>
                   <div className='product-info'>
                       <div className='product-name'>
                            <p>Product Name</p>
                       </div>
                       <div className='product-btn'>
                            <button className='btn'>View</button>
                       </div>
                   </div>
               </div>
               <div className='product-wrapper'>
                   <div className='product-top'>
                       <div className='product-label'>
                            <p>New</p>
                       </div>
                       <div className='product-wishlist'>
                            <Link to='#' className='menu-bars'>
                                <FiIcons.FiHeart />
                            </Link> 
                       </div>
                   </div>
                   <div className='product-img-section'>
                       <div className='product-img'>
                            <img src={img} width="276" height="276" /> 
                       </div>
                   </div>
                   <div className='product-info'>
                       <div className='product-name'>
                            <p>Product Name</p>
                       </div>
                       <div className='product-btn'>
                            <button className='btn'>View</button>
                       </div>
                   </div>
               </div>
           </div> 
        </>
    )
}

export default Products
