import React from "react";
import Swal from "sweetalert2";

const ManageProductTableBody = ({ product, refetch }) => {
  const { _id, Stock, minOrder, price, Size, Material, Weight, Warranty } =
    product;

  const handleDelete = (id) => {
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
        fetch(`http://localhost:5000/products/${id}`, {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              refetch();
            }
          });
      }
    });
  };

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
          <button
            onClick={() => handleDelete(_id)}
            className="btn badge border-0 hover:bg-pink-800 bg-pink-700 btn-xs capitalize"
          >
            Delete
          </button>
        </td>
        {/* <td>
          <button className="btn badge border-0 hover:bg-green-600 bg-green-500 btn-xs capitalize">
            Update
          </button>
        </td> */}
      </tr>
    </tbody>
  );
};

export default ManageProductTableBody;
