import React from 'react'
import {Navbar_logo} from '../Data/Navbar';
import { Navbar_Data } from '../Data/Navbar';
import '../Style/Style.css';
import { Link } from 'react-router-dom';
import { FaChevronDown } from "react-icons/fa";
function Navbar() {
  return (
    <div className='Navbar'>
        <div className='Navbar_logo'>{

            Navbar_logo.map((Product,index)=>{
                return(
                    <div className='Navbar_logo_1' key={index}>
                        
                        
                   
                   <Link to=""> <img src={Product.img}/></Link>
                </div>

                )
                
            })
        }
             
        </div>

        <div className='Navmenu_full'>
            
                    <div  className='Navmenu'>
                      <ul >
                        <li> <Link  className='Navmenu_Navlink'>Home</Link></li>
                        <li> <Link  className='Navmenu_Navlink'>About</Link></li>
                        <li className='Navmenu_Navlink_arrow'> <Link  className='Navmenu_Navlink'>Services</Link> <span><FaChevronDown /></span></li>
                        <li> <Link  className='Navmenu_Navlink'>Portfolio</Link></li>
                        <li> <Link  className='Navmenu_Navlink'>Blog</Link></li>
                        <li> <Link  className='Navmenu_Navlink'>Contact Us</Link></li>
                        
                      </ul>
                    </div>

          
            
 <div className='Navbar_button'>
            <button>Book Consultation</button>
          <Link> <i class='bx bx-search-alt-2'></i></Link> 

        </div>

        </div>

       
       

    </div>
  )
}

export default Navbar