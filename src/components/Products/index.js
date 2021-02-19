import React, { useState,useEffect } from 'react';


import Card from "../Reusable/Product Card/Card";
import { db,storage,auth } from '../../config/firebase';


function Products(props) {

    const [items,setItems] = useState([]);
    const [isLoaded,setIsLoaded] = useState(false);

    useEffect( ()=>{
        let resData = {}
        // console.log(props.props.location.pathname.split("/")[2].toLowerCase());
        db.ref(props.props.location.pathname.split("/")[2].toLowerCase()).on("value", snap => {
            // setItems({...snap.val()})
            setItems(Object.values(snap.val()));
            console.log(Object.values(snap.val()));
            setIsLoaded(true);
        })
            // .then(res=>
            // setIsLoaded(true))       
        

    },[])
    if(!isLoaded)
        return (<div>Loading</div>)
    return (
        <>
           <div className='products'>
           {items.map(element=>
               <Card name={element.name} img={element.img} key={element.name} />

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
