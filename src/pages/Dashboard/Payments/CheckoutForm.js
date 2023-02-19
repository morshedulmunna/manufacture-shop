import React, { useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import auth from "../../../firebase/firebaseInit";
import { useAuthState } from "react-firebase-hooks/auth";

const CheckOutForm = ({ totalPrice, order }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [user] = useAuthState(auth);

  const [cardError, setCartError] = useState();
  const [success, setSuccess] = useState();
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    fetch("https://alliance.onrender.com/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ totalPrice }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, [totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    setCartError(error?.message || "");
    setSuccess("");
    setProcessing(true);
    // confirm card payment
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user.displayName,
            email: user.email,
          },
        },
      });

    if (intentError) {
      setCartError(intentError?.message);
      setProcessing(false);
    } else {
      setCartError("");
      setTransactionId(paymentIntent.id);
      // console.log(paymentIntent);
      setSuccess(" Congrats! Your Payment is Completed");

      //
      //
      //store payment on database
      const payment = {
        orderComplete: order._id,
        transactionId: paymentIntent.id,
      };
      fetch(`https://alliance.onrender.com/orders/payment/${order._id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          setProcessing(false);
          // console.log(data);
        });
    }
  };

  return (
    <>
      <form className="p-5" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <input
          type="submit"
          disabled={!stripe || !clientSecret}
          value="Make Payment"
          className="btn btn-primary font-bold  w-full mt-12 "
        />
      </form>

      {cardError && <p className="text-red-600 px-5 pb-5"> {cardError} </p>}
      {success && (
        <>
          <p className="text-green-600 px-5 pb-5">{success}</p>
          <p className="text-green-600 px-5 pb-5">
            Trans ID 👍
            <span className="text-primary font-bold">{transactionId}</span>
          </p>
        </>
      )}
    </>
  );
};

export default CheckOutForm;
