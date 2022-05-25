import React from "react";
import "./Banner.css";
// import banner from "../../../assets/images/banner.jpg";
// import { GlobalCSS } from "../../../helper";

const Banner = () => {
  return (
    <div id="banner">
      <div className="hero lg:pt-36 pt-0 md:pt-12">
        <div className="hero-content text-center">
          <div className="">
            <h1 className="text-5xl font-bold text-white">
              Top Tools manufacturer Company in the World
            </h1>
            <p className="py-6 text-white">
              We Need Help on Tools Importing from Us? Alliance Inc Recommend
              You The Best Chinese Tools Shippipment
            </p>
            <a href="#contact">
              <button className="btn btn-primary">
                Get Started Your Business With Us
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

// const styles = {
//   bannerText: `flex items-center justify-center h-[100vh] flex-col`,
// };
