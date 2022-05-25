import React from "react";
import { BsLinkedin } from "react-icons/bs";

const UserTable = ({ user }) => {
  const { name, email, number, linkedin } = user;

  return (
    <>
      <tbody>
        {/* <!-- row 1 --> */}
        <tr>
          <td>{name}</td>
          <td>{email}</td>
          <td>{number}</td>
          <td>
            <a className="font-bold text-blue-600 underline" href={linkedin}>
              <div className="flex items-center">
                <span className="mr-2">
                  <BsLinkedin />
                </span>
                <span>likedin</span>
              </div>
            </a>
          </td>
          <td>
            <div className="badge bg-orange-700 border-0 cursor-pointer font-bold">
              Remove User
            </div>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default UserTable;
