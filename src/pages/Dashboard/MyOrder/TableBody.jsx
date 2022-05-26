import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import auth from "../../../firebase/firebaseInit";

const TableBody = ({ order }) => {
  const { OrderID, price, ordered, paid, _id } = order;

  const [user] = useAuthState(auth);

  const price1 = parseInt(price);
  const ordered1 = parseInt(ordered);
  const totalPrice = price1 * ordered1;

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://fierce-mountain-71205.herokuapp.com/orders/delete/${_id}`,
          {
            method: "DELETE",
            headers: {
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              // refetch();
            }
            console.log(data);
          });
      }
    });
  };

  return (
    <>
      <tbody>
        {/* <!-- row 1 --> */}
        <tr>
          <td>{OrderID}</td>
          <td>${totalPrice}</td>
          <td>{ordered1}</td>
          <td>{order?.transactionId}</td>

          <td>
            {paid ? (
              <button
                className="btn badge border-0 hover:bg-orange-800 bg-orange-700 btn-xs capitalize"
                disabled
              >
                Cancle
              </button>
            ) : (
              <button
                onClick={handleDelete}
                className="btn badge border-0 hover:bg-orange-800 bg-orange-700 btn-xs capitalize"
              >
                Cancle
              </button>
            )}
          </td>
          <td>
            {totalPrice && !paid && (
              <Link to={`/dashboard/payment/${_id}`}>
                <button className="btn badge border-0 hover:bg-green-800 bg-green-700 btn-xs capitalize">
                  Pay Fast
                </button>
              </Link>
            )}
            {totalPrice && paid && (
              <button
                className="btn badge border-0 hover:bg-green-800 bg-green-700 btn-xs capitalize"
                disabled
              >
                Payment Accepted
              </button>
            )}
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default TableBody;
