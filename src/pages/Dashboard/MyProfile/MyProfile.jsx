import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase/firebaseInit";
import UpdateForm from "./UpdateForm";

const MyProfile = () => {
  const [showForm, setShowForm] = useState(false);
  const [user] = useAuthState(auth);
  return (
    <div className="lg:ml-28 ml-0 flex gap-12 justify-between flex-col lg:flex-row md:flex-row h-full">
      <div className="flex gap-5 w-full lg:w-1/2 md:w-full flex-col">
        <div className="flex items-center flex-col justify-center ">
          <img
            class="mask mask-hexagon w-[200px]"
            src="https://phero-web.nyc3.cdn.digitaloceanspaces.com/website-prod-images/public/files/1643442519033.jpg"
            alt="Profile"
          />
        </div>
        <div>
          <div className="mb-6">
            <p className="font-bold">Full Name</p>
            <p> {user.displayName} </p>
          </div>
          <div className="mb-6">
            <p className="font-bold">Email Address</p>
            <p>morshedul@gmail.com</p>
          </div>
          <div>
            <p className="font-bold">Address</p>
            <p>South Paikpara, Bottola- Home:332/c Road#19 Mirpur dhaka 1216</p>
          </div>
        </div>
        <button
          onClick={() => setShowForm(true)}
          class="btn btn-primary w-full max-w-xs"
        >
          Edit Profile
        </button>
      </div>
      <div className="lg:w-1/2 w-full md:w-full">
        {showForm && <UpdateForm setShowForm={setShowForm} />}
      </div>
    </div>
  );
};

export default MyProfile;
