import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

// import "../Style/clientLove.css"

import { Client_top } from "../Data/Client_Data";
import { Client_bottom } from "../Data/Client_Data";
import double from "../Images/client2.png";




function ClientLove() {



  return (
    <div className="Client">
      <div className="Client_top">
        {Client_top.map((product, index) => {
          return (
            <div key={index} className="Client_top1">
              <h3>{product.name}</h3>
              <h2>{product.name2}</h2>
            </div>
          );
        })}
      </div>

      <div>
        <div className="Client_bottom">
          {Client_bottom.map((product, index) => {
            return (
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide><div className="" key={index}>
                  <div className="Client_bottom1">
                    <img src={double} alt="not found" />
                    <p>They have designed my b2b eCommerce website for my multi-vendor eCommerce website. Triangle Space is the best multi-vendor eCommerce website developer  in Hisar.</p>
                    <div className="Client_bottom_star">
                      {product.img2.map((star, starindex) => (
                        <img key={starindex} src={star} alt="" />
                      ))}
                    </div>
                  </div>
                  <div className="Owner">
                    <img src={product.img3} alt="" />
                    <h2>Narendra Gupta</h2>
                    <h3>Founder</h3>
                  </div>
                </div></SwiperSlide>
                <SwiperSlide><div className="" key={index}>
                  <div className="Client_bottom1">
                    <img src={product.img} alt="not found" />
                    <p>{product.p}</p>

                    <div className="Client_bottom_star">
                      {product.img2.map((star, starindex) => (
                        <img key={starindex} src={star} alt="" />
                      ))}
                    </div>
                  </div>
                  <div className="Owner">
                    <img src={product.img3} alt="" />
                    <h2>Anant Maurya</h2>
                    <h3>CO Founder</h3>
                  </div>
                </div></SwiperSlide>


                <SwiperSlide><div className="" key={index}>
                  <div className="Client_bottom1">
                    <img src={product.img} alt="not found" />
                    <p>{product.p}</p>

                    <div className="Client_bottom_star">
                      {product.img2.map((star, starindex) => (
                        <img key={starindex} src={star} alt="" />
                      ))}
                    </div>
                  </div>
                  <div className="Owner">
                    <img src={product.img3} alt="" />
                    <h2>Chandan Yadav</h2>
                    <h3>Engineer</h3>
                  </div>
                </div></SwiperSlide>

              </Swiper>




            );
          })}
        </div>
      </div>
    </div>
  );
}


export default ClientLove;