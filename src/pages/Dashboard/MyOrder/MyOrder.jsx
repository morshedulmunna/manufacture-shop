import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase/firebaseInit";
import TableBody from "./TableBody";

const MyOrder = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const [orders, setOrders] = useState([]);

  // console.log(orders);

  useEffect(() => {
    if (user) {
      fetch(
        `https://alliance-inventory.onrender.com/orders/userOrder?orderUser=${user.email}`,
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/");
          }
          return res.json();
        })
        .then((data) => {
          setOrders(data);
        });
    }
  }, [navigate, user]);

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Price</th>
            <th>Ordered</th>
            <th>TransactionId</th>
            <th>Cancel</th>
            <th>Payment Status</th>
          </tr>
        </thead>
        {orders.map((order) => (
          <TableBody key={order._id} order={order} />
        ))}
      </table>
    </div>
  );
};

export default MyOrder;
