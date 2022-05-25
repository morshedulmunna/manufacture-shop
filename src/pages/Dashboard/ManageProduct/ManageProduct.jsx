import React from "react";
import useProductsLoad from "../../../Hooks/useProductLoad";
import ManageProductTableBody from "./ManageProductTableBody";

const ManageProduct = () => {
  const [products] = useProductsLoad([]);

  return (
    <div className="overflow-x-auto mb-28">
      <table className="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Stock</th>
            <th>Min Orrder</th>
            <th>Price</th>
            <th>Size</th>
            <th>Material</th>
            <th>Weight</th>
            <th>Warrantry</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        {products.map((product) => (
          <ManageProductTableBody key={product._id} product={product} />
        ))}
      </table>
    </div>
  );
};

export default ManageProduct;
