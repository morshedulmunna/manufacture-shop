import React from "react";
import toast from "react-hot-toast";
const UserTable = ({ user, refetch }) => {
  const { name, email, number, roll } = user;
  const makeAdmin = () => {
    fetch(`https://alliance-inventory.onrender.com/users/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to Make an Admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("succesfully Make Admin");
          refetch();
        }
      });
  };
  return (
    <>
      <tbody className="mb-12">
        {/* <!-- row 1 --> */}
        <tr>
          <td>{name}</td>
          <td>{email}</td>
          <td>{number}</td>
          <td>
            {roll === "admin" ? (
              <button
                className="btn badge border-0 hover:bg-green-800 bg-green-600 btn-xs capitalize"
                disabled
              >
                Already An Admin
              </button>
            ) : (
              <button
                onClick={makeAdmin}
                className="btn badge border-0 hover:bg-gray-800 bg-gray-600 btn-xs capitalize"
              >
                Make Admin
              </button>
            )}
          </td>
          {/* <td>
            {!(roll === "admin") && (
              <button className="btn badge border-0 hover:bg-orange-800 bg-orange-700 btn-xs capitalize">
                Remove User
              </button>
            )}
          </td> */}
        </tr>
      </tbody>
    </>
  );
};

export default UserTable;
