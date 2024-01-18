import React from "react";
import { Contect_Data } from "../Data/Contect";

// import '../Style/Style.css'


function Contect() {
  return (
    <div className="Contect">
      <div className="Contect_left">
        <div className="Contect_left_1">
          <input type="text" placeholder="Email Address*" />
        </div>
        <div className="Contect_left_2">
          <input type="text" placeholder="Full Name*" required />
          <input type="text" placeholder="Contact Number*" />
        </div>

        <div className="Contect_left_3">
          <h2>
            Select Services <span>*</span>
          </h2>
          <div className="Contect_left_checkbox">
            <div className=" Contect_checkbox">
              <input type="checkbox" />
              <label>Website Development</label>
            </div>
            <div className=" Contect_checkbox">
              <input type="checkbox" />
              <label>Application Development</label>
            </div>
            <div className=" Contect_checkbox">
              <input type="checkbox" />
              <label>Local SEO</label>
            </div>
            <div className=" Contect_checkbox">
              <input type="checkbox" />
              <label>Digital Marketing</label>
            </div>
            <div className=" Contect_checkbox">
              <input type="checkbox" />
              <label>Social Media Management</label>
            </div>
          </div>

          <div className="Contect_textarea">
            <textarea  placeholder="Message" />
          </div>

          <div className="Contect_button">
            <button>Send Message</button>
          </div>
        </div>
      </div>

      <div className="Contect_right">
        <div className="Contect_right1">
          {Contect_Data.map((product, index) => {
            return (
              <div className="Contect_right2" key={index} >
                <h1>{product.h1}</h1>

                <div>
                  
                  {product.li && (
                    <ul className="Contect_right3">
                      {product.li.map((list, listIndex) => (
                        <li key={listIndex}>{list}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Contect;
