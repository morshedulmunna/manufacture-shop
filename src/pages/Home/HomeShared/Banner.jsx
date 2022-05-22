import React from "react";
import "./Banner.css";
import banner from "../../../assets/images/banner.jpg";
import { GlobalCSS } from "../../../helper";

const Banner = () => {
  return (
    <div id="banner">
      <div className={`${GlobalCSS.container} `}>
        <div className={styles.bannerText}>
          <h1 className="text-5xl font-bold text-[#E4550C]">
            Welcome to Alliance Inc Tools
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;

const styles = {
  bannerText: `flex items-center justify-center h-[100vh] flex-col`,
};
