import React from "react";
import { useTitle } from "../../helper";
import Banner from "./HomeShared/Banner";

const Home = () => {
  useTitle("Alliance Inc");
  return (
    <div>
      <Banner />
    </div>
  );
};

export default Home;
