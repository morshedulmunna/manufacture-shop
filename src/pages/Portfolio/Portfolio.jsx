import React from "react";
import Image from "../../assets/images/protfolio.jpg";
import { GlobalCSS } from "../../helper";
import Skills from "./Skills";

const Portfolio = () => {
  return (
    <>
      <div class={`${GlobalCSS.container} mt-12`}>
        <div class="flex flex-col lg:flex-row md:flex-row gap-10">
          <div className="w-full lg:w-1/2 md:w-1/2">
            <img
              src={Image}
              alt="Profile"
              class="rounded-lg w-full lg:w-[80%]"
            />
            <h1 className="font-bold text-3xl py-5">
              <span className="font-bold text-orange-500">I'm</span> Morshedul
              Islam Munna
            </h1>
            <p className="pr-0 text-justify lg:w-[80%] w-full pb-5">
              A self-motivated and enthusiastic web developer with a deep
              interest in JavaScript. To work in the Software industry with
              modern web technologies of different local & multinational
              Software/ IT agencies of Bangladesh and grow rapidly with
              increasing responsibilities.
            </p>
          </div>
          <div className="w-full lg:w-1/2 md:w-1/2">
            <div>
              <a
                className="btn btn-sm bg-primary border-0 capitalize font-bold hover:bg-orange-700 "
                href="https://drive.google.com/file/d/1yBOA4JOX4VAN7brg3uaN_Mt4EoJ9N5e5/view?usp=sharing"
              >
                Resume
              </a>
              <a
                className="btn btn-sm bg-primary border-0 capitalize font-bold hover:bg-orange-700 ml-5"
                href="https://github.com/morshedulmunna"
              >
                Github
              </a>
              <a
                className="btn btn-sm bg-primary border-0 capitalize font-bold hover:bg-orange-700 ml-5"
                href="https://www.facebook.com/morshedulmunna.id/"
              >
                Facebook
              </a>
            </div>
            <div className="mt-12">
              <h1 className="text-3xl font-bold ">Expertise🥇</h1>
              <div className="flex items-center gap-2 flex-wrap">
                <span class="bg-gray-400 px-2 mt-3 mb-2 rounded text-white">
                  JavaScript
                </span>
                <span class="bg-gray-400 px-2 mt-3 mb-2 rounded text-white">
                  React.js
                </span>
                <span class="bg-gray-400 px-2 mt-3 mb-2 rounded text-white">
                  Styled Component
                </span>
                <span class="bg-gray-400 px-2 mt-3 mb-2 rounded text-white">
                  Tailwind
                </span>
                <span class="bg-gray-400 px-2 mt-3 mb-2 rounded text-white">
                  HTML5
                </span>
                <span class="bg-gray-400 px-2 mt-3 mb-2 rounded text-white">
                  CSS3
                </span>
                <span class="bg-gray-400 px-2 mt-3 mb-2 rounded text-white">
                  Sass
                </span>
                <span class="bg-gray-400 px-2 mt-3 mb-2 rounded text-white">
                  Material UI
                </span>
                <span class="bg-gray-400 px-2 mt-3 mb-2 rounded text-white">
                  React Bootstrap
                </span>
                <span class="bg-gray-400 px-2 mt-3 mb-2 rounded text-white">
                  JWT-Auth
                </span>
                <span class="bg-gray-400 px-2 mt-3 mb-2 rounded text-white">
                  firebase
                </span>
                <span class="bg-gray-400 px-2 mt-3 mb-2 rounded text-white">
                  context API
                </span>
              </div>
            </div>
            <div className="mt-12">
              <h1 className="text-3xl font-bold ">Comfortable🥈 </h1>
              <div className="flex items-center gap-2 flex-wrap">
                <span class="bg-gray-400 px-2 mt-3 mb-2 rounded text-white">
                  Node.js
                </span>
                <span class="bg-gray-400 px-2 mt-3 mb-2 rounded text-white">
                  Express.js
                </span>
                <span class="bg-gray-400 px-2 mt-3 mb-2 rounded text-white">
                  MongoDB
                </span>
                <span class="bg-gray-400 px-2 mt-3 mb-2 rounded text-white">
                  Redux
                </span>
                <span class="bg-gray-400 px-2 mt-3 mb-2 rounded text-white">
                  Mongoose
                </span>
                <span class="bg-gray-400 px-2 mt-3 mb-2 rounded text-white">
                  next.js
                </span>
                <span class="bg-gray-400 px-2 mt-3 mb-2 rounded text-white">
                  framer Motion
                </span>
                <span class="bg-gray-400 px-2 mt-3 mb-2 rounded text-white">
                  Three.js
                </span>
                <span class="bg-gray-400 px-2 mt-3 mb-2 rounded text-white">
                  Payment Gateway
                </span>
              </div>
            </div>
            <div className="mt-12">
              <h1 className="text-3xl font-bold ">Tools & Technologies🥉</h1>
              <div className="flex items-center gap-2 flex-wrap">
                <span class="bg-gray-400 px-2 mt-3 mb-2 rounded text-white">
                  GitHub
                </span>
                <span class="bg-gray-400 px-2 mt-3 mb-2 rounded text-white">
                  VS Code
                </span>
                <span class="bg-gray-400 px-2 mt-3 mb-2 rounded text-white">
                  Heroku
                </span>
                <span class="bg-gray-400 px-2 mt-3 mb-2 rounded text-white">
                  Netlify
                </span>
                <span class="bg-gray-400 px-2 mt-3 mb-2 rounded text-white">
                  Figma
                </span>
                <span class="bg-gray-400 px-2 mt-3 mb-2 rounded text-white">
                  Adobe XD
                </span>
                <span class="bg-gray-400 px-2 mt-3 mb-2 rounded text-white">
                  Illustrator
                </span>
                <span class="bg-gray-400 px-2 mt-3 mb-2 rounded text-white">
                  Photoshop
                </span>
              </div>
            </div>
            <div className="mt-12">
              <h1 className="text-3xl font-bold ">Best Live Website Link🥉</h1>

              <div className="mt-6">
                <a
                  className="mt-6 text-blue-700 font-bold"
                  href="https://hiking-rox.web.app/"
                >
                  Hiking Rox
                </a>
                <a
                  className="mt-6 text-blue-700 font-bold ml-5"
                  href="https://todo-56128.web.app/"
                >
                  Todo - Web Application
                </a>
                <a
                  className="mt-6 text-blue-700 font-bold ml-5"
                  href="https://odyssey-one-cycle.netlify.app/"
                >
                  Odyssey-one-cycle
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
