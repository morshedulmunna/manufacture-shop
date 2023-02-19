import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebaseInit";
import { signOut } from "firebase/auth";

const ProductDetails = () => {
  const { id } = useParams();
  const [signleProduct, setSingleProduct] = useState([]);
  const [user] = useAuthState(auth);

  const {
    img,
    minOrder,
    Stock,
    title,
    description,
    price,
    Size,
    Material,
    Color,
    Warranty,
    Weight,
    _id,
  } = signleProduct;

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  //Order Value
  const onSubmit = (data) => {
    const { State, ZipCode, address, apt, ordered } = data;

    const addedOrder = {
      price,
      OrderID: _id,
      State,
      ZipCode,
      address,
      apt,
      ordered,
      email: user.email,
    };
    // Post For Product Item ===>>>
    const url = `https://alliance.onrender.com/orders/userOrder`;
    fetch(url, {
      method: "POST",
      body: JSON.stringify(addedOrder),
      headers: {
        authorization: `${user?.email} ${localStorage.getItem("accessToken")}`,
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "Forbidden access") {
          signOut(auth);
          localStorage.removeItem("accessToken");
          return toast.error("Access Forbidden");
        }
        reset();
        toast.success("Successfully Added Your Product!!");
      });
  };

  // Get Data From API
  useEffect(() => {
    const url = `https://alliance.onrender.com/products/${id}`;
    axios
      .get(url)
      .then(function (response) {
        setSingleProduct(response.data);
      })
      .catch(function (error) {
        // console.log(error);
      });
  }, [id]);

  return (
    <>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row mt-12">
          <img className="lg:w-[40%] w-full lg:mr-28" src={img} alt="item" />
          <div>
            <h1 className="text-2xl font-bold"> {title?.slice(1, 70)}... </h1>
            <p className="py-6">{description}</p>
            <p className="mb-5 font-bold"> Product ID : {_id} </p>
            <div>
              <div className="badge badge-accent badge-outline">
                Minimum Order {minOrder} unit
              </div>
              <div className="badge badge-accent ml-12 badge-outline">
                Available Stock {Stock} unit
              </div>
            </div>
            <div className="py-4 font-bold my-3 text-primary text-lg">
              Product Price ${price}/unit
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <div className="flex items-center justify-between flex-col lg:flex-row md:flex-row">
                  <input
                    type="text"
                    value={user.displayName}
                    readOnly
                    placeholder="Full Name"
                    className="input input-bordered w-full mb-5 mr-2 "
                  />
                  <input
                    type="text"
                    value={user.email}
                    placeholder="Email Address"
                    readOnly
                    className="input input-bordered w-full mb-5 "
                  />
                </div>

                <label className="label">
                  {errors.address?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.address.message}
                    </span>
                  )}
                  {errors.apt?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.apt.message}
                    </span>
                  )}
                </label>
                <div className="flex items-center justify-between">
                  <input
                    type="text"
                    placeholder="Address"
                    className="input input-bordered w-[78%] mb-5 "
                    {...register("review", {
                      required: {
                        value: true,
                        message: "Address is Required",
                      },
                    })}
                  />

                  <input
                    type="text"
                    placeholder="Apt/Suite"
                    className="input input-bordered w-[20%] mb-5 "
                    {...register("apt", {
                      required: {
                        value: true,
                        message: "Apt/Suite is Required",
                      },
                    })}
                  />
                </div>

                <label className="label">
                  {errors.State?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.State.message}
                    </span>
                  )}
                  {errors.ZipCode?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.ZipCode.message}
                    </span>
                  )}
                  {errors.ZipCode?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">
                      {errors.ZipCode.message}
                    </span>
                  )}
                </label>
                <div className="flex items-center justify-between">
                  <input
                    type="text"
                    placeholder="State"
                    className="input input-bordered w-[78%] mb-5 "
                    {...register("State", {
                      required: {
                        value: true,
                        message: "State is Required",
                      },
                    })}
                  />

                  <input
                    type="text"
                    placeholder="Zip-Code"
                    className="input input-bordered w-[20%] mb-5 "
                    {...register("ZipCode", {
                      required: {
                        value: true,
                        message: "Zip-Code is Required",
                      },
                      pattern: {
                        value: /^[0-9]*$/,
                        message: "Provide a valid Number",
                      },
                    })}
                  />
                </div>
                <label className="label">
                  <span className="label-text">Select Order Quantity</span>
                </label>
                <label className="input-group">
                  <div className="form-control">
                    <input
                      {...register("ordered", {
                        max: {
                          value: Stock,
                        },
                        min: {
                          value: minOrder,
                        },
                        required: true,
                      })}
                      type="number"
                      defaultValue="50"
                      placeholder="Please Enter your quantity"
                      className="input input-bordered"
                    />
                    {errors.ordered?.type === "max" && (
                      <span className="text-error">
                        Please Order less than {Stock}
                      </span>
                    )}
                    {errors.ordered?.type === "min" && (
                      <span className="text-error">
                        Please Order more than {minOrder}
                      </span>
                    )}
                    {errors.ordered?.type === "required" && (
                      <span className="text-error">Order Amount Require</span>
                    )}
                  </div>
                </label>
              </div>

              {errors.ordered?.type === "max" ||
              errors.ordered?.type === "min" ||
              errors.ordered?.type === "required" ? (
                <input
                  type="submit"
                  value="Place Order"
                  disabled
                  className={`btn btn-primary mt-5 `}
                />
              ) : (
                <input
                  type="submit"
                  value="Place Order"
                  className={`btn btn-primary mt-5`}
                />
              )}
            </form>
          </div>
        </div>
      </div>
      {/* Table */}
      <div className="overflow-x-auto  w-full lg:w-1/2 mx-auto">
        <p className="text-3xl font-bold">Product Details:</p>
        <table className="table w-full mb-12">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th className="text-lg">Type</th>
              <th className="text-lg">Details</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            <tr>
              <td>Product Size</td>
              <td> {Size} </td>
            </tr>
            {/* <!-- row 2 --> */}
            <tr>
              <td>Material</td>
              <td> {Material} </td>
            </tr>
            {/* <!-- row 3 --> */}
            <tr>
              <td>Color</td>
              <td>{Color}</td>
            </tr>
            {/* <!-- row 4 --> */}
            <tr>
              <td>Weight</td>
              <td>{Weight}</td>
            </tr>
            {/* <!-- row 5 --> */}
            <tr>
              <td className="bg-gray-300">Warranty</td>
              <td className="bg-gray-300">{Warranty}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductDetails;
