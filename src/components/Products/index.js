import React, { useState,useEffect } from 'react';
import Card from "../Reusable/Product Card/Card";
import { Link } from "react-router-dom";

function Products({items,isLoaded}) {

    if(!isLoaded)
        return (<div>Loading</div>)
    if(items.length === 0)
        return (<div>No items found</div>)
    return (
        <>
           <div className='products'>
           {items.map(element=>
                <Link to={`/info/${element.category}/${element.id}`} key={element.id} >
                    <Card name={element.name} img={element.img} />
                </Link>
           )}
           </div> 
        </>
    )
}

export default Products
