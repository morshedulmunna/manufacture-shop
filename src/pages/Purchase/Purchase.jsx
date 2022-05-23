import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Purchase = () => {
  const { id } = useParams();

  const [signleProduct, setSingleProduct] = useState([]);

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
  console.log(signleProduct);

  // Get Data From API
  useEffect(() => {
    const url = `http://localhost:5000/products/${id}`;
    axios
      .get(url)
      .then(function (response) {
        setSingleProduct(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [id]);

  return (
    <>
      <div class="hero bg-base-200">
        <div class="hero-content flex-col lg:flex-row">
          <img className="lg:w-[40%] w-full p-5" src={img} alt="item" />
          <div>
            <h1 class="text-2xl font-bold"> {title?.slice(1, 70)}... </h1>
            <p class="py-6">{description}</p>
            <p className="mb-5 font-bold"> Product ID : {_id} </p>
            <div>
              <div className="badge badge-accent badge-outline">
                Minimum Order {minOrder} unit
              </div>
              <div className="badge badge-accent ml-12 badge-outline">
                Available Stock {Stock} unit
              </div>
            </div>
            <div class="badge badge-primary py-4 font-bold my-3">
              Product Price ${price}
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Select Order Quantity</span>
              </label>
              <label class="input-group">
                <input
                  type="number"
                  defaultValue={minOrder}
                  class=" py-2 w-[100px] mr-1 border-solid border-[1px] border-gray-300 pl-2 "
                />
                <span>Unit</span>
              </label>
            </div>
            <button class="btn btn-primary mt-5">Purchase Now</button>
          </div>
        </div>
      </div>
      {/* Table */}
      <div class="overflow-x-auto  w-full lg:w-1/2 mx-auto">
        <p className="text-3xl font-bold">Product Details:</p>
        <table class="table w-full mb-12">
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

export default Purchase;
