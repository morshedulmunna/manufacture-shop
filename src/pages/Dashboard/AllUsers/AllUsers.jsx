import React from "react";
import { useQuery } from "react-query";
import Loader from "../../../helper/Loader";
import UserTable from "./UserTable";

const AllUsers = () => {
  const { isLoading, data, refetch } = useQuery("reviewData", () =>
    fetch(`https://fierce-mountain-71205.herokuapp.com/users`, {
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

  if (isLoading) return <Loader></Loader>;

  return (
    <div className="overflow-x-auto ">
      <table className="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        {data.map((user) => (
          <UserTable refetch={refetch} key={user._id} user={user} />
        ))}
      </table>
    </div>
  );
};

export default AllUsers;
