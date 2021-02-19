import React from 'react';
import * as FiIcons from 'react-icons/fi';
import * as BsIcons from "react-icons/bs";
import { Link } from 'react-router-dom';
import './homepagestyle.css';
import img1 from '../../assets/cup.png';
import img2 from '../../assets/printing paper.png';
import img3 from '../../assets/capFinal.png';
import heart from '../../assets/heart.png';


import { IconContext } from "react-icons";

function Homepagemenu() {
    return (
        <>
            <div className='menu'>
                <div className="menu-heading">
                    <div className='menu-heading-bold'>
                            <h1>PRINTING</h1>
                    <p>
                        <span>
                            <IconContext.Provider value={{ color: "#32436b", size: "50px" }}>
                                 <BsIcons.BsDash />
                            </IconContext.Provider>
                        </span>
                        PRINTING SERVICES
                    </p>
                    </div>
                    
                    <p className='menu-view'><Link className="linkStyle" to="/listing/Printing Service">View All</Link><span>
                            <IconContext.Provider value={{ color: "#32436b", size: "25px"}}>
                                 <FiIcons.FiArrowRight />
                            </IconContext.Provider>
                    </span></p>
                    
                </div>
                <div className='menu-products'>
                    <div className='menu-product'>
                        <div className='menu-product-img-background'>
                            <div className="heartImgContainer">
                                <img src={heart} className="heartImg"/>
                            </div>
                            <div className='menu-product-img'>
                                <img src={img1}  />
                            </div>
                            <div className='menu-product-name'>
                                <p>Sublimation Magic Mug</p>
                            </div>
                        </div>
                        <div className='manu-product-btn'>
                            <button className='menu-btn'>VIEW NOW</button>
                        </div>
                    </div>
                    <div className='menu-product'>
                        <div className='menu-product-img-background'>
                        <div className="heartImgContainer">

                            <img src={heart} className="heartImg"/>
                            </div>
                            <div className='menu-product-img'>
                                <img src={img2} />
                            </div>
                            <div className='menu-product-name'>
                                <p>Printing Paper</p>
                            </div>
                        </div>
                        <div className='manu-product-btn'>
                            <button className='menu-btn'>VIEW NOW</button>
                        </div>
                    </div>
                    <div className='menu-product'>
                        <div className='menu-product-img-background'>
                            <div className="heartImgContainer">
                            <img src={heart} className="heartImg"/>
                            </div>
                            <div className='menu-product-img'>
                                <img src={img3}  />
                            </div>
                            <div className='menu-product-name'>
                                <p>Sublimation Cap</p>
                            </div>
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

export default Homepagemenu
