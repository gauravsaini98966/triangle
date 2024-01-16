import React from 'react'
import {Navbar_logo} from '../Data/Navbar';
import { Navbar_Data } from '../Data/Navbar';
import { NavLink } from "react-router-dom";
import '../Style/Style.css'

function Navbar() {
  return (
    <div className='Navbar'>
        <div className='Navbar_logo'>{

            Navbar_logo.map((Product,index)=>{
                return(
                    <div className='Navbar_logo_1' key={index}>
                        <a href='/'>
                        <img src={Product.img}/>
                        </a>
                   
                </div>

                )
                
            })
        }
             
        </div>

        <div className='Navmenu_full'>{
            Navbar_Data.map((Product,index)=>{
                return(
                    <div key={index} className='Navmenu'>
                      <ul >
                        <li><a className='Navmenu_Navlink' href='/'>{Product.li}</a>
                        </li>
                        
                      </ul>
                    </div>

                )
            })
            
            }
 <div className='Navbar_button'>
            <button>Book Consultation</button>
            <i class='bx bx-search-alt-2'></i>

        </div>

        </div>

       
       

    </div>
  )
}

export default Navbar