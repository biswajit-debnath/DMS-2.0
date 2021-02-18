import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as FiIcons from 'react-icons/fi';
import * as BsiIcons from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './index.css';

import product from '../../assets/product.svg';
import heart from '../../assets/heart.svg';


function Navbar() {
    return (
        <>
            <div className="Navbar">
                <div className="logo">
                    <Link className="linkStyle" to="/"><h2>DMSNE2</h2></Link>
                </div>
                <div className="Search-Bar">
                    <form action="#">
                        <input class="search__input" type="text" placeholder="  Search..."  name="search" />
                        {/* <button type="submit">Submit</button> */}
                    </form>
                </div>
                <div className="nav-wrapper">
                    <div className="profile" >
                        <Link to='#' className='menu-bars'>
                            <div>
                            <img src={product} />
                            <p>Product</p>
                            </div>
                        </Link>
                    </div>
                    <div className="wishlist">
                    <Link to='#' className='menu-bars'>
                        <div>
                        <img src={heart} />
                        <p>Wishlist</p>
                        </div>
                    </Link>
                    </div>
                   
                </div>
            </div>
        </>
    )
}

export default Navbar;
