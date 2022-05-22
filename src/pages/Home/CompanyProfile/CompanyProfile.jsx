import React from "react";
import CountUp from "react-countup";
import { MdProductionQuantityLimits } from "react-icons/md";

const CompanyProfile = ({ profile }) => {
  const { title, count, prifex, dis } = profile;
  return (
    <div class="card w-[100%] bg-gray-300 text-neutral-content ">
      <div class="card-body items-center text-center text-black">
        <h2 class="card-title text-2xl">
          {title} {profile?.icons}
        </h2>
        <p className="text-5xl font-bold">
          <span>
            <CountUp end={count} />
            {prifex}
          </span>
        </p>
        <p> {dis} </p>
      </div>
    </div>
  );
};

export default CompanyProfile;
