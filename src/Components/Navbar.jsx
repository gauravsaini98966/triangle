import React, { useState } from "react";
import { Navbar_logo } from "../Data/Navbar";
import "../Style/Style.css";
import { Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
function Navbar() {
  const [showServices, setShowServices] = useState(false);
  const [toggle, setToggle] = useState(false);

  const handleMouseOver = () => {
    setShowServices(true);
  };

  const handleMouseOut = () => {
    setShowServices(false);
  };
  function Click() {
    setToggle(!toggle);
  }
  return (
    <div className="Navbar">
      <div className="Navbar_logo">
        {Navbar_logo.map((Product, index) => {
          return (
            <div className="Navbar_logo_1" key={index}>
              <Link to="/">
                <img src={Product.img} alt="" />
              </Link>
            </div>
          );
        })}
      </div>

      <div className="Navmenu_full">
        <div className="Navmenu">
          <ul>
            {showServices && (
              <div className="Navmenu_servises">
                <div className="Navmenu_servises1">
                  <Link>
                    <span>Website Development</span>
                  </Link>
                  <hr></hr>
                </div>
                <div className="Navmenu_servises2">
                  <Link>
                    <span>App Development</span>
                  </Link>
                  <hr></hr>
                </div>
                <div className="Navmenu_servises3">
                  <Link>
                    <span>Digital Marketing</span>
                  </Link>
                  <hr></hr>
                </div>
              </div>
            )}
            <li>
              <Link to="/" className="Navmenu_Navlink">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="Navmenu_Navlink">
                About
              </Link>
            </li>

            <li
              className="Navmenu_Navlink_arrow"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              <Link
                to="/services"
                className="Navmenu_Navlink Navlink_Services-2"
              >
                Services
              </Link>
            </li>

            <li>
              <Link to="/portfolio" className="Navmenu_Navlink">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/blogs" className="Navmenu_Navlink">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="Navmenu_Navlink">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="Navbar_button">
          <button>Book Consultation</button>
          <Link>
            <i className="bx bx-search-alt-2"></i>
          </Link>
        </div>
      </div>

      {/* -----------Mobile View------------- */}

      <div className="Mobile">
        <div className="Mobile_icon" onClick={Click}>
          <span>
            <IoIosMenu />
          </span>
          <h3>Menu</h3>
        </div>

        <div className={`Mobile_close_menu`}>
          <div className="Navmenu_Mobile">
            <ul className={` ${toggle ? "open" : "close"}`}>
             
              <li>
                <Link onClick={Click} to="/" className="Navmenu_Navlink Mobile_Navlink" >
                  Home
                </Link>
              </li>
              <li>
                <Link onClick={Click} to="/about" className="Navmenu_Navlink Mobile_Navlink">
                  About
                </Link>
              </li>

              <li
                className="Navmenu_Navlink_arrow"
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <Link onClick={Click}
                  to="/services"
                  className="Navmenu_Navlink Navlink_Services-2 Mobile_Navlink"
                >
                  Services
                </Link>{" "}
             
              </li>

              <li>
                <Link onClick={Click} to="/portfolio" className="Navmenu_Navlink Mobile_Navlink">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link onClick={Click} to="/blogs" className="Navmenu_Navlink Mobile_Navlink">
                  Blog
                </Link>
              </li>
              <li>
                <Link onClick={Click} to="/contact-us Mobile_Navlink" className="Navmenu_Navlink">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link onClick={Click} to="/" className="Navmenu_Navlink Mobile_Navlink">
                  Book Consultation
                </Link>
              </li>

              <li><div className="Nav_Searchtop">
                <div className=" Nav_Search  ">
                  <input placeholder="Search...." type="text" />
                <button><span><IoSearchOutline /></span></button>  
                </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;


