import React, { useEffect, useState } from "react";
import { GlobalCSS, useTitle } from "../../helper";
import CompanyProfile from "./CompanyProfile/CompanyProfile";
import Banner from "./HomeShared/Banner";
import Tools from "./Tools/Tools";
import {
  MdProductionQuantityLimits,
  MdAccessibilityNew,
  MdDry,
  MdReviews,
} from "react-icons/md";
import Review from "./Review/Review";
import ImportingHelp from "./ImportingHelp/ImportingHelp";
import Contact from "./Contact/Contact";

const Home = () => {
  useTitle("Alliance Inc");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/products`, {
      method: "GET",
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data?.slice(0, 6));
      });
  }, []);

  return (
    <div>
      <Banner />
      <div className={`${GlobalCSS.container} `}>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-col-1 gap-12 md:p-0 place-items-center mt-6">
          {companyProfile.map((profile) => (
            <CompanyProfile key={profile.id} profile={profile} />
          ))}
        </div>
        <h1 className="mt-12 text-black font-bold text-3xl ">
          Selected Trending Products
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-col-1 md:p-0 place-items-center">
          {products.map((product) => (
            <Tools key={product._id} product={product} />
          ))}
        </div>
        <ImportingHelp />
        <Review />
        <Contact />
      </div>
    </div>
  );
};

export default Home;

const companyProfile = [
  {
    id: 1,
    title: "Total Product",
    count: 50,
    prifex: "k",
    dis: "In the Inventory",
    icons: <MdProductionQuantityLimits />,
  },
  {
    id: 2,
    title: "Happy Client",
    count: 120,
    prifex: "k",
    dis: "All Over The World",
    icons: <MdAccessibilityNew />,
  },
  {
    id: 3,
    title: "Our Partner",
    count: 60,
    prifex: "K",
    dis: "Work With Us",
    icons: <MdDry />,
  },
  {
    id: 4,
    title: "Reviews",
    count: 6,
    prifex: "K",
    dis: "From Customer",
    icons: <MdReviews />,
  },
];
