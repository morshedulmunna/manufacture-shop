import React from "react";
import banner from "../../../assets/images/Tools-from.jpg";
import { GlobalCSS } from "../../../helper";

const Banner = () => {
  return (
    <>
      <div className={`${styles.wrapper} ${GlobalCSS.container}`}>
        <div className={styles.bannerText}>
          <h1>Hello</h1>
        </div>
        <div className={styles.bannerImage}>
          <img className="rounded" src={banner} alt="Banner Img" />
        </div>
      </div>
    </>
  );
};

export default Banner;

const styles = {
  wrapper: `flex items-center justify-between mt-12`,
  bannerText: `w-[40%] h-full`,
  bannerImage: "w-[60%] h-full ",
};
