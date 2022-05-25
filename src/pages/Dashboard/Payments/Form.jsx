import React from "react";
import { useForm } from "react-hook-form";
import {
  ssl,
  notion,
  discover,
  visa,
  mastercard,
  amex,
} from "../../../assets/index.js";
const Form = ({ order }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Email Address"
          value={order.email}
          readOnly
          className="input input-bordered w-full mb-5 "
        />

        <div className="Payments">
          <div className="flex justify-between items-center">
            <p className=" my-5 ml-3 font-bold lg:text-2xl w-1/2">
              Payment Info
            </p>
            <div className="flex justify-between items-center pr-7">
              <img className="w-12 mr-2" src={ssl} alt="" />
              <img className="w-12" src={notion} alt="" />
            </div>
          </div>

          {/* payment */}
          <div
            tabIndex="0"
            className=" border border-base-300 bg-base-100 rounded-box"
          >
            <div className="collapse-title font-medium">
              <div className="flex justify-between items-center">
                <p className="w-1/2">Card Info</p>
                <div className="flex justify-between items-center ">
                  <img className="w-8 mr-2" src={discover} alt="" />
                  <img className="w-8 mr-2" src={visa} alt="" />
                  <img className="w-8 mr-2" src={mastercard} alt="" />
                  <img className="w-8 mr-2" src={amex} alt="" />
                </div>
              </div>
            </div>
            <div className="px-5">
              <input
                type="text"
                placeholder="Debit or Credit Card Number"
                className="input input-bordered w-full mb-5 "
              />
              <div className="flex items-center justify-between">
                <input
                  type="text"
                  placeholder="MM/YY*"
                  className="input input-bordered w-[50%] mb-5 mr-2 "
                />
                <input
                  type="text"
                  placeholder="CVV*"
                  className="input input-bordered w-[50%] mb-5 ml-2 "
                />
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <input
          type="submit"
          value="Order Submit"
          className="btn btn-primary font-bold  w-full my-8 "
        />
      </form>
    </>
  );
};

export default Form;
