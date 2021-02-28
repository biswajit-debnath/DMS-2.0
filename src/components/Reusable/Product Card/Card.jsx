import React,{useState} from 'react'
import * as FiIcons from 'react-icons/fi';
import * as FcIcons from "react-icons/fc";
import { Link } from 'react-router-dom';
import '../../Products/index.css';
// import img from '../../../assets/burnfitness.png';
import img1 from '../../../assets/product1.png';

export default function Card({name,img}) {
    const [heart, setHeart] = useState(false);

    
    const showHeart = () => {
        localStorage.
        setHeart(!heart);
    

    // x=[[11, 12, 13, 14, 15,16],
    //    [21, 22, 23, 24, 25,26],
    //    [31, 32, 33, 34, 35,36],
    //    [41, 42, 43, 44, 45,46],
    //    [51, 52, 53, 54, 55,56],
    //    [61, 62, 63, 64, 65,66]]

    x=[[-1 ,-1 ,0 ,-9 ,-2 ,-2],
        [-2 ,-1 ,-6 ,-8 ,-2 ,-5],
        [-1 ,-1 ,-1 ,-2 ,-3 ,-4],
        [-1 ,-9 ,-2 ,-4 ,-4 ,-5],
        [-7 ,-3 ,-3 ,-2 ,-9 ,-9],
        [-1 ,-3 ,-1 ,-2 ,-4 ,-5]]
        
        let hGlassM=[[],[],[],[]];
        let tempSubArray=[[],[],[]];
        let maxHourGlassSum=Number.NEGATIVE_INFINITY;

        for(let hGlassMIty=0; hGlassMIty<4;hGlassMIty++){
            for(let outArrayItx=0; outArrayItx<4;outArrayItx++){ 
                tempSubArray=[[],[],[]];
                for(let givenArrayy=hGlassMIty, i=0; givenArrayy<hGlassMIty+3;givenArrayy++, i++){
                    for(let givenArrayx=outArrayItx, j=0; givenArrayx<outArrayItx+3;givenArrayx++, j++){
                        tempSubArray[i][j]= x[givenArrayy][givenArrayx];   
                    }
                }
                hGlassM[hGlassMIty][outArrayItx]= tempSubArray[0][0]+tempSubArray[0][1]+tempSubArray[0][2]+tempSubArray[1][1]+tempSubArray[2][0]+tempSubArray[2][1]+tempSubArray[2][2];
                if(hGlassM[hGlassMIty][outArrayItx]>maxHourGlassSum)
                    maxHourGlassSum=hGlassM[hGlassMIty][outArrayItx];
            }
        }
    
    
    
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
