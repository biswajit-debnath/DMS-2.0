import React,{useState} from "react";
import "./index.css";

import {
  Magnifier,
  GlassMagnifier,
  SideBySideMagnifier,
  PictureInPictureMagnifier,
  MOUSE_ACTIVATION,
  TOUCH_ACTIVATION
} from "react-image-magnifiers";
import "./index.css";

import paperCutterImg from '../../assets/paper cutter_min.jpg';
import paperCutterImgZoomed from '../../assets/paper cutter1.jpg';




import star_hollow from "../../star_hollow.svg";

import star_filled from "../../star_filled.svg";

function Info() {
  const [currentImage, setCurrentImage] = useState(paperCutterImg);
  const [currentZoomedImage, setCurrentZoomedImage] = useState(paperCutterImgZoomed);
 
  const changeImage = (clickedImage) => {
    setCurrentImage(clickedImage);
    setCurrentZoomedImage(clickedImage);
  }



  function hollowStars(params) {
    
    var x = Array(params).fill().map((curr, i)=>{
     return <img src={star_filled} className="ratingStars" />
  })
    var y = Array(5-params).fill().map((curr, i)=>{
     return <img src={star_hollow} className="ratingStars" />
    })
    
       
      return x.concat(y);
    ;
  }

  return (
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
            onClick={()=>changeImage("https://5.imimg.com/data5/MW/YR/MY-2818798/cp-a4-size-metal-grip-hand-held-paper-cutter-500x500.jpg")}
          ></img>
          <img
            className="productMain-imgSmall"
            id="productMain-is2"
            src="https://img2.exportersindia.com/product_images/bc-full/2018/12/5968895/paper-cutter-1544000488-4534647.jpeg"
            onClick={()=>changeImage("https://img2.exportersindia.com/product_images/bc-full/2018/12/5968895/paper-cutter-1544000488-4534647.jpeg")}
          ></img>
          <img
            className="productMain-imgSmall"
            id="productMain-is3"
            src="https://rukminim1.flixcart.com/image/352/352/jmqmpow0/paper-cutter/t/4/u/guillotine-12-inch-a4-size-guillotine-paper-cutter-loggas-original-imaf9ht8qcfdkvty.jpeg?q=70"
            onClick={()=>changeImage("https://rukminim1.flixcart.com/image/352/352/jmqmpow0/paper-cutter/t/4/u/guillotine-12-inch-a4-size-guillotine-paper-cutter-loggas-original-imaf9ht8qcfdkvty.jpeg?q=70")}
          ></img>
        </div>
      </div>

      <div className="productMain_Right">
        <div>
          <h1>JD9 Paper Cutter A4 Heavy Duty Professional Paper Trimmer</h1>
          <div className="prc-2ndLine">
            <h3>
              {" "}
              RATINGS:
              {
                
                hollowStars(4)
              }
              


            </h3>
            <p className="blueFont" id="ratings">
              {" "}
              200 Ratings
            </p>
            <p
              style={{
                textAlign: "center",
              }}
            >
              |
            </p>
            <p className="blueFont" id="comments">
              10 Comments
            </p>
          </div>
          <h3 className="prod_desc_info">Product Description</h3>
          <div className="prc-4thLine">
            <p className="blueFont">BRAND: JD9</p>
            <p className="blueFont">CATEGORY: PRINTING MATERIALS</p>
          </div>

          <div className="productInfo">
            High Quality:This paper cutter is made of high-quality steel and
            plastic. The durable solid metal base and sturdy blades make
            accurate and straight cuts, also easily portable and never deformed
            nor broken. paper cutter a4 paper cutter paper trimmer
          </div>

          <p className="originalPrice">
            M.R.P : &nbsp; &nbsp;<del>RS 1999</del>{" "}
          </p>
          <p className="ourPrice">
            Our Price: RS 899 <span>(50% OFF)</span>
          </p>

          <button className="btnContactUs">CONTACT US</button>
          <br></br>
          <hr></hr>
        </div>

        <div className="prod-customerReview">
          <h3>Customer Reviews (10)</h3>
          <div className="prod-singleReview">
            <p>
              The product quality is really good. It looks the same as in the
              images provided. There were no color difference in the product
              that was delivered. I am very much satisfied with the product
            </p>
            <div className="prod-reviewDetails">
              <div className="prod-reviewDetails-nameDate">
                <p>Vineeth Nambiar |&nbsp;</p>
                <p> 11 Dec 2020</p>
              </div>
              <div>
                <p></p>
                <p></p>
              </div>
            </div>
          </div>
          <hr></hr>
        </div>
      </div>
    </div>
  );
}

export default Info;
