import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import top_arrow from "../Images/top_arrow.png";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineVerticalAlignTop } from "react-icons/md";

function Fother() {
  return (
    <div className="Fother">
      <div className="Fothers">
        <div className="Fothers_1">
        <span className="Fother_arrow_icon"><MdOutlineVerticalAlignTop /></span>
        </div>
        <h2>Copyright ©2022. Triangle Space Pvt. Ltd.</h2>
      </div>

      <div className="Fothers_2">
        <ul>
          <li>
            <a className="" href="">
              Home
            </a>
          </li>
          <li  className="" >
            <a>Portfolio</a>
          </li>
          <li  className="" >
            <a>Services</a>
          </li>
          <li  className="" >
            <a>Contact Us</a>
          </li>
        </ul>

        <div className="Fothers_3">
          <div className="Fothers_3_whatup">
            <FaWhatsapp />
          </div>
          <h2>Chat With us</h2>
        </div>
      </div>
    </div>
  );
}

export default Fother;
