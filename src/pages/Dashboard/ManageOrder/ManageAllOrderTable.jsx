import React from "react";

const ManageAllOrderTable = ({ OrderAll }) => {
  const { OrderID, email, ordered, price } = OrderAll;
  const totalPrice = parseInt(ordered) * parseInt(price);

  return (
    <tbody>
      {/* <!-- row 1 --> */}
      <tr>
        <td>{OrderID}</td>
        <td>{email}</td>
        <td>{ordered}</td>
        <td>${totalPrice}</td>
        <td>
          <button className="btn badge border-0 hover:bg-pink-800 bg-pink-700 btn-xs capitalize">
            Delivery
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default ManageAllOrderTable;
