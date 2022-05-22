import React from "react";
import "./Banner.css";
import banner from "../../../assets/images/banner.jpg";
import { GlobalCSS } from "../../../helper";

const Banner = () => {
  return (
    <div id="banner">
      <div className="hero pt-48">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

const styles = {
  bannerText: `flex items-center justify-center h-[100vh] flex-col`,
};
