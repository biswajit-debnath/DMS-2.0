import React from 'react';
import * as FiIcons from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './index.css';
import img from '../../assets/burnfitness.png';

function Homepagemenu() {
    return (
        <>
            <div className='menu'>
                <div className='menu-heading'>
                    <p className='menu-name'><span className='menu-name-span'>-</span>PRINTING SERVICES</p>
                    <p className='menu-view'>View All</p>
                </div>
                <div className='menu-products'>
                    <div className='menu-product'>
                        <div className='menu-product-img'>
                            <img src={img} width="276" height="276" />
                        </div>
                        <div className='menu-product-name'>
                            <p>Product Name</p>
                        </div>
                        <div className='manu-product-btn'>
                            <button className='menu-btn'>View</button>
                        </div>
                    </div>
                    <div className='menu-product'>
                        <div className='menu-product-img'>
                            <img src={img} width="276" height="276" />
                        </div>
                        <div className='menu-product-name'>
                            <p>Product Name</p>
                        </div>
                        <div className='manu-product-btn'>
                            <button className='menu-btn'>View</button>
                        </div>
                    </div>
                    <div className='menu-product'>
                        <div className='menu-product-img'>
                            <img src={img} width="276" height="276" />
                        </div>
                        <div className='menu-product-name'>
                            <p>Product Name</p>
                        </div>
                        <div className='manu-product-btn'>
                            <button className='menu-btn'>View</button>
                        </div>
                    </div>
                    
                </div>
            </div>        
        </>
    )
}

export default Homepagemenu
