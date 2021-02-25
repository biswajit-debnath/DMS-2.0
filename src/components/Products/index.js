import React, { useState,useEffect } from 'react';
import Card from "../Reusable/Product Card/Card";
import { Link } from "react-router-dom";

function Products({items,isLoaded,props}) {

    if(!isLoaded)
        return (<div>Loading</div>)
    return (
        <>
           <div className='products'>
           {items.map(element=>
                <Link to={`/info/${props.location.pathname.split("/")[2]}/${element.id}`} key={element.id} >
                    <Card name={element.name} img={element.img} />
                </Link>
           )}
               {/*
               
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
               </div> */}
           </div> 
        </>
    )
}

export default Products
