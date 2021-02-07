import React, { useState,useEffect } from "react";
import './index.css';

const ImageSlider = () => { // takes in images as props
  
  const images = ['https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1458&q=80',
                  'https://images.unsplash.com/photo-1599561046251-bfb9465b4c44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1492&q=80',
                  'https://images.unsplash.com/photo-1599423300746-b62533397364?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'
]  
  const [index, setIndex] = useState(0); // create state to keep track of images index, set the default index to 0

  const slideRight = () => {
    setIndex((index + 1) % images.length); // increases index by 1
  };

  const slideLeft = () => {
    const nextIndex = index - 1;
    if (nextIndex < 0) {
      setIndex(images.length - 1); // returns last index of images array if index is less than 0
    } else {
      setIndex(nextIndex);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
        slideLeft();
    }, 5000);
     return () => clearInterval(interval);
  }, [slideLeft]);

  return (
    images.length > 0 && (
      <div>
        {/* <button onClick={slideLeft}>{"<"}</button> */}
        <img className='banner-img' src={images[index]} alt={index} />
        {/* <button onClick={slideRight}>{">"}</button> */}
      </div>
    )
  );
};

export default ImageSlider;