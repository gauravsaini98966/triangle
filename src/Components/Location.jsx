import React from 'react'
import { CgMail } from "react-icons/cg";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import {Location} from "../Data/Location_Data"
import { IoCall } from "react-icons/io5";
function Location() {
  return (
    <div className='Location'>


        <div className='Location1'>{
            Location.map((product,index)=>{
                  return(
                    <div className='' key={index}>
                        <div className=''>
                        
                        </div>

                    </div>
                  )
            })

        }


        </div>



      <div>

     </div>




        
    </div>
  )
}

export default Location