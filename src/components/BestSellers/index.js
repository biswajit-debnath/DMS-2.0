import React from "react";
import "./BestSellerComponent.css";

function BestSellerComponent() {
  return (
    <div className="bestS_parent">
      <div className="bestS_childBottom_parent">
        <div className="bestS_childBottom"></div>

        <div className="bestS_childBottom"></div>
      </div>

      <div className="bestS_childTop">
        <div className="bestS_childTop_child">
          <div id="bestS-sa">
                <p>SA</p>
          </div>

          <div id="bestS-le">
                <p>LE</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestSellerComponent;
