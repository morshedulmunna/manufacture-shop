import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase/firebaseInit";
import Loader from "../../../helper/Loader";
import ManageAllOrderTable from "./ManageAllOrderTable";

const ManageOrder = () => {
  const navigate = useNavigate();
  const [allOrder, setAllOrder] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/orders/allorder`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          signOut(auth);
          localStorage.removeItem("accessToken");
          navigate("/");
        }
        return res.json();
      })
      .then((data) => {
        setAllOrder(data);
      });
  }, [allOrder, navigate]);

  if (!allOrder) {
    return <Loader />;
  }

  return (
    <div className="overflow-x-auto mb-28">
      <table className="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Email</th>
            <th>Quentity</th>
            <th>Price</th>
            <th>Delivery Status</th>
          </tr>
        </thead>
        {allOrder.map((orderall) => (
          <ManageAllOrderTable key={orderall._id} OrderAll={orderall} />
        ))}
      </table>
    </div>
  );
};

export default ManageOrder;
