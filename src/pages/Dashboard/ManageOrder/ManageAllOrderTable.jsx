import React from "react";

const ManageAllOrderTable = ({ OrderAll }) => {
  const { _id, email, ordered, price, paid, deliverStatus } = OrderAll;
  // console.log(paid);
  const totalPrice = parseInt(ordered) * parseInt(price);

  const handleDeliverStatus = () => {
    fetch(`http://localhost:5000/orders/deliver/${_id}`, {
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
              className="btn badge border-0 hover:bg-red-800 bg-red-700 btn-xs capitalize pointer-events-none"
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
      </tr>
    </tbody>
  );
};

export default ManageAllOrderTable;
