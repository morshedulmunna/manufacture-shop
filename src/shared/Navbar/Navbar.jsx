/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Link } from "react-router-dom";
import { RiBarChartHorizontalFill } from "react-icons/ri";
import { IoMdConstruct } from "react-icons/io";
import { GlobalCSS } from "../../helper";

const Navbar = () => {
  // console.log(user);

  const navManu = [
    {
      id: 1,
      name: "Home",
      to: "/",
    },
    {
      id: 2,
      name: "About",
      to: "/about",
    },
    {
      id: 3,
      name: "blog",
      to: "/blog",
    },
  ];

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

          <div className={styles.navWrapper}>
            <input
              type="checkbox"
              name="hamburger"
              id="hamburger"
              className="peer hidden"
            />
            <label htmlFor="hamburger" className={styles.hambager}>
              <i className="text-xl text-primary">
                <RiBarChartHorizontalFill />
              </i>
            </label>

            <div className={styles.navigationArea}>
              <div className={styles.navigationWrapper}>
                <ul className={styles.Ul}>
                  {navManu.map((navItem) => (
                    <li key={navItem.id}>
                      <Link to={navItem.to} className={styles.link}>
                        <span className={styles.menu}> {navItem.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className={styles.loginArea}>
                  <Link to="login" className={styles.loginBTN}>
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

// All Style Object Here====>>
const styles = {
  header: "bg-gray-50 relative border-b bg-white z-20 pt-2 ",
  nav: "flex items-center justify-between",
  logoWrapper:
    "flex justify-center items-center text-orange-600 cursor-pointer",
  logoicon: "text-2xl pr-1",
  logoName: "text-xl font-bold",
  navWrapper: "flex items-center justify-end border-l lg:border-l-0",
  hambager:
    "peer-checked:hamburger block relative z-20 p-3 -mr-3 cursor-pointer lg:hidden",
  navigationArea:
    "peer-checked:translate-x-0 fixed inset-0 w-[calc(100%-3.5rem)] translate-x-[-100%] bg-white border-r shadow-xl transition duration-200 lg:border-r-0 lg:w-auto lg:static lg:shadow-none lg:translate-x-0 mt-11 lg:mt-0",
  navigationWrapper:
    "flex flex-col h-full justify-between lg:items-center lg:flex-row",
  Ul: "px-6 pt-4 text-gray-700 space-y-5 md:px-12 lg:space-y-0 lg:flex lg:space-x-12 lg:pt-0",
  link: "group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 ",
  menu: "relative text-cyan-800 font-medium",
  // Login
  loginArea:
    "border-t py-8 px-6 md:px-12 md:py-16 lg:border-t-0 lg:border-l lg:py-0 lg:pr-0 lg:pl-6 ",
  loginBTN:
    "block px-4 py-1 rounded bg-gradient-to-r from-orange-600 to-orange-700 text-center text-white",
};
