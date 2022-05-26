import React from "react";
import { Link } from "react-router-dom";

const TableBody = ({ order }) => {
  const { OrderID, price, ordered, paid, _id } = order;

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

          <td>{ordered1}</td>
          <td>
            {paid ? (
              <button
                className="btn badge border-0 hover:bg-orange-800 bg-orange-700 btn-xs capitalize"
                disabled
              >
                Cancle
              </button>
            ) : (
              <button className="btn badge border-0 hover:bg-orange-800 bg-orange-700 btn-xs capitalize">
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
