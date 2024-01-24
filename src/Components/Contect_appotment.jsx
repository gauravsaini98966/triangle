import React from "react";
import { Contect_appotment_Data } from "../Data/contact/Contect_appotmentdata";
function Contect_appotment() {
  return (
    <div className="Contect_appotment">
      <div className="Contect_appotment_left">
        {Contect_appotment_Data.map((Product, index) => {
          return (
            <div key={index}>
              <h1>{Product.h1}</h1>
              <h2>{Product.h2}</h2>
              <div>
                <span>{Product.location}</span>
                <h3>{Product.location_name}</h3>
              </div>
              <h4>{Product.h4}</h4>
              <div></div>
            </div>
          );
        })}
      </div>

      <div></div>

      <div></div>
    </div>
  );
}

export default Contect_appotment;
