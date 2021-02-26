import React,{useState} from 'react'
import * as FiIcons from 'react-icons/fi';
import * as FcIcons from "react-icons/fc";
import { Link } from 'react-router-dom';
import '../../Products/index.css';
// import img from '../../../assets/burnfitness.png';
import img1 from '../../../assets/product1.png';
// import img2 from '../../assets/product2.png';
// import img3 from '../../assets/product3.png';
// import img4 from '../../assets/product4.png';
// import img5 from '../../assets/product5.png';
// import { IconContext } from 'react-icons';

export default function Card({name,img}) {
    const [heart, setHeart] = useState(false);
    const showHeart = () => {
        setHeart(!heart);
        
    }

    return (
        <div className='product-wrapper'>
                   <div className='product-top'>
                       <div className='product-label'>
                            <p>New</p>
                       </div>
                       <div className='product-wishlist'>
                            <Link to='#' className='heart-btn'>
                                {heart ? <FcIcons.FcLike onClick={showHeart} /> 
                                        : <FiIcons.FiHeart onClick={showHeart} /> }
                            </Link> 
                       </div>
                   </div>
                   <div className='product-img-section'>
                       <div className='product-img'>
                            <img src={img} width="206" height="206" /> 
                       </div>
                   </div>
                   <div className='product-info'>
                       <div className='product-name'>
                            <p>{name}</p>
                       </div>
                       <div className='product-btn'>
                            <button className='btn'>View Now</button>
                       </div>
                   </div>
               </div>
    )
}
