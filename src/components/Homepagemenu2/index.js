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
            <div className='menu'>
                {/* <div className='menu-heading'>
                    <p className='menu-name'><span className='menu-name-span'>-</span>PRINTING SERVICES</p>
                    <p className='menu-view'>View All</p>
                </div> */}
                <div className="menu-heading">
                    <div className='menu-heading-bold'>
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
                <div className='menu-products'>
                    <div className='menu-product'>
                        <div className='menu-product-img'>
                                <img src={img1} width="303.84" height="276" />
                            </div>
                            <div className='menu-product-name'>
                                <p>Product Name</p>
                            </div>
                        <div className='manu-product-btn'>
                            <button className='menu-btn'>VIEW NOW</button>
                        </div>
                    </div>
                    <div className='menu-product'>
                        
                            <div className='menu-product-img'>
                                <img src={img2} width="303.84" height="276" />
                            </div>
                        
                        <div className='menu-product-name'>
                            <p>Product Name</p>
                        </div>
                        <div className='manu-product-btn'>
                            <button className='menu-btn'>VIEW NOW</button>
                        </div>
                    </div>
                    <div className='menu-product'>
                        
                            <div className='menu-product-img'>
                                <img src={img3} width="303.84" height="276" />
                            </div>
                        
                        <div className='menu-product-name'>
                            <p>Product Name</p>
                        </div>
                        <div className='manu-product-btn'>
                            <button className='menu-btn'>VIEW NOW</button>
                        </div>
                    </div>
                    <div className='menu-product'>
                        
                            <div className='menu-product-img'>
                                <img src={img4} width="303.84" height="276" />
                            </div>
                        
                        <div className='menu-product-name'>
                            <p>Product Name</p>
                        </div>
                        <div className='manu-product-btn'>
                            <button className='menu-btn'>VIEW NOW</button>
                        </div>
                    </div>
                    
                </div>
            </div>        
        </>
    )
}

export default Homepagemenu2
