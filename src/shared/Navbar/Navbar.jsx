/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Link } from "react-router-dom";
import { RiBarChartHorizontalFill } from "react-icons/ri";
import { IoMdConstruct } from "react-icons/io";
import { GlobalCSS } from "../../helper";

const Navbar = () => {
  // console.log(user);

  return (
    <>
      <header className={`${styles.header} ${GlobalCSS.container}`}>
        <div className={styles.nav}>
          <Link to="/">
            <div className={styles.logoWrapper}>
              <i className={styles.logoicon}>
                <IoMdConstruct />
              </i>
              <h2 className={styles.logoName}>Alliance Inc</h2>
            </div>
          </Link>

          <div className="flex items-center justify-end border-l lg:border-l-0">
            <input
              type="checkbox"
              name="hamburger"
              id="hamburger"
              className="peer hidden"
            />
            <label
              for="hamburger"
              className="peer-checked:hamburger block relative z-20 p-3 -mr-3 cursor-pointer lg:hidden"
            >
              <i className="text-xl text-orange-500">
                <RiBarChartHorizontalFill />
              </i>
            </label>

            <div className="peer-checked:translate-x-0 fixed inset-0 w-[calc(100%-3.5rem)] translate-x-[-100%] bg-white border-r shadow-xl transition duration-200 lg:border-r-0 lg:w-auto lg:static lg:shadow-none lg:translate-x-0 sm:mt-11 lg:mt-0">
              <div className="flex flex-col h-full justify-between lg:items-center lg:flex-row">
                <ul className="px-6 pt-4 text-gray-700 space-y-5 md:px-12 lg:space-y-0 lg:flex lg:space-x-12 lg:pt-0">
                  <li>
                    <Link
                      to="/"
                      className="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 "
                    >
                      <span className="relative text-cyan-800 font-medium">
                        Home
                      </span>
                    </Link>
                  </li>
                </ul>

                <div className="border-t py-8 px-6 md:px-12 md:py-16 lg:border-t-0 lg:border-l lg:py-0 lg:pr-0 lg:pl-6">
                  <Link
                    to="login"
                    className="block px-4 py-1 rounded bg-gradient-to-r from-orange-600 to-orange-700 text-center text-white"
                  >
                    Log in
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;

const styles = {
  header: "bg-gray-50 relative border-b bg-white z-20 pt-2",
  nav: "flex items-center justify-between",
  logoWrapper:
    "flex justify-center items-center text-orange-600 cursor-pointer",
  logoicon: "text-2xl pr-1",
  logoName: "text-xl font-bold",
};
