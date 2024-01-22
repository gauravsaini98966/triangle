import React, { useState } from "react";
import { Navbar_logo } from "../Data/Navbar";
import { Navbar_Data } from "../Data/Navbar";
import "../Style/Style.css";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { IoReorderThree } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
function Navbar() {

  const [showServices, setShowServices] = useState(false);

  const handleMouseOver = () => {
    setShowServices(true);
  };

  const handleMouseOut = () => {
    setShowServices(false);
  };
  return (
    <div className="Navbar">
      <div className="Navbar_logo">
        {Navbar_logo.map((Product, index) => {
          return (
            <div className="Navbar_logo_1" key={index}>
              <Link to="">
                {" "}
                <img src={Product.img} />
              </Link>
            </div>
          );
        })}
      </div>

      <div className="Navmenu_full">
        <div className="Navmenu">
          <ul>
          {showServices && (
            <div className="Navmenu_servises" >
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
             
              <Link to='/Home' className="Navmenu_Navlink">Home</Link>
            </li>
            <li>
            
              <Link to='/About' className="Navmenu_Navlink">About</Link>
            </li>

            <li
              className="Navmenu_Navlink_arrow"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
             
            >
              <Link to='/ServicesNavbar' className="Navmenu_Navlink Navlink_Services-2">Services</Link>{" "}
              <span>
                <FaChevronDown />
              </span>{" "}
            </li>

            <li>
            
              <Link to="/Portfolio_Navbar" className="Navmenu_Navlink">Portfolio</Link>
            </li>
            <li>
              
              <Link className="Navmenu_Navlink">Blog</Link>
            </li>
            <li>
              
              <Link to='/Contect_Navbar' className="Navmenu_Navlink">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div className="Navbar_button">
          <button>Book Consultation</button>
          <Link>
            {" "}
            <i class="bx bx-search-alt-2"></i>
          </Link>
        </div>
      </div>

     {/* -----------Mobile View------------- */}
{/* 
      <div className="Mobile">
        <div className="Mobile_icon">
          <span>
            <IoReorderThree />
          </span>

          <h3>Menu</h3>
        </div> */}

         {/* <div className='Mobile_close_menu'>
            
          <div  className='Navmenu'>
                      <ul >
                        <li> <Link  className='Navmenu_Navlink'>Home</Link></li>
                        <li> <Link  className='Navmenu_Navlink'>About</Link></li>
                        <li className='Navmenu_Navlink_arrow'> <Link  className='Navmenu_Navlink'>Services</Link> <span><FaPlus /></span></li>
                        <li> <Link  className='Navmenu_Navlink'>Portfolio</Link></li>
                        <li> <Link  className='Navmenu_Navlink'>Blog</Link></li>
                        <li> <Link  className='Navmenu_Navlink'>Contact Us</Link></li>
                        
                      </ul>
                    </div>

          
            
 <div className='Navbar_button'>
            <button>Book Consultation</button>
          <Link> <i class='bx bx-search-alt-2'></i></Link> 

        </div>



          </div>  */}
      {/* </div> */}
    </div>
  );
}

export default Navbar;
















// import React, { useState } from "react";
// import { Navbar_logo } from "../Data/Navbar";
// import { Navbar_Data } from "../Data/Navbar";
// import "../Style/Style.css";
// import { Link } from "react-router-dom";
// import { FaChevronDown } from "react-icons/fa";
// import { IoReorderThree } from "react-icons/io5";
// import { FaPlus } from "react-icons/fa6";


// import React, { useState } from "react";
// import { Navbar_logo } from "../Data/Navbar";
// import { Navbar_Data } from "../Data/Navbar";
// import "../Style/Style.css";
// import { Link } from "react-router-dom";
// import { FaChevronDown } from "react-icons/fa";
// import { IoReorderThree } from "react-icons/io5";
// import { FaPlus } from "react-icons/fa6";

// function Navbar() {
//   const [showServices, setShowServices] = useState(false);

//   const handleMouseOver = () => {
//     setShowServices(true);
//   };

//   const handleMouseOut = () => {
//     setShowServices(false);
//   };

//   return (
//     <div className="Navbar">
//       <div className="Navbar_logo">
//         {Navbar_logo.map((Product, index) => {
//           return (
//             <div className="Navbar_logo_1" key={index}>
//               <Link to="">
//                 <img src={Product.img} />
//               </Link>
//             </div>
//           );
//         })}
//       </div>

//       <div className="Navmenu_full">
//         <div className="Navmenu">
//           <ul>
//             {showServices && (
//               <div className="Navmenu_servises">
//                 <div className="Navmenu_servises1">
//                   <Link>
//                     <span>Website Development</span>
//                   </Link>
//                   <hr></hr>
//                 </div>
//                 <div className="Navmenu_servises2">
//                   <Link>
//                     <span>App Development</span>
//                   </Link>
//                   <hr></hr>
//                 </div>
//                 <div className="Navmenu_servises3">
//                   <Link>
//                     <span>Digital Marketing</span>
//                   </Link>
//                   <hr></hr>
//                 </div>
//               </div>
//             )}
//             <li>
//               <Link className="Navmenu_Navlink">Home</Link>
//             </li>
//             <li>
//               <Link className="Navmenu_Navlink">About</Link>
//             </li>

//             <li
//               className="Navmenu_Navlink_arrow"
//               onMouseOver={handleMouseOver}
//               onMouseOut={handleMouseOut}
//             >
//               <Link className="Navmenu_Navlink Navlink_Services-2">
//                 Services
//               </Link>{" "}
//               <span>
//                 <FaChevronDown />
//               </span>{" "}
//             </li>

//             <li>
//               <Link className="Navmenu_Navlink">Portfolio</Link>
//             </li>
//             <li>
//               <Link className="Navmenu_Navlink">Blog</Link>
//             </li>
//             <li>
//               <Link className="Navmenu_Navlink">Contact Us</Link>
//             </li>
//           </ul>
//         </div>

//         <div className="Navbar_button">
//           <button>Book Consultation</button>
//           <Link>
//             {" "}
//             <i className="bx bx-search-alt-2"></i>
//           </Link>
//         </div>
//       </div>

//       {/* -----------Mobile View------------- */}

//       {/* <div className="Mobile">
//         <div className="Mobile_icon">
//           <span>
//             <IoReorderThree />
//           </span>

//           <h3>Menu</h3>
//         </div>
//       </div> */}
//     </div>
//   );
// }

// export default Navbar;
