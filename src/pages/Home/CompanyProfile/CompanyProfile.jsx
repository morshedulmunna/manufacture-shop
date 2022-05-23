import React from "react";
import CountUp from "react-countup";

const CompanyProfile = ({ profile }) => {
  const { title, count, prifex, dis } = profile;
  return (
    <div className="card w-[100%] bg-gray-300 text-neutral-content mt-12 ">
      <div className="card-body items-center text-center text-black">
        <h2 className="card-title text-2xl">
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
