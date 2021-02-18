import React from 'react';
import * as FiIcons from 'react-icons/fi';
import * as BsIcons from "react-icons/bs";
import { Link } from 'react-router-dom';
import './index.css';
import img from '../../assets/burnfitness.png';
import img1 from '../../assets/cabinet CPU.png';
import img2 from '../../assets/monitor.png';
import img3 from '../../assets/Keyboard2.png';
import img4 from '../../assets/hard drive.png';
import { IconContext } from "react-icons";

function Homepagemenu2() {
    return (
        <>
            <div className='menu2'>
                <div className="menu-heading2">
                    <div className='menu-heading-bold2'>
                            <h1>ACCESSORIES</h1>
                    <p>
                        <span>
                            <IconContext.Provider value={{ color: "#32436b", size: "50px" }}>
                                 <BsIcons.BsDash />
                            </IconContext.Provider>
                        </span>
                        IT & COMPUTER ACCESSORIES
                    </p>
                    </div>
                    <p className='menu-view2'>View All<span>
                            <IconContext.Provider value={{ color: "#32436b", size: "25px"}}>
                                 <FiIcons.FiArrowRight />
                            </IconContext.Provider>
                    </span></p>
                </div>
                <div className='menu-products2'>
                    <div className='menu-product2'>
                        <div className='menu-product-img2'>
                                <img src={img1} width="303.84" height="276" />
                            </div>
                            <div className='menu-product-name2'>
                                <p>Product Name</p>
                            </div>
                        <div className='manu-product-btn2'>
                            <button className='menu-btn2'>VIEW NOW</button>
                        </div>
                    </div>
                    <div className='menu-product2'>
                        
                            <div className='menu-product-img2'>
                                <img src={img2} width="303.84" height="276" />
                            </div>
                        
                        <div className='menu-product-name2'>
                            <p>Product Name</p>
                        </div>
                        <div className='manu-product-btn2'>
                            <button className='menu-btn2'>VIEW NOW</button>
                        </div>
                    </div>
                    <div className='menu-product2'>
                        
                            <div className='menu-product-img2'>
                                <img src={img3} width="303.84" height="276" />
                            </div>
                        
                        <div className='menu-product-name2'>
                            <p>Product Name</p>
                        </div>
                        <div className='manu-product-btn2'>
                            <button className='menu-btn2'>VIEW NOW</button>
                        </div>
                    </div>
                    <div className='menu-product2'>
                        
                            <div className='menu-product-img2'>
                                <img src={img4} width="303.84" height="276" />
                            </div>
                        
                        <div className='menu-product-name2'>
                            <p>Product Name</p>
                        </div>
                        <div className='manu-product-btn2'>
                            <button className='menu-btn2'>VIEW NOW</button>
                        </div>
                    </div>
                    
                </div>
            </div>        
        </>
    )
}

export default Homepagemenu2
