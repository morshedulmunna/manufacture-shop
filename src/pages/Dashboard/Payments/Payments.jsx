import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { GlobalCSS } from "../../../helper";
import Form from "./Form";

const Payments = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/orders/one/${id}`;

  const { data: order, isLoading } = useQuery(["order", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  console.log(order);

  if (isLoading) {
    return "Loading.........";
  }
  const itemOrder = parseInt(order.ordered);
  const eachPrice = parseInt(order.price);
  const subTotal = itemOrder * eachPrice;

  const shipping = 5;

  const totalPrice = subTotal + shipping;

  return (
    <>
      <div className={GlobalCSS.container}>
        <div className="flex  justify-between flex-col lg:flex-row lg:px-28 mt-12">
          <div className="product lg:w-[40%] w-full mb-5">
            <div className="border-[1px] border-orange-200 mt-5 rounded-lg p-4">
              <p className="p-2 border-b-[1px] border-gray-300">
                Order will ship as early as withen 10 Days
              </p>

              <div className="ml-12 my-4">
                <h1 className="font-bold">Order ID: {order._id}</h1>
              </div>

              <table className="table w-full">
                <tbody>
                  {/* <!-- row 1 --> */}
                  <tr>
                    <td>Subtotal Price</td>
                    <td> ${subTotal} </td>
                  </tr>
                  <tr>
                    <td>Shipping & fees</td>
                    <td> $5</td>
                  </tr>
                  <tr className="border-b-2 border-gray-300">
                    <td>Tax</td>
                    <td>$00</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Total Price</td>
                    <td className="font-bold"> ${totalPrice} </td>
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
            <Form order={order} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Payments;
