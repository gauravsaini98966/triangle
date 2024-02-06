import React from "react";
import { Client_top } from "../Data/Client_Data";
import { Client_bottom } from "../Data/Client_Data";
// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import { Autoplay } from "swiper/core";

function ClientLove() {
  return (
    <>
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
        <div className="Client_bottom">
          {Client_bottom.map((product, index) => {
            return (
              <div className="" key={index}>
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
                  <h2>{product.name}</h2>
                  <h3>{product.position}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* <Swiper
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        rewind={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {Client_bottom.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="client-slider">
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
                <h2>{product.name}</h2>
                <h3>{product.position}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper> */}
    </>
  );
}

export default ClientLove;
