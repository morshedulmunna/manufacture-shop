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
            <div className="badge bg-orange-700 border-0 cursor-pointer font-bold">
              Cancle
            </div>
          </td>
          <td>
            <div className="badge bg-green-700 border-0 cursor-pointer font-bold">
              Pay Fast
            </div>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default TableBody;
