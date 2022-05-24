import React from "react";
import global from "../../../helper/globalCss";
import banner from "../../../assets/images/Tools-from.jpg";
import icons from "../../../assets/icons/listArrow.png";

const ImportingHelp = () => {
  return (
    <div className={`my-12 ${global.container}`}>
      <h1 className="text-5xl mb-3 font-bold text-center">
        We Need Help on Tools Importing from Us?
      </h1>
      <h1 className="text-3xl font-bold text-center text-primary">
        Alliance Inc Recommend You The Best Chinese Tools Shippipment
      </h1>
      <div className="flex  items-center justify-between flex-col-reverse lg:flex-row  mt-5">
        <div className="w-full lg:w-1/2">
          <div className="flex items-center lg:px-12 ml-6 px-0 md:px-12 mb-12 ">
            <img src={icons} alt="" />
            <p className="ml-2 text-lg">
              Alliance Inc as a professional freight forwarder in China, know
              very well on Chinese tool market
            </p>
          </div>
          <div className="flex items-center lg:px-12 ml-6 px-0 md:px-12 mb-12 ">
            <img src={icons} alt="" />
            <p className="ml-2 text-lg">
              Alliance Inc has a good relationship on reliable tool factory in
              China
            </p>
          </div>
          <div className="flex items-center lg:px-12 ml-6 px-0 md:px-12 mb-12 ">
            <img src={icons} alt="" />
            <p className="ml-2 text-lg">
              Alliance Inc is expert on all importing process for your tools
              import from China
            </p>
          </div>
          <button className="btn btn-active btn-primary w-[90%] mx-auto ml-6 capitalize ">
            Let Alliance Inc Recommend Best Tools Manufacturer For You
          </button>
        </div>
        <img className="lg:w-[40%] rounded   w-full my-6" src={banner} alt="" />
      </div>
    </div>
  );
};

export default ImportingHelp;
