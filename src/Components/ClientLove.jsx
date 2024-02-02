import React from "react";
import { Client_top } from "../Data/Client_Data";
import { Client_bottom } from "../Data/Client_Data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
              <div className="" key={index}>
                {/* <Slider {...settings}> */}
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

                {/* </Slider> */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ClientLove;
