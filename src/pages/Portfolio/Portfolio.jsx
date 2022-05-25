import React from "react";
import Image from "../../assets/images/profilepic.png";
import { GlobalCSS } from "../../helper";

const Portfolio = () => {
  return (
    <>
      <div className={`${GlobalCSS.container}`}>
        <div className="flex flex-col lg:flex-row md:flex-col items-center justify-between">
          <div className="w-full lg:w-1/2 md:w-full">
            <img className="w-[70%]" src={Image} alt="" />
            <p>
              <span>I'm</span> Morshedul Islam Munn
            </p>
            <p>
              A self-motivated and enthusiastic web developer with a deep
              interest in JavaScript. To work in the Software industry with
              modern web technologies of different local & multinational
              Software/ IT agencies of Bangladesh and grow rapidly with
              increasing responsibilities.
            </p>
          </div>
          <div className="w-full lg:w-1/2 md-w-full">
            <p>My Skills Set</p>
            <span>JavaScript</span>
          </div>
        </div>
        <div className="Projects"></div>
      </div>
    </>
  );
};

export default Portfolio;
