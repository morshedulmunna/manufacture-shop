import React from "react";
import Swal from "sweetalert2";

const ManageAllOrderTable = ({ OrderAll }) => {
  const { _id, email, ordered, price, paid, deliverStatus } = OrderAll;
  // console.log(paid);
  const totalPrice = parseInt(ordered) * parseInt(price);

  const handleDeliverStatus = () => {
    fetch(`https://alliance-inventory.onrender.com/orders/deliver/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

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
        fetch(`https://alliance-inventory.onrender.com/orders/delete/${_id}`, {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              // refetch();
            }
            // console.log(data);
          });
      }
    });
  };

  return (
    <tbody>
      {/* <!-- row 1 --> */}
      <tr>
        <td>{_id}</td>
        <td>{email}</td>
        <td>{ordered}</td>
        <td>${totalPrice}</td>
        <td>
          {paid && !deliverStatus && (
            <button
              onClick={handleDeliverStatus}
              className="btn badge border-0 hover:bg-green-800 bg-green-700 btn-xs capitalize"
            >
              Delivery Pending
            </button>
          )}

          {!paid && (
            <button
              onClick={handleDeliverStatus}
              className="btn badge border-0  bg-blue-400 btn-xs capitalize pointer-events-none"
            >
              Unpaid
            </button>
          )}

          {paid && deliverStatus && (
            <button
              disabled
              onClick={handleDeliverStatus}
              className="btn badge border-0 hover:bg-green-800 bg-green-700 btn-xs capitalize"
            >
              Delivary Done
            </button>
          )}
        </td>
        <td>
          {!paid && (
            <button
              onClick={handleDelete}
              className="btn badge border-0 hover:bg-red-800 bg-red-700 btn-xs capitalize "
            >
              Cancle Order
            </button>
          )}
        </td>
      </tr>
    </tbody>
  );
};

export default ManageAllOrderTable;
