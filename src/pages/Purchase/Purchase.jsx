import React from "react";
import { useParams } from "react-router-dom";
import { GlobalCSS } from "../../helper";
import Form from "./Form";

const Purchase = () => {
  const { id } = useParams();
  return (
    <>
      <div className={GlobalCSS.container}>
        <div className="flex items-center justify-between flex-col lg:flex-row lg:px-28 mt-12">
          <div className="product lg:w-[40%] w-full"> product</div>
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
