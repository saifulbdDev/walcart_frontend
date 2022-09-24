import React from "react";
import Image from "next/image";
import banner3 from "../assets/Banner/image3.png";
import banner4 from "../assets/Banner/image4.png";
import banner5 from "../assets/Banner/image5.png";
const Banner = () => {
  return (
    <section id="banner-saction">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="img-box">
              <Image src={banner4} alt="banner4" />
            </div>
            <div className="img-box img-box-2">
              <Image src={banner5} alt="banner5" />
            </div>
          </div>
          <div className="col-6">
            <div className="img-box">
              <Image src={banner3} alt="banner3" className="img" />
            </div>
          </div>
          <div className="col-3">
            <div className="img-box right-box ">
              <Image src={banner4} alt="banner4" />
            </div>
            <div className="img-box img-box-2 right-box">
              <Image src={banner5} alt="banner5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Banner;
