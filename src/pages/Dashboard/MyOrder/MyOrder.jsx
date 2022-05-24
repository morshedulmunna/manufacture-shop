import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import auth from "../../../firebase/firebaseInit";
import { useNavigate } from "react-router-dom";

const MyOrder = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const [order, setOrder] = useState([]);

  console.log(order);

  useEffect(() => {
    if (user) {
      console.log(user.email);

      fetch(`http://localhost:5000/orders?orderUser=${user.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          console.log("res", res);
          if (res.status === 401 || res.status === 403) {
            // signOut(auth);
            // localStorage.removeItem("accessToken");
            // navigate("/");
            console.log("Error ");
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);

          setOrder(data);
        });
    }
  }, [user]);

  return (
    <div class="overflow-x-auto">
      <table class="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Price</th>
            <th>Status</th>
            <th>Ordered</th>
            <th>Cancel</th>
            <th>Payment Status</th>
          </tr>
        </thead>
        <tbody>
          {/* <!-- row 1 --> */}
          <tr>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
            <td>Blue</td>
            <td>
              <div class="badge bg-red-700 border-0 cursor-pointer font-bold">
                Cancle
              </div>
            </td>
            <td>
              <div class="badge bg-green-700 border-0 cursor-pointer font-bold">
                Pay Fast
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MyOrder;
