import React from "react";
import { useQuery } from "react-query";
import Loader from "../../../helper/Loader";
import UserTable from "./UserTable";

const AllUsers = () => {
  const { isLoading, data } = useQuery("reviewData", () =>
    fetch(`http://localhost:5000/users`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      if (res.status === 401 || res.status === 403) {
      }
      return res.json();
    })
  );

  // console.log(data);

  if (isLoading) return <Loader></Loader>;

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Social Link</th>
            <th></th>
          </tr>
        </thead>
        {data.map((user) => (
          <UserTable key={user._id} user={user} />
        ))}
      </table>
    </div>
  );
};

export default AllUsers;
