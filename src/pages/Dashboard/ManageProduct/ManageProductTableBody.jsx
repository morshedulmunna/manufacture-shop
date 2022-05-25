import React from "react";

const ManageProductTableBody = ({ product }) => {
  const { _id, Stock, minOrder, price, Size, Material, Weight, Warranty } =
    product;
  return (
    <tbody>
      {/* <!-- row 1 --> */}
      <tr>
        <td>{_id}</td>
        <td>{Stock}</td>
        <td>{minOrder}</td>
        <td>{price}</td>
        <td>{Size}</td>
        <td>{Material}</td>
        <td>{Weight}</td>
        <td>{Warranty}</td>
        <td>
          <button className="btn badge border-0 hover:bg-pink-800 bg-pink-700 btn-xs capitalize">
            Delivery
          </button>
        </td>
        <td>
          <button className="btn badge border-0 hover:bg-green-600 bg-green-500 btn-xs capitalize">
            Update
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default ManageProductTableBody;
