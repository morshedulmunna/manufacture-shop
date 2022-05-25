import React from "react";

const TableBody = ({ order }) => {
  const { OrderID, price, ordered } = order;

  const price1 = parseInt(price);
  const ordered1 = parseInt(ordered);
  const totalPrice = price1 * ordered1;
  return (
    <>
      <tbody>
        {/* <!-- row 1 --> */}
        <tr>
          <td>{OrderID}</td>
          <td>${totalPrice}</td>
          <td>NaN</td>
          <td>{ordered1}</td>
          <td>
            <button className="btn badge border-0 hover:bg-orange-800 bg-orange-700 btn-xs capitalize">
              Cancle
            </button>
          </td>
          <td>
            <button className="btn badge border-0 hover:bg-green-800 bg-green-700 btn-xs capitalize">
              Pay Fast
            </button>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default TableBody;
