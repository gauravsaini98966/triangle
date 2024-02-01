import React from "react";
import { Blogs_Visa1 } from "../Data/Blogs_Visa_Data";
import {Blogs_Visa2} from "../Data/Blogs_Visa_Data"


function Blogs_Visa() {
  return (
    <div className="Blogs_Visa">
      <div className="Blogs_Visa_1">
        {Blogs_Visa1.map((Product, index) => {
          return(
          <div className="Blogs_Visa_left" key={index}>
            <h1>{Product.h1}</h1>
            <div className="Blogs_Visa_2">
              <div className="Blogs_Visa1" >
                <span>{Product.person}</span>
                <h2>{Product.name}</h2>
              </div>

              <div  className="Blogs_Visa1">
                <span>{Product.clock}</span>
                <h2>{Product.clock_time}</h2>
              </div>

              <div  className="Blogs_Visa1">
                <span>{Product.file}</span>
                <h2>{Product.file_name}</h2>
              </div>

              <div className="Blogs_Visa1">
                <span>{Product.Comment}</span>
                <h2>{Product.Comment_name}</h2>
              </div>
            </div>

            <p>{Product.p}</p>
            <div className="Blogs_Visa_button">
             <a> <button>{Product.button}</button></a>
             <span>{Product.button_icon}</span>
            </div>
          </div>
          )
          
        })}
      </div>
      <div className="Blog_right max-[250px]: py-5">
      <h2 className="text-sm">Search</h2>
        <div className="Blog_right_input flex ">
        <input className="  outline-none border-[1px] border-solid rounded-md py-2 transition duration-2000 focus:border-[#FE0000]" type="text"/>
        <button className="bg-[#FE0000] py-[10px] px-[22px] text-sm text-white">Search</button>

        </div>
        <div>{
          Blogs_Visa2.map((Product,index)=>{
            return(
              <div className="Blog_right_1" key={index}>
                <h1 className="text-[20px] py-[22px] text-black font-semibold">{Product.h1}</h1>
                <h2 className="text-[14px] text-[#4a4a4a] leading-[23px] hover:text-[#FE0000]">{Product.h2}</h2>
                <h2 className="text-[14px] text-[#4a4a4a] leading-[23px] hover:text-[#FE0000]">{Product.h3}</h2>
                <div className="Blog_right_2">
                  <p className="text-[14px] text-[#4a4a4a] leading-[23px] hover:text-[#FE0000]">{Product.p}</p>
                  <p className="text-[14px] text-[#4a4a4a] leading-[23px] hover:text-[#FE0000]">{Product.p}</p>
                  <p className="text-[14px] text-[#4a4a4a] leading-[23px] hover:text-[#FE0000]">{Product.p}</p>
                </div>
              </div>
            )
          })

          }
        </div>
      </div>
    </div>
  );
}

export default Blogs_Visa;
