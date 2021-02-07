import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as FiIcons from 'react-icons/fi';
import * as BsiIcons from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './index.css';

function Navbar() {
    return (
        <>
            <div className="Navbar">
                <div className="logo">
                    <h2>DMSNE</h2>
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
                        <FaIcons.FaUser />
                        </Link>
                    </div>
                    <div className="wishlist">
                    <Link to='#' className='menu-bars'>
                        <FiIcons.FiHeart />
                    </Link>
                    </div>
                    <div className="bag">
                        <Link to='#' className='menu-bars'>
                        <FaIcons.FaWeightHanging />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
