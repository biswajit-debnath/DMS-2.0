import React, { useState,useEffect } from "react";
import "./index.css";
import { Link } from "react-router-dom";

import {
  SideBySideMagnifier,
} from "react-image-magnifiers";
import "./index.css";

import paperCutterImg from "../../assets/paper cutter_min.jpg";
import paperCutterImgZoomed from "../../assets/paper cutter1.jpg";

import star_hollow from "../../star_hollow.svg";

import star_filled from "../../star_filled.svg";
import Homepagemenu from '../Homepagemenu';

function Info({data,isLoaded}) {
  const [currentImage, setCurrentImage] = useState('');
  const [currentZoomedImage, setCurrentZoomedImage] = useState('');

  // setCurrentImage(data.img);
  // console.log(currentImage);
  
  // let ratings = data.ratings;

  useEffect(()=> {
    setCurrentImage(data.img);
  })

  const changeImage = (clickedImage) => {
    setCurrentImage(clickedImage);
    setCurrentZoomedImage(clickedImage);
  };

  function hollowStars(params) {
    var x = Array(params)
      .fill()
      .map((curr, i) => {
        return <img src={star_filled} className="ratingStars" />;
      });
    var y = Array(5 - params)
      .fill()
      .map((curr, i) => {
        return <img src={star_hollow} className="ratingStars" />;
      });

    return x.concat(y);
  }
if(!isLoaded) return <div>Loading......</div>


  return (
    <>
    <div className="productMain_parent">
      <div class="productMain_left">
        <div className="productMain-img" id="productMain-il">
          <SideBySideMagnifier
            fillAvailableSpace={true}
            imageSrc={currentImage}
            imageAlt="Example"
            largeImageSrc={currentZoomedImage} // Optional
          />
        </div>
        <div className="productMain-divSmall">
          <img
            className="productMain-imgSmall"
            id="productMain-is1"
            src="https://5.imimg.com/data5/MW/YR/MY-2818798/cp-a4-size-metal-grip-hand-held-paper-cutter-500x500.jpg"
            onClick={() =>
              changeImage(
                "https://5.imimg.com/data5/MW/YR/MY-2818798/cp-a4-size-metal-grip-hand-held-paper-cutter-500x500.jpg"
              )
            }
          ></img>
          <img
            className="productMain-imgSmall"
            id="productMain-is2"
            src="https://img2.exportersindia.com/product_images/bc-full/2018/12/5968895/paper-cutter-1544000488-4534647.jpeg"
            onClick={() =>
              changeImage(
                "https://img2.exportersindia.com/product_images/bc-full/2018/12/5968895/paper-cutter-1544000488-4534647.jpeg"
              )
            }
          ></img>
          <img
            className="productMain-imgSmall"
            id="productMain-is3"
            src="https://rukminim1.flixcart.com/image/352/352/jmqmpow0/paper-cutter/t/4/u/guillotine-12-inch-a4-size-guillotine-paper-cutter-loggas-original-imaf9ht8qcfdkvty.jpeg?q=70"
            onClick={() =>
              changeImage(
                "https://rukminim1.flixcart.com/image/352/352/jmqmpow0/paper-cutter/t/4/u/guillotine-12-inch-a4-size-guillotine-paper-cutter-loggas-original-imaf9ht8qcfdkvty.jpeg?q=70"
              )
            }
          ></img>
        </div>
      </div>

      <div className="productMain_Right">
        <div>
          <h2 className="prod-heading">
            {data.name}
          </h2>
          <div className="prc-2ndLine">
            <h3>
              {" "}
              RATINGS:
              {hollowStars(4)}
            </h3>
            <div className="prc-2ndLine-left">
              <p className="blueFont" id="ratings">
                {" "}
                {data.total_ratings} Rating
              </p>
              <p
                style={{
                  textAlign: "center",
                  color:"#3858a2",
                  marginLeft:".2%",
                  marginRight:".2%"
                }}
              >
                |
              </p>
              <p className="blueFont" id="comments">
              {data.total_comment} Comment
              </p>
            </div>
          </div>
          <hr></hr>
          <h3 className="prod_desc_info">Product Description</h3>
          <div className="prc-4thLine">
            <p className="blueFont">
              BRAND: <span>{data.brand}</span>
            </p>
            <p className="blueFont">
              CATEGORY: <span>{data.category}</span>
            </p>
          </div>

          <div className="productInfo">
          {data.product_desc}
          </div>

          <p className="originalPrice">
            M.R.P : &nbsp; &nbsp;<del>{data.mrp}</del>{" "}
          </p>
          <p className="ourPrice">
            Our Price: RS 899 <span>({data.offer}% OFF)</span>
          </p>

          <button className="btnContactUs">CONTACT US</button>
          <br></br>
        </div>

        <div className="review-section">
          <hr className="after2ndline"></hr>
          <div className="prod-customerReview">
            <h3 className="prod-cust_review">Customer Reviews ({data.ratings})</h3>

            <div className="prod-singleReview">
              <p>
                {data.reviews.review1.desc}
              </p>
              <div className="prod-reviewDetails">
                <div className="prod-reviewDetails-nameDate">
                  <p>{data.reviews.review1.name} |&nbsp;</p>
                  <p> {data.reviews.review1.date}</p>
                </div>
                <div>
                  <p></p>
                  <p></p>
                </div>
              </div>
            </div>
            <hr className="prod-hr-reviews"></hr>
          </div>

          <div className="prod-singleReview">
            <p>
            {data.reviews.review2.desc}
            </p>
            <div className="prod-reviewDetails">
              <div className="prod-reviewDetails-nameDate">
                <p>{data.reviews.review2.name} |&nbsp;</p>
                <p> {data.reviews.review2.date}</p>
              </div>
              <div>
                <p></p>
                <p></p>
              </div>
            </div>
          </div>
          <hr className="prod-hr-reviews"></hr>
        </div>
      </div>
    </div>
    <Homepagemenu />
    </>
  );
}

export default Info;