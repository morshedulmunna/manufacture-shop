import React from "react";
import { useQuery } from "react-query";
import Loader from "../../../helper/Loader";
import ManageProductTableBody from "./ManageProductTableBody";

const ManageProduct = () => {
  const { isLoading, data, refetch } = useQuery("reviewData", () =>
    fetch(`https://alliance-inventory.onrender.com/products`, {
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
    <div className="overflow-x-auto mb-28">
      <table className="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Stock</th>
            <th>Min Orrder</th>
            <th>Price</th>
            <th>Size</th>
            <th>Material</th>
            <th>Weight</th>
            <th>Warrantry</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        {data.map((product) => (
          <ManageProductTableBody
            key={product._id}
            product={product}
            refetch={refetch}
          />
        ))}
      </table>
    </div>
  );
};

export default ManageProduct;
