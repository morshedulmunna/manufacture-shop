import React from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  return (
    <div>
      <div>
        <p className="text-center font-bold text-xl">Add a New Product</p>

        <form>
          <div className="form-control  lg:w-1/2 w-full mx-auto ">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <input
              type="text"
              placeholder="Type Name"
              className="input input-bordered w-full"
              {...register("title", {
                required: {
                  value: true,
                  message: "Name is Required",
                },
              })}
            />
            <label className="label">
              {errors.title?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.title.message}
                </span>
              )}
            </label>
          </div>
          {/*  */}
          <div className="form-control lg:w-1/2 w-full mx-auto">
            <label className="label">
              <span className="label-text">Discription</span>
            </label>
            <textarea
              className="textarea textarea-bordered"
              placeholder="Discription"
              {...register("description", {
                required: {
                  value: true,
                  message: "Discription is Required",
                },
              })}
            />
            <label className="label">
              {errors.description?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.description.message}
                </span>
              )}
            </label>
          </div>
          {/*  */}
          <div className="flex lg:w-1/2 w-full mx-auto gap-5">
            {/*  */}
            <div className="form-control  lg:w-1/2 w-full mx-auto ">
              <label className="label">
                <span className="label-text">Product Material</span>
              </label>
              <input
                type="text"
                placeholder="Material"
                className="input input-bordered w-full"
                {...register("Material", {
                  required: {
                    value: true,
                    message: "Material is Required",
                  },
                })}
              />
              <label className="label">
                {errors.Material?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.Material.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control  lg:w-1/2 w-full mx-auto ">
              <label className="label">
                <span className="label-text">Size</span>
              </label>
              <input
                type="text"
                placeholder="Size"
                className="input input-bordered w-full"
                {...register("Size", {
                  required: {
                    value: true,
                    message: "Size is Required",
                  },
                })}
              />
              <label className="label">
                {errors.Size?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.Size.message}
                  </span>
                )}
              </label>
            </div>
            {/*  */}
          </div>
          {/*  */}
          <div className="flex lg:w-1/2 w-full mx-auto gap-5">
            <div className="form-control  lg:w-1/2 w-full mx-auto ">
              <label className="label">
                <span className="label-text">Weight</span>
              </label>
              <input
                type="text"
                placeholder="Weight"
                className="input input-bordered w-full"
                {...register("Weight", {
                  required: {
                    value: true,
                    message: "Weight is Required",
                  },
                })}
              />
              <label className="label">
                {errors.Weight?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.Weight.message}
                  </span>
                )}
              </label>
            </div>
            {/*  */}
            <div className="form-control  lg:w-1/2 w-full mx-auto ">
              <label className="label">
                <span className="label-text">Warranty</span>
              </label>
              <input
                type="text"
                placeholder="Warranty"
                className="input input-bordered w-full"
                {...register("Warranty", {
                  required: {
                    value: true,
                    message: "Warranty is Required",
                  },
                })}
              />
              <label className="label">
                {errors.Warranty?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.Warranty.message}
                  </span>
                )}
              </label>
            </div>
          </div>
          {/*  */}
          <div className="flex lg:w-1/2 w-full mx-auto gap-5">
            <div className="form-control  lg:w-1/2 w-full mx-auto ">
              <label className="label">
                <span className="label-text">Color </span>
              </label>
              <input
                type="text"
                placeholder="Color"
                className="input input-bordered w-full"
                {...register("Color", {
                  required: {
                    value: true,
                    message: "Color is Required",
                  },
                })}
              />
              <label className="label">
                {errors.Color?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.Color.message}
                  </span>
                )}
              </label>
            </div>
            {/*  */}
            <div className="form-control  lg:w-1/2 w-full mx-auto ">
              <label className="label">
                <span className="label-text">Stock</span>
              </label>
              <input
                type="text"
                placeholder="Stock"
                className="input input-bordered w-full"
                {...register("Stock", {
                  required: {
                    value: true,
                    message: "Stock is Required",
                  },
                })}
              />
              <label className="label">
                {errors.Stock?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.Stock.message}
                  </span>
                )}
              </label>
            </div>
          </div>
          {/*  */}
          {/*  */}
          <div className="flex lg:w-1/2 w-full mx-auto gap-5">
            <div className="form-control  lg:w-1/2 w-full mx-auto ">
              <label className="label">
                <span className="label-text">Minmum Order</span>
              </label>
              <input
                type="text"
                placeholder="Type Name"
                className="input input-bordered w-full"
                {...register("minOrder", {
                  required: {
                    value: true,
                    message: "Minmum Order is Required",
                  },
                })}
              />
              <label className="label">
                {errors.minOrder?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.minOrder.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control  lg:w-1/2 w-full mx-auto ">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                placeholder="Type Name"
                className="input input-bordered w-full"
                {...register("price", {
                  required: {
                    value: true,
                    message: "Price is Required",
                  },
                })}
              />
              <label className="label">
                {errors.price?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.price.message}
                  </span>
                )}
              </label>
            </div>
          </div>
          {/*  */}
          <div className="form-control  lg:w-1/2 w-full mx-auto px-2 ">
            <label className="label">
              <span className="label-text">Upload Product Image</span>
            </label>
            <input
              type="file"
              placeholder="Type Name"
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is Required",
                },
              })}
            />
          </div>
          <div className="form-control lg:w-1/2 w-full mx-auto ">
            <input
              type="submit"
              placeholder="Type New Email"
              className="btn btn-primary my-8  w-full mx-auto "
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
