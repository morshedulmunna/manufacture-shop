import React from "react";
import { useParams } from "react-router-dom";
import { GlobalCSS } from "../../helper";
import Form from "./Form";

const Purchase = () => {
  const { id } = useParams();
  return (
    <>
      <div className={GlobalCSS.container}>
        <div className="flex  justify-between flex-col lg:flex-row lg:px-28 mt-12">
          <div className="product lg:w-[40%] w-full mb-5">
            <div className="border-[1px] border-orange-200 mt-5 rounded-lg p-4">
              <p className="p-2 border-b-[1px] border-gray-300">
                Order will ship as early as withen 10 Days
              </p>
              <div className="flex items-center mt-6  ">
                <img
                  className="w-[20%]"
                  src="https://sc04.alicdn.com/kf/H5790208af57a462cb39cac681e2953b2s.jpg"
                  alt=""
                />
                <div className="ml-12">
                  <h1 className="font-bold">
                    EINENG 24VB Li-ion Battery Cordless Dri
                  </h1>
                </div>
              </div>
              <table className="table w-full">
                <tbody>
                  {/* <!-- row 1 --> */}
                  <tr>
                    <td>Subtotal Price</td>
                    <td> $54 </td>
                  </tr>
                  <tr>
                    <td>Shipping & fees</td>
                    <td> $5.99 </td>
                  </tr>
                  <tr className="border-b-2 border-gray-300">
                    <td>Tax</td>
                    <td>$00</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Total Price</td>
                    <td className="font-bold"> $54 </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="lg:w-[60%] w-full mx-auto lg:px-28">
            <p className="text-2xl font-bold mb-3">
              Purchase Details Information
            </p>
            <p className="mb-3">Shipping Information</p>
            <Form />
          </div>
        </div>
      </div>
    </>
  );
};

export default Purchase;
