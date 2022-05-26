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
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckoutForm.js";

const stripePromise = loadStripe(
  "pk_test_51L3SP4LYctpUGC4vjeuqhSciowVprTBUeeMUeLg6JiJEx2NREmJ4O5t0fhCYXsg68eD2ZXplNR88sfnn60YSoL4s007u1POazq"
);

const Form = ({ order, totalPrice }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Email Address"
        value={order.email}
        readOnly
        className="input input-bordered w-full mb-5 "
      />

      <div className="Payments">
        <div className="flex justify-between items-center">
          <p className=" my-5 ml-3 font-bold lg:text-2xl w-1/2">Payment Info</p>
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

          {/*  */}
          <Elements stripe={stripePromise}>
            <CheckOutForm totalPrice={totalPrice} />
          </Elements>
        </div>
      </div>
      {/*  */}
    </>
  );
};

export default Form;
