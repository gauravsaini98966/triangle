import React from "react";
import "../Style/Client_love.css";
import double from "../Images/client2.png";
import Star from "../Images/starr.webp";
import Avtar from "../Images/avatar.webp";
import Slider from "react-slick";


function ClientLove() {

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow:1 ,
  //   slidesToScroll: 1,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: true
  //       }
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 2
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
        <div className="Client_top">
          <div className="Client_top1">
            <h3>Client’s love</h3>
            <h2>Love from Clients</h2>
          </div>
        </div>

        
<Slider {...settings}>
        <div className="Client_bottom">

            <div className="Client_bottom1">
              <img src={double} alt="not found" />
              <p>
                They have designed my b2b eCommerce website for my multi-vendor
                eCommerce website. Triangle Space is the best multi-vendor
                eCommerce website developer in Hisar
              </p>

              <div className="Client_bottom_star">
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
              </div>
            </div>
            {/* <div className="Owner">
              <img src={Avtar} alt="" />
              <h2>Narendra Gupt</h2>
              <h3>Founder</h3>
            </div> */}

            <div className="Client_bottom1">
              <img src={double} alt="not found" />
              <p>
                They have designed my b2b eCommerce website for my multi-vendor
                eCommerce website. Triangle Space is the best multi-vendor
                eCommerce website developer in Hisar
              </p>

              <div className="Client_bottom_star">
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
              </div>
            </div>
            {/* <div className="Owner">
              <img src={Avtar} alt="" />
              <h2>Narendra Gupt</h2>
              <h3>Founder</h3>
            </div> */}

            <div className="Client_bottom1">
              <img src={double} alt="not found" />
              <p>
                They have designed my b2b eCommerce website for my multi-vendor
                eCommerce website. Triangle Space is the best multi-vendor
                eCommerce website developer in Hisar
              </p>

              <div className="Client_bottom_star">
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
              </div>
            </div>
            {/* <div className="Owner">
              <img src={Avtar} alt="" />
              <h2>Narendra Gupt</h2>
              <h3>Founder</h3>
            </div> */}
          </div>
          </Slider>

    </>
  );
}

export default ClientLove;
